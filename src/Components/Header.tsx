import React from 'react';
import './header.css';

let headerInfo = {
    smallTitle:"Corso di Informatica",
    smallTitleSubHeadLine:"Istituto volta"
}

let navComponents = [
    {displayText:"Il Corso",target:"about"},
    {displayText:"Materie",target:"subjects"},
    {displayText:"Progetti",target:"projects"},
    {displayText:"Possibilità lavorative",target:"experience"},
    {displayText:"Skill",target:"skills"}
]

function NavComponent() {
    return (
        <>
            {navComponents.map((component, index) => (
                <a className='nav-component' key={index} href={`#${component.target}`}>
                    {component.displayText}
                </a>
            ))}
        </>
    );
}

function Header() {
    return (
        <header>
            <div className="nav-container">
            <nav>
                <div className="small-title-container">
                    <h2 className="small-title">{headerInfo.smallTitle}</h2>
                    <h4 className='small-title-subheadline'>{headerInfo.smallTitleSubHeadLine}</h4>
                </div>
                <div className="nav-menu-container">
                    <NavComponent />
                </div>
            </nav>
            </div>
            <div className="header-content">
                <div className="course-info">
                    <h1>Corso di Informatica</h1>
                    <p className='desc'>Applicazioni <b>Java</b>, siti web in <b>HTML</b> e algoritmi in <b>C e C++</b></p>
                    <p className='class-desc'>4BI 2023</p>
                </div>
            </div>
        </header>
    );
}

export default Header;
