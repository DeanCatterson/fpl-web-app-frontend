import React, { useState } from "react";

import './App.css';

import ViewTeam from '../team/ViewTeam';
import ViewLeague from '../league/ViewLeague';
import { Button } from "react-bootstrap";

function App() {

  const [view, setView] = useState('league');

  const toggleView = () => {
    console.log('XXXXX view: ', view);
    setView((prevView) => (prevView === "league" ? "team" : "league"));
  };

  // function handleViewChange() {
  //   console.log('XXXXX view: ', view)

  //   if (view === 'team') {
  //     setView('league');
  //   } 
  // };

  // TODO: add dropdown for user to select whether they want to look at teams or leagues
  return (
    <div>
      <h1>FPL Web App Frontend</h1>
      <Button onClick={ toggleView }>
        Toggle View
      </Button>
      { view === 'team' ? <ViewTeam /> : <ViewLeague />  }
    </div>
  );
}

export default App;
