import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { CreditCard, Truck, CheckCircle, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Checkout = () => {
    const { cartItems, cartTotal, clearCart } = useCart();
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

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (step < 3) {
            setStep(step + 1);
        } else {
            // Process order
            setStep(4);
            clearCart();
        }
    };

    if (step === 4) {
        return (
            <div className="container section-padding text-center success-page">
                <CheckCircle size={80} color="var(--primary)" style={{ marginBottom: '30px' }} />
                <h1>Thank You For Your Order!</h1>
                <p>Your manifestation journey has begun. We've sent a confirmation email to {formData.email}.</p>
                <p>Order number: #ASC-{Math.floor(Math.random() * 1000000)}</p>
                <Link to="/shop" className="btn btn-primary" style={{ marginTop: '30px' }}>Continue Shopping</Link>
                <style jsx="true">{`
                    .success-page { min-height: 60vh; display: flex; flex-direction: column; align-items: center; justify-content: center; }
                    .success-page h1 { font-size: 2.5rem; color: var(--primary); margin-bottom: 20px; }
                    .success-page p { color: var(--text-light); font-size: 1.1rem; }
                `}</style>
            </div>
        );
    }

    return (
        <div className="checkout-page">
            <div className="container section-padding">
                <div className="checkout-steps">
                    <div className={`step-item ${step >= 1 ? 'active' : ''}`}><span>1</span> Shipping</div>
                    <div className="step-divider"><ChevronRight size={16} /></div>
                    <div className={`step-item ${step >= 2 ? 'active' : ''}`}><span>2</span> Payment</div>
                    <div className="step-divider"><ChevronRight size={16} /></div>
                    <div className={`step-item ${step >= 3 ? 'active' : ''}`}><span>3</span> Review</div>
                </div>

                <div className="checkout-layout">
                    <form className="checkout-form" onSubmit={handleSubmit}>
                        {step === 1 && (
                            <div className="form-section">
                                <h2>Shipping Information</h2>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label>Email Address</label>
                                        <input type="email" name="email" required value={formData.email} onChange={handleInputChange} placeholder="you@example.com" />
                                    </div>
                                </div>
                                <div className="form-row multi">
                                    <div className="form-group">
                                        <label>First Name</label>
                                        <input type="text" name="firstName" required value={formData.firstName} onChange={handleInputChange} />
                                    </div>
                                    <div className="form-group">
                                        <label>Last Name</label>
                                        <input type="text" name="lastName" required value={formData.lastName} onChange={handleInputChange} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Street Address</label>
                                    <input type="text" name="address" required value={formData.address} onChange={handleInputChange} />
                                </div>
                                <div className="form-row multi">
                                    <div className="form-group">
                                        <label>City</label>
                                        <input type="text" name="city" required value={formData.city} onChange={handleInputChange} />
                                    </div>
                                    <div className="form-group">
                                        <label>ZIP Code</label>
                                        <input type="text" name="zipCode" required value={formData.zipCode} onChange={handleInputChange} />
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary submit-btn">Continue to Payment</button>
                            </div>
                        )}

                        {step === 2 && (
                            <div className="form-section">
                                <h2>Payment Method</h2>
                                <div className="payment-type">
                                    <div className="type-option active">
                                        <CreditCard size={20} />
                                        <span>Credit / Debit Card</span>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Card Number</label>
                                    <input type="text" name="cardNumber" required value={formData.cardNumber} onChange={handleInputChange} placeholder="0000 0000 0000 0000" />
                                </div>
                                <div className="form-row multi">
                                    <div className="form-group">
                                        <label>Expiry Date</label>
                                        <input type="text" name="expiry" required value={formData.expiry} onChange={handleInputChange} placeholder="MM/YY" />
                                    </div>
                                    <div className="form-group">
                                        <label>CVV</label>
                                        <input type="text" name="cvv" required value={formData.cvv} onChange={handleInputChange} placeholder="123" />
                                    </div>
                                </div>
                                <div className="btn-group">
                                    <button type="button" className="btn btn-outline" onClick={() => setStep(1)}>Back</button>
                                    <button type="submit" className="btn btn-primary">Review Order</button>
                                </div>
                            </div>
                        )}

                        {step === 3 && (
                            <div className="form-section">
                                <h2>Review Your Order</h2>
                                <div className="review-box">
                                    <div className="review-row">
                                        <strong>Shipping to:</strong>
                                        <p>{formData.firstName} {formData.lastName}<br />{formData.address}, {formData.city} {formData.zipCode}</p>
                                    </div>
                                    <div className="review-row">
                                        <strong>Payment:</strong>
                                        <p>Card ending in {formData.cardNumber.slice(-4)}</p>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary submit-btn">Complete Purchase - ${(cartTotal + (cartTotal > 150 ? 0 : 15)).toFixed(2)}</button>
                                <button type="button" className="btn-text" onClick={() => setStep(2)} style={{ marginTop: '15px' }}>Edit Payment</button>
                            </div>
                        )}
                    </form>

                    <div className="order-summary-sidebar">
                        <h3>Order Summary</h3>
                        <div className="summary-items">
                            {cartItems.map(item => (
                                <div key={item.id} className="summary-item">
                                    <div className="item-img" style={{ background: item.color }}></div>
                                    <div className="item-details">
                                        <p className="item-name">{item.name} x {item.quantity}</p>
                                        <p className="item-price">${(item.price * item.quantity).toFixed(2)}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="summary-totals">
                            <div className="row"><span>Subtotal</span><span>${cartTotal.toFixed(2)}</span></div>
                            <div className="row"><span>Shipping</span><span>{cartTotal > 150 ? 'FREE' : '$15.00'}</span></div>
                            <div className="row total"><span>Total</span><span>${(cartTotal > 150 ? cartTotal : cartTotal + 15).toFixed(2)}</span></div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx="true">{`
                .checkout-steps { display: flex; align-items: center; justify-content: center; gap: 20px; margin-bottom: 50px; }
                .step-item { display: flex; align-items: center; gap: 10px; color: #ccc; font-weight: 600; }
                .step-item span { width: 30px; height: 30px; border-radius: 50%; background: #eee; display: flex; align-items: center; justify-content: center; font-size: 0.8rem; }
                .step-item.active { color: var(--primary); }
                .step-item.active span { background: var(--primary); color: white; }
                .step-divider { color: #eee; }
                
                .checkout-layout { display: grid; grid-template-columns: 1fr 380px; gap: 60px; }
                
                .form-section h2 { margin-bottom: 25px; color: var(--primary); font-size: 1.5rem; }
                .form-group { margin-bottom: 20px; display: flex; flex-direction: column; gap: 8px; }
                .form-group label { font-size: 0.9rem; font-weight: 600; color: var(--text-light); }
                .form-group input { padding: 12px 15px; border: 1px solid #ddd; border-radius: 8px; font-size: 1rem; }
                .form-row.multi { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
                
                .submit-btn { width: 100%; padding: 15px; margin-top: 20px; border-radius: 50px; font-weight: 700; }
                
                .payment-type { display: flex; gap: 15px; margin-bottom: 25px; }
                .type-option { flex: 1; border: 2px solid #eee; padding: 15px; border-radius: 12px; display: flex; align-items: center; gap: 10px; cursor: pointer; }
                .type-option.active { border-color: var(--primary); color: var(--primary); background: var(--primary-light); }
                
                .btn-group { display: flex; gap: 20px; margin-top: 30px; }
                .btn-group .btn { flex: 1; border-radius: 50px; padding: 15px; font-weight: 700; }
                
                .review-box { background: #f9f9f9; padding: 25px; border-radius: 15px; margin-bottom: 30px; }
                .review-row { margin-bottom: 20px; }
                .review-row strong { display: block; margin-bottom: 5px; font-size: 0.9rem; color: var(--text-light); }
                
                .order-summary-sidebar { background: #f5f5f5; padding: 30px; border-radius: 20px; height: fit-content; }
                .order-summary-sidebar h3 { margin-bottom: 20px; }
                .summary-items { max-height: 300px; overflow-y: auto; margin-bottom: 20px; }
                .summary-item { display: flex; gap: 15px; align-items: center; margin-bottom: 15px; }
                .item-img { width: 50px; height: 50px; border-radius: 8px; }
                .item-name { font-size: 0.9rem; font-weight: 600; }
                .item-price { font-size: 0.85rem; color: var(--text-light); }
                
                .summary-totals { border-top: 1px solid #ddd; padding-top: 20px; }
                .summary-totals .row { display: flex; justify-content: space-between; margin-bottom: 10px; color: var(--text-light); }
                .summary-totals .row.total { font-weight: 800; color: var(--primary); font-size: 1.2rem; margin-top: 10px; }

                @media (max-width: 992px) {
                    .checkout-layout { grid-template-columns: 1fr; }
                    .order-summary-sidebar { order: -1; }
                }
            `}</style>
        </div>
    );
};

export default Checkout;
