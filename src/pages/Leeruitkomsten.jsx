import React, { useState } from 'react';

import { Helmet } from 'react-helmet-async';

const Leeruitkomsten = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="container">
            <Helmet>
                <title>Leeruitkomsten - Futureproof met AI!</title>
                <meta name="description" content="De 5 leeruitkomsten van de Minor AI: Impact analyseren, Oplossingen realiseren, Ethiek, AI Tools gebruiken en Zelfsturend werken." />
            </Helmet>
            <div style={{ marginBottom: '60px' }}>
                <img
                    src={`${import.meta.env.BASE_URL}leeruitkomsten_visual.jpg`}
                    alt="Leeruitkomsten Visualisatie"
                    style={{
                        float: 'right',
                        width: '33%',
                        marginLeft: '30px',
                        marginBottom: '20px',
                        borderRadius: '8px',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                    }}
                />

                <h1 className="section-title">Leeruitkomsten</h1>
                <p style={{ marginBottom: '30px' }}>De minor kent 5 leeruitkomsten. Leeruikomst 5 moet je altijd iedere sprint laten zien en de andere vier leeruitkomsten zijn afhankelijk van wat je die sprint hebt gepland om uit te voeren.</p>

                <div style={{ marginBottom: '20px' }}>
                    <h3 style={{ color: 'var(--hu-blue)', marginBottom: '10px' }}>LU 1: AI-impact op de toekomstige beroepspraktijk analyseren en evalueren</h3>
                    <p>Je kunt zelfstandig onderzoek door naar de impact van AI in jouw toekomstig beroep en vaststellen welke nieuwe AI en digitale vaardigheden daarvoor nodig zijn</p>
                </div>

                <div style={{ marginBottom: '20px' }}>
                    <h3 style={{ color: 'var(--hu-blue)', marginBottom: '10px' }}>LU 2: Praktijkgerichte AI oplossing ontwerpen, realiseren en presenteren</h3>
                    <p>Je kunt zelfstandig een AI oplossing ontwerpen, realiseren en presenteren die een specifieke beroepspraktijk radicaal transformeert (verandert)</p>
                </div>

                <div style={{ marginBottom: '20px' }}>
                    <h3 style={{ color: 'var(--hu-blue)', marginBottom: '10px' }}>LU 3: Ethiek en verantwoordelijk AI-gebruik beoordelen</h3>
                    <p>Je kunt zelfstandig de ethische vraagstukken en uitdagingen van AI in je vakgebied identificeren en aanbevelingen formuleren voor verantwoord AI-gebruik, rekening houdend met privacy, bias en transparantie.</p>
                </div>

                <div style={{ marginBottom: '20px', display: 'flex', flexWrap: 'wrap', gap: '30px', alignItems: 'flex-start' }}>
                    <div style={{ flex: '1 1 300px' }}>
                        <div style={{ marginBottom: '20px' }}>
                            <h3 style={{ color: 'var(--hu-blue)', marginBottom: '10px' }}>LU 4: AI Tools en technieken gebruiken</h3>
                            <p>Je kunt zelfstandig verschillende AI-tools en platforms toepassen (zoals AI machine learning technieken, chatbots, agents, prompts, etc)) en deze gebruiken om specifieke taken binnen je vakgebied op te lossen.</p>
                        </div>
                        <div style={{ marginBottom: '20px' }}>
                            <h3 style={{ color: 'var(--hu-blue)', marginBottom: '10px' }}>LU 5: Zelfstandig en zelfsturend werken</h3>
                            <p>Je kunt een eigen leerroute vaststellen en uitvoeren waarbij je zelfstandig je leervragen stelt, relevante bronnen en tools selecteert, je eigen voortgang monitort en kritisch reflecteert op je leerproces en persoonlijke ontwikkeling in het AI-landschap.</p>
                        </div>
                    </div>
                    <img 
                        src={`${import.meta.env.BASE_URL}Tools.png`} 
                        alt="AI Tools" 
                        onClick={() => setIsModalOpen(true)}
                        style={{ flex: '0 0 auto', width: '100%', maxWidth: '33%', minWidth: '250px', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', cursor: 'zoom-in', transition: 'transform 0.2s ease-in-out' }} 
                        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    />
                </div>

                {isModalOpen && (
                    <div 
                        onClick={() => setIsModalOpen(false)}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: 'rgba(0,0,0,0.8)',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            zIndex: 9999,
                            cursor: 'zoom-out'
                        }}
                    >
                        <img 
                            src={`${import.meta.env.BASE_URL}Tools.png`} 
                            alt="AI Tools Full" 
                            style={{ 
                                maxWidth: '90%', 
                                maxHeight: '90%', 
                                borderRadius: '8px', 
                                boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
                                cursor: 'default'
                            }}
                            onClick={(e) => e.stopPropagation()} 
                        />
                        <button 
                            onClick={() => setIsModalOpen(false)}
                            style={{
                                position: 'absolute',
                                top: '20px',
                                right: '20px',
                                background: 'white',
                                color: 'black',
                                border: 'none',
                                borderRadius: '50%',
                                width: '40px',
                                height: '40px',
                                fontSize: '20px',
                                fontWeight: 'bold',
                                cursor: 'pointer',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                boxShadow: '0 2px 10px rgba(0,0,0,0.2)'
                            }}
                        >
                            ✕
                        </button>
                    </div>
                )}
                <div style={{ clear: 'both' }}></div>
            </div>
        </div>
    );
};

export default Leeruitkomsten;
