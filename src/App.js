import React from 'react';
import './App.css';
import electron from 'electron'
const { ipcRenderer } = electron
function add() {
  ipcRenderer.send('create-window')
}
function App() {
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
