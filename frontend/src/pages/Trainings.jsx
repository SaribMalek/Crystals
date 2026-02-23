import React from 'react'

const programs = [
  { title: 'Reiki Level 1', desc: 'Foundations of self-healing, hand positions and energetic awareness.', level: 'Beginner' },
  { title: 'Reiki Level 2', desc: 'Distance healing, advanced symbols and deeper emotional healing techniques.', level: 'Intermediate' },
  { title: 'Reiki Master Healer', desc: 'Master-level energetic work for committed healing practitioners.', level: 'Advanced' },
  { title: 'Reiki Master Teacher', desc: 'Teaching methodology and attunement process for future Reiki teachers.', level: 'Advanced' },
  { title: 'Reiki Grand Master', desc: 'Highest-level initiation for long-term dedicated Reiki path practitioners.', level: 'Mastery' },
  { title: 'Crystal Healing Workshop', desc: 'Practical crystal cleansing, charging and application for life goals.', level: 'Workshop' },
]

const Trainings = () => {
  return (
    <div className="category-page">
      <header className="shop-hero trainings-hero">
        <div className="container">
          <span className="hero-eyebrow">Training & Consultancy</span>
          <h1 className="hero-title">Reiki & Crystal Learning Programs</h1>
          <p className="hero-desc">Structured programs for beginners, practitioners and advanced healers.</p>
        </div>
      </header>

      <section className="section-padding">
        <div className="container">
          <div className="program-grid">
            {programs.map((program) => (
              <article key={program.title} className="program-card">
                <span>{program.level}</span>
                <h3>{program.title}</h3>
                <p>{program.desc}</p>
                <button className="btn-luxury-sm">Enroll Now</button>
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
        .trainings-hero {
          background: linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)),
            url('https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=2000&auto=format&fit=crop');
          background-size: cover;
          background-position: center;
        }
        .trainings-hero .hero-title,
        .trainings-hero .hero-desc {
          color: #fff;
        }

        .program-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 24px;
        }
        .program-card {
          background: #fff;
          border: 1px solid #efe7de;
          padding: 28px;
          border-radius: 6px;
          transition: var(--transition);
        }
        .program-card:hover {
          transform: translateY(-6px);
          border-color: var(--secondary);
          box-shadow: var(--shadow-soft);
        }
        .program-card span {
          font-size: 0.66rem;
          letter-spacing: 1.4px;
          text-transform: uppercase;
          color: var(--secondary);
          font-weight: 600;
        }
        .program-card h3 {
          margin: 10px 0 8px;
          font-size: 1.3rem;
          color: var(--primary);
        }
        .program-card p {
          color: var(--text-light);
          font-size: 0.9rem;
          line-height: 1.7;
          margin-bottom: 24px;
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
          .program-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
        @media (max-width: 640px) {
          .program-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  )
}

export default Trainings
