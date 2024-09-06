import React, { useState } from "react";

import './App.css';

import ViewTeam from '../team/ViewTeam';

function App() {

  const [view, setView] = useState('team');

  // TODO: add dropdown for user to select whether they want to look at teams or leagues
  return (
    <div>
      <h1>FPL Web App Frontend</h1>
      { view === 'team' ? <ViewTeam /> : view === 'league' ? <ViewTeam /> : null }
    </div>
  );
}

export default App;
