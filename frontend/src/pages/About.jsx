import React from 'react';
import { Heart, Shield, Zap, Sparkles } from 'lucide-react';

const About = () => {
    return (
        <div className="about-page">
            <section className="about-hero">
                <div className="container">
                    <h1>Our Story</h1>
                    <p>Connecting you with the ancient energy of the earth through ethically sourced, hand-selected crystals.</p>
                </div>
            </section>

            <section className="section-padding">
                <div className="container">
                    <div className="about-grid">
                        <div className="about-image" style={{ background: 'var(--primary-light)', borderRadius: '30px', aspectRatio: '1' }}>
                            <div className="glow"></div>
                        </div>
                        <div className="about-text">
                            <h2 className="section-title">The AS Crystals Journey</h2>
                            <p>Founded with a passion for holistic healing and the natural beauty of gemstones, AS Crystals began as a small collection and grew into a community of crystal lovers worldwide.</p>
                            <p>We believe that crystals are more than just beautiful objects; they are tools for mindfulness, transformation, and connecting with our inner selves. Each piece in our collection is hand-selected not just for its physical beauty, but for its unique energetic vibration.</p>

                            <div className="values-list">
                                <div className="value-item">
                                    <Shield size={24} color="var(--primary)" />
                                    <div>
                                        <h3>Ethically Sourced</h3>
                                        <p>We work closely with mining partners who prioritize sustainability and fairness.</p>
                                    </div>
                                </div>
                                <div className="value-item">
                                    <Zap size={24} color="var(--primary)" />
                                    <div>
                                        <h3>Energy Cleansed</h3>
                                        <p>Crystals are cleansed with sage and sound before they reach their new home.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mission-section section-padding">
                <div className="container text-center">
                    <h2 className="section-title">Our Mission</h2>
                    <p className="mission-text">To empower individuals on their spiritual journey by providing high-quality, authentic crystals and educational resources to help them harness the earth's natural healing energy.</p>

                    <div className="stats-grid">
                        <div className="stat-card">
                            <h3>500+</h3>
                            <p>Unique Varieties</p>
                        </div>
                        <div className="stat-card">
                            <h3>10k+</h3>
                            <p>Happy Customers</p>
                        </div>
                        <div className="stat-card">
                            <h3>15+</h3>
                            <p>Global Partners</p>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx="true">{`
                .about-hero {
                    background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1551972873-b7e8754e8e26?q=80&w=1927&auto=format&fit=crop');
                    background-size: cover;
                    background-position: center;
                    height: 400px;
                    display: flex;
                    align-items: center;
                    text-align: center;
                    color: white;
                }
                .about-hero h1 { font-size: 4rem; margin-bottom: 20px; }
                .about-hero p { font-size: 1.2rem; max-width: 700px; margin: 0 auto; opacity: 0.9; }
                
                .about-grid { display: grid; grid-template-columns: 1fr 1.2fr; gap: 80px; align-items: center; }
                .about-image { position: relative; overflow: hidden; height: 500px; }
                .about-image .glow { position: absolute; width: 80%; height: 80%; background: white; filter: blur(50px); top: 10%; left: 10%; opacity: 0.3; }
                
                .about-text p { margin-bottom: 20px; line-height: 1.8; color: var(--text-light); }
                .values-list { margin-top: 40px; display: flex; flex-direction: column; gap: 25px; }
                .value-item { display: flex; gap: 20px; align-items: flex-start; }
                .value-item h3 { font-size: 1.1rem; margin-bottom: 5px; color: var(--primary); }
                .value-item p { font-size: 0.9rem; margin-bottom: 0; }
                
                .mission-section { background: var(--primary-light); }
                .mission-text { max-width: 800px; margin: 0 auto 60px; font-size: 1.3rem; line-height: 1.6; color: var(--primary); font-style: italic; }
                
                .stats-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; }
                .stat-card { background: white; padding: 40px; border-radius: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.05); }
                .stat-card h3 { font-size: 3rem; color: var(--primary); margin-bottom: 10px; }
                .stat-card p { font-weight: 700; color: var(--text-light); text-transform: uppercase; letter-spacing: 1px; }

                @media (max-width: 992px) {
                    .about-grid { grid-template-columns: 1fr; }
                    .about-hero h1 { font-size: 3rem; }
                }
                @media (max-width: 768px) {
                    .stats-grid { grid-template-columns: 1fr; }
                }
            `}</style>
        </div>
    );
};

export default About;
