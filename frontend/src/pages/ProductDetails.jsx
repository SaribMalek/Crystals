import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Star, Truck, ShieldCheck, RefreshCcw, Plus, Minus, ShoppingBag } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { resolveProductImage } from '../utils/productImage';

const ProductDetails = () => {
    const { id } = useParams();
    const { addToCart } = useCart();
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState('description');
    const [loading, setLoading] = useState(true);
    const [relatedProducts, setRelatedProducts] = useState([]);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`/api/products/${id}`);
                const data = await response.json();
                setProduct(data);
                setLoading(false);
                window.scrollTo(0, 0);

                // Fetch related products (same category)
                const relResponse = await fetch('/api/products');
                const allProducts = await relResponse.json();
                setRelatedProducts(allProducts.filter(p => p.category === data.category && p.id !== data.id).slice(0, 4));
            } catch (error) {
                console.error('Error fetching product:', error);
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    if (loading) return <div className="container section-padding">Loading...</div>;
    if (!product) return <div className="container section-padding">Product not found.</div>;

    return (
        <div className="product-details-page">
            <div className="container section-padding">
                <nav className="breadcrumb-luxury">
                    <Link to="/">Manifest</Link> / <Link to="/shop">Shop</Link> / <span>{product.name}</span>
                </nav>

                <div className="product-main-luxury">
                    <div className="product-gallery-luxury">
                        <div className="main-image-luxury">
                            <img
                                src={resolveProductImage(product)}
                                alt={product.name}
                            />
                        </div>
                    </div>

                    <div className="product-info-boutique">
                        <div className="badges-luxury">
                            {product.is_sale && <span className="badge-luxury">Divine Sale</span>}
                        </div>
                        <h1 className="product-title-serif">{product.name}</h1>
                        <div className="product-rating-gold-large">
                            <div className="stars">
                                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} fill={i <= 4 ? "#D4AF37" : "none"} color="#D4AF37" />)}
                            </div>
                            <span className="review-meta">24 Enlightened Reviews</span>
                        </div>
                        <div className="product-price-boutique">
                            {product.old_price && <span className="old-price">${product.old_price}</span>}
                            <span className="current-price">${product.price}</span>
                        </div>
                        <p className="boutique-desc">
                            {product.description || "A masterfully selected crystal, chosen for its unique energetic imprint and aesthetic purity. A perfect companion for your manifestation journey."}
                        </p>

                        <div className="boutique-actions">
                            <div className="qty-luxury">
                                <button onClick={() => setQuantity(q => Math.max(1, q - 1))}><Minus size={16} /></button>
                                <span>{quantity}</span>
                                <button onClick={() => setQuantity(q => q + 1)}><Plus size={16} /></button>
                            </div>
                            <button className="btn-luxury-add" onClick={() => addToCart(product, quantity)}>
                                <ShoppingBag size={18} />
                                Add to Sanctuary
                            </button>
                        </div>

                        <div className="boutique-features">
                            <div className="feature-item">
                                <Truck size={18} />
                                <div>
                                    <p className="f-title">Sacred Delivery</p>
                                    <p className="f-desc">Free on orders over $150</p>
                                </div>
                            </div>
                            <div className="feature-item">
                                <ShieldCheck size={18} />
                                <div>
                                    <p className="f-title">Authentic Origin</p>
                                    <p className="f-desc">100% Earth-born stones</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="details-tabs-luxury">
                    <div className="tab-headers-boutique">
                        <button className={activeTab === 'description' ? 'active' : ''} onClick={() => setActiveTab('description')}>The Essence</button>
                        <button className={activeTab === 'benefits' ? 'active' : ''} onClick={() => setActiveTab('benefits')}>Vibrations</button>
                        <button className={activeTab === 'shipping' ? 'active' : ''} onClick={() => setActiveTab('shipping')}>Sacred Journey</button>
                    </div>
                    <div className="tab-content-boutique">
                        {activeTab === 'description' && (
                            <div className="tab-pane-luxury fade-in">
                                <p>{product.description}</p>
                                <p className="nature-notice">Note: Stones are natural minerals. Please embrace minor variance in color and structure as a signature of Earth's artistry.</p>
                            </div>
                        )}
                        {activeTab === 'benefits' && (
                            <div className="tab-pane-luxury fade-in">
                                <ul className="benefits-list-luxury">
                                    {product.benefits && product.benefits.map((b, i) => <li key={i}>{b}</li>)}
                                    <li>Harmonizes personal energetic fields</li>
                                    <li>Promotes deep cellular calm and mental clarity</li>
                                </ul>
                            </div>
                        )}
                        {activeTab === 'shipping' && (
                            <div className="tab-pane-luxury fade-in">
                                <p>We meticulously package your crystals with intention to ensure they arrive in perfect resonance.</p>
                                <ul className="benefits-list-luxury">
                                    <li>Domestic Path: 5-7 business days</li>
                                    <li>Expedited Path: 2-3 business days</li>
                                    <li>Global Delivery available for all seekers</li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>

                {relatedProducts.length > 0 && (
                    <div className="related-section-luxury">
                        <div className="text-center mb-60">
                            <span className="hero-eyebrow">Complementary</span>
                            <h2 className="section-title">Synergistic Pairings</h2>
                        </div>
                        <div className="products-grid-luxury">
                            {relatedProducts.map(p => <ProductCard key={p.id} product={p} />)}
                        </div>
                    </div>
                )}
            </div>

            <style jsx="true">{`
                .breadcrumb-luxury { margin-bottom: 40px; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 2px; color: var(--text-light); }
                .breadcrumb-luxury a { color: var(--text-light); text-decoration: none; }
                .breadcrumb-luxury span { color: var(--primary); font-weight: 700; }
                
                .product-main-luxury { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; margin-bottom: 100px; }
                .main-image-luxury { aspect-ratio: 4/5; border-radius: 4px; overflow: hidden; background: var(--bg-creme); }
                .main-image-luxury img { width: 100%; height: 100%; object-fit: cover; }
                
                .badge-luxury { background: var(--secondary); color: white; padding: 5px 15px; font-size: 0.6rem; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; display: inline-block; margin-bottom: 20px; }
                .product-title-serif { font-size: 3.5rem; margin-bottom: 20px; font-family: var(--font-serif); color: var(--primary); }
                .product-rating-gold-large { display: flex; align-items: center; gap: 15px; margin-bottom: 30px; }
                .review-meta { font-size: 0.75rem; color: var(--text-light); font-weight: 300; }
                
                .product-price-boutique { display: flex; align-items: center; gap: 20px; margin-bottom: 35px; }
                .current-price { font-size: 2.2rem; font-weight: 500; color: var(--primary); font-family: var(--font-serif); }
                .old-price { font-size: 1.2rem; text-decoration: line-through; color: #BDC3C7; font-weight: 300; }
                
                .boutique-desc { line-height: 1.8; color: var(--text-light); margin-bottom: 45px; font-size: 1rem; font-weight: 300; }
                
                .boutique-actions { display: flex; gap: 30px; margin-bottom: 60px; }
                .qty-luxury { display: flex; align-items: center; border: 1px solid #F0EAE5; padding: 5px; }
                .qty-luxury button { background: none; border: none; width: 40px; height: 40px; cursor: pointer; color: var(--primary); }
                .qty-luxury span { width: 40px; text-align: center; font-weight: 600; }
                .btn-luxury-add { flex: 1; display: flex; align-items: center; justify-content: center; gap: 12px; background: var(--primary); color: white; border: none; font-size: 0.8rem; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; transition: var(--transition); cursor: pointer; }
                .btn-luxury-add:hover { background: var(--bg-dark); transform: translateY(-3px); }
                
                .boutique-features { display: grid; grid-template-columns: 1fr 1fr; gap: 30px; padding-top: 40px; border-top: 1px solid #F0EAE5; }
                .feature-item { display: flex; gap: 15px; align-items: center; color: var(--primary); }
                .f-title { font-weight: 600; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 1px; }
                .f-desc { font-size: 0.7rem; color: var(--text-light); font-weight: 300; }
                
                .details-tabs-luxury { margin-bottom: 100px; }
                .tab-headers-boutique { display: flex; gap: 60px; border-bottom: 1px solid #F0EAE5; margin-bottom: 40px; }
                .tab-headers-boutique button { background: none; border: none; padding: 20px 0; font-size: 0.9rem; font-family: var(--font-serif); text-transform: uppercase; letter-spacing: 2px; color: var(--text-light); cursor: pointer; position: relative; }
                .tab-headers-boutique button.active { color: var(--primary); }
                .tab-headers-boutique button.active::after { content: ''; position: absolute; bottom: -1px; left: 0; width: 100%; height: 1px; background: var(--secondary); }
                .tab-content-boutique { line-height: 2; color: var(--text-light); max-width: 800px; font-weight: 300; }
                .nature-notice { margin-top: 20px; font-style: italic; font-size: 0.85rem; opacity: 0.7; }
                .benefits-list-luxury { list-style: circle; padding-left: 20px; }
                .benefits-list-luxury li { margin-bottom: 10px; }
                
                .products-grid-luxury { display: grid; grid-template-columns: repeat(4, 1fr); gap: 40px; }
                .mb-60 { margin-bottom: 60px; }
                .text-center { text-align: center; }

                @media (max-width: 992px) {
                    .product-main-luxury { grid-template-columns: 1fr; gap: 40px; }
                    .products-grid-luxury { grid-template-columns: repeat(2, 1fr); }
                }
                @media (max-width: 576px) {
                    .product-title-serif { font-size: 2.5rem; }
                    .boutique-actions { flex-direction: column; }
                    .boutique-features { grid-template-columns: 1fr; }
                }
            `}</style>
        </div>
    );
};

export default ProductDetails;
