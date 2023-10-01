import React from "react";
import "./style.css";

import AboutLink from "../../objects/AboutLink";
import IconClose from "../../objects/IconClose";
import LogoCollab from "../../objects/LogoCollab";
import Menu from "../../objects/Menu";


function Header({className = ""}) {
    if (className === "-light") { 
        return (
            <header className={`header ${className}`} >
                <LogoCollab light />
                <AboutLink className="-light" />
                <IconClose />
            </header>); 
    } else {
        return (
            <header className="header" >
                <LogoCollab className="logo-collab" />
                <AboutLink />
                <Menu />
            </header>) 
        }
}

export default Header;