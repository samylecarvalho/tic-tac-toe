import React from "react";
import "./style.css";

import Logo from "../../objects/Logo";
import AboutLink from "../../objects/AboutLink";
import Menu from "../../objects/Menu";


const Header = (className = "header") => (
    <header className="header">
        <Logo />
        <AboutLink />
        <Menu />
    </header>
);

export default Header;