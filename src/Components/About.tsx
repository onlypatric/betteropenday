import React from "react";
import "./About.css"
import Logo from "../Assets/Swift.svg"

function About() {
    return (
        <div className="app-content" id="about">
            <div className="app-content-container">
                <h1 className="course-header"> <img src={Logo} alt="" /> Il Corso di Informatica: <b>Un'Analisi Approfondita</b></h1>

                <p>Il corso di informatica offre una panoramica completa dei principali linguaggi di programmazione e concetti fondamentali nel campo dell'informatica. Verrete introdotti a <b>Java</b> e <b>HTML</b>, utilizzati per lo sviluppo di applicazioni web e software. Inoltre, il corso approfondirà i linguaggi <b>C</b> e <b>C++</b>, fondamentali per la programmazione di sistema e la comprensione dei livelli più bassi del software.</p>

                <p>Nel contesto di sistemi e reti informatiche, gli studenti acquisiranno conoscenze dettagliate sulla <b>configurazione dei PC</b> e la <b>progettazione di reti complesse</b>. Il corso metterà l'accento su progetti pratici, consentendo agli studenti di applicare le loro competenze in scenari reali e di sviluppare soluzioni creative.</p>

                <h2>Argomenti Principali:</h2>
                <ul>
                    <li>Linguaggi di Programmazione: <b>Java</b>, <b>HTML</b>, <b>C</b>, <b>C++</b></li>
                    <li>Progettazione e Configurazione di <b>PC</b></li>
                    <li>Architettura di <b>Reti Informatiche</b></li>
                    <li>Creazione di <b>circuiti intelligenti</b></li>
                </ul>

                <h2>Obiettivi del Corso:</h2>
                <p>Alla fine del corso, sarai in grado di sviluppare applicazioni interattive, comprendere l'architettura dei sistemi informatici e progettare reti aziendali.</p>
            </div>
        </div>
    );
}

export default About;