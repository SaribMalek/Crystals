import React from 'react';
import { Mail, Phone, MapPin, Send, Instagram, Facebook, Twitter } from 'lucide-react';

const Contact = () => {
    return (
        <div className="contact-page">
            <div className="boutique-contact-hero">
                <div className="container">
                    <span className="hero-eyebrow white">Connect</span>
                    <h1 className="hero-title white">Sacred Inquiries</h1>
                    <p className="boutique-hero-p white">We are here to assist you on your journey of discovery. Reach out for bespoke selections or spiritual guidance.</p>
                </div>
            </div>

            <section className="section-padding">
                <div className="container">
                    <div className="contact-layout-boutique">
                        <div className="contact-info-panel">
                            <h2 className="section-title-serif">The Sanctuary Studio</h2>
                            <p className="boutique-p">Whether you seek a specific vibration, require guidance on crystal care, or wish to inquire about a unique manifestation, our stewards are ready to help.</p>

                            <div className="boutique-contact-methods">
                                <div className="contact-method-item">
                                    <div className="method-icon"><Mail size={20} strokeWidth={1} /></div>
                                    <div className="method-text">
                                        <h3>Electronic Mail</h3>
                                        <p>ascrystal0204@gmail.com</p>
                                    </div>
                                </div>
                                <div className="contact-method-item">
                                    <div className="method-icon"><Phone size={20} strokeWidth={1} /></div>
                                    <div className="method-text">
                                        <h3>Direct Dial</h3>
                                        <p>+1 (555) 123-4567</p>
                                    </div>
                                </div>
                                <div className="contact-method-item">
                                    <div className="method-icon"><MapPin size={20} strokeWidth={1} /></div>
                                    <div className="method-text">
                                        <h3>Sacred Studio</h3>
                                        <p>123 Healing Way, Crystal Valley, CA 90210</p>
                                    </div>
                                </div>
                            </div>

                            <div className="boutique-social-presence">
                                <h3>Digital Footprints</h3>
                                <div className="social-icons-row">
                                    <a href="#"><Instagram size={24} /></a>
                                    <a href="#"><Facebook size={24} /></a>
                                    <a href="#"><Twitter size={24} /></a>
                                </div>
                            </div>
                        </div>

                        <form className="boutique-contact-form">
                            <h3 className="form-title-serif">Send Your Word</h3>
                            <div className="form-grid-boutique">
                                <div className="form-group-boutique">
                                    <label>First Name</label>
                                    <input type="text" placeholder="e.g. Julian" required />
                                </div>
                                <div className="form-group-boutique">
                                    <label>Last Name</label>
                                    <input type="text" placeholder="e.g. Thorne" required />
                                </div>
                                <div className="form-group-boutique full">
                                    <label>Email Address</label>
                                    <input type="email" placeholder="julian@reikicrystals.com" required />
                                </div>
                                <div className="form-group-boutique full">
                                    <label>The Nature of Your Inquiry</label>
                                    <select className="boutique-select">
                                        <option>General Manifestation</option>
                                        <option>Order Sanctuary Support</option>
                                        <option>Wholesale Partnerships</option>
                                        <option>Bespoke Selection</option>
                                    </select>
                                </div>
                                <div className="form-group-boutique full">
                                    <label>Your Message to Us</label>
                                    <textarea rows="5" placeholder="Share your intentions..."></textarea>
                                </div>
                            </div>
                            <button type="submit" className="btn-luxury-submit full-width">
                                Transmit Message <Send size={16} style={{ marginLeft: '10px' }} />
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            <div className="boutique-studio-image">
                <img src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070&auto=format&fit=crop" alt="Our Sacred Studio" />
                <div className="studio-overlay">
                    <div className="studio-label">
                        <span className="hero-eyebrow white">Our Studio</span>
                        <p>Crystal Valley, CA — Open Mon–Sat, 10am–6pm</p>
                    </div>
                </div>
            </div>

            <style jsx="true">{`
                .boutique-contact-hero { height: 50vh; background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=2070&auto=format&fit=crop'); background-size: cover; background-position: center; display: flex; align-items: center; justify-content: center; text-align: center; }
                .hero-eyebrow.white { color: rgba(255,255,255,0.8); }
                .hero-title.white { color: white; margin: 15px 0; }
                .boutique-hero-p { max-width: 600px; margin: 0 auto; line-height: 1.6; opacity: 0.9; font-weight: 300; }

                .contact-layout-boutique { display: grid; grid-template-columns: 1fr 1.5fr; gap: 100px; align-items: start; }
                
                .section-title-serif { font-family: var(--font-serif); font-size: 3rem; color: var(--primary); margin-bottom: 30px; }
                .boutique-p { font-size: 1.1rem; line-height: 1.8; color: var(--text-light); margin-bottom: 60px; font-weight: 300; }

                .boutique-contact-methods { display: grid; gap: 40px; margin-bottom: 80px; }
                .contact-method-item { display: flex; gap: 25px; align-items: center; }
                .method-icon { width: 50px; height: 50px; border: 1px solid #F0EAE5; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: var(--secondary); background: var(--bg-creme); }
                .method-text h3 { font-size: 0.7rem; text-transform: uppercase; letter-spacing: 2px; color: var(--text-light); margin-bottom: 5px; }
                .method-text p { font-family: var(--font-serif); font-size: 1.2rem; color: var(--primary); font-weight: 400; }

                .boutique-social-presence h3 { font-size: 0.75rem; text-transform: uppercase; letter-spacing: 2px; color: var(--text-light); margin-bottom: 25px; }
                .social-icons-row { display: flex; gap: 30px; }
                .social-icons-row a { color: var(--primary); opacity: 0.6; transition: var(--transition); }
                .social-icons-row a:hover { opacity: 1; transform: translateY(-3px); }

                .boutique-contact-form { background: white; padding: 60px; border: 1px solid #F0EAE5; box-shadow: var(--shadow-soft); }
                .form-title-serif { font-family: var(--font-serif); font-size: 2.2rem; color: var(--primary); margin-bottom: 40px; }
                .form-grid-boutique { display: grid; grid-template-columns: 1fr 1fr; gap: 30px; margin-bottom: 50px; }
                .form-group-boutique { display: flex; flex-direction: column; gap: 10px; }
                .form-group-boutique.full { grid-column: span 2; }
                .form-group-boutique label { font-size: 0.7rem; text-transform: uppercase; letter-spacing: 1.5px; color: var(--text-light); }
                .form-group-boutique input, .boutique-select, .form-group-boutique textarea { border: none; border-bottom: 1px solid #F0EAE5; padding: 12px 0; font-size: 1rem; color: var(--primary); background: transparent; transition: var(--transition); }
                .form-group-boutique input:focus, .boutique-select:focus, .form-group-boutique textarea:focus { outline: none; border-color: var(--secondary); }
                
                .btn-luxury-submit { background: var(--primary); color: white; border: none; padding: 20px 40px; font-size: 0.8rem; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: var(--transition); }
                .btn-luxury-submit:hover { background: var(--bg-dark); transform: translateY(-3px); }
                .btn-luxury-submit.full-width { width: 100%; }

                .boutique-studio-image { position: relative; height: 450px; overflow: hidden; border-top: 1px solid #F0EAE5; }
                .boutique-studio-image img { width: 100%; height: 100%; object-fit: cover; filter: brightness(0.6); }
                .studio-overlay { position: absolute; inset: 0; display: flex; align-items: flex-end; padding: 60px; }
                .studio-label p { color: rgba(255,255,255,0.85); font-size: 1rem; margin-top: 8px; font-weight: 300; }
                .boutique-map-panel { background: var(--bg-creme); height: 400px; border-top: 1px solid #F0EAE5; display: flex; align-items: center; justify-content: center; }
                .map-placeholder-luxury { color: #BDC3C7; font-family: var(--font-serif); font-style: italic; font-size: 1.4rem; }

                @media (max-width: 1024px) {
                    .contact-layout-boutique { grid-template-columns: 1fr; gap: 60px; }
                    .boutique-contact-form { padding: 40px; }
                }
                @media (max-width: 576px) {
                    .form-grid-boutique { grid-template-columns: 1fr; }
                    .form-group-boutique.full { grid-column: span 1; }
                }
            `}</style>
        </div>
    );
};

export default Contact;
