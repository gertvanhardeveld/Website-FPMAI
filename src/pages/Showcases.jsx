import React from 'react';

import { Helmet } from 'react-helmet-async';

const Showcases = () => {
    return (
        <div className="container">
            <Helmet>
                <title>Showcases - Futureproof met AI!</title>
                <meta name="description" content="Bekijk voorbeelden van AI-projecten die studenten hebben gerealiseerd, zoals Smart Waste Management en Healthcare Chatbots." />
            </Helmet>
            <h1 className="section-title">Showcases</h1>
            <p style={{ marginBottom: '30px' }}>
                Bekijk hier enkele voorbeelden van projecten die studenten in de afgelopen edities hebben gerealiseerd.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                <div className="card">
                    <iframe
                        src="https://stream.hu.nl/players/3l4TCxch-wtzy1Zaa.html"
                        style={{ width: '100%', aspectRatio: '16/9', marginBottom: '15px', border: 'none' }}
                        allow="fullscreen; picture-in-picture"
                        allowFullScreen
                        title="Showcase Video"
                    ></iframe>
                    <h2 style={{ marginBottom: '10px' }}>Fieke van Gemert</h2>
                    <p>
                        Maken en opleveren van drie websites in de laatste sprint.
                    </p>
                </div>

                <div className="card">
                    <iframe
                        src="https://stream.hu.nl/players/EP9P6HLu-wtzy1Zaa.html"
                        style={{ width: '100%', aspectRatio: '16/9', marginBottom: '15px', border: 'none' }}
                        allow="fullscreen; picture-in-picture"
                        allowFullScreen
                        title="Showcase Video 2"
                    ></iframe>
                    <h2 style={{ marginBottom: '10px' }}>Kate Beker</h2>
                    <p>
                        Maken en opleveren van een website voor modellen.
                    </p>
                </div>

                <div className="card">
                    <iframe
                        src="https://stream.hu.nl/players/2k933z9f-wtzy1Zaa.html"
                        style={{ width: '100%', aspectRatio: '16/9', marginBottom: '15px', border: 'none' }}
                        allow="fullscreen; picture-in-picture"
                        allowFullScreen
                        title="Showcase Video 3"
                    ></iframe>
                    <h2 style={{ marginBottom: '10px' }}>Flow van den Berg</h2>
                    <p>
                        Maken en opleveren van een klantservice applicatie.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Showcases;
