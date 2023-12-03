import React from "react";
import AvatarProfile from '../../objects/AvatarProfile';
import Avatar from '../../images/avatar.png';


const ProfileUser = () => (
  <dl>
    <dd>
      <AvatarProfile src={Avatar} alt={"Avatar Samyle Carvalho"} />
    </dd>
    <dt>Samyle Carvalho</dt>
    <dd>
      Brazilian based in Toronto. I have a BA in Psychology and am looking for my first Front-End/UX opportunity. Currently learning HTML, CSS JavaScript and React.
    </dd>
  </dl>
);


export default ProfileUser;
