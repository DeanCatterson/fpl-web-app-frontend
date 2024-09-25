import React, { useState } from "react";

import './App.css';

import ViewTeam from '../team/ViewTeam';
import ViewLeague from '../league/ViewLeague';
import { Button } from "react-bootstrap";
import { ToggleSlider }  from "react-toggle-slider";


function App() {

  const [view, setView] = useState('league');

  const toggleView = () => {
    console.log('XXXXX view: ', view);
    setView((prevView) => (prevView === "league" ? "team" : "league"));
  };


  return (
    <div className="applicationContainer">
      <h1 className="applicationTitle">FPL Web App Frontend</h1>

      {/* // TODO: fix styles for toggle & prompt */}
      <div className="viewSelector">
        <p className="enterTeamNamePrompt">Toggle view</p>
        <ToggleSlider className="viewSelector" onToggle={ toggleView }/>
      </div>

      { view === 'team' ? <ViewTeam className="teamViewContainer"/> : <ViewLeague className="leagueViewContainer"/>  }
    </div>
  );
}

export default App;
