import React, { useState } from 'react';
import NavBar from './NavBar';
import Home from './pages/Home';
import About from './pages/About';
import MyWork from './pages/MyWork/MyWork';
import Contact from './pages/Contact';


function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
      {currentPage==="Home"? <Home /> : 
      currentPage==="about-me"? <About /> : 
      currentPage==="my-work"? <MyWork /> : 
      currentPage==="contact-me"? <Contact /> :
      null }
    </div>
  );
}

export default PortfolioContainer;
