import './Team.css';

import React from "react";

import Table from 'react-bootstrap/Table';

import tripleCaptainIcon from '../assets/chip-icons/3xcInactive-120.png';
import benchBoostIcon from '../assets/chip-icons/bboostInactive-120.png';
import freeHitIcon from '../assets/chip-icons/freehitInactive-120.png';
import wildcardIcon from '../assets/chip-icons/wildcardInactive-120.png';
import mysteryIcon from '../assets/chip-icons/mysteryInactive-120.png';

function TeamDetails({ teamDetails, chips }) {

	const displayChipIcons = (chips) => {

		console.log('bbbbb chips: ', chips)
		let imagePathsArray = new Array();

		if (chips) {
			chips.forEach(element => {
				switch(element) {
					case 'wildcard':
						imagePathsArray.push(wildcardIcon)
						break;
					case 'freehit':
						imagePathsArray.push(freeHitIcon)
						break;
					case '3xc':
						imagePathsArray.push(tripleCaptainIcon)
						break;
					case 'bboost':
						imagePathsArray.push(benchBoostIcon)
						break;
					case 'mystery':
						imagePathsArray.push(mysteryIcon)
						break;
					default:
						return;
				}
			});
		}

		let imagesJSX = imagePathsArray.map((imagePath, index) => 
			(
				<img src={imagePath} alt={`Image ${index + 1}`} className='chipIconImages' />
			)
		);

		return(
			<div>
				{ imagesJSX }
			</div>
		)
		

	}

    return (
			<Table striped bordered hover className='teamDetailsTable'>
				<thead>
					<tr>
						<th>Team Name</th>
						<th>Manager Name</th>
						<th className='numericCell'>Points</th>
						<th className='numericCell'>Rank</th>
						<th className='imageCell'>Chips used</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>{teamDetails.teamName}</td>
						<td>{teamDetails.managerName}</td>
						<td className='numericCell'>{teamDetails.points}</td>
						<td className='numericCell'>{teamDetails.rank}</td>
						<td className='numericCell'>{ displayChipIcons(chips) }</td>
					</tr>
				</tbody>
			</Table>
    );
}

export default TeamDetails;