import React from 'react';
import './App.css';

import Header from './components/Header';
import Hashtag from './components/Hashtag';
import Checkbox from './objects/Checkbox';
import AboutSection from './components/AboutSection';

const App = () => (
  <>
    <main className="app">
      <section className="section -main">
        <Header />
        <Hashtag />
        <Checkbox id="show" value="show" type="checkbox" content="Mostrar eventos" />   
      </section>
      <AboutSection />
    </main>
  </>
);  

export default App;
