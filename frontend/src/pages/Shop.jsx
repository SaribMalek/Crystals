import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { Filter, ChevronDown, Search, X } from 'lucide-react';

const Shop = () => {
    const location = useLocation();
    const [activeCategory, setActiveCategory] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState('featured');
    const [isSortOpen, setIsSortOpen] = useState(false);
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [saleOnly, setSaleOnly] = useState(false);
    const [inStockOnly, setInStockOnly] = useState(false);
    const [apiProducts, setApiProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('/api/products');
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
        const search = params.get('search');
        if (cat) {
            setActiveCategory(cat);
        } else {
            setActiveCategory('All');
        }
        setSearchTerm(search ? search.trim() : '');
        setIsSortOpen(false);
    }, [location]);

    const categories = ['All', 'Healing Stones', 'Crystal Jewelry', 'Reiki Tools', 'Vastu & Feng Shui'];
    const sortOptions = [
        { value: 'featured', label: 'Featured' },
        { value: 'latest', label: 'Latest' },
        { value: 'price-low', label: 'Price: Low to High' },
        { value: 'price-high', label: 'Price: High to Low' },
        { value: 'name-az', label: 'Name: A to Z' },
        { value: 'name-za', label: 'Name: Z to A' }
    ];

    const normalizedSearch = searchTerm.toLowerCase();
    const min = minPrice !== '' ? Number.parseFloat(minPrice) : null;
    const max = maxPrice !== '' ? Number.parseFloat(maxPrice) : null;

    const filteredProducts = apiProducts.filter(p => {
            const price = Number.parseFloat(p.price) || 0;
            const stock = Number.parseInt(p.stock, 10) || 0;

            if (min !== null && !Number.isNaN(min) && price < min) {
                return false;
            }

            if (max !== null && !Number.isNaN(max) && price > max) {
                return false;
            }

            if (saleOnly && !p.is_sale) {
                return false;
            }

            if (inStockOnly && stock < 1) {
                return false;
            }

            const categoryMatches = activeCategory === 'All' ? true : (() => {
                const catName = p.category?.name || '';
                const prodName = p.name?.toLowerCase() || '';
                const prodDesc = p.description?.toLowerCase() || '';
                const searchCat = activeCategory.toLowerCase();

                // Match category name or check if the product name/desc contains the search term (for subcategories)
                return catName === activeCategory ||
                    prodName.includes(searchCat) ||
                    prodDesc.includes(searchCat);
            })();

            if (!categoryMatches) {
                return false;
            }

            if (!normalizedSearch) {
                return true;
            }

            const prodName = p.name?.toLowerCase() || '';
            const prodDesc = p.description?.toLowerCase() || '';
            const catName = p.category?.name?.toLowerCase() || '';

            return prodName.includes(normalizedSearch) ||
                prodDesc.includes(normalizedSearch) ||
                catName.includes(normalizedSearch);
        });

    const sortedProducts = [...filteredProducts].sort((a, b) => {
        const priceA = Number.parseFloat(a.price) || 0;
        const priceB = Number.parseFloat(b.price) || 0;
        const nameA = a.name || '';
        const nameB = b.name || '';

        switch (sortBy) {
            case 'latest':
                return (b.id || 0) - (a.id || 0);
            case 'price-low':
                return priceA - priceB;
            case 'price-high':
                return priceB - priceA;
            case 'name-az':
                return nameA.localeCompare(nameB);
            case 'name-za':
                return nameB.localeCompare(nameA);
            case 'featured':
            default:
                return (b.is_featured ? 1 : 0) - (a.is_featured ? 1 : 0);
        }
    });

    const resetFilters = () => {
        setActiveCategory('All');
        setMinPrice('');
        setMaxPrice('');
        setSaleOnly(false);
        setInStockOnly(false);
    };

    const activeFilterCount = [
        minPrice !== '',
        maxPrice !== '',
        saleOnly,
        inStockOnly,
        activeCategory !== 'All'
    ].filter(Boolean).length;

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
                            <div className="toolbar-left">
                                <span className="results-count">{sortedProducts.length} Gems Found</span>
                                <div className="toolbar-search">
                                    <Search size={14} />
                                    <input
                                        type="text"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        placeholder="Search products..."
                                        aria-label="Search products in catalog"
                                    />
                                    {searchTerm && (
                                        <button className="clear-search-btn" onClick={() => setSearchTerm('')} aria-label="Clear search">
                                            <X size={14} />
                                        </button>
                                    )}
                                </div>
                            </div>
                            <div className="toolbar-actions">
                                <div className="sort-wrap">
                                    <button className="toolbar-btn" onClick={() => setIsSortOpen(prev => !prev)}>
                                        Sort <ChevronDown size={14} />
                                    </button>
                                    {isSortOpen && (
                                        <div className="sort-menu">
                                            {sortOptions.map(option => (
                                                <button
                                                    key={option.value}
                                                    className={`sort-item ${sortBy === option.value ? 'active' : ''}`}
                                                    onClick={() => {
                                                        setSortBy(option.value);
                                                        setIsSortOpen(false);
                                                    }}
                                                >
                                                    {option.label}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                                <button className="toolbar-btn" onClick={() => setIsFilterOpen(prev => !prev)}>
                                    <Filter size={14} /> Filter {activeFilterCount > 0 ? `(${activeFilterCount})` : ''}
                                </button>
                            </div>
                        </div>

                        {isFilterOpen && (
                            <div className="filter-panel">
                                <div className="filter-grid">
                                    <div className="filter-group">
                                        <label>Category</label>
                                        <select value={activeCategory} onChange={(e) => setActiveCategory(e.target.value)}>
                                            {categories.map(cat => (
                                                <option key={cat} value={cat}>{cat}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="filter-group">
                                        <label>Min Price</label>
                                        <input
                                            type="number"
                                            min="0"
                                            value={minPrice}
                                            onChange={(e) => setMinPrice(e.target.value)}
                                            placeholder="0"
                                        />
                                    </div>
                                    <div className="filter-group">
                                        <label>Max Price</label>
                                        <input
                                            type="number"
                                            min="0"
                                            value={maxPrice}
                                            onChange={(e) => setMaxPrice(e.target.value)}
                                            placeholder="1000"
                                        />
                                    </div>
                                    <label className="checkbox-filter">
                                        <input type="checkbox" checked={saleOnly} onChange={(e) => setSaleOnly(e.target.checked)} />
                                        On Sale
                                    </label>
                                    <label className="checkbox-filter">
                                        <input type="checkbox" checked={inStockOnly} onChange={(e) => setInStockOnly(e.target.checked)} />
                                        In Stock
                                    </label>
                                </div>
                                <div className="filter-actions">
                                    <button className="toolbar-btn reset-btn" onClick={resetFilters}>Reset Filters</button>
                                </div>
                            </div>
                        )}

                        <div className="products-grid-luxury">
                            {loading ? (
                                <div className="loading-state">Cleansing energy...</div>
                            ) : sortedProducts.length > 0 ? (
                                sortedProducts.map(product => (
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
                .shop-sidebar {
                    position: sticky;
                    top: 190px;
                    align-self: start;
                }
                .sidebar-section {
                    background: linear-gradient(180deg, #ffffff 0%, #fbf8f4 100%);
                    border: 1px solid #ece2d7;
                    border-radius: 16px;
                    padding: 20px 16px;
                    box-shadow: 0 14px 28px rgba(38, 52, 67, 0.08);
                }
                
                .sidebar-title {
                    font-family: var(--font-serif);
                    font-size: 1.1rem;
                    margin-bottom: 14px;
                    text-transform: uppercase;
                    letter-spacing: 1.5px;
                    color: var(--primary);
                    border-bottom: 1px solid #eadfce;
                    padding-bottom: 10px;
                }
                .category-list-luxury {
                    list-style: none;
                    display: flex;
                    flex-direction: column;
                    gap: 9px;
                }
                .cat-btn-luxury {
                    background: #fff;
                    border: 1px solid #ede4db;
                    display: block;
                    width: 100%;
                    text-align: left;
                    padding: 12px 14px;
                    font-size: 0.86rem;
                    color: #586674;
                    cursor: pointer;
                    transition: all 0.28s ease;
                    text-transform: uppercase;
                    letter-spacing: 1.1px;
                    border-radius: 10px;
                    font-weight: 600;
                    position: relative;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                .cat-btn-luxury::before {
                    content: '';
                    position: absolute;
                    left: 0;
                    top: 10px;
                    bottom: 10px;
                    width: 0;
                    border-radius: 0 8px 8px 0;
                    background: linear-gradient(180deg, #d4af37 0%, #b18b2f 100%);
                    transition: width 0.22s ease;
                }
                .cat-btn-luxury:hover {
                    color: #304355;
                    transform: translateX(2px);
                    border-color: #ddc08b;
                    background: #fffdf8;
                    box-shadow: 0 8px 16px rgba(29, 44, 62, 0.09);
                }
                .cat-btn-luxury:hover::before {
                    width: 4px;
                }
                .cat-btn-luxury.active {
                    color: var(--secondary);
                    border-color: #d6b06b;
                    background: linear-gradient(90deg, rgba(212, 175, 55, 0.18) 0%, rgba(212, 175, 55, 0.03) 80%);
                    box-shadow: 0 10px 18px rgba(28, 42, 58, 0.1);
                }
                .cat-btn-luxury.active::before {
                    width: 5px;
                }
                
                .shop-toolbar {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 30px;
                    padding: 18px 20px;
                    border: 1px solid #F0EAE5;
                    border-radius: 6px;
                    background: linear-gradient(180deg, #fff 0%, #fdfbf9 100%);
                }
                .toolbar-left {
                    display: flex;
                    align-items: center;
                    gap: 16px;
                }
                .results-count { font-size: 0.8rem; color: var(--text-light); }
                .toolbar-search {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    border: 1px solid #E6DED6;
                    background: white;
                    border-radius: 999px;
                    padding: 8px 12px;
                    min-width: 260px;
                    color: var(--text-light);
                }
                .toolbar-search input {
                    border: none;
                    outline: none;
                    width: 100%;
                    font-size: 0.82rem;
                    color: var(--primary);
                    background: transparent;
                }
                .clear-search-btn {
                    border: none;
                    background: transparent;
                    color: #A2A7AC;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 0;
                }
                .toolbar-actions {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }
                .toolbar-btn {
                    background: none;
                    border: 1px solid #F0EAE5;
                    background: white;
                    padding: 10px 18px;
                    font-size: 0.75rem;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    cursor: pointer;
                    margin-left: 0;
                    transition: var(--transition);
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    border-radius: 4px;
                }
                .toolbar-btn:hover { border-color: var(--secondary); color: var(--secondary); }
                .sort-wrap { position: relative; }
                .sort-menu {
                    position: absolute;
                    top: calc(100% + 8px);
                    right: 0;
                    width: 220px;
                    background: white;
                    border: 1px solid #F0EAE5;
                    box-shadow: var(--shadow-soft);
                    z-index: 10;
                    padding: 8px 0;
                }
                .sort-item {
                    display: block;
                    width: 100%;
                    text-align: left;
                    border: none;
                    background: transparent;
                    padding: 10px 14px;
                    font-size: 0.8rem;
                    cursor: pointer;
                    color: var(--text-main);
                }
                .sort-item:hover, .sort-item.active {
                    background: var(--bg-creme);
                    color: var(--primary);
                }
                .filter-panel {
                    border: 1px solid #F0EAE5;
                    background: var(--bg-creme);
                    padding: 20px;
                    margin-bottom: 30px;
                }
                .filter-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr) auto auto;
                    gap: 16px;
                    align-items: end;
                }
                .filter-group label {
                    display: block;
                    font-size: 0.7rem;
                    margin-bottom: 8px;
                    text-transform: uppercase;
                    color: var(--text-light);
                    letter-spacing: 1px;
                }
                .filter-group input, .filter-group select {
                    width: 100%;
                    border: 1px solid #E7DFD7;
                    padding: 10px 12px;
                    background: white;
                    font-size: 0.85rem;
                }
                .checkbox-filter {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    font-size: 0.8rem;
                    color: var(--text-main);
                    cursor: pointer;
                }
                .filter-actions {
                    margin-top: 14px;
                    display: flex;
                    justify-content: flex-end;
                }
                .reset-btn { margin-left: 0; }
                
                .products-grid-luxury {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 40px;
                }

                @media (max-width: 1024px) {
                    .shop-layout { grid-template-columns: 1fr; }
                    .shop-sidebar { display: none; }
                    .shop-toolbar {
                        flex-direction: column;
                        align-items: stretch;
                        gap: 12px;
                    }
                    .toolbar-left {
                        justify-content: space-between;
                        width: 100%;
                    }
                    .filter-grid {
                        grid-template-columns: 1fr 1fr;
                    }
                    .products-grid-luxury { grid-template-columns: repeat(2, 1fr); }
                }
                @media (max-width: 576px) {
                    .toolbar-left {
                        flex-direction: column;
                        align-items: stretch;
                        gap: 10px;
                    }
                    .toolbar-actions {
                        width: 100%;
                        display: flex;
                        gap: 10px;
                    }
                    .toolbar-search {
                        min-width: 0;
                        width: 100%;
                    }
                    .toolbar-btn {
                        margin-left: 0;
                        flex: 1;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        gap: 8px;
                    }
                    .sort-wrap { flex: 1; }
                    .sort-menu {
                        left: 0;
                        right: auto;
                        width: 100%;
                    }
                    .filter-grid {
                        grid-template-columns: 1fr;
                    }
                    .products-grid-luxury { grid-template-columns: 1fr; }
                }
            `}</style>
        </div>
    );
};

export default Shop;
