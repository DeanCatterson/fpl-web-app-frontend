import './Team.css';

import React from "react";

import Table from 'react-bootstrap/Table';

function TeamDetails({ teamDetails, chips }) {
    return (
			<Table striped bordered hover className='teamDetailsTable'>
				<thead>
					<tr>
						<th className='numericCell'>id</th>
						<th>Team Name</th>
						<th>Manager Name</th>
						<th className='numericCell'>Overall Points</th>
						<th className='numericCell'>Overall Rank</th>
						<th className='numericCell'>Chips used</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td className='numericCell'>{teamDetails.id}</td>
						<td>{teamDetails.teamName}</td>
						<td>{teamDetails.managerName}</td>
						<td className='numericCell'>{teamDetails.points}</td>
						<td className='numericCell'>{teamDetails.rank}</td>
						<td className='numericCell'>{chips.length}</td>
					</tr>
				</tbody>
			</Table>
    );
}

export default TeamDetails;