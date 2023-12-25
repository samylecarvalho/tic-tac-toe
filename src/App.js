import React from 'react';
import './App.css';

import HeaderInternal from './HeaderInternal';
import Hashtag from './components/Hashtag';
import Header from './components/Header';
import About from './objects/About';
import Checkbox from './objects/Checkbox';
import Content from './objects/Content';
import ProfileUser from './components/ProfileUser';

const App = () => (
  <main className="app">
      <Header />
      <Hashtag />
      <Checkbox id="show" value="show" type="checkbox" content="Mostrar eventos" />
      <About>
        <HeaderInternal />
        <ProfileUser />
        {/* <Content /> */}
      </About>      
  </main>
);  

export default App;
