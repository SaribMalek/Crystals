import React from 'react';

const Services = () => {
    return (
        <div className="category-page">
            <div className="hero-section services-hero">
                <div className="container">
                    <h1>Our Sacred Services</h1>
                    <p>Personalized healing sessions designed to realign your spirit and revitalize your life force.</p>
                </div>
            </div>

            <div className="container section-padding">
                <div className="services-intro text-center">
                    <h2>Holistic Healing & Consultation</h2>
                    <p>Our practitioners combine ancient wisdom with modern understanding to provide a truly transformative experience.</p>
                </div>

                <div className="services-list">
                    <div className="service-item">
                        <div className="service-icon">✨</div>
                        <div className="service-info">
                            <h3>Full Reiki Session</h3>
                            <p>A comprehensive 60-minute energy healing session focused on chakra balancing and stress release.</p>
                            <button className="btn btn-primary">Book Now</button>
                        </div>
                    </div>
                    <div className="service-item">
                        <div className="service-icon">💎</div>
                        <div className="service-info">
                            <h3>Crystal Consultation</h3>
                            <p>Find your personal power stones with a 30-minute private consultation with our head lithotherapist.</p>
                            <button className="btn btn-primary">Book Now</button>
                        </div>
                    </div>
                    <div className="service-item">
                        <div className="service-icon">🏠</div>
                        <div className="service-info">
                            <h3>Space Gridding & Cleansing</h3>
                            <p>Bring harmony to your home or office with a professional crystal grid installation and energy clearing.</p>
                            <button className="btn btn-primary">Enquire</button>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx="true">{`
                .services-hero {
                    background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1519824145371-296894a0daa9?q=80&w=2000&auto=format&fit=crop');
                    background-size: cover;
                    background-position: center;
                    padding: 120px 0;
                    color: white;
                    text-align: center;
                }
                .services-hero h1 { font-size: 3.5rem; margin-bottom: 20px; }
                .services-intro { max-width: 700px; margin: 0 auto 60px; }
                .services-list {
                    display: flex;
                    flex-direction: column;
                    gap: 30px;
                    max-width: 900px;
                    margin: 0 auto;
                }
                .service-item {
                    display: flex;
                    gap: 30px;
                    background: #fdf7f9;
                    padding: 40px;
                    border-radius: 20px;
                    align-items: center;
                }
                .service-icon { font-size: 3rem; }
                .service-info h3 { margin-bottom: 10px; font-size: 1.8rem; color: #E91E63; }
                .service-info p { margin-bottom: 20px; color: #555; }
                
                @media (max-width: 768px) {
                    .service-item { flex-direction: column; text-align: center; }
                }
            `}</style>
        </div>
    );
};

export default Services;
