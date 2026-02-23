import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <span className="hero-eyebrow">Natural Gemstones For Daily Wellness</span>
          <h1 className="hero-title">Healing Crystals <br />For Reiki & Balance</h1>
          <p className="hero-desc">
            Explore authentic healing crystals, bracelets, malas and Reiki tools curated to support
            grounding, protection, prosperity, love and spiritual growth.
          </p>
          <div className="hero-actions">
            <Link to="/shop" className="btn-luxury">Shop Collection</Link>
            <Link to="/services" className="btn-text">Our Services</Link>
          </div>
        </div>
      </div>

      <style jsx="true">{`
        .hero {
          height: 100vh;
          display: flex;
          align-items: center;
          background: linear-gradient(rgba(255,255,255,0.4), rgba(255,255,255,0.4)), url('https://images.unsplash.com/photo-1569144157591-c483197ec02c?q=80&w=2070&auto=format&fit=crop');
          background-size: cover;
          background-position: center;
          position: relative;
          overflow: hidden;
        }
        
        .hero::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: radial-gradient(circle at 40% 50%, rgba(253, 251, 249, 0.8) 0%, transparent 60%);
        }

        .hero-content {
          max-width: 600px;
          position: relative;
          z-index: 10;
          animation: fadeInSlide 1.2s cubic-bezier(0.165, 0.84, 0.44, 1);
        }
        
        .hero-eyebrow {
            display: block;
            text-transform: uppercase;
            letter-spacing: 4px;
            font-size: 0.7rem;
            color: var(--secondary);
            margin-bottom: 20px;
            font-weight: 600;
        }

        .hero-title {
          font-size: 5rem;
          line-height: 1;
          margin-bottom: 30px;
          color: var(--primary);
        }
        
        .hero-desc {
          font-size: 1.1rem;
          color: var(--text-light);
          margin-bottom: 40px;
          max-width: 480px;
          font-weight: 300;
        }
        
        .hero-actions {
            display: flex;
            align-items: center;
            gap: 30px;
        }

        .btn-luxury {
          display: inline-block;
          padding: 18px 45px;
          background: var(--primary);
          color: white;
          text-decoration: none;
          font-weight: 600;
          letter-spacing: 1px;
          font-size: 0.8rem;
          text-transform: uppercase;
          transition: var(--transition);
          box-shadow: var(--shadow-medium);
        }
        
        .btn-luxury:hover {
            background: var(--bg-dark);
            transform: translateY(-5px);
            box-shadow: 0 15px 30px rgba(0,0,0,0.2);
        }
        
        .btn-text {
            color: var(--primary);
            text-decoration: none;
            font-weight: 600;
            font-size: 0.8rem;
            text-transform: uppercase;
            letter-spacing: 1px;
            position: relative;
        }
        
        .btn-text::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 30px;
            height: 1px;
            background: var(--secondary);
            transition: var(--transition);
        }
        
        .btn-text:hover::after { width: 100%; }

        @keyframes fadeInSlide {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 992px) {
          .hero-title { font-size: 3.5rem; }
          .hero { height: 80vh; padding-top: 100px; }
        }
      `}</style>
    </section>
  )
}

export default Hero
