import './League.css';

import tripleCaptainIcon from '../assets/chip-icons/3xcInactive-120.png';
import benchBoostIcon from '../assets/chip-icons/bboostInactive-120.png';
import freeHitIcon from '../assets/chip-icons/freehitInactive-120.png';


import React, { useState } from "react";


import Table from 'react-bootstrap/Table';


function LeagueDetails({ leagueDetails }) {
    const [league, setLeague] = useState({});

    return (
			<Table striped bordered hover>
				<thead>
					<tr>
						<th>Rank</th>
						<th>Manager Name</th>
						<th>Team Name</th>
						<th>Overall Points</th>
						<th>Chips Used</th>
					</tr>
				</thead>
				<tbody>
					{leagueDetails.map(team => {
						return (
							<tr>
								<td>{team.rank}</td>
								<td>{team.managerName}</td>
								<td>{team.teamName}</td>
								<td>{team.points}</td>
								<td>{
									<div>
										<img className="chipIconImages" src={tripleCaptainIcon} alt="tripleCaptainIcon" /> 
										<img className="chipIconImages" src={benchBoostIcon} alt="benchBoostIcon" /> 
										<img className="chipIconImages" src={freeHitIcon} alt="freeHitIcon" /> 
									</div> 
								}</td>
							</tr>
						);
					})}
				</tbody>			
			</Table>
    );
}

export default LeagueDetails;