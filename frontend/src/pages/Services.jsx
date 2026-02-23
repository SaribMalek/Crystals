import React from 'react'

const services = [
  {
    title: 'Reiki Healing',
    duration: '45-60 min',
    desc: 'Core healing session focused on chakra balancing, emotional release and energetic alignment.',
  },
  {
    title: 'Reiki Emergency Healing',
    duration: '30 min',
    desc: 'Immediate support session for stress, anxiety and urgent energetic disturbances.',
  },
  {
    title: 'Reiki Personalized Healing',
    duration: '60 min',
    desc: 'Customized Reiki session designed around your personal goals and current life blocks.',
  },
  {
    title: 'Crystal Healing',
    duration: '60 min',
    desc: 'Crystal-assisted healing using selected stones to support grounding, clarity and vitality.',
  },
  {
    title: 'Crystal Vastu Consultation',
    duration: 'On-site / Virtual',
    desc: 'Guided crystal placement for home or office to improve harmony, focus and prosperity flow.',
  },
  {
    title: 'Aura Cleansing',
    duration: '40 min',
    desc: 'Smoke, sound and intention-based aura cleanse to remove heavy energy and restore balance.',
  },
]

const Services = () => {
  return (
    <div className="category-page">
      <header className="shop-hero services-hero">
        <div className="container">
          <span className="hero-eyebrow">Our Services</span>
          <h1 className="hero-title">Reiki & Crystal Healing Sessions</h1>
          <p className="hero-desc">
            Professional healing and consultation services inspired by traditional Reiki and gemstone therapy.
          </p>
        </div>
      </header>

      <section className="section-padding">
        <div className="container">
          <div className="services-grid">
            {services.map((service) => (
              <article key={service.title} className="service-card">
                <span className="time-pill">{service.duration}</span>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <button className="btn-luxury-sm">Book Now</button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <style jsx="true">{`
        .shop-hero {
          padding: 150px 0 100px;
          text-align: center;
          border-bottom: 1px solid #f0eae5;
        }
        .services-hero {
          background: linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)),
            url('https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2070&auto=format&fit=crop');
          background-size: cover;
          background-position: center;
        }
        .services-hero .hero-title,
        .services-hero .hero-desc {
          color: #fff;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 24px;
        }
        .service-card {
          background: #fff;
          border: 1px solid #efe7de;
          border-top: 3px solid var(--secondary);
          border-radius: 6px;
          padding: 28px;
          transition: var(--transition);
        }
        .service-card:hover {
          transform: translateY(-6px);
          box-shadow: var(--shadow-soft);
        }
        .time-pill {
          display: inline-block;
          font-size: 0.66rem;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: #fff;
          background: var(--primary);
          border-radius: 20px;
          padding: 5px 10px;
          margin-bottom: 14px;
        }
        .service-card h3 {
          font-size: 1.35rem;
          margin-bottom: 10px;
          color: var(--primary);
        }
        .service-card p {
          font-size: 0.9rem;
          color: var(--text-light);
          margin-bottom: 24px;
          line-height: 1.7;
        }
        .btn-luxury-sm {
          background: transparent;
          border: 1px solid var(--secondary);
          color: var(--secondary);
          padding: 10px 18px;
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 1.6px;
          font-weight: 600;
          cursor: pointer;
        }
        .btn-luxury-sm:hover {
          background: var(--secondary);
          color: #fff;
        }
        @media (max-width: 1000px) {
          .services-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
        @media (max-width: 640px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  )
}

export default Services
