import React from 'react';
import './App.css';
import Avatar from "./images/avatar.png";

import Hashtag from './components/Hashtag';
import Header from './components/Header';
import Checkbox from './objects/Checkbox';
import About from './objects/About';
import HeaderInternal from './HeaderInternal';
import AvatarProfile from './objects/AvatarProfile';
import Content from './objects/Content';

const App = () => (
  <main className="app">
      <Header />
      <Hashtag />
      <Checkbox id="show" value="show" type="checkbox" content="Mostrar eventos" />
      <About>
        <HeaderInternal />
        <AvatarProfile src={Avatar} alt={"Avatar Samyle Carvalho"} />
        <Content />
      </About>      
  </main>
);  

export default App;
