import React from 'react';
import './App.css';

import Header from './components/Header';
import Hashtag from './components/Hashtag';
import Checkbox from './objects/Checkbox';
import About from './objects/About';



const App = () => (
  <>
    <main className="app">
      <Header />
      <Hashtag />
      <Checkbox id="show" value="show" type="checkbox" content="Mostrar eventos" />
      
      <About />
    </main>
  </>
);  

export default App;
