import React from "react";
import "./Skills.css"
import Logo2 from "../Assets/Skills.svg"

function Skills() {
    return (
        <div className="app-content" id="skills">
            <div className="app-content-container">
                <h1 className="course-header"><img src={Logo2} alt="" style={{ paddingRight: "10px" }} />Competenze Acquisite</h1>

                <p>Dopo aver completato il nostro corso di informatica, gli studenti avranno acquisito una serie di competenze fondamentali nel campo della tecnologia. Queste competenze includono:</p>

                <ul>
                    <li><b><u>Gestione di Progetti:</u></b> Capacità di pianificare, organizzare e gestire progetti informatici complessi.</li>
                    <li><b><u>Teamwork:</u></b> Abilità nel lavorare in team, collaborare con colleghi e comunicare efficacemente.</li>
                    <li><b><u>Sviluppo di Applicazioni:</u></b> Esperienza nello sviluppo di applicazioni software per diverse piattaforme.</li>
                    <li><b><u>Sviluppo di Siti Web:</u></b> Conoscenza approfondita nello sviluppo di siti web interattivi e responsive.</li>
                    <li><b><u>Networking:</u></b> Competenze nella progettazione, configurazione e gestione di reti informatiche.</li>
                    <li><b><u>Configurazione di PC:</u></b> Capacità di assemblare, configurare e risolvere problemi hardware e software su computer.</li>
                    <li><b><u>Progettazione di Circuiti:</u></b> Conoscenza degli elementi di base nella progettazione di circuiti elettronici.</li>
                    <li><b><u>Comunicazioni e Codifiche:</u></b> Comprensione delle tecniche di comunicazione e cifratura nel contesto informatico.</li>
                </ul>

                <p>Queste competenze forniranno una solida base per intraprendere diverse carriere nel campo dell'informatica e della tecnologia, consentendo agli studenti di affrontare sfide complesse e contribuire all'innovazione nel settore.</p>
            </div>
        </div>
    );
}

export default Skills;
