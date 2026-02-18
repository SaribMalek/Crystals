import React from 'react';

const Trainings = () => {
    return (
        <div className="category-page">
            <div className="hero-section trainings-hero">
                <div className="container">
                    <h1>Trainings & Workshops</h1>
                    <p>Unlock the mysteries of the mineral kingdom and master the art of crystal healing.</p>
                </div>
            </div>

            <div className="container section-padding">
                <div className="trainings-grid">
                    <div className="training-card">
                        <div className="card-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800')" }}></div>
                        <div className="card-content">
                            <h3>Crystal Healing Level 1</h3>
                            <p>Introduction to basic crystal properties, cleansing techniques, and personal grid work.</p>
                            <span className="price">$199</span>
                            <button className="btn btn-outline">Learn More</button>
                        </div>
                    </div>
                    <div className="training-card">
                        <div className="card-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800')" }}></div>
                        <div className="card-content">
                            <h3>Advanced Reiki Integration</h3>
                            <p>For certified practitioners looking to combine Reiki energy with crystal amplifiers.</p>
                            <span className="price">$299</span>
                            <button className="btn btn-outline">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx="true">{`
                .trainings-hero {
                    background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=2000&auto=format&fit=crop');
                    background-size: cover;
                    background-position: center;
                    padding: 120px 0;
                    color: white;
                    text-align: center;
                }
                .trainings-hero h1 { font-size: 3.5rem; margin-bottom: 20px; }
                .trainings-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
                    gap: 40px;
                }
                .training-card {
                    background: white;
                    border-radius: 12px;
                    overflow: hidden;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
                    transition: transform 0.3s ease;
                }
                .training-card:hover { transform: translateY(-10px); }
                .card-image { height: 250px; background-size: cover; background-position: center; }
                .card-content { padding: 30px; }
                .card-content h3 { margin-bottom: 15px; font-size: 1.5rem; color: #4B0082; }
                .card-content p { color: #666; margin-bottom: 20px; }
                .price { display: block; font-size: 1.5rem; font-weight: 700; color: #E91E63; margin-bottom: 20px; }
            `}</style>
        </div>
    );
};

export default Trainings;
