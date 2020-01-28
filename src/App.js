import React from 'react';

import Search from './components/Search';
import Display from './components/Display'

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Search/>
        <Display/>
      </header>
    </div>
  );
}

export default App;
