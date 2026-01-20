import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  const scrollToShop = () => {
    const section = document.querySelector('.featured-products');
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero">
      <div className="container hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="subtitle">Awaken Your Inner Energy</span>
          <h1>Beautiful Crystals <br /> For a Balanced Soul</h1>
          <p>Discover our ethically sourced, hand-picked collection of premium healing crystals and artisan jewelry designed to align your vibration.</p>
          <div className="hero-btns">
            <button className="btn btn-primary" onClick={scrollToShop}>Shop Collection</button>
            <button className="btn btn-outline">Learn About Crystals</button>
          </div>
        </motion.div>

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="image-wrapper">
            <div className="accent-circle"></div>
            {/* Note: In a real app, use the generated logo or a high-quality product shot here */}
            <div className="placeholder-image">
              <img
                src="https://images.unsplash.com/photo-1520330443056-4bae0244b705?auto=format&fit=crop&q=80"
                alt="Aesthetic Crystal Display"
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }}
              />
              <div className="inner-glow"></div>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx="true">{`
        .hero {
          height: 85vh;
          display: flex;
          align-items: center;
          background: linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%);
          overflow: hidden;
        }
        .hero-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 50px;
        }
        .subtitle {
          color: var(--secondary);
          text-transform: uppercase;
          letter-spacing: 2px;
          font-weight: 600;
          font-size: 0.9rem;
          display: block;
          margin-bottom: 15px;
        }
        .hero-content h1 {
          font-size: 4rem;
          line-height: 1.1;
          margin-bottom: 25px;
          color: var(--primary);
        }
        .hero-content p {
          font-size: 1.1rem;
          color: var(--text-light);
          margin-bottom: 35px;
          max-width: 500px;
        }
        .hero-btns {
          display: flex;
          gap: 15px;
        }
        .hero-image {
          position: relative;
          display: flex;
          justify-content: center;
        }
        .image-wrapper {
          position: relative;
          width: 450px;
          height: 450px;
        }
        .accent-circle {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 120%;
          height: 120%;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(75,0,130,0.05) 0%, rgba(255,255,255,0) 70%);
          z-index: 0;
        }
        .placeholder-image {
           width: 100%;
           height: 100%;
           border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
           background: linear-gradient(45deg, var(--primary), var(--secondary));
           opacity: 0.8;
           box-shadow: 20px 20px 60px rgba(0,0,0,0.1);
           position: relative;
           z-index: 1;
           animation: morph 8s ease-in-out infinite;
        }
        .inner-glow {
            position: absolute;
            top: 15%;
            left: 15%;
            width: 70%;
            height: 70%;
            background: rgba(255,255,255,0.2);
            filter: blur(40px);
            border-radius: 50%;
        }

        @keyframes morph {
          0% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
          50% { border-radius: 50% 50% 33% 67% / 55% 27% 73% 45%; }
          100% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
        }

        @media (max-width: 992px) {
          .hero { height: auto; padding: 100px 0 60px; }
          .hero-container { grid-template-columns: 1fr; text-align: center; }
          .hero-content h1 { font-size: 3rem; }
          .hero-content p { margin: 0 auto 35px; }
          .hero-btns { justify-content: center; }
          .image-wrapper { width: 300px; height: 300px; margin: 40px auto 0; }
        }
      `}</style>
    </section>
  )
}

export default Hero
