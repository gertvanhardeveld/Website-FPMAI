import React from 'react';

const Leeruitkomsten = () => {
    return (
        <div className="container">
            <div style={{ marginBottom: '60px' }}>
                <img
                    src="/leeruitkomsten_visual.jpg"
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

                <div style={{ marginBottom: '20px' }}>
                    <h3 style={{ color: 'var(--hu-blue)', marginBottom: '10px' }}>LU 4: AI Tools en technieken gebruiken</h3>
                    <p>Je kunt zelfstandig verschillende AI-tools en platforms toepassen (zoals AI machine learning technieken, chatbots, agents, prompts, etc)) en deze gebruiken om specifieke taken binnen je vakgebied op te lossen.</p>
                </div>

                <div style={{ marginBottom: '20px' }}>
                    <h3 style={{ color: 'var(--hu-blue)', marginBottom: '10px' }}>LU 5: Zelfstandig en zelfsturend werken</h3>
                    <p>Je kunt een eigen leerroute vaststellen en uitvoeren waarbij je zelfstandig je leervragen stelt, relevante bronnen en tools selecteert, je eigen voortgang monitort en kritisch reflecteert op je leerproces en persoonlijke ontwikkeling in het AI-landschap.</p>
                </div>
                <div style={{ clear: 'both' }}></div>
            </div>
        </div>
    );
};

export default Leeruitkomsten;
