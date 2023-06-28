import React from "react";
import "./style.css";

import Logo from "../../objects/Logo";
import AboutLink from "../../objects/AboutLink";
import Menu from "../../objects/Menu";


const Header = ({className = ""}) => (
    <header className="header">
        <Logo className="logo" />
        <AboutLink />
        <Menu />
    </header>
);

export default Header;
