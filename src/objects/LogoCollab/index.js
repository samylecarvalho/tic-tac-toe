import React from "react";
import './style.css';
import CollabLogo from '../../images/logo.png';
import WhiteLogo from '../../images/white-logo.png';

const LogoCollab = ({ light }) =>  (
    <img className="logo-collab" 
        src={light ? WhiteLogo : CollabLogo} 
        alt="Logo da CollabCode" 
    />
);

export default LogoCollab;
