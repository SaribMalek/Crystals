import React, { useState, useEffect } from 'react'
import ProductCard from '../components/ProductCard';

const CrystalJewelry = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('/api/products');
                const data = await response.json();
                setProducts(data.filter(p =>
                    (p.category && p.category.name === 'Crystal Jewelry')
                ));
                setLoading(false);
            } catch (error) {
                console.error('Error fetching products:', error);
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    return (
        <div className="category-page">
            <header className="shop-hero luxury-jewelry-hero">
                <div className="container">
                    <span className="hero-eyebrow">Wearable Wisdom</span>
                    <h1 className="hero-title">Crystal Jewelry</h1>
                    <p className="hero-desc">Elegant, artisanal pieces designed to keep you in sync with Earth's natural frequency.</p>
                </div>
            </header>

            <div className="container section-padding">
                <div className="intro-text text-center mb-60">
                    <h2 className="section-title-serif">Soulful Adornment</h2>
                    <p style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--text-light)', fontWeight: '300' }}>
                        From grounding malás to protective pendants, our jewelry collection
                        blends aesthetic beauty with powerful spiritual intentions.
                    </p>
                </div>

                <div className="products-grid-luxury">
                    {loading ? (
                        <div className="loading-state">Polishing gems...</div>
                    ) : products.length > 0 ? (
                        products.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))
                    ) : (
                        <div className="no-results">Our collection is being expanded.</div>
                    )}
                </div>
            </div>

            <style jsx="true">{`
                .luxury-jewelry-hero {
                    background: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('https://images.unsplash.com/photo-1602173574767-37ac01994b2a?q=80&w=2070&auto=format&fit=crop') !important;
                    background-size: cover !important;
                    background-position: center !important;
                    color: white;
                }
                .luxury-jewelry-hero .hero-title { color: white; }
                .luxury-jewelry-hero .hero-eyebrow { color: rgba(255,255,255,0.9); }
                .luxury-jewelry-hero .hero-desc { color: rgba(255,255,255,0.9); }

                .shop-hero {
                    padding: 150px 0 100px;
                    text-align: center;
                    border-bottom: 1px solid #F0EAE5;
                }
                .section-title-serif { font-family: var(--font-serif); font-size: 2.5rem; color: var(--primary); margin-bottom: 20px; }
                .mb-60 { margin-bottom: 60px; }
                .text-center { text-align: center; }
                .products-grid-luxury {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 40px;
                }
                @media (max-width: 1024px) {
                    .products-grid-luxury { grid-template-columns: repeat(2, 1fr); }
                }
                @media (max-width: 576px) {
                    .products-grid-luxury { grid-template-columns: 1fr; }
                }
            `}</style>
        </div>
    );
};

export default CrystalJewelry;
