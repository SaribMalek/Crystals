import React, { useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { CreditCard, Truck, CheckCircle, ChevronRight, X } from 'lucide-react';

const Checkout = () => {
    const { cartItems, cartTotal, clearCart } = useCart();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const status = queryParams.get('status');

    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        email: '',
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        zipCode: '',
        cardNumber: '',
        expiry: '',
        cvv: ''
    });

    useEffect(() => {
        if (status === 'success') {
            clearCart();
        }
    }, [status, clearCart]);

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (step < 3) {
            setStep(step + 1);
        } else {
            // Process order with Stripe
            try {
                const response = await fetch('http://127.0.0.1:8000/api/create-checkout-session', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ items: cartItems })
                });
                const session = await response.json();

                if (session.url) {
                    window.location.href = session.url;
                } else {
                    alert('Error creating checkout session');
                }
            } catch (error) {
                console.error('Checkout error:', error);
                alert('Something went wrong. Please try again.');
            }
        }
    };

    if (status === 'success') {
        return (
            <div className="container section-padding text-center success-page">
                <CheckCircle size={80} color="#E91E63" style={{ marginBottom: '30px' }} />
                <h1>Payment Successful!</h1>
                <p>Your manifestation journey has begun. We've received your payment and are preparing your order.</p>
                <Link to="/shop" className="btn btn-primary" style={{ marginTop: '30px' }}>Continue Shopping</Link>
                <style jsx="true">{`
                    .success-page { min-height: 60vh; display: flex; flex-direction: column; align-items: center; justify-content: center; }
                    .success-page h1 { font-size: 2.5rem; color: #E91E63; margin-bottom: 20px; }
                    .success-page p { color: #666; font-size: 1.1rem; max-width: 600px; }
                `}</style>
            </div>
        );
    }

    if (status === 'cancel') {
        return (
            <div className="container section-padding text-center success-page">
                <X size={80} color="#E91E63" style={{ marginBottom: '30px' }} />
                <h1>Payment Cancelled</h1>
                <p>Your payment was not completed. If you had any issues, please try again or contact us for help.</p>
                <Link to="/cart" className="btn btn-primary" style={{ marginTop: '30px' }}>Return to Cart</Link>
                <style jsx="true">{`
                    .success-page { min-height: 60vh; display: flex; flex-direction: column; align-items: center; justify-content: center; }
                    .success-page h1 { font-size: 2.5rem; color: #E91E63; margin-bottom: 20px; }
                    .success-page p { color: #666; font-size: 1.1rem; }
                `}</style>
            </div>
        );
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
                                    <h2 className="section-title-small">Shipping Discovery</h2>
                                    <div className="form-grid-luxury">
                                        <div className="form-group-luxury full">
                                            <label>Email for your Manifestation</label>
                                            <input type="email" name="email" required value={formData.email} onChange={handleInputChange} placeholder="collector@crystals.com" />
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
                                            <label>Sacred Address</label>
                                            <input type="text" name="address" required value={formData.address} onChange={handleInputChange} />
                                        </div>
                                        <div className="form-group-luxury">
                                            <label>City</label>
                                            <input type="text" name="city" required value={formData.city} onChange={handleInputChange} />
                                        </div>
                                        <div className="form-group-luxury">
                                            <label>Postal Path</label>
                                            <input type="text" name="zipCode" required value={formData.zipCode} onChange={handleInputChange} />
                                        </div>
                                    </div>
                                    <button type="submit" className="btn-luxury-submit">Continue to Payment</button>
                                </div>
                            )}

                            {step === 2 && (
                                <div className="form-section-luxury fade-in">
                                    <h2 className="section-title-small">Secure Offering</h2>
                                    <div className="payment-select-luxury">
                                        <div className="payment-option-boutique active">
                                            <CreditCard size={18} />
                                            <span>Universal Credit Card</span>
                                        </div>
                                    </div>
                                    <div className="form-grid-luxury">
                                        <div className="form-group-luxury full">
                                            <label>Card Number</label>
                                            <input type="text" name="cardNumber" required value={formData.cardNumber} onChange={handleInputChange} placeholder="0000 0000 0000 0000" />
                                        </div>
                                        <div className="form-group-luxury">
                                            <label>Expiry (MM/YY)</label>
                                            <input type="text" name="expiry" required value={formData.expiry} onChange={handleInputChange} />
                                        </div>
                                        <div className="form-group-luxury">
                                            <label>Security Code (CVV)</label>
                                            <input type="text" name="cvv" required value={formData.cvv} onChange={handleInputChange} />
                                        </div>
                                    </div>
                                    <div className="btn-group-luxury">
                                        <button type="button" className="btn-luxury-back" onClick={() => setStep(1)}>Back</button>
                                        <button type="submit" className="btn-luxury-submit">Review Manifestation</button>
                                    </div>
                                </div>
                            )}

                            {step === 3 && (
                                <div className="form-section-luxury fade-in">
                                    <h2 className="section-title-small">Final Affirmation</h2>
                                    <div className="review-card-boutique">
                                        <div className="review-item">
                                            <span className="review-label">Recipient</span>
                                            <p className="review-val">{formData.firstName} {formData.lastName}</p>
                                        </div>
                                        <div className="review-item">
                                            <span className="review-label">Destination</span>
                                            <p className="review-val">{formData.address}, {formData.city} {formData.zipCode}</p>
                                        </div>
                                        <div className="review-item">
                                            <span className="review-label">Acquisition Offering</span>
                                            <p className="review-val">Card ending in {formData.cardNumber.slice(-4)}</p>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn-luxury-submit full-width">
                                        Complete Purchase — ${(cartTotal + (cartTotal > 150 ? 0 : 15)).toFixed(2)}
                                    </button>
                                    <button type="button" className="btn-text-luxury" onClick={() => setStep(2)}>Adjust Offering</button>
                                </div>
                            )}
                        </form>
                    </div>

                    <aside className="order-sidebar-luxury">
                        <h3 className="sidebar-title-serif">Your Collection</h3>
                        <div className="sidebar-items-luxury">
                            {cartItems.map(item => (
                                <div key={item.id} className="sidebar-item-boutique">
                                    <div className="sidebar-img">
                                        <img src={item.image} alt={item.name} />
                                    </div>
                                    <div className="sidebar-info">
                                        <p className="s-name">{item.name} <span className="s-qty">x {item.quantity}</span></p>
                                        <p className="s-price">${(item.price * item.quantity).toFixed(2)}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="sidebar-totals-luxury">
                            <div className="s-row"><span>Collection Total</span><span>${cartTotal.toFixed(2)}</span></div>
                            <div className="s-row"><span>Sacred Delivery</span><span>{cartTotal > 150 ? 'Complimentary' : '$15.00'}</span></div>
                            <div className="s-row total"><span>Total Manifestation</span><span>${(cartTotal > 150 ? cartTotal : cartTotal + 15).toFixed(2)}</span></div>
                        </div>
                    </aside>
                </div>
            </div>

            <style jsx="true">{`
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
                .form-group-luxury input { border: none; border-bottom: 1px solid #F0EAE5; padding: 12px 0; font-size: 1rem; color: var(--primary); transition: var(--transition); background: transparent; }
                .form-group-luxury input:focus { outline: none; border-color: var(--secondary); }
                
                .btn-luxury-submit { background: var(--primary); color: white; border: none; padding: 20px 40px; font-size: 0.8rem; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; transition: var(--transition); cursor: pointer; }
                .btn-luxury-submit:hover { background: var(--bg-dark); transform: translateY(-3px); }
                .btn-luxury-submit.full-width { width: 100%; }
                
                .payment-select-luxury { margin-bottom: 40px; }
                .payment-option-boutique { border: 1px solid #F0EAE5; padding: 20px; display: flex; align-items: center; gap: 15px; color: var(--text-light); transition: var(--transition); }
                .payment-option-boutique.active { border-color: var(--secondary); color: var(--primary); background: var(--bg-creme); }
                
                .btn-group-luxury { display: flex; gap: 20px; }
                .btn-luxury-back { background: transparent; border: 1px solid #F0EAE5; padding: 20px 40px; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 2px; cursor: pointer; transition: var(--transition); }
                
                .review-card-boutique { background: var(--bg-creme); padding: 40px; border-radius: 4px; margin-bottom: 40px; }
                .review-item { margin-bottom: 25px; }
                .review-label { font-size: 0.6rem; text-transform: uppercase; letter-spacing: 2px; color: var(--text-light); display: block; margin-bottom: 10px; }
                .review-val { font-size: 1.1rem; color: var(--primary); font-family: var(--font-serif); }
                
                .btn-text-luxury { background: none; border: none; display: block; margin: 20px auto 0; font-size: 0.7rem; text-transform: uppercase; letter-spacing: 1px; color: var(--text-light); cursor: pointer; text-decoration: underline; }
                
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
    );
};

export default Checkout;
