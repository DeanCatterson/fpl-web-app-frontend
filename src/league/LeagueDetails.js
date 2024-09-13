import './LeagueDetails.css';

import React, { useState } from "react";


import Table from 'react-bootstrap/Table';


function LeagueDetails({ leagueDetails }) {
    const [league, setLeague] = useState({});

    return (
			<Table striped bordered hover>
				<thead>
					<tr>
						<th>id</th>
						<th>Team Name</th>
						<th>Manager Name</th>
						<th>Overall Points</th>
						<th>Overall Rank</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>{leagueDetails.id}</td>
                        <td>{leagueDetails.managerName}</td>
						<td>{leagueDetails.teamName}</td>
						<td>{leagueDetails.points}</td>
						<td>{leagueDetails.overallRank}</td>
					</tr>
				</tbody>			
            </Table>
    );
}

export default LeagueDetails;