import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Trash2, Plus, Minus, ArrowLeft, ShieldCheck } from 'lucide-react';

const Cart = () => {
    const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();

    if (cartItems.length === 0) {
        return (
            <div className="container section-padding empty-cart">
                <div className="empty-cart-content">
                    <h1>Your Cart is Empty</h1>
                    <p>It looks like you haven't added any crystals to your cart yet.</p>
                    <Link to="/shop" className="btn btn-primary">Start Shopping</Link>
                </div>
                <style jsx="true">{`
                    .empty-cart { text-align: center; min-height: 60vh; display: flex; align-items: center; justify-content: center; }
                    .empty-cart-content h1 { font-size: 2.5rem; margin-bottom: 20px; color: var(--primary); }
                    .empty-cart-content p { margin-bottom: 30px; color: var(--text-light); }
                `}</style>
            </div>
        );
    }

    return (
        <div className="cart-page">
            <div className="container section-padding">
                <h1 className="page-title">Your Crystal Cart</h1>

                <div className="cart-container">
                    <div className="cart-items">
                        <div className="cart-header">
                            <span className="col-product">Product</span>
                            <span className="col-price">Price</span>
                            <span className="col-quantity">Quantity</span>
                            <span className="col-total">Total</span>
                        </div>

                        {cartItems.map(item => (
                            <div key={item.id} className="cart-item">
                                <div className="col-product">
                                    <div className="item-info">
                                        <div className="item-image" style={{ background: item.color || 'var(--primary-light)' }}></div>
                                        <div>
                                            <h3>{item.name}</h3>
                                            <p>{item.category}</p>
                                            <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                                                <Trash2 size={16} /> Remove
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-price">${item.price.toFixed(2)}</div>
                                <div className="col-quantity">
                                    <div className="quantity-control">
                                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)}><Minus size={14} /></button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)}><Plus size={14} /></button>
                                    </div>
                                </div>
                                <div className="col-total">${(item.price * item.quantity).toFixed(2)}</div>
                            </div>
                        ))}

                        <div className="cart-footer-actions">
                            <Link to="/shop" className="continue-shopping">
                                <ArrowLeft size={18} /> Continue Shopping
                            </Link>
                        </div>
                    </div>

                    <div className="cart-summary">
                        <h3>Order Summary</h3>
                        <div className="summary-row">
                            <span>Subtotal</span>
                            <span>${cartTotal.toFixed(2)}</span>
                        </div>
                        <div className="summary-row">
                            <span>Shipping</span>
                            <span>{cartTotal > 150 ? 'FREE' : '$15.00'}</span>
                        </div>
                        <div className="summary-row total">
                            <span>Total</span>
                            <span>${(cartTotal > 150 ? cartTotal : cartTotal + 15).toFixed(2)}</span>
                        </div>

                        <p className="shipping-note">
                            {cartTotal < 150
                                ? `Add $${(150 - cartTotal).toFixed(0)} more for FREE shipping!`
                                : "You've earned FREE shipping!"}
                        </p>

                        <Link to="/checkout" className="btn btn-primary checkout-btn">
                            Proceed to Checkout
                        </Link>

                        <div className="secure-payment">
                            <ShieldCheck size={18} />
                            <span>100% Secure Checkout</span>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx="true">{`
                .page-title { margin-bottom: 40px; color: var(--primary); }
                .cart-container { display: grid; grid-template-columns: 1fr 350px; gap: 40px; }
                
                .cart-header { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; padding: 15px 0; border-bottom: 1px solid #eee; font-weight: 700; color: var(--text-light); font-size: 0.9rem; text-transform: uppercase; }
                .cart-item { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; padding: 30px 0; border-bottom: 1px solid #eee; align-items: center; }
                
                .item-info { display: flex; gap: 20px; align-items: center; }
                .item-image { width: 80px; height: 80px; border-radius: 10px; }
                .item-info h3 { font-size: 1.1rem; margin-bottom: 5px; }
                .item-info p { font-size: 0.85rem; color: var(--text-light); margin-bottom: 10px; }
                
                .remove-btn { background: none; border: none; color: #ff6b6b; font-size: 0.8rem; cursor: pointer; display: flex; align-items: center; gap: 5px; padding: 0; }
                
                .quantity-control { display: flex; align-items: center; gap: 15px; border: 1px solid #eee; width: fit-content; padding: 5px 12px; border-radius: 50px; }
                .quantity-control button { background: none; border: none; cursor: pointer; color: var(--primary); display: flex; align-items: center; }
                
                .col-total { font-weight: 700; color: var(--primary); }
                
                .cart-footer-actions { padding: 30px 0; }
                .continue-shopping { display: flex; align-items: center; gap: 8px; color: var(--text-light); font-weight: 600; text-decoration: none; }
                
                .cart-summary { background: #f9f9f9; padding: 30px; border-radius: 20px; height: fit-content; }
                .cart-summary h3 { margin-bottom: 25px; font-size: 1.3rem; }
                .summary-row { display: flex; justify-content: space-between; margin-bottom: 15px; color: var(--text-light); }
                .summary-row.total { border-top: 1px solid #ddd; padding-top: 20px; margin-top: 20px; font-size: 1.2rem; font-weight: 800; color: var(--primary); }
                
                .shipping-note { background: var(--primary-light); color: var(--primary); padding: 10px; border-radius: 10px; font-size: 0.85rem; font-weight: 600; text-align: center; margin-bottom: 25px; }
                .checkout-btn { width: 100%; text-align: center; border-radius: 50px; padding: 15px; font-weight: 700; margin-bottom: 20px; cursor: pointer; display: block; }
                
                .secure-payment { display: flex; align-items: center; justify-content: center; gap: 8px; font-size: 0.85rem; color: var(--text-light); }

                @media (max-width: 992px) {
                    .cart-container { grid-template-columns: 1fr; }
                    .cart-header { display: none; }
                    .cart-item { grid-template-columns: 1fr; gap: 20px; position: relative; }
                    .col-price, .col-quantity, .col-total { display: flex; justify-content: space-between; }
                    .col-price::before { content: 'Price:'; color: var(--text-light); }
                    .col-quantity::before { content: 'Quantity:'; color: var(--text-light); }
                    .col-total::before { content: 'Total:'; color: var(--text-light); }
                }
            `}</style>
        </div>
    );
};

export default Cart;
