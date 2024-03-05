import React from 'react';

import { Link } from "react-router-dom"

import HomeIcon from "../assets/images/icons/home.png"
import AboutMeIcon from "../assets/images/icons/about-me.png"
import MyWorkIcon from "../assets/images/icons/my-work.png"
import ContactMeIcon from "../assets/images/icons/contact-me.png"

import "./NavBar.css"

function NavBar() {
  return (
    <nav className="">
      <Link to="/"><img src={HomeIcon}/></Link>
      <Link to="/About"><img src={AboutMeIcon}/></Link>
      <Link to="/MyWork"><img src={MyWorkIcon}/></Link>
      <Link to="/Contact"><img src={ContactMeIcon} /></Link>
    </nav>
  );
}

export default NavBar;
