import axios from "axios";
import React, { useState } from "react";

import "./ViewTeam.css";
import TeamDetails from "./TeamDetails.js";

import Form from "react-bootstrap/Form";

function ViewTeam() {
  const [validated, setValidated] = useState(false);
  const [error, setError] = useState('');
  const [team, setTeam] = useState({});
  const [teamId, setTeamId] = useState(0);

  const handleTeamIdChange = (event) => {
    setTeamId(event.target.value);
  };

  const submitForm = async (event) => {
		event.preventDefault();
		const form = event.currentTarget;

		// Check if teamId is a number
    if (!/^\d+$/.test(teamId) || teamId < 1) {
			console.log('XXXXX teamId: ', teamId);
			console.log('XXXXX checkValidity false')
			setError('Invalid teamId.');
			setValidated(false);
      event.preventDefault();
      event.stopPropagation();
			return;
		}
		
		setValidated(true);

    setTeamId(event.target.value);

    event.preventDefault();
    console.log("XXXXX teamId: ", teamId);
    console.log("XXXXX validated: ", validated);

    let response;

		console.log('ZZZZZ teamId: ', teamId);
		console.log('ZZZZZ Number.isInteger(teamId): ', Number.isInteger(+teamId));

		// needs to be +teamId so the element is reverted back to a number
    if (teamId && Number.isInteger(+teamId)) {
			try {
				response = await axios.get(`http://localhost:8080/team/${teamId}`);
			} catch (error) {
				console.log('XXXXX massive error: ', error);

        // TODO: add message on screen stating no team was found
        if (error.status == 404) {
          console.log('No team was found for id ', teamId);
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
        let team = response.data;
        setTeam(team);
      }

			console.log("XXXXX team: ", team);
    } else {
			console.log('XXXXX teamId is not an integer');
		}

  };

  return (
    <div className="teamIdContainer">
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
