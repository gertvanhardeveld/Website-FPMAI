import React from 'react';

import { Helmet } from 'react-helmet-async';

// Programma component
const Programma = () => {
    return (
        <div className="container">
            <Helmet>
                <title>Programma - Futureproof met AI!</title>
                <meta name="description" content="Ontdek het programma van de Minor AI. Werk in sprints aan Research Stories, User Stories en Learning Stories. Leer bouwen met AI en vibecoding." />
            </Helmet>
            <h1 className="section-title">Programma</h1>
            <img
                src={`${import.meta.env.BASE_URL}programma_intro.jpg`}
                alt="Student werkt aan AI chatbot"
                style={{
                    float: 'right',
                    marginLeft: '30px',
                    marginBottom: '20px',
                    maxWidth: '400px',
                    borderRadius: '8px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                }}
            />
            <p style={{ marginBottom: '20px' }}>
                Tijdens deze minor ga je aan de slag met een eigen AI-vraagstuk. In de eerste 10 weken onderzoek je hoe AI jouw toekomstige beroep beïnvloedt. Hoe verandert het werk en welke slimme toepassingen zijn daarvoor nodig? Tijdens dit onderzoek ontdek en gebruik je verschillende AI-tools, waardoor je digitale vaardigheden een flinke boost krijgen. In de volgende 10 weken bedenk en ontwikkel je een eigen AI-oplossing. Je onderzoekt wat er nodig is om deze succesvol in de praktijk toe te passen. Misschien maak je zelfs een eerste toepassing die jouw vakgebied écht verandert. Er zijn al genoeg inspirerende voorbeelden, zoals:
            </p>
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '20px', lineHeight: '1.6' }}>
                <li>Adaptieve leerplatformen in het onderwijs</li>
                <li>Contentcreatie in online marketing</li>
                <li>Voorspellende rechtspraak in recht</li>
                <li>Slimme oplossingen voor stroomgebruik bij huishoudens</li>
                <li>Autonome voertuigen in transport</li>
                <li>Fraudedetectie bij banken en verzekeraars</li>
                <li>Diagnoses in de gezondheidszorg</li>
            </ul>

            {/* Figure 1: Sprint Process */}
            <h1>Onderzoeken, maken en leren in sprints</h1>
            <p style={{ marginBottom: '30px' }}>
                Je gaat werken in sprint van 2 weken. Zo werk je gedurende de minor in 8 sprint naar een eindproduct.
            </p>
            <div style={{ marginBottom: '30px', textAlign: 'center' }}>
                <img
                    src={`${import.meta.env.BASE_URL}sprint_proces.png`}
                    alt="Sprint proces"
                    style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                />
            </div>

            <p style={{ marginBottom: '30px' }}>
                Tijdens een sprint werk je aan ongeveer vijf activiteiten die je binnen de sprint kunt afronden. Hierdoor leer je iedere sprint voldoende vaardigheden en lever je al direct waardevolle eindproducten. In analogie met de Scrum methode spreken we daarbij over drie typen stories.
            </p>

            {/* Stories Table */}
            <div style={{ overflowX: 'auto', marginBottom: '30px' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '10px' }}>
                    <thead>
                        <tr style={{ backgroundColor: 'var(--hu-blue)', color: 'white' }}>
                            <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #ddd' }}>Type Story</th>
                            <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #ddd' }}>Voorbeeld</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{ padding: '12px', border: '1px solid #ddd', fontWeight: 'bold' }}>Research Stories (RS)</td>
                            <td style={{ padding: '12px', border: '1px solid #ddd' }}>Als bedrijfskundige, wil ik weten wat de impact is van AI op het stroomlijnen van processen, zodat ik bijblijf in mijn vak</td>
                        </tr>
                        <tr style={{ backgroundColor: '#f9f9f9' }}>
                            <td style={{ padding: '12px', border: '1px solid #ddd', fontWeight: 'bold' }}>User Stories (US)</td>
                            <td style={{ padding: '12px', border: '1px solid #ddd' }}>Als bedrijfskundige, wil ik het proces van nieuwsbrieven maken en publiceren met een N8N workflow automatiseren, zodat we hiermee 4 uur per week tijd besparen</td>
                        </tr>
                        <tr>
                            <td style={{ padding: '12px', border: '1px solid #ddd', fontWeight: 'bold' }}>Learning Stories</td>
                            <td style={{ padding: '12px', border: '1px solid #ddd' }}>Als bedrijfskundige, wil ik leren hoe je met workflow tools (n8N, Make.com) procesflows kan ontwerpen en in productie stellen, zodat ik dat kan gebruiken in mijn User Storie nieuwsbrief maken</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Research Story Image Floating Right - Placed before text blocks to allow wrapping */}
            <img
                src={`${import.meta.env.BASE_URL}research_story.png`}
                alt="Research Story"
                style={{
                    float: 'right',
                    width: '33%',
                    marginLeft: '30px',
                    marginBottom: '20px',
                    borderRadius: '8px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                }}
            />

            <p style={{ marginBottom: '30px' }}>
                Voor iedere story bedenk je ook altijd acceptatie criteria en kwaliteitscriteria waaraan die moet voldoen. Hierdoor weet je precies wanneer de story af is (acceptatie) en wanneer die goed is (kwaliteit). De Story’s moet je vastleggen in Portflow als een activiteit. Wanneer de Story gereed is kun je het eindproduct dat dat oplevert koppelen aan de activiteit en de juiste leeruitkomst die daarmee te maken heeft.
            </p>

            <div style={{ marginBottom: '40px' }}>
                <p>
                    In het figuur hiernaast zie je een compleet uitgewerkte Research Story in Portflow. Onderaan zie je ook aan welke leeruitkomsten de Research Story is gekoppeld. Aan het einde van iedere sprint maak je een zelfevaluatie en is er het Show & Tell moment.
                </p>
            </div>

            <section style={{ marginBottom: '30px' }}>
                <h2 style={{ color: 'var(--hu-blue)', marginBottom: '15px' }}>Zelfevaluatie</h2>
                <p>
                    In de zelfevaluatie geef je per leeruitkomst geef aan wat je hebt gemaakt en licht je dat toe met concrete producten die de leeruitkomst ondersteunen. Ook geef je aan of je vindt dat je voldoende hebt gepresteerd op deze leeruitkomst.
                </p>
            </section>

            <section style={{ marginBottom: '30px' }}>
                <h2 style={{ color: 'var(--hu-blue)', marginBottom: '15px' }}>Show & Tell</h2>
                <p>
                    Tijdens het Show & Tell moment laat je zien wat je hebt gemaakt en vertel je hoe je dit hebt gedaan en wat je ervan hebt geleerd. Dit doe je altijd samen met je coach en een aantal medestudenten.
                    Van de coach en je medestudenten krijg je feedback. Deze feedback verwerkt een andere student, zodat je kunt concentreren op de feedback die je krijgt.
                </p>
            </section>

            <div style={{ clear: 'both' }}></div>

            <section style={{ marginBottom: '30px' }}>
                <h2 style={{ color: 'var(--hu-blue)', marginBottom: '15px' }}>Beoordeling sprint</h2>
                <p>
                    Tijdens het Show & Tell moment beoordeelt de coach direct je zelfevaluatie aan de hand van wat je laat zien en vertelt. De coach geeft je dan ook direct een beoordeling van de leeruitkomsten die je hebt laten zien in deze sprint (voldoende of onvoldoende). Op basis van alle feedback die je hebt gekregen maak je vervolgens een eigen reflectie in wat goed ging en je de volgende keer beter wilt doen. Dit is de laatste activiteit van je sprint.
                </p>
            </section>
        </div>
    );
};

export default Programma;
