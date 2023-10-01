import React from "react";
import "./style.css";

import AboutLink from "../../objects/AboutLink";
import LogoCollab from "../../objects/LogoCollab";
import Menu from "../../objects/Menu";

const Header = () => ( 
    <header className="header" >
        <LogoCollab />
        <AboutLink />
        <Menu />
    </header>
);

export default Header;