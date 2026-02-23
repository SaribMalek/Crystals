import React from 'react';

const Privacy = () => {
    return (
        <div className="container section-padding">
            <h1 className="hero-title" style={{ fontSize: '3rem', marginBottom: '20px' }}>Privacy Policy</h1>
            <p style={{ color: 'var(--text-light)', maxWidth: '900px' }}>
                We only use your information to process orders, communicate order updates, and improve your experience.
                Payment data is handled by secure third-party providers and is never stored on this site.
            </p>
        </div>
    );
};

export default Privacy;
