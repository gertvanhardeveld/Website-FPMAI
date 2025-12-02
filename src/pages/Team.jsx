import React from 'react';

const Team = () => {
    return (
        <div className="container">
            <h1 className="section-title">Team</h1>
            <p style={{ marginBottom: '30px' }}>
                Ons team bestaat uit ervaren docenten en experts uit het werkveld.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
                <div className="card" style={{ textAlign: 'center' }}>
                    <div style={{ width: '120px', height: '120px', borderRadius: '50%', overflow: 'hidden', margin: '0 auto 15px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#888' }}>
                        <img src={`${import.meta.env.BASE_URL}gert-van-hardeveld.jpg`} alt="Gert van Hardeveld" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <h3 style={{ color: 'var(--hu-blue)', marginBottom: '5px' }}>Gert van Hardeveld</h3>
                    <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>Coach en Minor Coördinator</p>
                    <a href="https://www.linkedin.com/in/gertvanhardeveld/" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', marginTop: '10px', color: '#0077b5' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                    </a>
                </div>

                <div className="card" style={{ textAlign: 'center' }}>
                    <div style={{ width: '120px', height: '120px', borderRadius: '50%', overflow: 'hidden', margin: '0 auto 15px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#888' }}>
                        <img src={`${import.meta.env.BASE_URL}jan-van-rouwendal.jpg`} alt="Jan van Rouwendal" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <h3 style={{ color: 'var(--hu-blue)', marginBottom: '5px' }}>Jan van Rouwendal</h3>
                    <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>Coach</p>
                    <a href="https://www.linkedin.com/in/vanrouwendal/" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', marginTop: '10px', color: '#0077b5' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                    </a>
                </div>

                <div className="card" style={{ textAlign: 'center' }}>
                    <div style={{ width: '120px', height: '120px', borderRadius: '50%', overflow: 'hidden', margin: '0 auto 15px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#888' }}>
                        <img src={`${import.meta.env.BASE_URL}matthijs-brouwer.jpg`} alt="Matthijs Brouwer" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <h3 style={{ marginBottom: '5px' }}>Matthijs Brouwer</h3>
                    <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>Coach</p>
                    <a href="https://www.linkedin.com/in/matthijsbrouwer/" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', marginTop: '10px', color: '#0077b5' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                    </a>
                </div>

                <div className="card" style={{ textAlign: 'center' }}>
                    <div style={{ width: '120px', height: '120px', borderRadius: '50%', overflow: 'hidden', margin: '0 auto 15px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#888' }}>
                        <img src={`${import.meta.env.BASE_URL}niels-theunissen.jpg`} alt="Niels Theunissen" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <h3 style={{ marginBottom: '5px' }}>Niels Theunissen</h3>
                    <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>Coach</p>
                    <a href="https://www.linkedin.com/in/np-theunissen/" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', marginTop: '10px', color: '#0077b5' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Team;
