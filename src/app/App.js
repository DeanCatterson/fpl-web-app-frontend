import React, { useState } from "react";

import './App.css';

import ViewTeam from '../team/ViewTeam';
import ViewLeague from '../league/ViewLeague';
import { ToggleSlider }  from "react-toggle-slider";

function App() {

  const [view, setView] = useState('league');

  const toggleView = () => {
    setView((prevView) => (prevView === "league" ? "team" : "league"));
  };


  return (
    <div className="applicationContainer">

      {/* TODO: create header featuring logo, nav etc */}
      <header className="header"></header>

      <body className="body">
      <h1 className="applicationTitle">FPL Web App Frontend</h1>

      {/* // TODO: confirm styles for toggle & prompt */}
      <div className="col-half-width">
        <div className="viewSelector">
          <p className="viewSelectorLabel">Toggle view</p>
          <ToggleSlider className="viewSelector" onToggle={ toggleView } barBackgroundColor="#06b7e7"/>
        </div>
      </div>

      { 
        view === 'league' 
        ?
        <ViewLeague className="leagueViewContainer"/>
        :
        <ViewTeam className="teamViewContainer"/> 
      }

      </body>

      <footer className="footer"></footer>
    </div>
  );
}

export default App;
