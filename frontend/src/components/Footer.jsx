import React from 'react'
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin, Send } from 'lucide-react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="luxury-footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <Link to="/" className="luxury-logo-link">
              <img src="/images/AS_Crystal_logo.png?v=20260219" alt="AS Crystal" className="footer-logo-img" />
            </Link>
            <p className="footer-about">
              Curating authentic energy tools for the modern healer.
              Our crystals are hand-selected for their vibrational resonance and ethical origin.
            </p>
            <div className="social-luxury">
              <a href="#"><Instagram size={18} /></a>
              <a href="#"><Facebook size={18} /></a>
              <a href="#"><Twitter size={18} /></a>
            </div>
          </div>

          <div className="footer-links-grid">
            <div className="footer-column">
              <h3>Collections</h3>
              <ul>
                <li><Link to="/shop">All Crystals</Link></li>
                <li><Link to="/remedies">Remedies</Link></li>
                <li><Link to="/gifts">Gifts</Link></li>
                <li><Link to="/trainings">Workshops</Link></li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Company</h3>
              <ul>
                <li><Link to="/about">Our Story</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/orders">My Orders</Link></li>
                <li><Link to="/terms">Terms</Link></li>
              </ul>
            </div>
            <div className="footer-column contact-col-luxury">
              <h3>Connect</h3>
              <p><Mail size={14} /> ascrystal0204@gmail.com </p>
              <p><Phone size={14} /> +91 99097 86552 </p>
              <p><MapPin size={14} /> Kadival, Laldarvaja Khambhat - 388620 </p>
            </div>
          </div>
        </div>

        <div className="footer-legal">
          <p>&copy; 2026 REIKI CRYSTALS. Crafted for the Soul.</p>
          <div className="legal-links">
            <Link to="/privacy">Privacy</Link>
            <Link to="/terms">Conditions</Link>
          </div>
        </div>
      </div>

      <style jsx="true">{`
        .luxury-footer {
          background: #000;
          color: white;
          padding: 100px 0 40px;
        }
        .footer-main {
          display: grid;
          grid-template-columns: 1.5fr 2fr;
          gap: 100px;
          margin-bottom: 80px;
        }
        
        .luxury-logo-link {
            text-decoration: none;
            display: inline-flex;
            margin-bottom: 30px;
            align-items: center;
        }
        .footer-logo-img {
            width: clamp(230px, 28vw, 340px);
            height: auto;
            object-fit: contain;
            object-position: left center;
            display: block;
        }
        
        .footer-about {
            font-size: 0.85rem;
            color: rgba(255,255,255,0.5);
            line-height: 1.8;
            max-width: 320px;
            margin-bottom: 30px;
            font-weight: 300;
        }
        
        .social-luxury {
            display: flex;
            gap: 20px;
        }
        .social-luxury a {
            color: rgba(255,255,255,0.6);
            transition: var(--transition);
        }
        .social-luxury a:hover { color: var(--secondary); }
        
        .footer-links-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 40px;
        }
        .footer-column h3 {
            font-family: var(--font-serif);
            font-size: 1rem;
            margin-bottom: 30px;
            text-transform: uppercase;
            letter-spacing: 2px;
            color: white;
        }
        .footer-column ul { list-style: none; }
        .footer-column ul li { margin-bottom: 15px; }
        .footer-column ul li a {
            text-decoration: none;
            color: rgba(255,255,255,0.5);
            font-size: 0.85rem;
            transition: var(--transition);
        }
        .footer-column ul li a:hover { color: white; padding-left: 5px; }
        
        .contact-col-luxury p {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 0.85rem;
            color: rgba(255,255,255,0.5);
            margin-bottom: 15px;
            font-weight: 300;
        }
        
        .footer-legal {
            border-top: 1px solid rgba(255,255,255,0.1);
            padding-top: 40px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 0.7rem;
            color: rgba(255,255,255,0.4);
            text-transform: uppercase;
            letter-spacing: 1px;
        }
        .legal-links { display: flex; gap: 30px; }
        .legal-links a {
            text-decoration: none;
            color: inherit;
        }
        .legal-links a:hover { color: white; }

        @media (max-width: 992px) {
            .footer-main { grid-template-columns: 1fr; gap: 60px; }
            .footer-links-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 576px) {
            .footer-logo-img {
                width: clamp(180px, 64vw, 240px);
                height: auto;
            }
            .footer-links-grid { grid-template-columns: 1fr; }
            .footer-legal { flex-direction: column; gap: 20px; text-align: center; }
        }
      `}</style>
    </footer>
  )
}

export default Footer
