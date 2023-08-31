import React from "react";
import './style.css';

import CollabLogo from '../../images/logo.png';
import WhiteLogo from '../../images/white-logo.png';

function Logo({ className = ""}) {
    if (className === "-white") {
        return (<img src={WhiteLogo} alt='Logo CollabCode' className={`logo ${className}`}/>);
    } else {
        return (<img src={CollabLogo} alt='Logo CollabCode' className="logo" />);}
};

export default Logo;
