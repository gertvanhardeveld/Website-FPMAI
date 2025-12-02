import React from 'react';

const Praktisch = () => {
    return (
        <div className="container">


            {/* Rooster Section - Single Column with Floating Image */}
            <section style={{ marginBottom: '60px' }}>
                <img
                    src="/rooster_visual_new.jpg"
                    alt="Rooster Visualisatie"
                    style={{
                        float: 'right',
                        width: '33%',
                        marginLeft: '30px',
                        marginBottom: '20px',
                        borderRadius: '8px',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                    }}
                />

                <h1 style={{ marginBottom: '20px', color: 'var(--hu-blue)' }}>Rooster</h1>
                <p style={{ marginBottom: '20px' }}>
                    De minor is fulltime. Op maandag en woensdag zijn er les ingeroosterd.
                </p>

                <div style={{ marginBottom: '20px' }}>
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '10px' }}>Lesdagen</h3>
                    <p>
                        Je bent altijd 2 dagen ingeroosterd op de HU om te werken en te leren. Op maandag middag zijn er altijd de inspiratie-sessies en gastsprekers ingeroosterd en kom je met alle studenten bij elkaar. Op de woensdag zijn de leerteamsessies en werk je in sprints. Afhankelijk van de indeling is je leerteam op de woensdagochtend of de woensdagmiddag.
                    </p>
                </div>

                <div style={{ marginBottom: '20px' }}>
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '10px' }}>Locatie</h3>
                    <p>
                        Op maandag heb je altijd les op de Heidelberglaan 15 en op woensdag zijn we te gast bij Dotslash op de Europalaan 93 in Utrecht.
                    </p>
                </div>

                <div>
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '10px' }}>Belangrijke data</h3>
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                        <li style={{ padding: '5px 0' }}><strong>Start minor:</strong> 2 februari 2026</li>
                        <li style={{ padding: '5px 0' }}><strong>Voorjaarsvakantie:</strong> 16 februari t/m 24 februari 202</li>
                        <li style={{ padding: '5px 0' }}><strong>Meivakantie:</strong> 27 april t/m 1 mei 2026</li>
                    </ul>
                </div>
                <div style={{ clear: 'both' }}></div>
            </section>

            {/* Literatuur Section - Full Width */}
            <section style={{ marginBottom: '60px' }}>
                <h2 style={{ marginBottom: '20px', color: 'var(--hu-blue)', paddingBottom: '10px', display: 'inline-block' }}>Literatuur</h2>
                <p>
                    Zoals eerder omschreven ben je zelf verantwoordelijk voor het vinden en bestuderen van de juiste bronnen om uit te leren en je oplossingen te bedenken. Er is daardoor geen vaste literatuur die bestudeerd moet worden. Wel zul je veel literatuur en andere bronnen aangereikt krijgen van gastsprekers en experts die je wekelijks ontmoet. Natuurlijk ga je ook AI chatbots gebruiken om relevante bronnen te vinden, te bestuderen en samenhang te ontdekken.
                </p>
            </section>

            {/* Kosten Section - Full Width */}
            <section style={{ marginBottom: '40px' }}>
                <h2 style={{ marginBottom: '20px', color: 'var(--hu-blue)', paddingBottom: '10px', display: 'inline-block' }}>Kosten</h2>
                <p>
                    Houd er rekening mee dat je ongeveer € 100,-  nodig hebt voor het afsluiten van abonnementen op diverse AI gerelateerde tools, zoals tools voor vibe-coding, beschikbaar stellen van LLM’s voor chatbots en workflow automatisering.
                </p>
            </section>
        </div>
    );
};

export default Praktisch;
