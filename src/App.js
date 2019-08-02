import React from 'react';
import logo from './logo.svg';
import './App.css';
import electron from 'electron'
const { ipcRenderer } = electron
function add() {
  ipcRenderer.send('create-window')
}
function App() {
  return (
    <div className="App">
      <header className="App-header" onClick={add}>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
