import React from "react";
import "./Projects.css"
import CityClock from "../Assets/CityClock.jpg"
import Network from "../Assets/Network.jpg"
import Tpsit from "../Assets/TPSIT.jpg"

function Projects() {
    const contactManagerStyle: React.CSSProperties = {
        backgroundImage: `url(${CityClock})`,
    };
    const networkGeneratorStyle: React.CSSProperties = {
        backgroundImage: `url(${Network})`,
    };
    const TpsitStyle: React.CSSProperties = {
        backgroundImage: `url(${Tpsit})`,
    };


    return (
        <div className="app-content projects">
            <div className="app-content-container">
                <h1 className="course-header" id="projects">I nostri progetti <b>recenti</b></h1>
                <div 
                    className="project-card"
                    style={contactManagerStyle}
                >
                    <div className="project-card-info">
                        <h2>Gestore di contatti</h2>
                        <p>Realizzato in <b>Java</b>, il gestore di contatti supporta <b>l'aggiunta, rimozione e modificazione</b> di contatti</p>
                    </div>
                </div>
                <div
                    className="project-card right"
                    style={networkGeneratorStyle}
                >
                    <div className="project-card-info">
                        <h2>Generatore di network</h2>
                        <p>Realizzato per <b>Sistemi e reti</b>, il programma è in grado di <b>fornire tutte le info per una rete aziendale</b>.</p>
                    </div>
                </div>
                <div
                    className="project-card"
                    style={TpsitStyle}
                >
                    <div className="project-card-info">
                        <h2>Studio delle codifiche</h2>
                        <p>Un progetto gestito in team, che tratta della <b>correzione degli errori</b> e <b>codifiche standard</b></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;