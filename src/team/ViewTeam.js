import axios from "axios";
import React, { useState } from "react";

import "./Team.css";
import TeamDetails from "./TeamDetails.js";

import Form from "react-bootstrap/Form";

function ViewTeam() {
  const [validated, setValidated] = useState(false);
  const [error, setError] = useState('');
  const [team, setTeam] = useState({});
  const [teamId, setTeamId] = useState(0);
  const [chips, setChips] = useState([]);
  const [history, setHistory] = useState([]);


  const handleTeamIdChange = (event) => {
    setTeamId(event.target.value);
  };

  const submitForm = async (event) => {
		event.preventDefault();

		// Check if teamId is a number
    if (!/^\d+$/.test(teamId) || teamId < 1) {
			setError('Invalid teamId.');
			setValidated(false);
      event.preventDefault();
      event.stopPropagation();
			return;
		}
		
		setValidated(true);

    setTeamId(event.target.value);

    event.preventDefault();

    let response;

		// needs to be +teamId so the element is reverted back to a number
    if (teamId && Number.isInteger(+teamId)) {
			try {
				response = await axios.get(`http://localhost:8080/team/detailed/${teamId}`);
			} catch (error) {
        // TODO: add message on screen stating no team was found
        if (error.status === 404) {
          console.log('No team was found for id ', teamId);
        }

        console.log('XXXXX response: ', response);
        event.preventDefault();
        event.stopPropagation();
        return;
			}
			
			// Clear errors
			setError('');

      console.log('AAAAA response.status: ', response.status);
      console.log('AAAAA response.data: ', response.data);

      // response.data.team contains only basic information on that team.
      if (response.data && response.data.team) {
        let team = response.data.team;
        setTeam(team);
      }

      if (response.data && response.data.history && response.data.history.chips) {
        let chips = response.data.history.chips;
        let history = response.data.history;
        console.log('YYYYY chips: ', chips);
        console.log('YYYYY history: ', history);

        setChips(chips);
        setHistory(history);
      }

    } else {
			console.log('XXXXX teamId is not an integer');
		}

  };

  return (
    <div className="teamIdContainer">
      <p className="enterTeamNamePrompt">Enter your team id</p>

			<Form noValidate validated={validated} onSubmit={submitForm}>
        <Form.Group className="teamIdForm">
          <Form.Label>Team ID</Form.Label>
          <Form.Control
            type="text"
            name="teamID"
            className="teamIdField"
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

      { team.id && team.id > 0 ? <TeamDetails className="teamDetailsTable" teamDetails={team} chips={chips} history={history}/> : null }
    </div>
  );
}

export default ViewTeam;
