import React from "react";
import AvatarProfile from '../../objects/AvatarProfile';
import Avatar from '../../images/avatar.png';
import IconSocial from "../../objects/IconSocial";
import "./style.css";
import GitHub from '../../images/icon-github.png';
import LinkedIn from '../../images/icon-linkedin.png';
import Twitter from '../../images/icon-twitter.png';
import Instagram from '../../images/icon-instagram.png';


const ProfileUser = () => (
  <dl className="profile-user" >
    <dd className="avatar">
      <AvatarProfile src={Avatar} alt={"Avatar Samyle Carvalho"} />
    </dd>
    <dt className="title">Samyle Carvalho</dt>
    <dd className="description">
      Brazilian based in Toronto. I have a BA in Psychology and am looking for my first Front-End/UX opportunity. Currently learning HTML, CSS JavaScript and React.
    </dd>
    <dd className="socials">
      <IconSocial src={GitHub} alt="GitHub icon"/>
      <IconSocial src={LinkedIn} alt="LinkedIn icon"/>
      <IconSocial src={Twitter} alt="Twitter icon"/>
      <IconSocial src={Instagram} alt="Instagram icon"/>
    </dd>
  </dl>
);


export default ProfileUser;
