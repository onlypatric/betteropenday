import React from "react";
import "./Opportunities.css"
import Logo2 from "../Assets/Opportunities.svg"

function Opportunities() {
    return (
        <div className="opportunities" id="experience">
            <div className="opportunities-container">
                <h1 className="course-header"><img src={Logo2} alt="" style={{ paddingRight: "10px" }} />Opportunità post-scuola</h1>

                <p>Dopo aver completato il corso di informatica, avrai una serie di <b>opportunità di carriera</b> in Italia. Il settore tecnologico del paese è in costante crescita, e con la costante innovazione delle tecnologie sono richiesti sempre più <b>sviluppatori</b>, <b>sistemisti</b> ed <b>elettricisti</b>.</p>

                <h2>Scenario Lavorativo in Italia:</h2>
                <p>In Italia, il settore IT è uno dei più <b>dinamici</b> e <b>redditizi</b>. Secondo dati recenti, il tasso di occupazione nel campo dell'informatica è in costante aumento, con un <b>aumento del 15%</b> delle assunzioni negli ultimi due anni. Le aziende italiane sono alla ricerca di professionisti qualificati in ambiti come lo <b>sviluppo software</b>, la <b>sicurezza informatica</b> e l'<b>amministrazione di reti</b>.</p>

                <h2>Facilità nel Trovare Lavoro:</h2>
                <p>Una delle caratteristiche distintive del mercato del lavoro italiano è la sua apertura nei confronti degli esperti di tecnologia, aziende come la <b>Leonardo</b>. Il vantaggio dell'istituto Volta è che <b><i>il diploma è spendibile direttamente a lavoro</i></b>.</p>

                <h2>Prospettive di Crescita:</h2>
                <p>Oltre alla facilità nel trovare lavoro, il settore tecnologico italiano offre anche ampie opportunità di crescita professionale. Con l'<b>esperienza</b>, gli individui possono avanzare verso <b>ruoli di leadership</b>, assumendo <b>responsabilità sempre maggiori</b> all'interno delle organizzazioni.</p>

                <h2>La scuola vi aiuta</h2>
                <p>La scuola viene costantemente contattata da aziende locali alla ricerca di <b>nuovi diplomati</b>, desiderosi di integrarsi nel mondo del lavoro. Queste opportunità sono il risultato della crescente domanda di professionisti nel campo dell'informatica e delle tecnologie.</p>
            </div>
        </div>
    );
}

export default Opportunities;