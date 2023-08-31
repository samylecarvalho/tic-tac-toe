import React from "react";
import "./style.css";

import Logo from "../../objects/Logo";
import AboutLink from "../../objects/AboutLink";
import Menu from "../../objects/Menu";
import IconClose from "../../objects/IconClose";


function Header({className = ""}) {
    if (className === "-light") { 
        return (
            <header className={`header ${className}`} >
                <Logo className="-white" />
                <AboutLink className="-light" />
                <IconClose />
            </header>); 
    } else {
        return (
            <header className="header" >
                <Logo className="logo" />
                <AboutLink />
                <Menu />
            </header>) 
        }
}

export default Header;