import React from 'react';
import logo from './logo.svg';
import Header from './Components/Header'
import './App.css';

function App() {
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <Header />
    </div>
  );
}

export default App;
