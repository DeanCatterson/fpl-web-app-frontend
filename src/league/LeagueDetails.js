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
					{leagueDetails.map(team => {
						return (
							<tr>
								<td>{team.id}</td>
								<td>{team.managerName}</td>
								<td>{team.teamName}</td>
								<td>{team.points}</td>
								<td>{team.overallRank}</td>
							</tr>
						);
					})}
				</tbody>			
			</Table>
    );
}

export default LeagueDetails;