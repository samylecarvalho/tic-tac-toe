import React from "react";
import "./style.css";

import TwitterIcon from "../../images/icon-twitter.png";
import InstagramIcon from "../../images/icon-instagram.png";
import GithubIcon from "../../images/icon-github.png";
import LinkedInIcon from "../../images/icon-linkedin.png";


const Social = () => (
    <nav className="social">
        <a href='https://github.com/samylecarvalho/' target="blank"><img src={GithubIcon} 
            alt='Github Icon' className="icon -github"></img></a>
        <a href='https://www.linkedin.com/in/samylecarvalho' target="blank"><img src={LinkedInIcon} 
            alt='LinkedIn Icon' className="icon -linkedin"></img></a>
        <a href='https://www.instagram.com/samylecarvalho/' target="blank"><img src={InstagramIcon} 
            alt='Instagram Icon' className="icon -instagram"></img></a>
        <a href='https://twitter.com/s4myle' target="blank"><img src={TwitterIcon} 
            alt='Twitter Icon' className="icon -twitter"></img></a>
    </nav>
)

export default Social;
