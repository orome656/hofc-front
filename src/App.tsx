import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import MatchService from './MatchService';
import { Match } from './models/Match';
import MatchList from './views/MatchList';
import Main from './views/Main';
import Header from './views/Header';

function App() {
  const [view, setView] = useState("matchs")

  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
