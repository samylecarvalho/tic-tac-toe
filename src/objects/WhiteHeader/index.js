import React from "react";
import "./style.css";
import WhiteLogo from "../WhiteLogo";
import About from "../About";
import CloseButton from "../CloseButton";


const WhiteHeader = () => (
    <header className="header -white">
        <WhiteLogo />
        <About />
        <CloseButton />
    </header>
)

export default WhiteHeader;