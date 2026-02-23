import React from 'react'

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <span className="hero-eyebrow">About Us</span>
          <h1 className="hero-title">AS Crystal</h1>
          <p className="hero-desc">
            Healing crystals and natural gemstones for Reiki healing, crystal therapy and everyday wellness.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container about-grid">
          <div className="about-copy">
            <h2 className="section-title-serif">Our Story</h2>
            <p>
              AS Crystal was created to make authentic crystal tools more accessible to spiritual seekers and
              wellness-focused families. We curate products that blend practical use with energetic intention.
            </p>
            <p>
              From bracelets and malas to tumble stones and healing sets, each item is selected to support
              focused goals like protection, clarity, grounding, confidence and prosperity.
            </p>
            <p>
              Along with products, we offer Reiki healing sessions, crystal consultation and training programs
              for people who want guided support in their energy journey.
            </p>
          </div>
          <div className="about-points">
            <article>
              <h3>Authentic Selection</h3>
              <p>Carefully sourced crystal products selected for quality, finish and energetic use.</p>
            </article>
            <article>
              <h3>Consultation Support</h3>
              <p>Get practical guidance on what to choose for relationship, career, health and peace.</p>
            </article>
            <article>
              <h3>Training Path</h3>
              <p>Beginner to advanced Reiki learning options with crystal integration workshops.</p>
            </article>
            <article>
              <h3>Customer-First Service</h3>
              <p>Responsive support before and after purchase to help you use products effectively.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="about-stats">
        <div className="container stats-grid">
          <div><strong>100+</strong><span>Product Options</span></div>
          <div><strong>5+</strong><span>Healing Services</span></div>
          <div><strong>6</strong><span>Training Programs</span></div>
          <div><strong>Daily</strong><span>Support Available</span></div>
        </div>
      </section>

      <style jsx="true">{`
        .about-hero {
          padding: 150px 0 100px;
          text-align: center;
          background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
            url('https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?q=80&w=1974&auto=format&fit=crop');
          background-size: cover;
          background-position: center;
        }
        .about-hero .hero-title,
        .about-hero .hero-desc {
          color: #fff;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 44px;
        }
        .about-copy p {
          color: var(--text-light);
          margin-bottom: 14px;
          line-height: 1.8;
        }

        .about-points {
          display: grid;
          gap: 14px;
        }
        .about-points article {
          background: #fff;
          border: 1px solid #efe7de;
          border-left: 3px solid var(--secondary);
          border-radius: 4px;
          padding: 16px;
        }
        .about-points h3 {
          color: var(--primary);
          font-size: 1.1rem;
          margin-bottom: 4px;
        }
        .about-points p {
          color: var(--text-light);
          font-size: 0.88rem;
        }

        .about-stats {
          padding: 0 0 90px;
        }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 16px;
        }
        .stats-grid div {
          background: #fff;
          border: 1px solid #efe7de;
          border-radius: 6px;
          padding: 24px;
          text-align: center;
        }
        .stats-grid strong {
          display: block;
          font-family: var(--font-serif);
          font-size: 2rem;
          color: var(--primary);
          margin-bottom: 6px;
        }
        .stats-grid span {
          text-transform: uppercase;
          letter-spacing: 1.4px;
          font-size: 0.66rem;
          color: var(--text-light);
        }

        @media (max-width: 900px) {
          .about-grid,
          .stats-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  )
}

export default About
