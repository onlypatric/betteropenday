import React from "react";
import "./Opportunities.css"
import Logo2 from "../Assets/Sig.svg"

function Ending() {
    return (
        <><div className="opportunities" id="">
            <div className="opportunities-container" style={{maxWidth:"600px"}}>
                <h1 className="course-header"><img src={Logo2} alt="" style={{ paddingRight: "10px" }} />Grazie mille!</h1>
                <p style={{fontSize:"larger"}}>La presentazione è finita, sui PC davanti a voi c'è un progetto destinato all'<b>openday</b>, avete l'occasione di provarlo in anteprima, e nel mentre fare domande.</p>
            </div>
        </div>
        <div className="end">
            <p>Sito web realizzato da Patric Pintescul, presentato dai gruppi incaricati.</p>
        </div>
        </>
    );
}

export default Ending;