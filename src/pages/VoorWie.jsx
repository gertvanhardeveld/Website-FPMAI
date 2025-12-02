import React from 'react';
const VoorWie = () => {
    return (
        <div className="container">
            <h1 className="section-title">Voor wie</h1>
            <img
                src={`${import.meta.env.BASE_URL}voor-wie-visual.jpg`}
                alt="Studenten werken samen aan AI project"
                style={{
                    float: 'right',
                    marginLeft: '30px',
                    marginBottom: '20px',
                    maxWidth: '400px',
                    borderRadius: '8px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                }}
            />

            <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#333', marginBottom: '30px' }}>
                Volg je voltijds onderwijs en heb je je propedeuse behaald dan kun je deelnemen aan deze minor. Je werkt vanuit eigen vraagstellingen en binnen de context van je eigen beroepsopleiding en je toekomstig beroep en daarom is er geen specifieke voorkennis vereist.
            </p>

            <h2 style={{ color: 'var(--hu-blue)', marginBottom: '15px', marginTop: '30px' }}>Iedereen die AI proof wil worden</h2>
            <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#333', marginBottom: '30px' }}>
                De minor is bedoeld voor alle HBO studenten die hun AI- en digitale vaardigheden willen verbeteren. Of je nu in de gezondheidszorg, techniek, creatieve sector, onderwijs, economie of een ander vakgebied studeert: deze minor helpt jou beter voorbereid de arbeidsmarkt op te gaan.
            </p>

            <h2 style={{ color: 'var(--hu-blue)', marginBottom: '15px', marginTop: '30px' }}>Als premaster voor HCAI en MDDD</h2>
            <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#333' }}>
                Ben je van plan na je bachelor nog een master in AI te gaan volgen dan is deze minor de perfecte voorbereiding daarop. Veel van de AI masters vereisen al technische kennis op het terrein van programmeren en/of wiskundige kennis op data gebied. Als je kiest voor deze minor ga je aan leervragen werken die je voorbereiden voor de twee HU masters: HCAI en MDDD. Beide masters kennen een ingangstoets en tijdens deze minor kun je deze toets al maken en zo zorgen dat je voldoet aan de ingangseisen van deze AI masters. Onze eigen ICT opleiding verzorgt de master Human Centered AI (HCAI) en zo kom je ook al je toekomstig vakdocenten en coaches tegen.
            </p>
        </div >
    );
};

export default VoorWie;
