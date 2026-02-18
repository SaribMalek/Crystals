import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { Filter, ChevronDown } from 'lucide-react';

const Shop = () => {
    const location = useLocation();
    const [activeCategory, setActiveCategory] = useState('All');
    const [apiProducts, setApiProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/api/products');
                const data = await response.json();
                setApiProducts(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching products:', error);
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const cat = params.get('category');
        if (cat) {
            setActiveCategory(cat);
        } else {
            setActiveCategory('All');
        }
    }, [location]);

    const categories = ['All', ...new Set(apiProducts.map(p => p.category?.name || 'Curated'))];

    const filteredProducts = activeCategory === 'All'
        ? apiProducts
        : apiProducts.filter(p => (p.category?.name || 'Curated') === activeCategory);

    return (
        <div className="shop-page">
            <header className="shop-hero">
                <div className="container">
                    <span className="hero-eyebrow">The Catalog</span>
                    <h1 className="hero-title">Discover Your Stone</h1>
                    <p className="hero-desc">Sourced for purity. Curated for your unique vibration.</p>
                </div>
            </header>

            <div className="container section-padding">
                <div className="shop-layout">
                    <aside className="shop-sidebar">
                        <div className="sidebar-section">
                            <h3 className="sidebar-title">Intentions</h3>
                            <ul className="category-list-luxury">
                                {categories.map(cat => (
                                    <li key={cat}>
                                        <button
                                            className={`cat-btn-luxury ${activeCategory === cat ? 'active' : ''}`}
                                            onClick={() => setActiveCategory(cat)}
                                        >
                                            {cat}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </aside>

                    <main className="shop-main">
                        <div className="shop-toolbar">
                            <span className="results-count">{filteredProducts.length} Gems Found</span>
                            <div className="toolbar-actions">
                                <button className="toolbar-btn">Sort <ChevronDown size={14} /></button>
                                <button className="toolbar-btn"><Filter size={14} /> Filter</button>
                            </div>
                        </div>

                        <div className="products-grid-luxury">
                            {loading ? (
                                <div className="loading-state">Cleansing energy...</div>
                            ) : filteredProducts.length > 0 ? (
                                filteredProducts.map(product => (
                                    <ProductCard key={product.id} product={product} />
                                ))
                            ) : (
                                <div className="no-results">No matches for this cycle.</div>
                            )}
                        </div>
                    </main>
                </div>
            </div>

            <style jsx="true">{`
                .shop-hero {
                    padding: 150px 0 100px;
                    background: var(--bg-creme);
                    text-align: center;
                    border-bottom: 1px solid #F0EAE5;
                }
                .shop-layout {
                    display: grid;
                    grid-template-columns: 220px 1fr;
                    gap: 60px;
                }
                
                .sidebar-title {
                    font-family: var(--font-serif);
                    font-size: 1.2rem;
                    margin-bottom: 25px;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    color: var(--primary);
                }
                .category-list-luxury {
                    list-style: none;
                }
                .cat-btn-luxury {
                    background: none;
                    border: none;
                    display: block;
                    width: 100%;
                    text-align: left;
                    padding: 12px 0;
                    font-size: 0.8rem;
                    color: var(--text-light);
                    cursor: pointer;
                    transition: var(--transition);
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }
                .cat-btn-luxury:hover, .cat-btn-luxury.active {
                    color: var(--secondary);
                    padding-left: 10px;
                }
                
                .shop-toolbar {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 40px;
                    padding-bottom: 20px;
                    border-bottom: 1px solid #F0EAE5;
                }
                .results-count { font-size: 0.8rem; color: var(--text-light); }
                .toolbar-btn {
                    background: none;
                    border: 1px solid #F0EAE5;
                    padding: 8px 20px;
                    font-size: 0.75rem;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    cursor: pointer;
                    margin-left: 15px;
                    transition: var(--transition);
                }
                .toolbar-btn:hover { border-color: var(--secondary); color: var(--secondary); }
                
                .products-grid-luxury {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 40px;
                }

                @media (max-width: 1024px) {
                    .shop-layout { grid-template-columns: 1fr; }
                    .shop-sidebar { display: none; }
                    .products-grid-luxury { grid-template-columns: repeat(2, 1fr); }
                }
                @media (max-width: 576px) {
                    .products-grid-luxury { grid-template-columns: 1fr; }
                }
            `}</style>
        </div>
    );
};

export default Shop;
