import React from 'react';

import HomeIcon from "../assets/images/icons/home.png"
import AboutMeIcon from "../assets/images/icons/about-me.png"
import MyWorkIcon from "../assets/images/icons/my-work.png"
import ContactMeIcon from "../assets/images/icons/contact-me.png"

import "./NavBar.css"

function NavBar(props) {
  return (
    <nav className="">
      <a href="#home" onClick={() => props.handlePageChange('Home')}><img src={HomeIcon}/></a>
      <a href="#about-me" onClick={() => props.handlePageChange('about-me')}><img src={AboutMeIcon}/></a>
      <a href="#my-work" onClick={() => props.handlePageChange('my-work')}><img src={MyWorkIcon}/></a>
      <a href="#contact-me" onClick={() => props.handlePageChange('contact-me')}><img src={ContactMeIcon}/></a>
    </nav>
  );
}

export default NavBar;
