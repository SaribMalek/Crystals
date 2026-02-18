import React, { useState, useEffect } from 'react'
import ProductCard from '../components/ProductCard';

const Gifts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/api/products');
                const data = await response.json();
                setProducts(data.filter(p =>
                    (p.category && p.category.name === 'Gifts') || p.is_featured
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
            <header className="shop-hero">
                <div className="container">
                    <span className="hero-eyebrow">Soulful Giving</span>
                    <h1 className="hero-title">Crystal Gift Collections</h1>
                    <p className="hero-desc">Thoughtfully curated sets to bring harmony, love, and protection to your loved ones.</p>
                </div>
            </header>

            <div className="container section-padding">
                <div className="intro-text text-center mb-60">
                    <h2 className="section-title-serif">Perfect for Every Occasion</h2>
                    <p style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--text-light)', fontWeight: '300' }}>
                        Whether it's a birthday, anniversary, or a gesture of support,
                        our crystal gifts are intentions wrapped in nature's beauty.
                    </p>
                </div>

                <div className="products-grid-luxury">
                    {loading ? (
                        <div className="loading-state">Wrapping intentions...</div>
                    ) : products.length > 0 ? (
                        products.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))
                    ) : (
                        <div className="no-results">Our gift collection is being updated. Check back soon!</div>
                    )}
                </div>
            </div>

            <style jsx="true">{`
                .shop-hero {
                    padding: 150px 0 100px;
                    background: var(--bg-creme);
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

export default Gifts;
