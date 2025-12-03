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
                    <li style={{ marginBottom: '5px' }}>De leeruitkomst 5 is altijd verplicht en wordt iedere sprint beoordeeld. Minimaal 4 keer moet deze leeruitkomst van het niveau voldoende zijn</li>
                    <li style={{ marginBottom: '5px' }}>De andere 4 leeruitkomsten moeten in ieder geval 4 keer worden beoordeeld. Iedere leeruitkomst moet minimaal 2 keer van voldoende niveau zijn</li>
                    <li style={{ marginBottom: '5px' }}>Je mag maximaal 1 sprint missen (bijvoorbeeld door ziekte of vakantie). In dat geval moet je wel werken in de reparatiesprint aan het einde van de minor en is je assessment later.</li>
                </ol>

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
