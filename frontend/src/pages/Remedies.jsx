import React, { useState, useEffect } from 'react'
import ProductCard from '../components/ProductCard';

const Remedies = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('/api/products');
                const data = await response.json();
                setProducts(data.filter(p =>
                    (p.category && p.category.name === 'Vastu & Feng Shui')
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
            <header className="shop-hero luxury-hero-bg">
                <div className="container">
                    <span className="hero-eyebrow">Sacred Space Harmony</span>
                    <h1 className="hero-title">Vastu & Feng Shui</h1>
                    <p className="hero-desc">Ancient remedies and architectural alignments to harmonize your living and working environments.</p>
                </div>
            </header>

            <div className="container section-padding">
                <div className="intro-text text-center mb-60">
                    <h2 className="section-title-serif">Energize Your Environment</h2>
                    <p style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--text-light)', fontWeight: '300' }}>
                        From salt lamps to crystal pyramids, our Vastu and Feng Shui collection
                        is designed to correct energetic imbalances and invite abundance into your space.
                    </p>
                </div>

                <div className="products-grid-luxury">
                    {loading ? (
                        <div className="loading-state">Aligning energies...</div>
                    ) : products.length > 0 ? (
                        products.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))
                    ) : (
                        <div className="no-results">Sacred space tools are being arriving soon.</div>
                    )}
                </div>
            </div>

            <style jsx="true">{`
                .luxury-hero-bg {
                    background: linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.7)), url('https://images.unsplash.com/photo-1596439535105-bb59e5504c41?q=80&w=2070&auto=format&fit=crop') !important;
                    background-size: cover !important;
                    background-position: center !important;
                }
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

export default Remedies;
