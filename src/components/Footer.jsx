import React from 'react';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: 'var(--hu-grey)', color: 'var(--hu-white)', padding: '40px 0', marginTop: 'auto' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
                </div>
                <div style={{ marginTop: '40px', textAlign: 'center', fontSize: '0.9rem', opacity: 0.8 }}>
                    <div style={{ marginBottom: '1rem' }}>
                        <a href="/Privacy statement v1.0.pdf" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>Privacy statement v1.0</a>
                    </div>
                    &copy; {new Date().getFullYear()} Hogeschool Utrecht - Futureproof met AI
                </div>
            </div>
        </footer>
    );
};

export default Footer;