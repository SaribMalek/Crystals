import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Trash2, Plus, Minus, ArrowLeft, ShieldCheck } from 'lucide-react';
import { resolveProductImage } from '../utils/productImage';

const Cart = () => {
    const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();

    if (cartItems.length === 0) {
        return (
            <div className="container section-padding text-center">
                <header className="cart-header-luxury">
                    <span className="hero-eyebrow">Your Selection</span>
                    <h1 className="hero-title">Your Sanctuary is Empty</h1>
                    <p className="boutique-p" style={{ maxWidth: '600px', margin: '0 auto 40px' }}>It appears you haven't selected any crystal masterpieces for your collection yet.</p>
                    <Link to="/shop" className="btn-luxury-checkout" style={{ display: 'inline-block', width: 'auto', padding: '20px 60px' }}>Begin Your Discovery</Link>
                </header>
                <style jsx="true">{`
                    .cart-header-luxury { padding: 100px 0; }
                    .boutique-p { font-family: var(--font-sans); color: var(--text-light); font-weight: 300; }
                    .btn-luxury-checkout { background: var(--primary); color: white; text-transform: uppercase; letter-spacing: 2px; font-size: 0.8rem; text-decoration: none; transition: var(--transition); }
                    .btn-luxury-checkout:hover { background: var(--bg-dark); transform: translateY(-3px); }
                `}</style>
            </div>
        );
    }

    return (
        <div className="cart-page">
            <div className="container section-padding">
                <header className="cart-header-luxury">
                    <span className="hero-eyebrow">Your Selection</span>
                    <h1 className="hero-title">The Collection</h1>
                </header>

                <div className="cart-layout-luxury">
                    <div className="cart-items-luxury">
                        <div className="cart-table-header">
                            <span className="col-product">Masterpiece</span>
                            <span className="col-price">Offering</span>
                            <span className="col-quantity">Quantity</span>
                            <span className="col-total">Subtotal</span>
                        </div>

                        {cartItems.map(item => (
                            <div key={item.id} className="cart-item-luxury fade-in">
                                <div className="col-product">
                                    <div className="item-info-boutique">
                                        <div className="item-img-luxury">
                                            <img src={resolveProductImage(item)} alt={item.name} />
                                        </div>
                                        <div className="item-text">
                                            <h3 className="item-name-serif">{item.name}</h3>
                                            <p className="item-meta">{item.category?.name || 'Crystal'}</p>
                                            <button className="remove-luxury" onClick={() => removeFromCart(item.id)}>
                                                Remove from Sanctuary
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-price-luxury">${item.price.toFixed(2)}</div>
                                <div className="col-quantity">
                                    <div className="qty-boutique">
                                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)}><Minus size={12} /></button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)}><Plus size={12} /></button>
                                    </div>
                                </div>
                                <div className="col-total-luxury">${(item.price * item.quantity).toFixed(2)}</div>
                            </div>
                        ))}

                        <div className="cart-actions-luxury">
                            <Link to="/shop" className="back-to-shop">
                                <ArrowLeft size={16} /> Rediscover Collection
                            </Link>
                        </div>
                    </div>

                    <aside className="summary-sidebar-luxury">
                        <h3 className="sidebar-title-serif">Manifestation Summary</h3>
                        <div className="summary-details-luxury">
                            <div className="summary-row-luxury">
                                <span>Collection Total</span>
                                <span>${cartTotal.toFixed(2)}</span>
                            </div>
                            <div className="summary-row-luxury">
                                <span>Sacred Delivery</span>
                                <span>{cartTotal > 150 ? 'Complimentary' : '$15.00'}</span>
                            </div>
                            <div className="summary-total-luxury">
                                <span>Total Amount</span>
                                <span>${(cartTotal > 150 ? cartTotal : cartTotal + 15).toFixed(2)}</span>
                            </div>
                        </div>

                        {cartTotal < 150 && (
                            <div className="shipping-upsell-luxury">
                                <p>Invite ${(150 - cartTotal).toFixed(0)} more to your collection for complimentary delivery.</p>
                            </div>
                        )}

                        <Link to="/checkout" className="btn-luxury-checkout">
                            Proceed to Acquisition
                        </Link>

                        <div className="trust-luxury">
                            <ShieldCheck size={16} />
                            <span>Secured Spiritual Exchange</span>
                        </div>
                    </aside>
                </div>
            </div>

            <style jsx="true">{`
                .cart-header-luxury { text-align: center; margin-bottom: 80px; }
                .cart-layout-luxury { display: grid; grid-template-columns: 1fr 380px; gap: 80px; }
                
                .cart-table-header { display: grid; grid-template-columns: 2.5fr 1fr 1fr 1fr; padding-bottom: 20px; border-bottom: 1px solid #F0EAE5; font-size: 0.7rem; text-transform: uppercase; letter-spacing: 2px; color: var(--text-light); }
                .cart-item-luxury { display: grid; grid-template-columns: 2.5fr 1fr 1fr 1fr; padding: 40px 0; border-bottom: 1px solid #F0EAE5; align-items: center; }
                
                .item-info-boutique { display: flex; gap: 30px; align-items: center; }
                .item-img-luxury { width: 100px; height: 120px; background: var(--bg-creme); border-radius: 2px; overflow: hidden; }
                .item-img-luxury img { width: 100%; height: 100%; object-fit: cover; }
                
                .item-name-serif { font-family: var(--font-serif); font-size: 1.4rem; color: var(--primary); margin-bottom: 5px; }
                .item-meta { font-size: 0.75rem; color: var(--text-light); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 15px; }
                
                .remove-luxury { background: none; border: none; font-size: 0.65rem; text-transform: uppercase; letter-spacing: 1px; color: #BDC3C7; cursor: pointer; padding: 0; transition: var(--transition); border-bottom: 1px solid transparent; }
                .remove-luxury:hover { color: #E74C3C; border-color: #E74C3C; }
                
                .qty-boutique { display: flex; align-items: center; gap: 15px; border: 1px solid #F0EAE5; padding: 8px 15px; width: fit-content; }
                .qty-boutique button { background: none; border: none; cursor: pointer; color: var(--primary); }
                
                .col-price-luxury, .col-total-luxury { font-size: 1rem; color: var(--primary); font-weight: 300; }
                .col-total-luxury { font-weight: 600; }
                
                .cart-actions-luxury { padding-top: 40px; }
                .back-to-shop { display: flex; align-items: center; gap: 10px; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 2px; color: var(--text-light); text-decoration: none; transition: var(--transition); }
                .back-to-shop:hover { color: var(--primary); transform: translateX(-5px); }
                
                .summary-sidebar-luxury { background: var(--bg-creme); padding: 50px; border-radius: 4px; border: 1px solid #F0EAE5; height: fit-content; }
                .sidebar-title-serif { font-family: var(--font-serif); font-size: 1.8rem; margin-bottom: 35px; border-bottom: 1px solid #F0EAE5; padding-bottom: 20px; color: var(--primary); }
                
                .summary-row-luxury { display: flex; justify-content: space-between; margin-bottom: 15px; font-size: 0.85rem; color: var(--text-light); }
                .summary-total-luxury { display: flex; justify-content: space-between; border-top: 1px solid #F0EAE5; margin-top: 25px; padding-top: 25px; font-size: 1.3rem; font-family: var(--font-serif); color: var(--primary); font-weight: 700; }
                
                .shipping-upsell-luxury { margin: 30px 0; padding: 15px; background: white; border-radius: 4px; border: 1px dashed var(--secondary); font-size: 0.75rem; text-align: center; color: var(--primary); line-height: 1.5; font-style: italic; }
                
                .btn-luxury-checkout { width: 100%; display: block; background: var(--primary); color: white; border: none; padding: 20px; text-align: center; font-size: 0.8rem; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; transition: var(--transition); text-decoration: none; margin-bottom: 25px; }
                .btn-luxury-checkout:hover { background: var(--bg-dark); transform: translateY(-3px); }
                
                .trust-luxury { display: flex; align-items: center; justify-content: center; gap: 10px; font-size: 0.65rem; text-transform: uppercase; letter-spacing: 1px; color: #BDC3C7; }

                @media (max-width: 992px) {
                    .cart-layout-luxury { grid-template-columns: 1fr; gap: 60px; }
                    .cart-table-header { display: none; }
                    .cart-item-luxury { grid-template-columns: 1fr; gap: 20px; position: relative; padding: 40px 0; }
                    .col-price-luxury, .col-quantity, .col-total-luxury { display: flex; justify-content: space-between; border-bottom: 1px solid #F8F9F9; padding-bottom: 10px; }
                    .col-price-luxury::before { content: 'Individual Offering'; color: var(--text-light); text-transform: uppercase; font-size: 0.6rem; letter-spacing: 1px; }
                    .col-total-luxury::before { content: 'Total Offering'; color: var(--text-light); text-transform: uppercase; font-size: 0.6rem; letter-spacing: 1px; }
                }
            `}</style>
        </div>
    );
};

export default Cart;
