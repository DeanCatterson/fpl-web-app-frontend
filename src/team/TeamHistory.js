import './Team.css';

import React, { useState } from "react";

import Table from 'react-bootstrap/Table';


function TeamHistory({ history }) {


    return (
        <div className='teamHistoryContainer'>
            <a>Hello World!</a>
            <p> No of completed seasons: {history.numberOfCompletedSeasons} </p>
        </div>
    );
}


export default TeamHistory;