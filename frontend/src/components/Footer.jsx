import React from 'react'
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-col about-col">
          <Link to="/" className="logo-font footer-logo" onClick={scrollToTop}><span className="logo-as">AS</span> Crystals</Link>
          <p>Your sanctuary for premium healing crystals and artisan jewelry. We believe in the power of intention and the natural energy of the earth.</p>
          <div className="social-links">
            <a href="#"><Instagram size={20} /></a>
            <a href="#"><Facebook size={20} /></a>
            <a href="#"><Twitter size={20} /></a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/shop">Shop All</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Customer Care</h4>
          <ul>
            <li><Link to="/contact">Shipping Policy</Link></li>
            <li><Link to="/contact">Returns & Exchanges</Link></li>
            <li><Link to="/contact">FAQs</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-col contact-col">
          <h4>Contact Us</h4>
          <ul>
            <li><Mail size={18} /> support@ascrystals.com</li>
            <li><Phone size={18} /> +1 (555) 123-4567</li>
            <li><MapPin size={18} /> 777 Crystal Lane, Aurora Heights</li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>&copy; 2026 AS Crystals. All rights reserved.</p>
        <div className="payment-icons">
          {/* Icons could go here */}
          <span>Visa</span>
          <span>Mastercard</span>
          <span>PayPal</span>
        </div>
      </div>

      <style jsx="true">{`
        .footer {
          background: #1a1a1a;
          color: #e0e0e0;
          padding: 80px 0 30px;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.5fr;
          gap: 40px;
          margin-bottom: 60px;
        }
        .footer-logo {
          color: var(--white);
          font-size: 2rem;
          margin-bottom: 20px;
          display: block;
        }
        .footer-col h4 {
          color: var(--white);
          margin-bottom: 25px;
          font-size: 1.2rem;
          position: relative;
        }
        .footer-col h4::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 30px;
          height: 2px;
          background: var(--secondary);
        }
        .footer-col p {
          line-height: 1.8;
          margin-bottom: 25px;
          color: #aaa;
        }
        .footer-col ul li {
          margin-bottom: 12px;
        }
        .footer-col ul li a, .footer-col ul li {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #aaa;
          transition: var(--transition);
        }
        .footer-col ul li a:hover {
          color: var(--secondary);
          transform: translateX(5px);
        }
        .social-links {
          display: flex;
          gap: 15px;
        }
        .social-links a {
          width: 40px;
          height: 40px;
          border: 1px solid #333;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #aaa;
          transition: var(--transition);
        }
        .social-links a:hover {
          background: var(--primary);
          border-color: var(--primary);
          color: var(--white);
        }
        .footer-bottom {
          padding-top: 30px;
          border-top: 1px solid #333;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.9rem;
          color: #777;
        }
        .payment-icons {
          display: flex;
          gap: 15px;
        }

        @media (max-width: 992px) {
          .footer-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 576px) {
          .footer-grid { grid-template-columns: 1fr; }
          .footer-bottom { flex-direction: column; gap: 20px; text-align: center; }
        }
      `}</style>
    </footer>
  )
}

export default Footer
