import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import './AddressFilingForm.css'; // Import custom CSS for styling

const AddressFillForm = (props) => {
  const [address, setAddress] = useState('');
  const [landmark, setLandmark] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [showError, setShowError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form validation before submission
    const textOnly = /^[A-Za-z ]+$/;

    if (address.trim() === '' || !textOnly.test(landmark) || !textOnly.test(city) || !textOnly.test(state)) {
      setShowError(true);
    } else {
      setShowError(false);
      // Handle form submission here
      // You can access the form data using the state variables (address, landmark, city, state)
      console.log('Form data:', { address, landmark, city, state });
      props.history.push('PersonalDetails');
    }
  };

  return (
    <div className='Addform'>
      <br />
      <br />
      <div className='container'>
        <br />
        <h2>Enter Address Details</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId='address'>
            <Form.Label>Address</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter Address'
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId='landmark'>
            <Form.Label>Landmark</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter Landmark'
              value={landmark}
              onChange={(e) => setLandmark(e.target.value)}
            />
          </Form.Group>

          <Row>
            <Form.Group as={Col} controlId='city'>
              <Form.Label>City</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter City'
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group as={Col} controlId='state'>
              <Form.Label>State</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter State'
                value={state}
                onChange={(e) => setState(e.target.value)}
                required
              />
            </Form.Group>
          </Row>

          {showError && (
            <Alert variant='danger'>
              Please fill  the fields.
            </Alert>
          )}

          <br />
          <center>
            <Button variant='primary' type='submit' style={{ height: '50px' }}>
              Submit
            </Button>
          </center>
        </Form>
      </div>
    </div>
  );
};

export default AddressFillForm;
