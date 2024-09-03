import axios from "axios";
import React, { useState } from "react";

import Form from 'react-bootstrap/Form';

function TeamIdField() {
    const [team, setTeam] = useState({});
    const [teamId, setTeamId] = useState(0);

    const handleTeamIdChange = (event) => {
        setTeamId(event.target.value);
      };


    const submitForm = async (event) => {
        setTeamId(event.target.value);

        event.preventDefault();
        console.log('YYYYY event: ', event)
        console.log('YYYYY event.target.value: ', event.target.value)

        let response = await axios.get(`http://localhost:8080/team/${teamId}`);

        let team = response.data;
        setTeam(team);

        console.log('XXXXX team: ', team);
    }

    return (
        <div>
            <h1>Enter your team id</h1>

            <form onSubmit={submitForm}>
                <Form.Group className='mb3'>
                    <Form.Label>Team ID</Form.Label>
                    <Form.Control type='text' name='teamID' onChange={handleTeamIdChange} placeholder='Enter your Team ID' />
                </Form.Group>
            </form>
        </div>
    );
}


export default TeamIdField;