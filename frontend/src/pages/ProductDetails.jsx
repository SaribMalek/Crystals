import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { Star, Truck, ShieldCheck, RefreshCcw, Plus, Minus, ShoppingBag } from 'lucide-react';
import ProductCard from '../components/ProductCard';

const ProductDetails = () => {
    const { id } = useParams();
    const { addToCart } = useCart();
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState('description');

    useEffect(() => {
        const foundProduct = products.find(p => p.id === parseInt(id));
        setProduct(foundProduct);
        window.scrollTo(0, 0);
    }, [id]);

    if (!product) return <div className="container section-padding">Loading...</div>;

    const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

    return (
        <div className="product-details-page">
            <div className="container section-padding">
                <nav className="breadcrumb">
                    <Link to="/">Home</Link> / <Link to="/shop">Shop</Link> / <span>{product.name}</span>
                </nav>

                <div className="product-main">
                    <div className="product-gallery">
                        <div className="main-image" style={{ background: product.color || 'var(--primary-light)' }}>
                            {product.image ? (
                                <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            ) : (
                                <div className="glow"></div>
                            )}
                        </div>
                        <div className="thumbnail-grid">
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className="thumbnail" style={{ background: product.color || 'var(--primary-light)', opacity: 0.5, overflow: 'hidden' }}>
                                    {product.image && <img src={product.image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7 }} />}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="product-info-detailed">
                        <div className="badges">
                            {product.isNew && <span className="badge badge-new">New Arrival</span>}
                            {product.isSale && <span className="badge badge-sale">Limited Offer</span>}
                        </div>
                        <h1 className="product-title">{product.name}</h1>
                        <div className="product-rating">
                            <div className="stars">
                                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={16} fill={i <= 4 ? "var(--secondary)" : "none"} stroke="var(--secondary)" />)}
                            </div>
                            <span className="review-count">(24 Customer Reviews)</span>
                        </div>
                        <div className="product-price-large">
                            {product.oldPrice && <span className="old-price">${product.oldPrice}</span>}
                            <span className="current-price">${product.price}</span>
                        </div>
                        <p className="short-desc">
                            {product.description.split('.')[0]}. Hand-selected for its unique energy and quality.
                        </p>

                        <div className="purchase-actions">
                            <div className="quantity-selector">
                                <button onClick={() => setQuantity(q => Math.max(1, q - 1))}><Minus size={18} /></button>
                                <span>{quantity}</span>
                                <button onClick={() => setQuantity(q => q + 1)}><Plus size={18} /></button>
                            </div>
                            <button className="btn btn-primary add-to-cart-btn" onClick={() => addToCart(product, quantity)}>
                                <ShoppingBag size={20} />
                                Add to Cart
                            </button>
                        </div>

                        <div className="product-features">
                            <div className="feature">
                                <Truck size={20} />
                                <div>
                                    <p className="feature-title">Free Shipping</p>
                                    <p className="feature-desc">On orders over $150</p>
                                </div>
                            </div>
                            <div className="feature">
                                <ShieldCheck size={20} />
                                <div>
                                    <p className="feature-title">Authentic Stones</p>
                                    <p className="feature-desc">100% natural crystals</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="product-tabs">
                    <div className="tab-headers">
                        <button className={activeTab === 'description' ? 'active' : ''} onClick={() => setActiveTab('description')}>Description</button>
                        <button className={activeTab === 'benefits' ? 'active' : ''} onClick={() => setActiveTab('benefits')}>Benefits</button>
                        <button className={activeTab === 'shipping' ? 'active' : ''} onClick={() => setActiveTab('shipping')}>Shipping</button>
                    </div>
                    <div className="tab-content">
                        {activeTab === 'description' && (
                            <div className="description-tab">
                                <p>{product.description}</p>
                                <p>Crystals are natural minerals, each with its own unique personality. Please expect variations in color, size, and shape. These differences are a testament to the natural beauty of the earth.</p>
                            </div>
                        )}
                        {activeTab === 'benefits' && (
                            <ul className="benefits-list">
                                {product.benefits && product.benefits.map((b, i) => <li key={i}>{b}</li>)}
                                <li>Cleanses the aura and environment</li>
                                <li>Connects you with the earth's healing vibrations</li>
                            </ul>
                        )}
                        {activeTab === 'shipping' && (
                            <div className="shipping-tab">
                                <p>We take great care in packaging your crystals to ensure they arrive safely.</p>
                                <ul>
                                    <li>Standard Shipping: 5-7 business days</li>
                                    <li>Express Shipping: 2-3 business days</li>
                                    <li>Free international shipping on orders over $150</li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>

                {relatedProducts.length > 0 && (
                    <div className="related-products section-padding">
                        <h2 className="section-title">You May Also Like</h2>
                        <div className="products-grid">
                            {relatedProducts.map(p => <ProductCard key={p.id} product={p} />)}
                        </div>
                    </div>
                )}
            </div>

            <style jsx="true">{`
                .breadcrumb { margin-bottom: 30px; font-size: 0.9rem; color: var(--text-light); }
                .breadcrumb a { color: var(--text-light); }
                .breadcrumb span { color: var(--primary); font-weight: 600; }
                
                .product-main { display: grid; grid-template-columns: 1.2fr 1fr; gap: 60px; margin-bottom: 80px; }
                .product-gallery { display: flex; flex-direction: column; gap: 20px; }
                .main-image { aspect-ratio: 1; border-radius: 20px; position: relative; overflow: hidden; }
                .main-image .glow { position: absolute; width: 60%; height: 60%; background: white; filter: blur(60px); top: 20%; left: 20%; opacity: 0.4; }
                .thumbnail-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 15px; }
                .thumbnail { aspect-ratio: 1; border-radius: 10px; cursor: pointer; }
                
                .product-info-detailed .badges { display: flex; gap: 10px; margin-bottom: 15px; }
                .badge { padding: 4px 12px; border-radius: 4px; font-size: 0.75rem; font-weight: 700; text-transform: uppercase; }
                .badge-new { background: var(--primary-light); color: var(--primary); }
                .badge-sale { background: var(--secondary); color: var(--primary); }
                
                .product-title { font-size: 2.8rem; margin-bottom: 15px; color: var(--primary); }
                .product-rating { display: flex; align-items: center; gap: 10px; margin-bottom: 25px; }
                .review-count { font-size: 0.85rem; color: var(--text-light); }
                
                .product-price-large { display: flex; align-items: center; gap: 15px; margin-bottom: 25px; }
                .current-price { font-size: 2rem; font-weight: 800; color: var(--primary); }
                .old-price { font-size: 1.4rem; text-decoration: line-through; color: var(--text-light); }
                
                .short-desc { line-height: 1.6; color: var(--text-light); margin-bottom: 35px; font-size: 1.1rem; }
                
                .purchase-actions { display: flex; gap: 20px; margin-bottom: 40px; }
                .quantity-selector { display: flex; align-items: center; border: 1px solid #ddd; border-radius: 50px; padding: 5px; }
                .quantity-selector button { background: none; border: none; width: 40px; height: 40px; cursor: pointer; display: flex; align-items: center; justify-content: center; color: var(--primary); }
                .quantity-selector span { width: 40px; text-align: center; font-weight: 700; }
                .add-to-cart-btn { flex: 1; display: flex; align-items: center; justify-content: center; gap: 10px; border-radius: 50px; font-size: 1rem; font-weight: 700; }
                
                .product-features { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; padding-top: 30px; border-top: 1px solid #eee; }
                .feature { display: flex; gap: 15px; align-items: center; }
                .feature-title { font-weight: 700; font-size: 0.95rem; }
                .feature-desc { font-size: 0.8rem; color: var(--text-light); }
                
                .product-tabs { margin-bottom: 80px; }
                .tab-headers { display: flex; gap: 40px; border-bottom: 1px solid #eee; margin-bottom: 30px; }
                .tab-headers button { background: none; border: none; padding: 15px 0; font-size: 1.1rem; font-weight: 600; color: var(--text-light); cursor: pointer; position: relative; }
                .tab-headers button.active { color: var(--primary); }
                .tab-headers button.active::after { content: ''; position: absolute; bottom: -1px; left: 0; width: 100%; height: 2px; background: var(--primary); }
                .tab-content { line-height: 1.8; color: var(--text-light); max-width: 800px; }
                .benefits-list { padding-left: 20px; }
                
                .related-products .products-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 30px; }

                @media (max-width: 992px) {
                    .product-main { grid-template-columns: 1fr; gap: 40px; }
                    .related-products .products-grid { grid-template-columns: repeat(2, 1fr); }
                }
                @media (max-width: 576px) {
                    .product-title { font-size: 2rem; }
                    .purchase-actions { flex-direction: column; }
                    .product-features { grid-template-columns: 1fr; }
                }
            `}</style>
        </div>
    );
};

export default ProductDetails;
