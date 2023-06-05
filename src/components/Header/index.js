import React from "react";
import "./style.css";

import Logo from "../../objects/Logo";
import About from "../../objects/About";
import Menu from "../../objects/Menu";

const Header = (className = "header") => (
    <header className="header">
        <Logo />
        <About />
        <Menu />
    </header>
);

export default Header;