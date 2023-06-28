import React from "react";
import './style.css';
import CollabLogo from '../../images/logo.png';
import WhiteLogo from '../../images/white-logo.png';

const Logo = ({className = ""}) => (
    <img src={`${className}.png`} alt='Logo CollabCode' className={`${className}`} />) 


export default Logo;

// const AboutLink = ({className = ""}) => (
//     <a href="#to-do" className={`about-link ${className}`}>
//       About
//     </a> 
//   )
  
//   export default AboutLink;