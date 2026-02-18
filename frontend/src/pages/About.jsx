import React from 'react';
import { Heart, Shield, Zap, Sparkles } from 'lucide-react';

const About = () => {
    return (
        <div className="about-page">
            <section className="about-hero-boutique">
                <div className="container">
                    <span className="hero-eyebrow white">The Heritage</span>
                    <h1 className="hero-title white">A Legacy of Light</h1>
                </div>
            </section>

            <section className="section-padding">
                <div className="container">
                    <div className="boutique-story-layout">
                        <div className="story-image-panel">
                            <div className="story-img-main">
                                <img src="https://images.unsplash.com/photo-1551972873-b7e8754e8e26?q=80&w=1927&auto=format&fit=crop" alt="Crystals Heritage" />
                            </div>
                            <div className="story-img-secondary">
                                <img src="https://images.unsplash.com/photo-1599707334391-5822126cc2af?q=80&w=1932&auto=format&fit=crop" alt="Crystal Energy" />
                            </div>
                        </div>
                        <div className="story-content-panel">
                            <h2 className="section-title-serif">The Manifestation of AS Crystals</h2>
                            <p className="boutique-p">Founded with a whisper of intention and a deep reverence for the earth's silent wisdom, AS Crystals is more than a boutique. It is a sanctuary for those who seek to harmonize their inner space with the ancient vibrations of the natural world.</p>
                            <p className="boutique-p">Every piece in our collection is hand-selected, not merely for its crystalline brilliance, but for the unique energy it carries—a story written in stone over millennia.</p>

                            <div className="philosophy-grid">
                                <div className="philosophy-item">
                                    <div className="phi-icon"><Shield size={20} strokeWidth={1} /></div>
                                    <div className="phi-text">
                                        <h3>Ethical Stewardship</h3>
                                        <p>We honor the earth by partnering exclusively with artisans who respect the sacred process of mineral extraction.</p>
                                    </div>
                                </div>
                                <div className="philosophy-item">
                                    <div className="phi-icon"><Sparkles size={20} strokeWidth={1} /></div>
                                    <div className="phi-text">
                                        <h3>Vibrational Purity</h3>
                                        <p>Before any crystal leaves our hands, it is cleansed with sacred smoke and sound frequencies to ensure it reaches you in its purest state.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="vision-statement section-padding">
                <div className="container text-center">
                    <span className="hero-eyebrow">Our Vision</span>
                    <h2 className="section-title-serif">Elevating the Human Experience</h2>
                    <blockquote className="boutique-quote">
                        "To empower the seeker. To clarify the path. To provide the tools for an enlightened existence."
                    </blockquote>

                    <div className="boutique-milestones">
                        <div className="milestone-item">
                            <span className="m-val">90+</span>
                            <span className="m-lbl">Sacred Varieties</span>
                        </div>
                        <div className="milestone-item">
                            <span className="m-val">12k</span>
                            <span className="m-lbl">Soulful Seekers</span>
                        </div>
                        <div className="milestone-item">
                            <span className="m-val">08</span>
                            <span className="m-lbl">Years of Light</span>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx="true">{`
                .about-hero-boutique { height: 60vh; background: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?q=80&w=1974&auto=format&fit=crop'); background-size: cover; background-position: center; display: flex; align-items: center; justify-content: center; text-align: center; }
                .hero-eyebrow.white { color: rgba(255,255,255,0.8); }
                .hero-title.white { color: white; }

                .boutique-story-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 100px; align-items: center; }
                .story-image-panel { position: relative; height: 700px; }
                .story-img-main { position: absolute; width: 80%; height: 80%; top: 0; left: 0; overflow: hidden; }
                .story-img-secondary { position: absolute; width: 50%; height: 50%; bottom: 0; right: 0; border: 15px solid white; overflow: hidden; z-index: 2; }
                .story-image-panel img { width: 100%; height: 100%; object-fit: cover; transition: var(--transition); }
                .story-image-panel:hover img { transform: scale(1.05); }

                .story-content-panel { padding-right: 50px; }
                .section-title-serif { font-family: var(--font-serif); font-size: 3rem; color: var(--primary); margin-bottom: 40px; }
                .boutique-p { font-size: 1.1rem; line-height: 1.8; color: var(--text-light); margin-bottom: 30px; font-weight: 300; }

                .philosophy-grid { margin-top: 60px; display: grid; gap: 40px; }
                .philosophy-item { display: flex; gap: 25px; }
                .phi-icon { width: 45px; height: 45px; border: 1px solid var(--secondary); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: var(--secondary); flex-shrink: 0; }
                .phi-text h3 { font-family: var(--font-serif); font-size: 1.4rem; color: var(--primary); margin-bottom: 10px; }
                .phi-text p { font-size: 0.9rem; color: var(--text-light); line-height: 1.6; }

                .vision-statement { background: var(--bg-creme); border-top: 1px solid #F0EAE5; }
                .boutique-quote { font-family: var(--font-serif); font-size: 2.2rem; color: var(--primary); max-width: 800px; margin: 40px auto 80px; font-style: italic; line-height: 1.4; }
                
                .boutique-milestones { display: flex; justify-content: center; gap: 100px; }
                .milestone-item { display: flex; flex-direction: column; align-items: center; }
                .m-val { font-family: var(--font-serif); font-size: 3.5rem; color: var(--secondary); }
                .m-lbl { font-size: 0.7rem; text-transform: uppercase; letter-spacing: 2px; color: var(--text-light); margin-top: 10px; }

                @media (max-width: 1024px) {
                    .boutique-story-layout { grid-template-columns: 1fr; gap: 60px; }
                    .story-content-panel { padding-right: 0; }
                    .story-image-panel { height: 500px; }
                    .boutique-milestones { flex-wrap: wrap; gap: 50px; }
                }
            `}</style>
        </div>
    );
};

export default About;
