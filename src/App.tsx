import { useState } from 'react';
import './App.css';
import Main from './views/Main';
import Header from './views/Header';

function App() {
  const [view, setView] = useState("classement")

  return (
    <div className="App">
      <Header onViewChange={setView} />
      <Main currentView={view}/>
    </div>
  );
}

export default App;
