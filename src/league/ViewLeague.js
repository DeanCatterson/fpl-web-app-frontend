import axios from "axios";
import React, { useState } from "react";

import "./ViewLeague.css";
import LeagueDetails from "./LeagueDetails.js";

import Form from "react-bootstrap/Form";

function ViewLeague() {
  const [validated, setValidated] = useState(false);
  const [error, setError] = useState('');
  const [league, setLeague] = useState({});
  const [leagueId, setLeagueId] = useState(0);

  const handleLeagueIdChange = (event) => {
    setTLeagueId(event.target.value);
  };

  const submitForm = async (event) => {
		event.preventDefault();
		const form = event.currentTarget;

		// Check if leagueId is a number
    if (!/^\d+$/.test(leagueId) || leagueId < 1) {
			console.log('XXXXX leagueId: ', leagueId);
			console.log('XXXXX checkValidity false')
			setError('Invalid leagueId.');
			setValidated(false);
      event.preventDefault();
      event.stopPropagation();
			return;
		}

		setValidated(true);

    setLeagueId(event.target.value);

    event.preventDefault();
    console.log("XXXXX leagueId: ", leagueId);
    console.log("XXXXX validated: ", validated);

    let response;

		console.log('ZZZZZ leagueId: ', leagueId);
		console.log('ZZZZZ Number.isInteger(leagueId): ', Number.isInteger(+leagueId));

		// needs to be +leagueId so the element is reverted back to a number
    if (leagueId && Number.isInteger(+leagueId)) {
			try {
				response = await axios.get(`http://localhost:8080/league/${leagueId}`);
			} catch (error) {
				console.log('XXXXX massive error: ', error);

        // TODO: add message on screen stating no league was found
        if (error.status == 404) {
          console.log('No league was found for id ', leagueId);
        }

        event.preventDefault();
        event.stopPropagation();
        return;
			}

			// Clear errors
			setError('');

      console.log('AAAAA response.status: ', response.status);
      console.log('AAAAA response.data: ', response.data);

      if (response.data) {
        let league = response.data;
        setLeague(league);
      }

			console.log("XXXXX league: ", league);
    } else {
			console.log('XXXXX leagueId is not an integer');
		}

  };

  return (
    <div>
      <h1>Enter your team id</h1>

			<Form noValidate validated={validated} onSubmit={submitForm}>
        <Form.Group className="teamIdForm">
          <Form.Label>Team ID</Form.Label>
          <Form.Control
            type="text"
            name="teamID"
            onChange={handleTeamIdChange}
            placeholder="Enter your Team ID"
						isInvalid={!!error}
						required
          />
					<Form.Control.Feedback type="invalid">
            Please enter a valid team id.
          </Form.Control.Feedback>
        </Form.Group>
      </Form>

      { team.id > 0 ? <TeamDetails teamDetails={team} /> : null }
    </div>
  );
}

export default ViewTeam;
