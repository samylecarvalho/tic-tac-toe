import React from 'react';
import './App.css';

import Header from './components/Header';
import Hashtag from './components/Hashtag';
import Input from './objects/Input';
import Label from './objects/Label';

const App = () => (
      <main className="app">
        <Header />
        <Hashtag />
        <Input value="show" />
        <Label content="Mostrar eventos" />
      </main>
  );

export default App;
