import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import './AddressFilingForm.css'; // Import custom CSS for styling
import axios from 'axios';
const AddressFillForm = (props) => {
  const [addressData, setAddressData] = useState({
    address: '',
  });
  const [isAddressValid, setIsAddressValid] = useState(true);
  const [showError, setShowError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Perform form validation before submission
    const textOnly = /^[A-Za-z ]+$/;

    if (
      addressData.address.trim() === '' ||
      !textOnly.test(addressData.landmark) ||
      !textOnly.test(addressData.city) ||
      !textOnly.test(addressData.state)
    ) {
      setShowError(true);
      setIsAddressValid(false);
    } else {
      setShowError(false);

      try {
        // Send the addressData to the backend API
        // const processInstanceKey=sessionStorage.getItem("processInstanceKey");
        // console.log(processInstanceKey);
        let data=sessionStorage.getItem("key");
        console.log("data",data);
        const response = await axios.post('http://localhost:8080/completeTaskAddressForm/${data}', addressData);

        // Assuming the backend API returns a JSON object with a "valid" property
        if (response.data.valid) {
          // If the address is valid, navigate to the next page
        // const p   sessionStorage.setItem('addressValidated', 'proces');
          // Perform navigation to the next page here (e.g., using React Router)
        } else {
          // If the address is not valid, show an error message
          setShowError(true);
          setIsAddressValid(false);
        }
      } catch (error) {
        // Handle any error that might occur during the API request
        console.error('Error while making the API request:', error);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddressData((prevAddressData) => ({
      ...prevAddressData,
      [name]: value,
    }));
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
              name='address'
              value={addressData.address}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId='landmark'>
            <Form.Label>Landmark</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter Landmark'
              name='landmark'
              value={addressData.landmark}
              onChange={handleChange}
            />
          </Form.Group>

          <Row>
            <Form.Group as={Col} controlId='city'>
              <Form.Label>City</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter City'
                name='city'
                value={addressData.city}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group as={Col} controlId='state'>
              <Form.Label>State</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter State'
                name='state'
                value={addressData.state}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Row>

          {showError && (
            <Alert variant='danger'>Please fill in all the fields.</Alert>
          )}

          {!isAddressValid && (
            <Alert variant='danger'>Invalid address. Please check your address details.</Alert>
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
