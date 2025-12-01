import React from 'react';

const Producten = () => {
    return (
        <div className="container">
            <h1 className="section-title">Producten</h1>
            <p style={{ marginBottom: '30px' }}>
                Bekijk hier enkele voorbeelden van projecten die studenten in de afgelopen edities hebben gerealiseerd (wordt binnenkort geüpdated).
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                <div className="card">
                    <div style={{ height: '200px', backgroundColor: '#eee', marginBottom: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#888' }}>
                        Afbeelding Project 1
                    </div>
                    <h2 style={{ marginBottom: '10px' }}>Smart Waste Management</h2>
                    <p>
                        Een AI-systeem dat afval herkent en automatisch sorteert om recycling te verbeteren.
                        Ontwikkeld in samenwerking met de Gemeente Utrecht.
                    </p>
                </div>

                <div className="card">
                    <div style={{ height: '200px', backgroundColor: '#eee', marginBottom: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#888' }}>
                        Afbeelding Project 2
                    </div>
                    <h2 style={{ marginBottom: '10px' }}>Healthcare Chatbot</h2>
                    <p>
                        Een intelligente chatbot die patiënten helpt bij het vinden van de juiste zorgverlener en eenvoudige medische vragen beantwoordt.
                    </p>
                </div>

                <div className="card">
                    <div style={{ height: '200px', backgroundColor: '#eee', marginBottom: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#888' }}>
                        Afbeelding Project 3
                    </div>
                    <h2 style={{ marginBottom: '10px' }}>Predictive Maintenance</h2>
                    <p>
                        Een model dat voorspelt wanneer machines onderhoud nodig hebben, gebaseerd op sensordata.
                        Toegepast bij een productiebedrijf in de regio.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Producten;
