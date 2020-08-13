import React from 'react';
import logo from './logo.svg';
import Header from './Components/Header'
import MonsterSheet from './Components/MonsterSheet'

import './App.css';

function App() {
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <Header/>
        <MonsterSheet/>
    </div>
  );
}

export default App;
