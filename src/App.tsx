import React from 'react';
import './App.css';
import Header from './Components/Header';
import About from './Components/About';
import Projects from './Components/Projects';
import Subjects from './Components/Subjects';
import Opportunities from './Components/Opportunities';
import Skills from './Components/Skills';
import Ending from './Components/Ending';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <About></About>
      <Subjects></Subjects>
      <Projects></Projects>
      <Opportunities></Opportunities>
      <Skills></Skills>
      <Ending></Ending>
    </div>
  );
}

export default App;
