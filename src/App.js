import React from 'react';
import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a href='#' className="action">ABOUT</a>
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <div className='App-section'>
          <p>TIC TAC TOE </p>
      </div>
    </div>
  );
}

export default App;
