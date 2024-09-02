import Form from 'react-bootstrap/Form';

function TeamIdField() {
    const submitForm = (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const payload = Object.fromEntries(formData);

        console.log('XXXXX payload: ', payload);
    }

    return (
        <div>

            <h1>Enter your team id</h1>

            <form onSubmit={submitForm}>
                <Form.Group className='mb3'>
                    <Form.Label>Team ID</Form.Label>
                    <Form.Control type='text' name='teamID' placeholder='Enter your Team ID' />
                </Form.Group>
            </form>
        </div>
    );
}


export default TeamIdField;