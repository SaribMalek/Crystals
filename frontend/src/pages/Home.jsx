import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import ProductCard from '../components/ProductCard'

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeatured = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/products');
        const data = await response.json();
        setFeaturedProducts(data.slice(0, 4));
        setLoading(false);
      } catch (error) {
        console.error('Error fetching featured products:', error);
        setLoading(false);
      }
    };

    fetchFeatured();
  }, []);

  const categories = [
    { name: 'Protection', desc: 'Shield your energy from negativity', color: '#1A1A1A' },
    { name: 'Abundance', desc: 'Attract prosperity and luck', color: '#D4AF37' },
    { name: 'Inner Peace', desc: 'Restore balance to mind and body', color: '#7F8C8D' },
    { name: 'Vitality', desc: 'Awaken your creative spirit', color: '#E91E63' },
  ]

  return (
    <div className="home-page">
      <Hero />

      {/* Philosophy Section */}
      <section className="philosophy-section">
        <div className="container">
          <div className="philosophy-grid">
            <div className="philosophy-text">
              <span className="hero-eyebrow">Our Philosophy</span>
              <h2 className="section-title" style={{ textAlign: 'left' }}>Purity in Every <br />Crystal Plane</h2>
              <p>
                At AS Crystals, we believe that energy is the foundation of existence. Our collection is meticulously curated to ensure each stone resonates with its natural frequency, helping you manifest your highest self.
              </p>
              <Link to="/about" className="btn-text">Read Our Story</Link>
            </div>
            <div className="philosophy-image">
              <img src="https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?q=80&w=1974&auto=format&fit=crop" alt="Healing Crystals" />
            </div>
          </div>
        </div>
      </section>

      {/* Intention Grid */}
      <section className="intention-section">
        <div className="container">
          <div className="text-center mb-60">
            <span className="hero-eyebrow">Curated Collections</span>
            <h2 className="section-title">Shop by Intention</h2>
          </div>
          <div className="category-grid">
            {categories.map((cat, idx) => (
              <div key={idx} className="category-card" style={{ '--accent': cat.color }}>
                <div className="cat-icon-placeholder" style={{ background: cat.color }}></div>
                <h3>{cat.name}</h3>
                <p>{cat.desc}</p>
                <Link to="/shop" className="anchor-luxury">Discover →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-products">
        <div className="container">
          <div className="text-center mb-60">
            <span className="hero-eyebrow">The Essentials</span>
            <h2 className="section-title">Current Bestsellers</h2>
          </div>
          <div className="products-grid">
            {loading ? (
              <div className="loading-state">Refining energy...</div>
            ) : featuredProducts.length > 0 ? (
              featuredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <div className="no-products">Our vault is being updated.</div>
            )}
          </div>
          <div className="text-center mt-60">
            <Link to="/shop" className="btn-luxury">View Entire Catalog</Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter-luxury">
        <div className="container">
          <div className="newsletter-wrapper">
            <div className="newsletter-content">
              <span className="hero-eyebrow" style={{ color: 'rgba(255,255,255,0.6)' }}>Stay Connected</span>
              <h2>Join the Soul Circle</h2>
              <p>Register for exclusive access to moon-cycle rituals, energy updates, and boutique collections.</p>
              <form className="luxury-form">
                <input type="email" placeholder="Your essence (email)" required />
                <button type="submit">Join</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <style jsx="true">{`
        .mb-60 { margin-bottom: 60px; }
        .mt-60 { margin-top: 60px; }
        .text-center { text-align: center; }

        .philosophy-section { background: var(--white); }
        .philosophy-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 80px;
            align-items: center;
        }
        .philosophy-text p {
            font-size: 1.1rem;
            color: var(--text-light);
            margin-bottom: 30px;
            font-weight: 300;
        }
        .philosophy-image img {
            width: 100%;
            height: 500px;
            object-fit: cover;
            border-radius: 4px;
            box-shadow: var(--shadow-medium);
        }

        .category-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
        }
        .category-card {
          padding: 60px 40px;
          background: white;
          transition: var(--transition);
          text-align: center;
          border: 1px solid #F0EAE5;
        }
        .category-card:hover {
          transform: translateY(-10px);
          box-shadow: var(--shadow-medium);
          border-color: var(--secondary);
        }
        .cat-icon-placeholder {
            width: 40px;
            height: 40px;
            margin: 0 auto 30px;
            border-radius: 50%;
            opacity: 0.1;
        }
        .category-card h3 {
          margin-bottom: 15px;
          font-family: var(--font-serif);
          font-size: 1.5rem;
          color: var(--primary);
        }
        .category-card p {
          font-size: 0.85rem;
          color: var(--text-light);
          margin-bottom: 25px;
          font-weight: 300;
        }
        .anchor-luxury {
            text-decoration: none;
            color: var(--secondary);
            font-size: 0.75rem;
            text-transform: uppercase;
            letter-spacing: 2px;
            font-weight: 600;
        }
        
        .products-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 40px;
        }

        .newsletter-luxury {
            padding: 120px 0;
            background: var(--bg-dark);
        }
        .newsletter-wrapper {
            background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1520038410233-7141be7e6f97?q=80&w=2070&auto=format&fit=crop');
            background-size: cover;
            background-position: center;
            padding: 100px 60px;
            text-align: center;
            color: white;
            border-radius: 4px;
        }
        .newsletter-content h2 {
            font-size: 3.5rem;
            margin-bottom: 20px;
        }
        .newsletter-content p {
            max-width: 500px;
            margin: 0 auto 40px;
            opacity: 0.7;
            font-weight: 300;
        }
        .luxury-form {
            display: flex;
            max-width: 500px;
            margin: 0 auto;
            border-bottom: 1px solid rgba(255,255,255,0.3);
        }
        .luxury-form input {
            flex: 1;
            background: transparent;
            border: none;
            padding: 15px 0;
            color: white;
            outline: none;
            font-size: 1rem;
        }
        .luxury-form button {
            background: transparent;
            border: none;
            color: var(--secondary);
            text-transform: uppercase;
            letter-spacing: 2px;
            font-weight: 700;
            cursor: pointer;
            padding: 0 20px;
        }

        @media (max-width: 1024px) {
            .philosophy-grid { grid-template-columns: 1fr; gap: 40px; }
            .category-grid, .products-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 576px) {
            .category-grid, .products-grid { grid-template-columns: 1fr; }
            .newsletter-content h2 { font-size: 2.5rem; }
        }
      `}</style>
    </div>
  )
}

export default Home;
