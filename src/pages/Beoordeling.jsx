import React from 'react';

import { Helmet } from 'react-helmet-async';

const Beoordeling = () => {
    return (
        <div className="container">
            <Helmet>
                <title>Beoordeling - Futureproof met AI!</title>
                <meta name="description" content="Informatie over het assessment, beoordelingscriteria (Op Niveau / Boven Niveau) en herkansingen van de Minor AI." />
            </Helmet>
            <h1 className="section-title">Beoordeling</h1>

            <div style={{ marginBottom: '40px' }}>
                <h2 style={{ marginBottom: '20px', color: 'var(--hu-blue)' }}>Opdrachtgevers</h2>
                <p style={{ marginBottom: '30px' }}>
                    De minor kent 5 leeruitkomsten. Leeruitkomst 5 moet je altijd iedere sprint laten zien en de andere vier leeruitkomsten zijn afhankelijk van wat je die sprint hebt gepland om uit te voeren.
                </p>

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
            </div>

            {/* Eindassessment Section */}
            <div style={{ marginBottom: '40px' }}>
                <h1 style={{ marginBottom: '20px', color: 'var(--hu-blue)' }}>Assessment</h1>

                <img
                    src={`${import.meta.env.BASE_URL}assessment_visual.jpg`}
                    alt="Assessment Visualisatie"
                    style={{
                        float: 'right',
                        width: '33%',
                        marginLeft: '30px',
                        marginBottom: '20px',
                        borderRadius: '8px',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                    }}
                />

                <p style={{ marginBottom: '15px' }}>
                    Aan het einde van het semester maak je een laatste zelfevaluatie. Tijdens deze laatste zelfassessment geef je per leeruitkomst aan wat is onderzocht, gemaakt en geleerd. Deze zelfevaluatie lever je in via Canvas en wordt beoordeeld door de coaches. Voor de eindbeoordeling krijg je of een Op Niveau of Boven Niveau. Onderstaand zie je de voorwaarden voor het eindassessment en het niveau van de beoordeling.
                </p>

                <h3 style={{ fontSize: '1.1rem', marginBottom: '10px', color: 'var(--hu-red)' }}>Voorwaarden voor een op niveau beoordeling</h3>
                <ol style={{ paddingLeft: '20px', marginBottom: '20px' }}>
                    <li style={{ marginBottom: '5px' }}>Je moet iedere sprint minimaal 3 leeruitkomsten laten evalueren. Met 8 sprints kun je dan minimaal 24 keer een leeruitkomst laten beoordelen</li>
                    <li style={{ marginBottom: '5px' }}>Je mag maximaal 1 sprint missen (bijvoorbeeld door ziekte of vakantie). In dat geval moet je wel werken in de reparatiesprint aan het einde van de minor en is je assessment later.</li>
                    <li style={{ marginBottom: '5px' }}>Iedere leeruitkomst moet je minimaal een aantal maal op voldoende niveau laten zien.</li>
                </ol>

                <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px', border: '1px solid black' }}>
                    <thead>
                        <tr style={{ backgroundColor: 'var(--hu-blue)', color: 'white' }}>
                            <th style={{ padding: '8px', border: '1px solid black', textAlign: 'left' }}>Leeruitkomst</th>
                            <th style={{ padding: '8px', border: '1px solid black', textAlign: 'center' }}>Minimaal x voldoende</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{ padding: '8px', border: '1px solid black' }}>LU1: AI Impact</td>
                            <td style={{ padding: '8px', border: '1px solid black', textAlign: 'center' }}>2</td>
                        </tr>
                        <tr>
                            <td style={{ padding: '8px', border: '1px solid black' }}>LU2: AI Praktijkoplossing</td>
                            <td style={{ padding: '8px', border: '1px solid black', textAlign: 'center' }}>4</td>
                        </tr>
                        <tr>
                            <td style={{ padding: '8px', border: '1px solid black' }}>LU3: AI Ethiek en regelgeving</td>
                            <td style={{ padding: '8px', border: '1px solid black', textAlign: 'center' }}>2</td>
                        </tr>
                        <tr>
                            <td style={{ padding: '8px', border: '1px solid black' }}>LU4: AI Tools en technieken</td>
                            <td style={{ padding: '8px', border: '1px solid black', textAlign: 'center' }}>4</td>
                        </tr>
                        <tr>
                            <td style={{ padding: '8px', border: '1px solid black' }}>LU5: Zelfstandig en zelfsturend werken</td>
                            <td style={{ padding: '8px', border: '1px solid black', textAlign: 'center' }}>6</td>
                        </tr>
                    </tbody>
                </table>

                <h3 style={{ fontSize: '1.1rem', marginBottom: '10px', color: 'var(--hu-red)' }}>Voorwaarden voor boven niveau beoordeling</h3>
                <ol style={{ paddingLeft: '20px', marginBottom: '20px' }}>
                    <li style={{ marginBottom: '5px' }}>Je hebt minimaal 24 leeruitkomsten op voldoende niveau.</li>
                    <li style={{ marginBottom: '5px' }}>Je hebt geen volledige sprint gemist</li>
                    <li style={{ marginBottom: '5px' }}>Je draagt aantoonbaar bij aan het leren van anderen (kennisdeling, hulp).</li>
                    <li style={{ marginBottom: '5px' }}>Je onderzoek-, maak- en leerresultaten zijn van bovengemiddeld niveau.</li>
                </ol>

                <h3 style={{ fontSize: '1.1rem', marginBottom: '10px', color: 'var(--hu-blue)' }}>Herkansing</h3>
                <p>
                    In week 19 en 20 van de minor is er een herkansingsperiode. Dit geeft je de tijd om een extra sprint te draaien en deze te laten beoordelen, zodat je voldoende beoordeelde leeruitkomsten hebt en voldoet aan de voorwaarden voor het assessment.
                </p>
                <div style={{ clear: 'both' }}></div>
            </div>
        </div>
    );
};

export default Beoordeling;
