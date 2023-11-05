import React from "react";
import "./Subjects.css"
import Logo2 from "../Assets/Materials.svg"

function Subjects() {

    return (
        <div className="app-content" id="subjects">
            <div className="app-content-container course">
                <h1 className="course-header" id="about"> <img src={Logo2} alt="" style={{paddingRight:"10px"}}/>Le materie <b>trattate</b></h1>
                <div className="course-row">
                    <div className="minicard">
                        <h2>Informatica</h2>
                        <p>Sviluppo <b>software</b> in <b>Java</b> e siti con <b>HTML</b>.</p>
                        <p style={{ color: "#ddd" }}><b>6H/SETTIMANA</b></p>
                    </div>
                    <div className="minicard">
                        <h2>TPSIT</h2>
                        <p>Studio dei <b>sistemi informatici</b> e <b>algoritmi</b></p>
                        <p style={{ color: "#ddd" }}><b>3H/SETTIMANA</b></p>
                    </div>
                </div>
                <div className="course-row">
                    <div className="minicard">
                        <h2>Sistemi e reti</h2>
                        <p>Studio delle <b>reti</b>, <b>protocolli</b> e componenti <b>PC</b></p>
                        <p style={{ color: "#ddd" }}><b>5H/SETTIMANA</b></p>
                    </div>
                    <div className="minicard">
                        <h2>TLC</h2>
                        <p>Studio dei <b>circuiti</b> e della <b>corrente elettrica</b></p>
                        <p style={{ color: "#ddd" }}><b>3H/SETTIMANA</b></p>
                    </div>
                </div>
                <p>Rimangono alcune materie dal <b>biennio comune</b>:</p>
                <ul>
                    <li>Lingua e letteratura italiana <br /><p style={{ color: "#aaa", margin: "0", padding: "0", paddingBottom: "10px" }}><b>4H/SETTIMANA</b></p></li>
                    <li>Storia <br /><p style={{ color: "#aaa", margin: "0", padding: "0", paddingBottom: "10px" }}><b>2H/SETTIMANA</b></p></li>
                    <li>Matematica <br /><p style={{ color: "#aaa", margin: "0", padding: "0", paddingBottom: "10px" }}><b>4H/SETTIMANA</b></p></li>
                    <li>Inglese <br /><p style={{ color: "#aaa", margin: "0", padding: "0", paddingBottom: "10px" }}><b>4H/SETTIMANA</b></p></li>
                    <li>Religione<br /><p style={{ color: "#aaa", margin: "0", padding: "0", paddingBottom: "10px" }}><b>1H/SETTIMANA</b></p></li>
                </ul>
            </div>
        </div>
    );
}

export default Subjects;