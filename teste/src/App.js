import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/navbar';
import Footer from './components/footer'
import Home from './paginas/home';
import DefinicaoTrello from './paginas/DefinicaoTrello';
import MeusQuadros from './paginas/MeusQuadros';
import Scrum from "./paginas/Scrum";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/DefinicaoTrello" element={<DefinicaoTrello/>} />
        <Route path="/Scrum" element={<Scrum/>} />
        <Route path="/MeusQuadros" element={<MeusQuadros/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
