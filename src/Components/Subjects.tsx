import React from "react";
import "./Subjects.css"

function Subjects() {

    return (
        <div className="app-content" id="subjects">
            <div className="app-content-container course">
                <h1 className="course-header" id="about">Le materie <b>trattate</b></h1>
                <div className="course-row">
                    <div className="minicard">
                        <h2>Informatica</h2>
                        <p>Sviluppo <b>software</b> in <b>Java</b> e siti con <b>HTML</b>.</p>
                    </div>
                    <div className="minicard">
                        <h2>TPSIT</h2>
                        <p>Studio dei <b>sistemi informatici</b> e <b>algoritmi</b></p>
                    </div>
                </div>
                <div className="course-row">
                    <div className="minicard">
                        <h2>Sistemi e reti</h2>
                        <p>Studio delle <b>reti</b>, <b>protocolli</b> e componenti <b>PC</b></p>
                    </div>
                    <div className="minicard">
                        <h2>TLC</h2>
                        <p>Studio dei <b>circuiti</b> e della <b>corrente elettrica</b></p>
                    </div>
                </div>
                <p>Rimangono alcune materie dal <b>biennio comune</b>:</p>
                <ul>
                    <li>Lingua e letteratura italiana</li>
                    <li>Storia</li>
                    <li>Matematica</li>
                    <li>Inglese</li>
                    <li>Religione</li>
                </ul>
            </div>
        </div>
    );
}

export default Subjects;