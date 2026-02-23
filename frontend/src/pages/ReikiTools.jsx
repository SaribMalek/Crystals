import React, { useState, useEffect } from 'react'
import ProductCard from '../components/ProductCard';

const ReikiTools = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('/api/products');
                const data = await response.json();
                setProducts(data.filter(p =>
                    (p.category && p.category.name === 'Reiki Tools')
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
            <header className="shop-hero luxury-tools-hero">
                <div className="container">
                    <span className="hero-eyebrow">Sacred Practices</span>
                    <h1 className="hero-title">Reiki Tools</h1>
                    <p className="hero-desc">Professional-grade pendulums, chakra sets, and healing symbols for the modern practitioner.</p>
                </div>
            </header>

            <div className="container section-padding">
                <div className="intro-text text-center mb-60">
                    <h2 className="section-title-serif">Elevate Your Practice</h2>
                    <p style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--text-light)', fontWeight: '300' }}>
                        Each tool is energetically cleansed and prepared specifically for lightwork,
                        ensuring you have the highest vibration instruments for your sessions.
                    </p>
                </div>

                <div className="products-grid-luxury">
                    {loading ? (
                        <div className="loading-state">Tuning energies...</div>
                    ) : products.length > 0 ? (
                        products.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))
                    ) : (
                        <div className="no-results">Sacred tools are being prepared.</div>
                    )}
                </div>
            </div>

            <style jsx="true">{`
                .luxury-tools-hero {
                    background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1590422749897-40899033321d?q=80&w=2070&auto=format&fit=crop') !important;
                    background-size: cover !important;
                    background-position: center !important;
                    color: white;
                }
                .luxury-tools-hero .hero-title { color: white; }
                .luxury-tools-hero .hero-eyebrow { color: rgba(255,255,255,0.9); }
                .luxury-tools-hero .hero-desc { color: rgba(255,255,255,0.9); }

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

export default ReikiTools;
