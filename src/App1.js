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
      测试页面
    </div>
  );
}

export default App;
