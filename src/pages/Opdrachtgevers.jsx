import React from 'react';

import { Helmet } from 'react-helmet-async';

const Opdrachtgevers = () => {
    return (
        <div className="container">
            <Helmet>
                <title>Opdrachtgevers - Futureproof met AI!</title>
                <meta name="description" content="Opdrachtgevers" />
            </Helmet>
            <h1 className="section-title">Opdrachtgevers</h1>

            <div style={{ marginBottom: '40px' }}>
                <img
                    className="opdrachtgevers-visual"
                    src={`${import.meta.env.BASE_URL}Dotslash.jpg`}
                    alt="Dotslash"
                    style={{
                        float: 'right',
                        width: '33%',
                        marginLeft: '30px',
                        marginBottom: '20px',
                        borderRadius: '8px',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                    }}
                />

                <p style={{ marginBottom: '20px' }}>
                    Tijdens de minor ga je aan de slag met innovatieve oplossingen voor echte opdrachtgevers. Je mag zelf een opdrachtgever aandragen, maar je kunt ook samenwerken met de startups van <a href="https://www.dotslash.nl" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--hu-blue)' }}>DotSlash</a>. Onze wekelijkse leerteam-meetings en het sprintwerk vinden namelijk plaats op locatie bij DotSlash..
                </p>

                <p style={{ marginBottom: '20px' }}>
                    DotSlash is de grootste startup- en scale-uphub van Nederland, waar meer dan 450 bedrijven gehuisvest zijn. Hierdoor hebben we toegang tot de hipste startups van het land. Jij mag hier uitdagende oplossingen voor bedenken en bent bovendien van harte uitgenodigd voor hun community-meetings.
                </p>

                <div style={{ clear: 'both' }}></div>
            </div>

            <style>{`
                @media (max-width: 768px) {
                    .opdrachtgevers-visual {
                        float: none !important;
                        width: 100% !important;
                        max-width: 100% !important;
                        margin-left: 0 !important;
                        margin-right: 0 !important;
                        margin-bottom: 20px !important;
                        display: block;
                    }
                }
            `}</style>
        </div>
    );
};

export default Opdrachtgevers;
