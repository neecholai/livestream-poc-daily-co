import React from 'react';
import './App.scss';
import Routes from './Routes';
import SiteNav from './Nav';

function App() {
  return (
    <div className="App">
      <SiteNav />
      <Routes />
    </div>
  );
}

export default App;
