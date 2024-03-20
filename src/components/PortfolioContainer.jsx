import React from 'react';
import NavBar from './NavBar';
import Home from './pages/Home';
import About from './pages/About';
import MyWork from './pages/MyWork/MyWork';
import Contact from './pages/Contact';
import { Route, Routes } from "react-router-dom"
import PorjectPage from './pages/MyWork/PorjectPage';
import Background from './Background';


function PortfolioContainer() {

  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/MyWork" element={<MyWork />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/MyWork/:title" element={<PorjectPage />} />
      </Routes>
      <Background/>
    </div>
  );
}

export default PortfolioContainer;
