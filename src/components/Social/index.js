import React from "react";
import "./style.css";

import TwitterIcon from "../../images/icon-twitter.png";
import InstagramIcon from "../../images/icon-instagram.png";
import GithubIcon from "../../images/icon-github.png";
import LinkedInIcon from "../../images/icon-linkedin.png";


const Social = () => (
    <div className="social">
        <a><img href='#to-do'src={TwitterIcon} alt='Twitter Icon' className="icon -twitter"></img></a>
        <a><img href='#to-do'src={InstagramIcon} alt='Instagram Icon' className="icon -instagram"></img></a>
        <a><img href='#to-do'src={GithubIcon} alt='Github Icon' className="icon -github"></img></a>
        <a><img href='#to-do'src={LinkedInIcon} alt='LinkedIn Icon' className="icon -linkedin"></img></a>
    </div>
)

export default Social;
