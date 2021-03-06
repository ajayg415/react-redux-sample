import React from 'react';

import Search from './components/Search';
import Display from './components/Display'

import './App.css';

function App() {
  return (
    <div className="App container mt-5">
      <header className="App-header">
        <Search/>
        <Display/>
      </header>
    </div>
  );
}

export default App;
