import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div style={{ position: 'relative' }}>
        <img
          src="/home-hero.jpg"
          alt="Futureproof met AI Team"
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
            maxHeight: '600px',
            objectFit: 'cover'
          }}
        />
        <div style={{
          position: 'absolute',
          top: '65%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          display: 'flex',
          gap: '20px',
          zIndex: 10,
          width: '100%',
          justifyContent: 'center'
        }}>
          <a href="https://husite.nl/minors/inschrijven/" target="_blank" rel="noopener noreferrer" className="btn" style={{ backgroundColor: 'var(--hu-blue)', color: 'white', fontSize: '1.1rem', padding: '15px 30px', width: '220px', textAlign: 'center' }}>
            Direct Inschrijven
          </a>
          <a href="/Future-proof met AI! v1.8.pdf" target="_blank" rel="noopener noreferrer" className="btn" style={{ backgroundColor: 'var(--hu-red)', color: 'white', fontSize: '1.1rem', padding: '15px 30px', width: '220px', textAlign: 'center' }}>
            Brochure
          </a>
        </div>
      </div>

      <div style={{ backgroundColor: 'var(--hu-red)', color: 'white', padding: '60px 0', marginBottom: '40px' }}>
        <div className="container">

          <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '20px' }}>
            Tijdens deze minor duiken we diep in de wereld van AI, met inspirerende sessies en lessen verzorgd door experts en gastsprekers uit het vakgebied. Zij presenteren boeiende cases uit diverse bedrijven en sectoren, waardoor je direct wordt geïnspireerd en concrete ideeën opdoet over de impact van AI in jouw specifieke sector en toekomstige beroep. Je krijgt de vrijheid om zelf te bepalen in welke onderwerpen, technieken en tools je je wilt verdiepen. Het is niet alleen theorie: je gaat ook daadwerkelijk AI proof-of-concepts bouwen, met de mogelijkheid deze echt op te leveren voor eigen opdrachtgevers. Hierbij leer je essentiële technieken en tools zoals: effectief prompten , bouwen van AI-agents, apps ontwikkelen met Vibe-coding, workflows bouwen (N8N, Make.com, Power Automate) en geavanceerde data-analyse met Machine Learning en Neurale Netwerken.
          </p>
        </div>
      </div>
      <div className="container" style={{ marginBottom: '60px', textAlign: 'center' }}>
        <p style={{ fontSize: '1.2rem', maxWidth: '1000px', lineHeight: '1.6', color: '#333', margin: '0 auto 30px auto' }}>
          Even een snelle preview van de minor.
        </p>
        <a href="/Toekomstbestendig_met_AI.mp4" target="_blank" rel="noopener noreferrer" className="btn" style={{ backgroundColor: 'var(--hu-blue)', color: 'white', fontSize: '1.1rem', padding: '15px 30px' }}>
          Futureproof met AI
        </a>
      </div>
    </div>
  );
};

export default Home;
