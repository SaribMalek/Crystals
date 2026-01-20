import React, { useState } from 'react'
import { Search, ShoppingCart, User, Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { cartCount } = useCart()

  return (
    <header className="header">
      <div className="announcement-bar">
        Free International Shipping on orders over $150
      </div>

      <div className="container header-container">
        <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul>
            <li className="has-dropdown">
              <Link to="/shop" onClick={() => setIsMenuOpen(false)}>Shop</Link>
              <div className="dropdown">
                <div className="dropdown-section">
                  <h4>By Crystal</h4>
                  <Link to="/shop?category=Clustered Crystals" onClick={() => setIsMenuOpen(false)}>Clusters</Link>
                  <Link to="/shop?category=Points %26 Wands" onClick={() => setIsMenuOpen(false)}>Points & Towers</Link>
                  <Link to="/shop?category=Tumbled Stones" onClick={() => setIsMenuOpen(false)}>Tumbled Stones</Link>
                  <Link to="/shop?category=Palm Stones" onClick={() => setIsMenuOpen(false)}>Palm Stones</Link>
                </div>
                <div className="dropdown-section">
                  <h4>By Intention</h4>
                  <Link to="/shop?category=Protection Stones" onClick={() => setIsMenuOpen(false)}>Protection</Link>
                  <Link to="/shop?category=Wealth Stones" onClick={() => setIsMenuOpen(false)}>Abundance</Link>
                  <Link to="/shop?category=Healing Stones" onClick={() => setIsMenuOpen(false)}>Healing</Link>
                  <Link to="/shop?category=Love Stones" onClick={() => setIsMenuOpen(false)}>Love</Link>
                </div>
                <div className="dropdown-section">
                  <h4>Jewelry</h4>
                  <Link to="/shop?category=Bracelets" onClick={() => setIsMenuOpen(false)}>Bracelets</Link>
                  <Link to="/shop?category=Necklaces" onClick={() => setIsMenuOpen(false)}>Necklaces</Link>
                  <Link to="/shop?category=Rings" onClick={() => setIsMenuOpen(false)}>Rings</Link>
                </div>
              </div>
            </li>
            <li><Link to="/shop" onClick={() => setIsMenuOpen(false)}>Best Sellers</Link></li>
            <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>Our Story</Link></li>
            <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
          </ul>
        </nav>

        <Link to="/" className="logo">
          <span className="logo-font"><span className="logo-as">AS</span> Crystals</span>
        </Link>

        <div className="header-actions">
          <button className="icon-btn"><Search size={20} /></button>
          <button className="icon-btn"><User size={20} /></button>
          <Link to="/cart" className="icon-btn cart-btn">
            <ShoppingCart size={20} />
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </Link>
        </div>
      </div>

      <style jsx="true">{`
        .header {
          background: var(--white);
          position: sticky;
          top: 0;
          z-index: 1000;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
        }
        .announcement-bar {
          background: var(--primary);
          color: var(--white);
          text-align: center;
          padding: 8px;
          font-size: 0.8rem;
          font-weight: 500;
          letter-spacing: 0.5px;
        }
        .header-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 80px;
        }
        .nav ul {
          display: flex;
          gap: 30px;
        }
        .nav ul li a {
          font-weight: 500;
          font-size: 0.95rem;
          color: var(--text-light);
        }
        .nav ul li a:hover {
          color: var(--primary);
        }
        
        .has-dropdown {
          position: relative;
        }
        .dropdown {
          position: absolute;
          top: 100%;
          left: 0;
          background: var(--white);
          min-width: 500px;
          padding: 30px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          box-shadow: 0 15px 30px rgba(0,0,0,0.1);
          border-radius: 0 0 15px 15px;
          opacity: 0;
          visibility: hidden;
          transform: translateY(10px);
          transition: var(--transition);
          z-index: 100;
        }
        .has-dropdown:hover .dropdown {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }
        .dropdown-section h4 {
          font-size: 0.8rem;
          color: var(--primary);
          text-transform: uppercase;
          margin-bottom: 15px;
          letter-spacing: 1px;
        }
        .dropdown-section a {
          display: block;
          font-size: 0.9rem;
          color: var(--text-light);
          margin-bottom: 10px;
          font-weight: 400;
        }
        .dropdown-section a:hover {
          color: var(--primary);
          padding-left: 5px;
        }
        
        .logo {
          transition: var(--transition);
        }
        @media (min-width: 993px) {
          .logo {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
          }
        }
        .header-actions {
          display: flex;
          gap: 15px;
        }
        .icon-btn {
          background: none;
          border: none;
          cursor: pointer;
          color: var(--text);
          transition: var(--transition);
          position: relative;
        }
        .icon-btn:hover {
          color: var(--primary);
        }
        .cart-count {
          position: absolute;
          top: -8px;
          right: -8px;
          background: var(--secondary);
          color: var(--primary);
          font-size: 10px;
          font-weight: 700;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
        }

        @media (max-width: 992px) {
          .nav {
            position: fixed;
            top: 116px;
            left: -100%;
            width: 100%;
            height: calc(100vh - 116px);
            background: var(--white);
            transition: 0.3s;
            padding: 40px;
          }
          .nav-open {
            left: 0;
          }
          .nav ul {
            flex-direction: column;
            gap: 20px;
          }
          .dropdown {
            position: static;
            min-width: 100%;
            display: block;
            opacity: 1;
            visibility: visible;
            transform: none;
            box-shadow: none;
            padding: 15px 0 0 15px;
          }
          .dropdown-section {
            margin-bottom: 20px;
          }
          .mobile-menu-btn {
            display: block;
          }
          .logo {
            margin-right: auto;
            margin-left: 15px;
          }
        }
      `}</style>
    </header>
  )
}

export default Header
