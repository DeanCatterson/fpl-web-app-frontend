import './LeagueDetails.css';

import React, { useState } from "react";


import Table from 'react-bootstrap/Table';


function LeagueDetails({ leagueDetails }) {
    const [league, setLeague] = useState({});

    return (
			<Table striped bordered hover>
                // TODO populate this table with the list of teams
			</Table>
    );
}

export default LeagueDetails;