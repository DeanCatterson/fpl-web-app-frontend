import axios from "axios";
import React, { useState } from "react";

import "./League.css";
import LeagueDetails from "./LeagueDetails.js";

import Form from "react-bootstrap/Form";

function ViewLeague() {

  // TODO: add a call in here for each team to retrieve their chip info
  
  const [validated, setValidated] = useState(false);
  const [error, setError] = useState('');
  const [league, setLeague] = useState({});
  const [leagueId, setLeagueId] = useState(0);

  const handleLeagueIdChange = (event) => {
    setLeagueId(event.target.value);
  };

  const submitForm = async (event) => {
		event.preventDefault();

		// Check if leagueId is a number
    if (!/^\d+$/.test(leagueId) || leagueId < 1) {
			setError('Invalid leagueId.');
			setValidated(false);
      event.preventDefault();
      event.stopPropagation();
			return;
		}

		setValidated(true);

    setLeagueId(event.target.value);

    event.preventDefault();

    let response;

		// Needs to be +leagueId so the element is reverted back to a number
    if (leagueId && Number.isInteger(+leagueId)) {
      // TODO: get list of all teamId's in the league, and do a DetailedTeamHistory search for each one.
			try {
				response = await axios.get(`http://localhost:8080/league/${leagueId}`);
			} catch (error) {

        // TODO: add message on screen stating no league was found
        if (error.status === 404) {
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

    } else {
			console.log('XXXXX leagueId is not an integer');
		}

  };

  return (
    <div className="leagueIdContainer">
      <p className="enterTeamNamePrompt">Enter your league id</p>

			<Form noValidate validated={validated} onSubmit={submitForm}>
        <Form.Group className="leagueIdForm">
          <Form.Label>League ID</Form.Label>
          <Form.Control
            type="text"
            name="leagueID"
            className="leagueIdField"
            onChange={handleLeagueIdChange}
            placeholder="Enter your League ID"
						isInvalid={!!error}
						required
          />
					<Form.Control.Feedback type="invalid">
            Please enter a valid league id.
          </Form.Control.Feedback>
        </Form.Group>
      </Form>

      { league.length > 0 ? <LeagueDetails className="leagueDetailsTable" leagueDetails={league} /> : null }
    </div>
  );
}

export default ViewLeague;
