import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import ProductCard from '../components/ProductCard'

const collections = [
  { name: 'New Arrivals', desc: 'Fresh gemstone arrivals and trending spiritual tools.', path: '/shop?search=new' },
  { name: '7 Chakra', desc: 'Balanced chakra sets for alignment and emotional clarity.', path: '/shop?search=chakra' },
  { name: 'Bracelets', desc: 'Crystal bracelets for confidence, abundance and protection.', path: '/crystal-jewelry?search=bracelet' },
  { name: 'Malas', desc: 'Meditation malas for mantra practice and focused intention.', path: '/crystal-jewelry?search=mala' },
  { name: 'Pendants', desc: 'Wearable crystal pendants to keep healing energy close.', path: '/crystal-jewelry?search=pendant' },
  { name: 'Rudraksha', desc: 'Sacred rudraksha combinations for grounding and strength.', path: '/shop?search=rudraksha' },
  { name: 'Angels', desc: 'Carved angel crystals for guidance and emotional support.', path: '/shop?search=angel' },
  { name: 'Tumbles', desc: 'Pocket-friendly tumble stones for everyday energy work.', path: '/healing-stones?search=tumble' },
  { name: 'Pencils & Obelisks', desc: 'Crystal points for manifestation, grids and healing.', path: '/healing-stones?search=obelisk' },
  { name: 'Pyramids', desc: 'Sacred geometry crystal pyramids for space harmonizing.', path: '/healing-stones?search=pyramid' },
]

const uspItems = [
  { title: 'Free Shipping', text: 'On qualifying orders' },
  { title: 'Secure Payments', text: 'Safe checkout guaranteed' },
  { title: 'Speedy Delivery', text: 'Fast dispatch & tracking' },
  { title: 'Cash On Delivery', text: 'Available on selected orders' },
  { title: 'Expert Support', text: 'Crystal guidance available' },
]

const testimonials = [
  { name: 'Priya S.', text: 'Original crystals, beautiful quality and very helpful guidance.' },
  { name: 'Swaroop P.', text: 'Great variety of stones at reasonable prices. Highly recommended.' },
  { name: 'Umaid S.', text: 'Authentic products, great pricing and patient staff support.' },
]

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchFeatured = async () => {
      try {
        const response = await fetch('/api/products')
        const data = await response.json()
        setFeaturedProducts(data.slice(0, 8))
      } catch (error) {
        console.error('Error fetching featured products:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchFeatured()
  }, [])

  return (
    <div className="home-page">
      <Hero />

      <section className="usp-strip">
        <div className="container usp-grid">
          {uspItems.map((item) => (
            <div key={item.title} className="usp-card">
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding collections-section">
        <div className="container">
          <div className="text-center mb-60">
            <span className="hero-eyebrow">Shop By Collection</span>
            <h2 className="section-title">Popular Crystal Categories</h2>
          </div>
          <div className="collections-grid">
            {collections.map((item) => (
              <Link key={item.name} to={item.path} className="collection-card">
                <h3>{item.name}</h3>
                <p>{item.desc}</p>
                <span>Explore</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding featured-products">
        <div className="container">
          <div className="text-center mb-60">
            <span className="hero-eyebrow">Featured Products</span>
            <h2 className="section-title">Best Sellers</h2>
          </div>
          <div className="products-grid">
            {loading ? (
              <div className="loading-state">Loading products...</div>
            ) : featuredProducts.length > 0 ? (
              featuredProducts.map((product) => <ProductCard key={product.id} product={product} />)
            ) : (
              <div className="no-products">No featured products available.</div>
            )}
          </div>
          <div className="text-center mt-60">
            <Link to="/shop" className="btn-luxury">View All Products</Link>
          </div>
        </div>
      </section>

      <section className="section-padding service-focus">
        <div className="container">
          <div className="text-center mb-60">
            <span className="hero-eyebrow">Our Services</span>
            <h2 className="section-title">Reiki Healing & Consultation</h2>
          </div>
          <div className="service-grid">
            <div className="service-card">
              <h3>Reiki Healing</h3>
              <p>Energy balancing sessions for emotional, physical and spiritual well-being.</p>
            </div>
            <div className="service-card">
              <h3>Reiki Emergency Healing</h3>
              <p>Focused sessions designed for urgent emotional stress and energy imbalance.</p>
            </div>
            <div className="service-card">
              <h3>Reiki Personalized Healing</h3>
              <p>Custom healing protocols aligned to your life goals and current challenges.</p>
            </div>
            <div className="service-card">
              <h3>Crystal Vastu Consultation</h3>
              <p>Space harmonization with crystal placements for home and business environments.</p>
            </div>
          </div>
          <div className="text-center mt-60">
            <Link to="/services" className="btn-luxury">Book A Service</Link>
          </div>
        </div>
      </section>

      <section className="section-padding testimonials">
        <div className="container">
          <div className="text-center mb-60">
            <span className="hero-eyebrow">Client Feedback</span>
            <h2 className="section-title">What Customers Say</h2>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((item) => (
              <article key={item.name} className="testimonial-card">
                <div className="stars">★★★★★</div>
                <p>"{item.text}"</p>
                <strong>{item.name}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-cta">
        <div className="container">
          <div className="cta-box">
            <h2>Start Your Crystal Journey Today</h2>
            <p>Shop natural gemstones, Reiki tools and intention-based collections for every life goal.</p>
            <Link to="/shop" className="btn-luxury">Shop Now</Link>
          </div>
        </div>
      </section>

      <style jsx="true">{`
        .text-center { text-align: center; }
        .mb-60 { margin-bottom: 60px; }
        .mt-60 { margin-top: 60px; }

        .usp-strip {
          background: #fff;
          border-top: 1px solid #efe7de;
          border-bottom: 1px solid #efe7de;
          padding: 28px 0;
        }
        .usp-grid {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 14px;
        }
        .usp-card {
          text-align: center;
          padding: 12px 10px;
        }
        .usp-card h4 {
          font-size: 0.9rem;
          margin-bottom: 4px;
          color: var(--primary);
        }
        .usp-card p {
          color: var(--text-light);
          font-size: 0.76rem;
          letter-spacing: 0.4px;
        }

        .collections-section {
          background: var(--bg-creme);
        }
        .collections-grid {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 16px;
        }
        .collection-card {
          background: #fff;
          border: 1px solid #efe7de;
          padding: 24px 20px;
          border-radius: 6px;
          transition: var(--transition);
          min-height: 180px;
        }
        .collection-card:hover {
          border-color: var(--secondary);
          transform: translateY(-6px);
          box-shadow: var(--shadow-soft);
        }
        .collection-card h3 {
          font-size: 1.2rem;
          margin-bottom: 8px;
          color: var(--primary);
        }
        .collection-card p {
          color: var(--text-light);
          font-size: 0.85rem;
          line-height: 1.6;
          min-height: 80px;
        }
        .collection-card span {
          text-transform: uppercase;
          letter-spacing: 1.6px;
          font-size: 0.7rem;
          color: var(--secondary);
          font-weight: 600;
        }

        .featured-products {
          background: #fff;
        }
        .products-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 30px;
        }
        .loading-state,
        .no-products {
          grid-column: 1 / -1;
          text-align: center;
          color: var(--text-light);
          padding: 24px 0;
        }

        .service-focus {
          background: var(--bg-creme);
        }
        .service-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 18px;
        }
        .service-card {
          background: #fff;
          border: 1px solid #efe7de;
          border-top: 3px solid var(--secondary);
          border-radius: 4px;
          padding: 24px 20px;
        }
        .service-card h3 {
          font-size: 1.05rem;
          margin-bottom: 8px;
          color: var(--primary);
        }
        .service-card p {
          font-size: 0.86rem;
          color: var(--text-light);
        }

        .testimonials {
          background: #fff;
        }
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 24px;
        }
        .testimonial-card {
          border: 1px solid #efe7de;
          background: #fff;
          padding: 28px;
          border-radius: 6px;
        }
        .testimonial-card .stars {
          color: #d4af37;
          letter-spacing: 1.5px;
          margin-bottom: 10px;
          font-size: 0.9rem;
        }
        .testimonial-card p {
          color: var(--text-light);
          font-size: 0.92rem;
          margin-bottom: 14px;
        }
        .testimonial-card strong {
          color: var(--primary);
          font-size: 0.88rem;
        }

        .home-cta {
          padding: 90px 0;
          background: #111;
        }
        .cta-box {
          text-align: center;
          color: #fff;
          max-width: 760px;
          margin: 0 auto;
        }
        .cta-box h2 {
          font-size: 3rem;
          margin-bottom: 12px;
        }
        .cta-box p {
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 32px;
        }

        @media (max-width: 1200px) {
          .collections-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
          .usp-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
          .service-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
        @media (max-width: 900px) {
          .products-grid,
          .testimonials-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
        @media (max-width: 640px) {
          .collections-grid,
          .usp-grid,
          .products-grid,
          .service-grid,
          .testimonials-grid {
            grid-template-columns: 1fr;
          }
          .cta-box h2 {
            font-size: 2.1rem;
          }
        }
      `}</style>
    </div>
  )
}

export default Home
