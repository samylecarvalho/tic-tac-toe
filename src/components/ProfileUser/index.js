import React from "react";
import AvatarProfile from '../../objects/AvatarProfile';
import Avatar from '../../images/avatar.png';
import "./style.css";


const ProfileUser = () => (
  <dl className="profile-user" >
    <dd className="avatar">
      <AvatarProfile src={Avatar} alt={"Avatar Samyle Carvalho"} />
    </dd>
    <dt className="title">Samyle Carvalho</dt>
    <dd className="description">
      Brazilian based in Toronto. I have a BA in Psychology and am looking for my first Front-End/UX opportunity. Currently learning HTML, CSS JavaScript and React.
    </dd>
  </dl>
);


export default ProfileUser;
