import React, { useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { CreditCard, CheckCircle, X } from 'lucide-react'
import { resolveProductImage } from '../utils/productImage'
import { useAuth } from '../context/AuthContext'

const Checkout = () => {
  const { cartItems, cartTotal, clearCart } = useCart()
  const { customer, loading: authLoading } = useAuth()
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const status = queryParams.get('status')
  const sessionId = queryParams.get('session_id')

  const [paymentVerification, setPaymentVerification] = useState('idle')
  const [verifiedOrderId, setVerifiedOrderId] = useState(null)
  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    zipCode: '',
  })

  useEffect(() => {
    if (!customer) {
      return
    }

    setFormData((prev) => {
      const fullName = (customer.full_name || '').trim()
      const [firstName = '', ...rest] = fullName.split(/\s+/)
      const lastName = rest.join(' ')

      return {
        ...prev,
        email: customer.email || prev.email,
        firstName: prev.firstName || firstName,
        lastName: prev.lastName || lastName,
      }
    })
  }, [customer])

  useEffect(() => {
    const verifyPayment = async () => {
      if (status !== 'success' || !sessionId) {
        return
      }

      setPaymentVerification('loading')
      try {
        const response = await fetch(`/api/checkout-session-status?session_id=${encodeURIComponent(sessionId)}`)
        const data = await response.json()

        if (!response.ok) {
          throw new Error(data.error || 'Unable to verify payment')
        }

        if (data.payment_status === 'paid') {
          if (data.order_id) {
            setVerifiedOrderId(data.order_id)
            localStorage.setItem('as_last_order_id', String(data.order_id))
          }
          clearCart()
          setPaymentVerification('paid')
        } else {
          setPaymentVerification('unpaid')
        }
      } catch (error) {
        console.error('Payment verification error:', error)
        setPaymentVerification('error')
      }
    }

    verifyPayment()
  }, [status, sessionId, clearCart])

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrorMessage('')

    if (step === 1) {
      setStep(2)
      return
    }

    if (step === 2 || step === 3) {
      await startStripeCheckout()
      return
    }
  }

  const startStripeCheckout = async () => {
    setErrorMessage('')

    if (cartItems.length === 0) {
      setErrorMessage('Your cart is empty.')
      return
    }

    try {
      setIsSubmitting(true)
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: cartItems,
          customer: {
            email: formData.email,
            firstName: formData.firstName,
            lastName: formData.lastName,
          },
          shipping: {
            address: formData.address,
            city: formData.city,
            zipCode: formData.zipCode,
          },
        }),
      })

      const session = await response.json()
      if (!response.ok) {
        throw new Error(session.error || 'Error creating checkout session')
      }
      if (!session.url) {
        throw new Error('Stripe checkout URL was not returned.')
      }

      localStorage.setItem('as_last_order_email', formData.email.trim().toLowerCase())
      window.location.href = session.url
    } catch (error) {
      console.error('Checkout error:', error)
      setErrorMessage(error.message || 'Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (status === 'success') {
    if (paymentVerification === 'loading' || paymentVerification === 'idle') {
      return (
        <div className="container section-padding text-center success-page">
          <h1>Verifying Payment...</h1>
          <p>Please wait while we confirm your Stripe payment.</p>
        </div>
      )
    }

    if (paymentVerification !== 'paid') {
      return (
        <div className="container section-padding text-center success-page">
          <X size={80} color="#E91E63" style={{ marginBottom: '30px' }} />
          <h1>Payment Not Confirmed Yet</h1>
          <p>We could not verify your payment. If you were charged, contact support with your payment receipt.</p>
          <Link to="/cart" className="btn btn-primary" style={{ marginTop: '30px' }}>Return to Cart</Link>
        </div>
      )
    }

    return (
      <div className="container section-padding text-center success-page">
        <CheckCircle size={80} color="#E91E63" style={{ marginBottom: '30px' }} />
        <h1>Payment Successful!</h1>
        <p>Your order has been paid and is now being prepared.</p>
        {verifiedOrderId && <p>Your order number is #{verifiedOrderId}.</p>}
        <Link to="/orders" className="btn btn-primary" style={{ marginTop: '20px', marginRight: '10px' }}>View My Orders</Link>
        <Link to="/shop" className="btn btn-primary" style={{ marginTop: '30px' }}>Continue Shopping</Link>
      </div>
    )
  }

  if (status === 'cancel') {
    return (
      <div className="container section-padding text-center success-page">
        <X size={80} color="#E91E63" style={{ marginBottom: '30px' }} />
        <h1>Payment Cancelled</h1>
        <p>Your payment was not completed. Please try again when you are ready.</p>
        <Link to="/cart" className="btn btn-primary" style={{ marginTop: '30px' }}>Return to Cart</Link>
      </div>
    )
  }

  if (authLoading) {
    return (
      <div className="container section-padding text-center success-page">
        <h1>Loading...</h1>
      </div>
    )
  }

  if (!customer) {
    return (
      <div className="container section-padding text-center success-page">
        <h1>Login Required</h1>
        <p>Please signup or login before placing an order.</p>
        <Link to="/login?redirect=/checkout" className="btn btn-primary" style={{ marginTop: '20px', marginRight: '10px' }}>Login</Link>
        <Link to="/signup?redirect=/checkout" className="btn btn-primary" style={{ marginTop: '20px' }}>Signup</Link>
      </div>
    )
  }

  return (
    <div className="checkout-page">
      <div className="container section-padding">
        <div className="checkout-steps-luxury">
          <div className={`step-item-boutique ${step >= 1 ? 'active' : ''}`}><span>I</span> Shipping</div>
          <div className="step-divider-luxury"></div>
          <div className={`step-item-boutique ${step >= 2 ? 'active' : ''}`}><span>II</span> Payment</div>
          <div className="step-divider-luxury"></div>
          <div className={`step-item-boutique ${step >= 3 ? 'active' : ''}`}><span>III</span> Review</div>
        </div>

        <div className="checkout-layout-luxury">
          <div className="checkout-main-panel">
            <form className="checkout-form-luxury" onSubmit={handleSubmit}>
              {step === 1 && (
                <div className="form-section-luxury fade-in">
                  <h2 className="section-title-small">Shipping Details</h2>
                  <div className="form-grid-luxury">
                    <div className="form-group-luxury full">
                      <label>Email (Account)</label>
                      <input type="email" name="email" required value={formData.email} readOnly />
                    </div>
                    <div className="form-group-luxury">
                      <label>First Name</label>
                      <input type="text" name="firstName" required value={formData.firstName} onChange={handleInputChange} />
                    </div>
                    <div className="form-group-luxury">
                      <label>Last Name</label>
                      <input type="text" name="lastName" required value={formData.lastName} onChange={handleInputChange} />
                    </div>
                    <div className="form-group-luxury full">
                      <label>Address</label>
                      <input type="text" name="address" required value={formData.address} onChange={handleInputChange} />
                    </div>
                    <div className="form-group-luxury">
                      <label>City</label>
                      <input type="text" name="city" required value={formData.city} onChange={handleInputChange} />
                    </div>
                    <div className="form-group-luxury">
                      <label>Postal Code</label>
                      <input type="text" name="zipCode" required value={formData.zipCode} onChange={handleInputChange} />
                    </div>
                  </div>
                  <button type="submit" className="btn-luxury-submit">Continue to Payment</button>
                </div>
              )}

              {step === 2 && (
                <div className="form-section-luxury fade-in">
                  <h2 className="section-title-small">Secure Stripe Payment</h2>
                  <div className="payment-select-luxury">
                    <div className="payment-option-boutique active">
                      <CreditCard size={18} />
                      <span>Card payment powered by Stripe Checkout</span>
                    </div>
                  </div>
                  <div className="review-card-boutique" style={{ marginBottom: '30px' }}>
                    <div className="review-item">
                      <span className="review-label">Card Entry</span>
                      <p className="review-val">Click below to open Stripe and enter your card details securely.</p>
                    </div>
                  </div>
                  <div className="btn-group-luxury">
                    <button type="button" className="btn-luxury-back" onClick={() => setStep(1)}>Back</button>
                    <button type="submit" className="btn-luxury-submit" disabled={isSubmitting}>
                      {isSubmitting ? 'Redirecting...' : `Pay ${(cartTotal + (cartTotal > 150 ? 0 : 15)).toFixed(2)} with Card`}
                    </button>
                  </div>
                  {errorMessage && <p className="checkout-error">{errorMessage}</p>}
                </div>
              )}

              {step === 3 && (
                <div className="form-section-luxury fade-in">
                  <h2 className="section-title-small">Final Review</h2>
                  <div className="review-card-boutique">
                    <div className="review-item">
                      <span className="review-label">Customer</span>
                      <p className="review-val">{formData.firstName} {formData.lastName}</p>
                    </div>
                    <div className="review-item">
                      <span className="review-label">Address</span>
                      <p className="review-val">{formData.address}, {formData.city} {formData.zipCode}</p>
                    </div>
                    <div className="review-item">
                      <span className="review-label">Payment</span>
                      <p className="review-val">Secure checkout on Stripe</p>
                    </div>
                  </div>
                  <button type="submit" className="btn-luxury-submit full-width" disabled={isSubmitting}>
                    {isSubmitting ? 'Redirecting...' : `Pay ${(cartTotal + (cartTotal > 150 ? 0 : 15)).toFixed(2)} with Stripe`}
                  </button>
                  {errorMessage && <p className="checkout-error">{errorMessage}</p>}
                  <button type="button" className="btn-text-luxury" onClick={() => setStep(2)}>Back to Payment</button>
                </div>
              )}
            </form>
          </div>

          <aside className="order-sidebar-luxury">
            <h3 className="sidebar-title-serif">Order Summary</h3>
            <div className="sidebar-items-luxury">
              {cartItems.map((item) => (
                <div key={item.id} className="sidebar-item-boutique">
                  <div className="sidebar-img">
                    <img src={resolveProductImage(item)} alt={item.name} />
                  </div>
                  <div className="sidebar-info">
                    <p className="s-name">{item.name} <span className="s-qty">x {item.quantity}</span></p>
                    <p className="s-price">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="sidebar-totals-luxury">
              <div className="s-row"><span>Subtotal</span><span>${cartTotal.toFixed(2)}</span></div>
              <div className="s-row"><span>Shipping</span><span>{cartTotal > 150 ? 'Free' : '$15.00'}</span></div>
              <div className="s-row total"><span>Total</span><span>${(cartTotal > 150 ? cartTotal : cartTotal + 15).toFixed(2)}</span></div>
            </div>
          </aside>
        </div>
      </div>

      <style jsx="true">{`
        .success-page { min-height: 60vh; display: flex; flex-direction: column; align-items: center; justify-content: center; }
        .success-page h1 { font-size: 2.4rem; color: #E91E63; margin-bottom: 20px; }
        .success-page p { color: #666; font-size: 1rem; max-width: 640px; }

        .checkout-steps-luxury { display: flex; align-items: center; justify-content: center; gap: 40px; margin-bottom: 80px; }
        .step-item-boutique { display: flex; align-items: center; gap: 15px; color: #BDC3C7; font-size: 0.8rem; letter-spacing: 2px; text-transform: uppercase; font-weight: 500; }
        .step-item-boutique span { font-size: 0.7rem; font-family: var(--font-serif); }
        .step-item-boutique.active { color: var(--primary); }
        .step-divider-luxury { width: 50px; height: 1px; background: #F0EAE5; }

        .checkout-layout-luxury { display: grid; grid-template-columns: 1fr 420px; gap: 100px; }
        .section-title-small { font-family: var(--font-serif); font-size: 2rem; margin-bottom: 35px; color: var(--primary); }
        .form-grid-luxury { display: grid; grid-template-columns: 1fr 1fr; gap: 25px; margin-bottom: 40px; }
        .form-group-luxury { display: flex; flex-direction: column; gap: 10px; }
        .form-group-luxury.full { grid-column: span 2; }
        .form-group-luxury label { font-size: 0.7rem; text-transform: uppercase; letter-spacing: 1px; color: var(--text-light); }
        .form-group-luxury input { border: none; border-bottom: 1px solid #F0EAE5; padding: 12px 0; font-size: 1rem; color: var(--primary); background: transparent; }
        .form-group-luxury input:focus { outline: none; border-color: var(--secondary); }

        .btn-luxury-submit { background: var(--primary); color: white; border: none; padding: 20px 40px; font-size: 0.8rem; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; cursor: pointer; transition: var(--transition); }
        .btn-luxury-submit:hover { background: var(--bg-dark); transform: translateY(-3px); }
        .btn-luxury-submit.full-width { width: 100%; }
        .btn-luxury-submit:disabled { opacity: 0.7; cursor: not-allowed; transform: none; }

        .payment-select-luxury { margin-bottom: 40px; }
        .payment-option-boutique { border: 1px solid #F0EAE5; padding: 20px; display: flex; align-items: center; gap: 15px; color: var(--text-light); background: var(--bg-creme); }
        .payment-option-boutique.active { border-color: var(--secondary); color: var(--primary); }

        .btn-group-luxury { display: flex; gap: 20px; }
        .btn-luxury-back { background: transparent; border: 1px solid #F0EAE5; padding: 20px 40px; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 2px; cursor: pointer; }

        .review-card-boutique { background: var(--bg-creme); padding: 32px; border-radius: 4px; margin-bottom: 30px; }
        .review-item { margin-bottom: 18px; }
        .review-item:last-child { margin-bottom: 0; }
        .review-label { font-size: 0.6rem; text-transform: uppercase; letter-spacing: 2px; color: var(--text-light); display: block; margin-bottom: 10px; }
        .review-val { font-size: 1rem; color: var(--primary); font-family: var(--font-serif); }
        .btn-text-luxury { background: none; border: none; display: block; margin: 20px auto 0; font-size: 0.7rem; text-transform: uppercase; letter-spacing: 1px; color: var(--text-light); cursor: pointer; text-decoration: underline; }
        .checkout-error { color: #b3261e; margin-top: 12px; font-size: 0.85rem; text-align: center; }

        .order-sidebar-luxury { background: var(--bg-creme); padding: 50px; border-radius: 4px; border: 1px solid #F0EAE5; }
        .sidebar-title-serif { font-family: var(--font-serif); font-size: 1.8rem; margin-bottom: 35px; border-bottom: 1px solid #F0EAE5; padding-bottom: 20px; }
        .sidebar-items-luxury { margin-bottom: 40px; }
        .sidebar-item-boutique { display: flex; gap: 20px; margin-bottom: 25px; }
        .sidebar-img { width: 70px; height: 90px; overflow: hidden; border-radius: 2px; }
        .sidebar-img img { width: 100%; height: 100%; object-fit: cover; }
        .s-name { font-size: 0.9rem; color: var(--primary); font-weight: 500; margin-bottom: 5px; }
        .s-qty { font-size: 0.7rem; color: var(--text-light); margin-left: 5px; }
        .s-price { font-size: 0.85rem; color: var(--text-light); }
        .sidebar-totals-luxury { border-top: 1px solid #F0EAE5; padding-top: 30px; }
        .s-row { display: flex; justify-content: space-between; margin-bottom: 15px; font-size: 0.85rem; color: var(--text-light); }
        .s-row.total { font-size: 1.2rem; color: var(--primary); font-family: var(--font-serif); margin-top: 20px; font-weight: 700; }

        @media (max-width: 1024px) {
          .checkout-layout-luxury { grid-template-columns: 1fr; gap: 60px; }
          .order-sidebar-luxury { order: -1; }
        }
      `}</style>
    </div>
  )
}

export default Checkout
