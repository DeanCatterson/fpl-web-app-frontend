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

      {/* // TODO: fix styles for toggle & prompt */}
      <div className="col-half-width">
        <div className="viewSelector">
          <p className="viewSelectorLabel">Toggle view</p>
          <ToggleSlider className="viewSelector" onToggle={ toggleView }/>
        </div>
      </div>


      {renderSwitch(view)}
      </body>

      <footer className="footer"></footer>
    </div>
  );
}

export default App;
