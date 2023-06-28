import React from "react";
import AboutLink from "../../objects/AboutLink";
import Content from "../../objects/Content";
import IconClose from "../../objects/IconClose";
import "./style.css";


const AboutSection = () => (
    <article className="section -about">    
    <header className="header -white" >
        <AboutLink className="-light" />
        <IconClose />
    </header>
        <Content />
    
    </article>
)

export default AboutSection;    