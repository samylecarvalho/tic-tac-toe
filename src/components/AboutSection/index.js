import React from "react";
import "./style.css";

import Content from "../../objects/Content";
import Logo from "../../objects/Logo";
import AboutLink from "../../objects/AboutLink";
import IconClose from "../../objects/IconClose";
import Header from "../Header";


const AboutSection = () => (
    <article className="section -about">    
        <Header className="-light">
            <Logo className="-white" />
            <AboutLink className="-light" />
            <IconClose />
        </Header>
            <Content />
    </article>
)

export default AboutSection;    