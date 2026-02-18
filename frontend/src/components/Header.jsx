import React, { useState, useEffect } from 'react'
import { Search, ShoppingCart, User, Menu, X, ChevronDown } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { cartCount } = useCart()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'SHOP', path: '/shop', dropdown: ['7 Chakra Products', 'Bracelets', 'Pendants', 'Malas', 'Rudraksha', 'Angels', 'Tumble Stones', 'Crystal Pencils', 'Pyramids', 'Balls', 'Dowser', 'Orgone', 'Crystal Trees', 'Feng Shui'] },
    { name: 'REMEDIES', path: '/remedies', dropdown: ['Wealth', 'Health', 'Protection', 'Relationship', 'Root Chakra', 'Self-Confidence', 'Education'] },
    { name: 'HEALING STONES', path: '/healing-stones', dropdown: ['Rose Quartz', 'Clear Quartz', 'Amethyst', 'Black Tourmaline', 'Lapis Lazuli', 'Citrine', 'Selenite', 'Pyrite'] },
    { name: 'TRAININGS', path: '/trainings' },
    { name: 'CONTACT', path: '/contact' },
  ]

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="top-bar">
        <span>Free Shipping on Orders Over $150</span>
        <span className="top-bar-sep">|</span>
        <span>Secure Manifestation Tools</span>
      </div>

      <div className="container main-header">
        <Link to="/" className="logo-container">
          <div className="logo-text">
            <span className="brand-name">AS CRYSTALS</span>
            <span className="brand-tagline">Purity & Energy</span>
          </div>
        </Link>

        <nav className="desktop-nav">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.name} className={`nav-item ${link.dropdown ? 'has-dropdown' : ''}`}>
                <Link to={link.path} className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}>
                  {link.name}
                </Link>
                {link.dropdown && (
                  <ul className="mega-menu">
                    {link.dropdown.map(item => (
                      <li key={item}>
                        <Link to={`/shop?category=${item}`}>{item}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <button className="icon-btn"><Search size={18} strokeWidth={1.5} /></button>
          <Link to="/cart" className="icon-btn cart-btn">
            <ShoppingCart size={18} strokeWidth={1.5} />
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </Link>
          <button className="mobile-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <nav className={`mobile-nav ${isMenuOpen ? 'nav-open' : ''}`}>
        <ul className="mobile-nav-list">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link to={link.path} onClick={() => setIsMenuOpen(false)}>{link.name}</Link>
            </li>
          ))}
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
                    padding: 30px 0;
                    transition: var(--transition);
                }
                .header-scrolled .main-header { padding: 15px 0; }
                
                .logo-container {
                    text-decoration: none;
                    flex-shrink: 0;
                    display: block;
                }
                .logo-text {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                }
                .brand-name {
                    font-family: var(--font-serif);
                    font-size: 1.8rem;
                    color: var(--primary);
                    font-weight: 600;
                    letter-spacing: 2px;
                    line-height: 1;
                }
                .brand-tagline {
                    font-size: 0.55rem;
                    text-transform: uppercase;
                    letter-spacing: 3px;
                    color: var(--secondary);
                    margin-top: 4px;
                    font-weight: 600;
                }
                
                .desktop-nav {
                    flex-grow: 1;
                    display: flex;
                    justify-content: center;
                }
                
                .nav-list {
                    display: flex;
                    gap: 30px;
                    list-style: none;
                    margin: 0 auto;
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
                    gap: 20px;
                    align-items: center;
                    flex-shrink: 0;
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
                
                @media (max-width: 1024px) {
                    .desktop-nav { display: none; }
                    .mobile-toggle { display: block; }
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
                }
            `}</style>
    </header>
  )
}

export default Header
