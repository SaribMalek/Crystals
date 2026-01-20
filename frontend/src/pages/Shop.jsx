import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { Filter, ChevronDown } from 'lucide-react';

const Shop = () => {
    const location = useLocation();
    const [activeCategory, setActiveCategory] = useState('All');

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const cat = params.get('category');
        if (cat) {
            setActiveCategory(cat);
        } else {
            setActiveCategory('All');
        }
    }, [location]);

    const categories = ['All', ...new Set(products.map(p => p.category))];

    const filteredProducts = activeCategory === 'All'
        ? products
        : products.filter(p => p.category === activeCategory);

    return (
        <div className="shop-page">
            <div className="shop-header">
                <div className="container">
                    <h1>Explore Our Collection</h1>
                    <p>Find the perfect crystal to match your energy and intention.</p>
                </div>
            </div>

            <div className="container section-padding">
                <div className="shop-controls">
                    <div className="filter-group">
                        <button className="filter-btn">
                            <Filter size={18} />
                            <span>Filters</span>
                        </button>
                        <div className="category-pills">
                            {categories.map(cat => (
                                <button
                                    key={cat}
                                    className={`pill ${activeCategory === cat ? 'active' : ''}`}
                                    onClick={() => setActiveCategory(cat)}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="sort-group">
                        <span>Sort by:</span>
                        <button className="sort-btn">
                            Featured <ChevronDown size={16} />
                        </button>
                    </div>
                </div>

                <div className="products-grid">
                    {filteredProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>

            <style jsx="true">{`
                .shop-header {
                    background: var(--primary-light);
                    padding: 80px 0;
                    text-align: center;
                    margin-bottom: 40px;
                }
                .shop-header h1 {
                    font-size: 3rem;
                    color: var(--primary);
                    margin-bottom: 15px;
                }
                .shop-header p {
                    color: var(--text-light);
                    font-size: 1.1rem;
                    max-width: 600px;
                    margin: 0 auto;
                }
                .shop-controls {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 40px;
                    flex-wrap: wrap;
                    gap: 20px;
                }
                .filter-group {
                    display: flex;
                    align-items: center;
                    gap: 20px;
                }
                .filter-btn {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    background: var(--white);
                    border: 1px solid #ddd;
                    padding: 10px 20px;
                    border-radius: 50px;
                    font-weight: 600;
                    cursor: pointer;
                }
                .category-pills {
                    display: flex;
                    gap: 10px;
                    overflow-x: auto;
                    padding-bottom: 5px;
                }
                .pill {
                    padding: 8px 20px;
                    background: #f0f0f0;
                    border: none;
                    border-radius: 50px;
                    font-size: 0.9rem;
                    cursor: pointer;
                    white-space: nowrap;
                    transition: var(--transition);
                }
                .pill.active {
                    background: var(--primary);
                    color: var(--white);
                }
                .sort-group {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }
                .sort-btn {
                    display: flex;
                    align-items: center;
                    gap: 5px;
                    background: none;
                    border: none;
                    font-weight: 600;
                    cursor: pointer;
                    color: var(--primary);
                }
                .products-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 30px;
                }
                @media (max-width: 1200px) {
                    .products-grid { grid-template-columns: repeat(3, 1fr); }
                }
                @media (max-width: 992px) {
                    .products-grid { grid-template-columns: repeat(2, 1fr); }
                }
                @media (max-width: 576px) {
                    .products-grid { grid-template-columns: 1fr; }
                    .shop-header h1 { font-size: 2.2rem; }
                }
            `}</style>
        </div>
    );
};

export default Shop;
