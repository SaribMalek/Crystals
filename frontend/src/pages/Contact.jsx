import React from 'react';
import { Mail, Phone, MapPin, Send, Instagram, Facebook, Twitter } from 'lucide-react';

const Contact = () => {
    return (
        <div className="contact-page">
            <div className="contact-header">
                <div className="container">
                    <h1>Contact Us</h1>
                    <p>We're here to help you on your crystal journey. Reach out with any questions or just to share your manifestation stories.</p>
                </div>
            </div>

            <section className="section-padding">
                <div className="container">
                    <div className="contact-grid">
                        <div className="contact-info">
                            <h2 className="section-title">Get In Touch</h2>
                            <p className="contact-desc">Whether you're looking for a specific stone, need advice on crystal care, or want to track an order, our team is ready to assist.</p>

                            <div className="info-items">
                                <div className="info-item">
                                    <div className="icon-circle"><Mail size={20} /></div>
                                    <div>
                                        <h3>Email</h3>
                                        <p>hello@ascrystals.com</p>
                                    </div>
                                </div>
                                <div className="info-item">
                                    <div className="icon-circle"><Phone size={20} /></div>
                                    <div>
                                        <h3>Phone</h3>
                                        <p>+1 (555) 123-4567</p>
                                    </div>
                                </div>
                                <div className="info-item">
                                    <div className="icon-circle"><MapPin size={20} /></div>
                                    <div>
                                        <h3>Studio</h3>
                                        <p>123 Healing Way, Crystal Valley, CA 90210</p>
                                    </div>
                                </div>
                            </div>

                            <div className="social-links">
                                <h3>Follow Our Journey</h3>
                                <div className="social-icons">
                                    <a href="#"><Instagram size={24} /></a>
                                    <a href="#"><Facebook size={24} /></a>
                                    <a href="#"><Twitter size={24} /></a>
                                </div>
                            </div>
                        </div>

                        <form className="contact-form">
                            <div className="form-row">
                                <div className="form-group">
                                    <label>First Name</label>
                                    <input type="text" placeholder="Your name" required />
                                </div>
                                <div className="form-group">
                                    <label>Last Name</label>
                                    <input type="text" placeholder="Your last name" required />
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Email Address</label>
                                <input type="email" placeholder="email@example.com" required />
                            </div>
                            <div className="form-group">
                                <label>Subject</label>
                                <select>
                                    <option>General Inquiry</option>
                                    <option>Order Support</option>
                                    <option>Wholesale</option>
                                    <option>Press</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Message</label>
                                <textarea rows="6" placeholder="How can we help you?"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary submit-btn">
                                <Send size={18} /> Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            <div className="map-section">
                {/* Mock Map */}
                <div className="mock-map" style={{ height: '400px', background: '#e0e0e0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#888' }}>
                    <p>Map View Currently Unavailable - 123 Healing Way, CA</p>
                </div>
            </div>

            <style jsx="true">{`
                .contact-header { background: var(--primary); color: white; padding: 100px 0; text-align: center; }
                .contact-header h1 { font-size: 3.5rem; margin-bottom: 20px; }
                .contact-header p { font-size: 1.1rem; max-width: 600px; margin: 0 auto; opacity: 0.9; }
                
                .contact-grid { display: grid; grid-template-columns: 1fr 1.5fr; gap: 80px; align-items: start; }
                
                .contact-desc { margin-bottom: 40px; color: var(--text-light); line-height: 1.6; }
                .info-items { display: flex; flex-direction: column; gap: 30px; margin-bottom: 50px; }
                .info-item { display: flex; gap: 20px; align-items: center; }
                .icon-circle { width: 50px; height: 50px; border-radius: 50%; background: var(--primary-light); color: var(--primary); display: flex; align-items: center; justify-content: center; }
                .info-item h3 { font-size: 0.9rem; color: var(--text-light); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 5px; }
                .info-item p { font-weight: 700; color: var(--primary); }
                
                .social-links h3 { font-size: 1.2rem; margin-bottom: 20px; }
                .social-icons { display: flex; gap: 20px; }
                .social-icons a { color: var(--text-light); transition: var(--transition); }
                .social-icons a:hover { color: var(--primary); }
                
                .contact-form { background: white; padding: 40px; border-radius: 20px; box-shadow: 0 15px 40px rgba(0,0,0,0.06); }
                .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
                .form-group { margin-bottom: 20px; display: flex; flex-direction: column; gap: 8px; }
                .form-group label { font-size: 0.9rem; font-weight: 700; color: var(--text); }
                .form-group input, .form-group select, .form-group textarea { padding: 12px 15px; border: 1px solid #ddd; border-radius: 10px; font-size: 1rem; }
                
                .submit-btn { width: 100%; border-radius: 50px; padding: 15px; display: flex; align-items: center; justify-content: center; gap: 10px; font-weight: 700; }
                
                @media (max-width: 992px) {
                    .contact-grid { grid-template-columns: 1fr; gap: 60px; }
                }
            `}</style>
        </div>
    );
};

export default Contact;
