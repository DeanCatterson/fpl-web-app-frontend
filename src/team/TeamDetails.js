import './TeamDetails.css';

import React, { useState } from "react";


import Table from 'react-bootstrap/Table';


function TeamDetails({ teamDetails }) {
    const [team, setTeam] = useState({});

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
						<td>{teamDetails.id}</td>
						<td>{teamDetails.teamName}</td>
						<td>{teamDetails.managerName}</td>
						<td>{teamDetails.points}</td>
						<td>{teamDetails.overallRank}</td>
					</tr>
				</tbody>
			</Table>
    );
}

export default TeamDetails;