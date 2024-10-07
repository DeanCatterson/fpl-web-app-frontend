import React, { useState } from "react";

import './App.css';

import ViewTeam from '../team/ViewTeam';
import ViewLeague from '../league/ViewLeague';
import { ToggleSlider }  from "react-toggle-slider";

// TODO: refactor to move from functional to class based components
function App() {

  const [view, setView] = useState('league');

  const toggleView = () => {
    setView((prevView) => (prevView === "league" ? "team" : "league"));
  };

  function renderSwitch(view) {
    switch(view) {
      case 'team':
        return <ViewTeam className="teamViewContainer"/>;
      default:
        return <ViewLeague className="leagueViewContainer"/>;
    }
  }

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


      {/* {renderSwitch(view)} */}

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
