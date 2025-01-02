import React from 'react'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
 
import Home from './components/Home';
import About from './components/About';
import Experince from './components/Experience';
import Skill from './components/Skill';
import Projects from './components/Projects';


function App() { 
  return ( 
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="exp" element={<Experince />} />
      <Route path="skil" element={<Skill/>} />
      <Route path="proj" element={<Projects/>} />
    </Routes>
  </Router>
      ); 
       } 
       
       export default App; 
