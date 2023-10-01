import React from "react";
import "./style.css";

import AboutLink from "../../objects/AboutLink";
import Content from "../../objects/Content";
import IconClose from "../../objects/IconClose";
import LogoCollab from "../../objects/LogoCollab";
import Header from "../Header";


const AboutSection = () => (
    <article className="section -about">    
        <Header className="-light">
            <LogoCollab className="-white" />
            <AboutLink className="-light" />
            <IconClose />
        </Header>
            <Content />
    </article>
)

export default AboutSection;    