import React from "react";
import "./style.css";

const AboutLink = ({className = ""}) => (
  <a href="#to-do" className={`about-link ${className}`}>
    About
  </a> 
)

export default AboutLink;