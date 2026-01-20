import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

const Home = () => {
  const featuredProducts = products.slice(0, 4);

  const categories = [
    { name: 'Protection', desc: 'Shield your energy from negativity', color: '#4B0082' },
    { name: 'Abundance', desc: 'Attract prosperity and luck', color: '#D4AF37' },
    { name: 'Love', desc: 'Open your heart to compassion', color: '#FFB6C1' },
    { name: 'Healing', desc: 'Restore balance to mind and body', color: '#98FB98' },
  ]

  return (
    <div className="home-page">
      <Hero />

      {/* Shop by Intention */}
      <section className="section-padding">
        <div className="container text-center">
          <h2 className="section-title">Shop by Intention</h2>
          <div className="category-grid">
            {categories.map((cat, idx) => (
              <div key={idx} className="category-card" style={{ '--accent': cat.color }}>
                <h3>{cat.name}</h3>
                <p>{cat.desc}</p>
                <Link to="/shop" className="btn-text">Explore →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-padding featured-products">
        <div className="container text-center">
          <h2 className="section-title">Bestsellers</h2>
          <div className="products-grid">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div style={{ marginTop: '50px' }}>
            <Link to="/shop" className="btn btn-outline">View All Products</Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-content">
            <h2>Join Our Crystal Circle</h2>
            <p>Subscribe for weekly energy forecasts, exclusive offers, and early access to new collections.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Your email address" required />
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>
          </div>
        </div>
      </section>

      <style jsx="true">{`
        .category-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 25px;
        }
        .category-card {
          padding: 40px 30px;
          background: var(--white);
          border-radius: 20px;
          transition: var(--transition);
          border: 1px solid rgba(0,0,0,0.03);
          position: relative;
          overflow: hidden;
        }
        .category-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 5px;
          height: 0;
          background: var(--accent);
          transition: var(--transition);
        }
        .category-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
        }
        .category-card:hover::before {
          height: 100%;
        }
        .category-card h3 {
          margin-bottom: 15px;
          color: var(--primary);
        }
        .category-card p {
          font-size: 0.9rem;
          color: var(--text-light);
          margin-bottom: 20px;
        }
        .btn-text {
          background: none;
          border: none;
          color: var(--accent);
          font-weight: 700;
          cursor: pointer;
          font-size: 0.9rem;
        }
        
        .products-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
          text-align: left;
        }

        .newsletter-section {
          background: linear-gradient(rgba(75, 0, 130, 0.9), rgba(75, 0, 130, 0.9)), url('https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2070&auto=format&fit=crop');
          background-size: cover;
          background-attachment: fixed;
          padding: 100px 0;
          color: white;
          text-align: center;
        }
        .newsletter-content h2 {
          font-size: 2.5rem;
          margin-bottom: 20px;
        }
        .newsletter-content p {
          margin-bottom: 40px;
          opacity: 0.8;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }
        .newsletter-form {
          display: flex;
          justify-content: center;
          gap: 10px;
          max-width: 500px;
          margin: 0 auto;
        }
        .newsletter-form input {
          flex: 1;
          padding: 15px 25px;
          border-radius: 50px;
          border: none;
          outline: none;
        }

        @media (max-width: 992px) {
          .category-grid, .products-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 576px) {
          .category-grid, .products-grid { grid-template-columns: 1fr; }
          .newsletter-form { flex-direction: column; }
        }
      `}</style>
    </div>
  )
}

export default Home
