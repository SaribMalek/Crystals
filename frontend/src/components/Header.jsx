import React, { useState, useEffect } from 'react'
import { Search, ShoppingCart, User, Settings, Menu, X } from 'lucide-react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const FALLBACK_NAV_LINKS = [
  { name: 'HOME', path: '/' },
  { name: 'SHOP', path: '/shop' },
  {
    name: 'HEALING STONES',
    path: '/healing-stones',
    dropdown: ['Rose Quartz', 'Clear Quartz', 'Amethyst', 'Black Tourmaline', 'Lapis Lazuli', 'Citrine', 'Selenite', 'Pyrite']
      .map((item) => ({ label: item, path: `/shop?search=${encodeURIComponent(item)}` }))
  },
  {
    name: 'CRYSTAL JEWELRY',
    path: '/crystal-jewelry',
    dropdown: ['Bracelets', 'Pendants', 'Malas', 'Rings']
      .map((item) => ({ label: item, path: `/shop?search=${encodeURIComponent(item)}` }))
  },
  {
    name: 'REIKI TOOLS',
    path: '/reiki-tools',
    dropdown: ['Pendulums', 'Chakra Sets', 'Engraved Stones', 'Charging Plates']
      .map((item) => ({ label: item, path: `/shop?search=${encodeURIComponent(item)}` }))
  },
  {
    name: 'REMEDIES',
    path: '/remedies',
    dropdown: ['Wealth', 'Health', 'Protection', 'Relationship', 'Root Chakra', 'Self-Confidence', 'Education']
      .map((item) => ({ label: item, path: `/shop?search=${encodeURIComponent(item)}` }))
  },
  { name: 'SERVICES', path: '/services' },
  { name: 'CONTACT', path: '/contact' },
]

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [navLinks, setNavLinks] = useState(FALLBACK_NAV_LINKS)
  const { cartCount } = useCart()
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    setSearchQuery(params.get('search') || '')
  }, [location.search])

  useEffect(() => {
    const loadHeaderMenu = async () => {
      try {
        const response = await fetch('/api/header-menu')
        if (!response.ok) {
          return
        }
        const data = await response.json()
        if (Array.isArray(data) && data.length > 0) {
          setNavLinks(data)
        }
      } catch (error) {
        console.error('Unable to load header menu:', error)
      }
    }

    loadHeaderMenu()
  }, [])

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    const trimmedQuery = searchQuery.trim()
    navigate(trimmedQuery ? `/shop?search=${encodeURIComponent(trimmedQuery)}` : '/shop')
    setIsSearchOpen(false)
  }

  const renderMenuLink = (item, className, onClick = undefined) => {
    const path = item.path || '/'
    const openInNewTab = !!item.openInNewTab
    const isInternal = path.startsWith('/') && !openInNewTab

    if (isInternal) {
      return (
        <Link to={path} className={className} onClick={onClick}>
          {item.name || item.label}
        </Link>
      )
    }

    return (
      <a
        href={path}
        className={className}
        onClick={onClick}
        target={openInNewTab ? '_blank' : undefined}
        rel={openInNewTab ? 'noopener noreferrer' : undefined}
      >
        {item.name || item.label}
      </a>
    )
  }

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="top-bar">
        <span>Free Shipping on Orders Over $150</span>
        <span className="top-bar-sep">|</span>
        <span>Secure Manifestation Tools</span>
      </div>

      <div className="container main-header">
        <Link to="/" className="logo-container">
          <img src="/images/AS_Crystal_logo.png" alt="AS Crystal" className="brand-logo-img" />
        </Link>

        <nav className="desktop-nav">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.name} className={`nav-item ${Array.isArray(link.dropdown) && link.dropdown.length > 0 ? 'has-dropdown' : ''}`}>
                {renderMenuLink(link, `nav-link ${location.pathname === link.path ? 'active' : ''}`)}
                {Array.isArray(link.dropdown) && link.dropdown.length > 0 && (
                  <ul className="mega-menu">
                    {link.dropdown.map(item => (
                      <li key={item.label}>
                        {renderMenuLink(item, '', undefined)}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <button
            className={`icon-btn ${isSearchOpen ? 'active' : ''}`}
            onClick={() => setIsSearchOpen(prev => !prev)}
            aria-label="Toggle search"
          >
            <Search size={18} strokeWidth={1.5} />
          </button>
          <Link to="/cart" className="icon-btn cart-btn">
            <ShoppingCart size={18} strokeWidth={1.5} />
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </Link>
          <Link to="/orders" className="icon-btn" aria-label="My Orders" title="My Orders">
            <User size={18} strokeWidth={1.5} />
          </Link>
          <a href="/admin" className="icon-btn" aria-label="Admin Dashboard" title="Admin Dashboard">
            <Settings size={18} strokeWidth={1.5} />
          </a>
          <button className="mobile-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div className={`search-panel ${isSearchOpen ? 'open' : ''}`}>
        <form className="search-form" onSubmit={handleSearchSubmit}>
          <Search size={16} strokeWidth={1.8} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search crystals, jewelry, remedies..."
            aria-label="Search products"
          />
          <button type="submit">Search</button>
        </form>
      </div>

      {/* Mobile Nav */}
      <nav className={`mobile-nav ${isMenuOpen ? 'nav-open' : ''}`}>
        <ul className="mobile-nav-list">
          {navLinks.map((link) => (
            <li key={link.name}>
              {renderMenuLink(link, '', () => setIsMenuOpen(false))}
              {Array.isArray(link.dropdown) && link.dropdown.length > 0 && (
                <ul className="mobile-submenu-list">
                  {link.dropdown.map(item => (
                    <li key={item.label}>
                      {renderMenuLink(item, '', () => setIsMenuOpen(false))}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
          <li>
            <Link to="/orders" onClick={() => setIsMenuOpen(false)}>MY ORDERS</Link>
          </li>
          <li>
            <a href="/admin">ADMIN DASHBOARD</a>
          </li>
        </ul>
      </nav>

      <style jsx="true">{`
                .header {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    z-index: 2000;
                    transition: var(--transition);
                    background: transparent;
                }
                .header-scrolled {
                    background: rgba(255, 255, 255, 0.98);
                    backdrop-filter: blur(15px);
                    box-shadow: 0 5px 20px rgba(0,0,0,0.03);
                }
                .search-panel {
                    max-height: 0;
                    overflow: hidden;
                    background: rgba(255, 255, 255, 0.98);
                    border-top: 1px solid rgba(0,0,0,0.06);
                    transition: max-height 0.25s ease;
                }
                .search-panel.open {
                    max-height: 90px;
                }
                .search-form {
                    max-width: 1100px;
                    margin: 0 auto;
                    padding: 16px 24px;
                    display: grid;
                    grid-template-columns: auto 1fr auto;
                    gap: 12px;
                    align-items: center;
                    color: var(--text-light);
                }
                .search-form input {
                    border: 1px solid #E7DFD7;
                    border-radius: 24px;
                    padding: 10px 14px;
                    font-size: 0.9rem;
                    color: var(--primary);
                    background: white;
                }
                .search-form input:focus {
                    outline: none;
                    border-color: var(--secondary);
                }
                .search-form button {
                    border: none;
                    border-radius: 20px;
                    background: var(--primary);
                    color: white;
                    padding: 10px 16px;
                    font-size: 0.72rem;
                    letter-spacing: 1px;
                    text-transform: uppercase;
                    cursor: pointer;
                    transition: var(--transition);
                }
                .search-form button:hover {
                    background: var(--bg-dark);
                }
                .top-bar {
                    background: var(--bg-dark);
                    color: rgba(255,255,255,0.8);
                    text-align: center;
                    padding: 8px;
                    font-size: 0.6rem;
                    text-transform: uppercase;
                    letter-spacing: 3px;
                    display: flex;
                    justify-content: center;
                    gap: 20px;
                    font-weight: 500;
                }
                .top-bar-sep { opacity: 0.2; }
                
                .main-header {
                    display: flex !important;
                    flex-direction: row !important;
                    align-items: center;
                    justify-content: space-between;
                    gap: 20px;
                    padding: 30px 0;
                    transition: var(--transition);
                }
                .header-scrolled .main-header { padding: 15px 0; }
                
                .logo-container {
                    text-decoration: none;
                    flex-shrink: 0;
                    display: flex;
                    align-items: center;
                }
                .brand-logo-img {
                    width: clamp(180px, 16vw, 250px);
                    height: 56px;
                    object-fit: contain;
                    object-position: left center;
                    display: block;
                }
                .header-scrolled .brand-logo-img { height: 48px; }
                
                .desktop-nav {
                    flex-grow: 1;
                    display: flex;
                    justify-content: center;
                    min-width: 0;
                }
                
                .nav-list {
                    display: flex;
                    gap: clamp(16px, 1.6vw, 30px);
                    list-style: none;
                    margin: 0 auto;
                    align-items: center;
                    flex-wrap: nowrap;
                }
                .nav-item {
                    position: relative;
                }
                
                .nav-link {
                    text-decoration: none;
                    color: var(--text-main);
                    font-size: 0.75rem;
                    font-weight: 500;
                    letter-spacing: 1.5px;
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    transition: var(--transition);
                    position: relative;
                    text-transform: uppercase;
                    white-space: nowrap;
                }
                .nav-link::after {
                    content: '';
                    position: absolute;
                    bottom: -5px;
                    left: 0;
                    width: 0;
                    height: 1px;
                    background: var(--secondary);
                    transition: var(--transition);
                }
                .nav-link:hover::after, .nav-link.active::after { width: 100%; }
                .nav-link:hover { color: var(--secondary); }
                
                .mega-menu {
                    position: absolute;
                    top: calc(100% + 15px);
                    left: 50%;
                    transform: translateX(-50%) translateY(10px);
                    background: white;
                    min-width: 250px;
                    padding: 25px 0;
                    box-shadow: var(--shadow-medium);
                    opacity: 0;
                    visibility: hidden;
                    transition: var(--transition);
                    list-style: none;
                    border-radius: 4px;
                    border-top: 3px solid var(--secondary);
                    z-index: 100;
                }
                .nav-item:hover .mega-menu {
                    opacity: 1;
                    visibility: visible;
                    transform: translateX(-50%) translateY(0);
                }
                .mega-menu li a {
                    display: block;
                    padding: 10px 25px;
                    text-decoration: none;
                    color: var(--text-light);
                    font-size: 0.8rem;
                    transition: var(--transition);
                }
                .mega-menu li a:hover {
                    color: var(--secondary);
                    background: var(--bg-creme);
                    padding-left: 30px;
                }
                
                .header-actions {
                    display: flex;
                    gap: 14px;
                    align-items: center;
                    flex-shrink: 0;
                    white-space: nowrap;
                }
                .icon-btn {
                    background: none;
                    border: none;
                    cursor: pointer;
                    color: var(--text-main);
                    position: relative;
                    transition: var(--transition);
                    display: flex;
                    align-items: center;
                }
                .icon-btn.active { color: var(--secondary); }
                .icon-btn:hover { color: var(--secondary); transform: translateY(-2px); }
                .cart-count {
                    position: absolute;
                    top: -8px;
                    right: -8px;
                    background: var(--accent);
                    color: white;
                    font-size: 0.6rem;
                    width: 16px;
                    height: 16px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: 700;
                }
                
                .mobile-toggle { display: none; }
                .mobile-nav { display: none; }

                @media (max-width: 1360px) {
                    .main-header { padding: 22px 0; }
                    .brand-logo-img {
                        width: clamp(160px, 14vw, 210px);
                        height: 50px;
                    }
                    .nav-link {
                        font-size: 0.7rem;
                        letter-spacing: 1.2px;
                    }
                    .header-actions { gap: 12px; }
                }

                @media (max-width: 1180px) {
                    .brand-logo-img {
                        width: clamp(150px, 13vw, 185px);
                        height: 46px;
                    }
                    .nav-link {
                        font-size: 0.66rem;
                        letter-spacing: 1px;
                    }
                    .nav-list { gap: 12px; }
                }
                
                @media (max-width: 1024px) {
                    .desktop-nav { display: none; }
                    .mobile-toggle { display: block; }
                    .brand-logo-img {
                        width: clamp(145px, 34vw, 195px);
                        height: 44px;
                    }
                    .header-scrolled .brand-logo-img { height: 40px; }
                    .search-form {
                        padding: 12px 20px;
                        grid-template-columns: 1fr auto;
                    }
                    .search-form svg { display: none; }
                    .search-panel.open { max-height: 120px; }
                    .mobile-nav {
                        display: block;
                        position: fixed;
                        top: 0;
                        right: -100%;
                        width: 80%;
                        height: 100vh;
                        background: white;
                        transition: var(--transition);
                        padding: 100px 40px;
                        z-index: 1000;
                        box-shadow: -10px 0 30px rgba(0,0,0,0.1);
                    }
                    .nav-open { right: 0; }
                    .mobile-nav-list { list-style: none; }
                    .mobile-nav-list li { margin-bottom: 25px; }
                    .mobile-nav-list a {
                        text-decoration: none;
                        color: var(--text-main);
                        font-family: var(--font-serif);
                        font-size: 2rem;
                    }
                    .mobile-submenu-list {
                        list-style: none;
                        margin-top: 10px;
                        margin-left: 10px;
                    }
                    .mobile-submenu-list li {
                        margin-bottom: 10px;
                    }
                    .mobile-submenu-list a {
                        font-size: 1rem;
                        font-family: var(--font-sans);
                        color: var(--text-light);
                        letter-spacing: 1px;
                    }
                }
            `}</style>
    </header>
  )
}

export default Header
