import React from "react";
import CollabLogo from '../../images/logo.png';
import WhiteLogo from '../../images/white-logo.png';
import './style.css';

function Logo({ className = ""}) {
    if (className === "logo") {
        return (<img src={CollabLogo} alt='Logo CollabCode' className="logo" />);
    } else {
        return (<img src={WhiteLogo} alt='Logo CollabCode' className="white-logo" />);}
};

export default Logo;
