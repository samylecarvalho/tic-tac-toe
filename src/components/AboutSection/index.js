import React from "react";
// import Logo from "../../objects/Logo";
import AboutLink from "../../objects/AboutLink";
import IconClose from "../../objects/IconClose";
import Content from "../../objects/Content";
import "./style.css";


const AboutSection = () => (
    <article className="section -about">    
    <header className="header -white" >
        {/* <Logo className="white-logo" /> */}
        <AboutLink className="-light" />
        <IconClose />
    </header>
        <Content />
    
    </article>
)

export default AboutSection;    