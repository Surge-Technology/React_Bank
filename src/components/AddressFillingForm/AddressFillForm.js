import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import './AddressFilingForm.css'; // Import custom CSS for styling
import axios from 'axios';

const AddressFillForm = (props) => {
  const [addressData, setAddressData] = useState({
    address: '',
  
  });
  const [responseMessage, setResponseMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();



    try {
      // Step 1: Get the processInstanceKey from sessionStorage or from the API
      let processInstanceKey = sessionStorage.getItem("key");

      console.log("dataaaa", processInstanceKey);
      if (!processInstanceKey) {

        throw new Error('Process instance key not found.');
      }
      const response = await axios.post(
        `http://localhost:8080/completeTaskWithInstanceId/${processInstanceKey}`,
        addressData
      );
        alert("your Address is valid")
      setResponseMessage(response.data.message);
    }
    catch (error) {
      console.error('Error while making the API request:', error);
      setErrorMessage('An error occurred while processing your request. Please try again later.');
    }
    props.history.push("personalDetails");

  };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setAddressData((prevAddressData) => ({
  //     ...prevAddressData,
  //     [name]: value,
  //   }));
  // };
  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'checking' && value === 'no') {
      // Clear previousAddress when 'No' is selected
      setAddressData({ address: value, previousAddress: '' });
    } else {
      setAddressData({ ...addressData, [name]: value });
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
          <Form.Group controlId='address1'>
            <Form.Label>Address<span className='star'> *</span></Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter Address'
              name='address1'
              value={addressData.address1}
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

          <Row className='row'>
            <Form.Group as={Col} controlId='city'>
              <Form.Label>City <span className='star'> *</span></Form.Label>
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
              <Form.Label>State <span className='star'> *</span></Form.Label>
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
          <br/>
          <Row className='row'>
            <Form.Group as={Col} controlId='homeTelephone'>
              <Form.Label>HomeTelephone</Form.Label>
              <Form.Control
                type='number'
                placeholder='Enter Telephone'
                name='number'
                value={addressData.homeTelephone}
                onChange={handleChange}
                required
              />
            </Form.Group>
          {/* </Row>

          <Row> */}
            <Form.Group as={Col} controlId='telephone'>
              <Form.Label>Telephone</Form.Label>
              <Form.Control
                type='number'
                placeholder='Enter Telephone Number'
                name='telephone'
                value={addressData.telephone}
                onChange={handleChange}
                required
              />
            </Form.Group>
              </Row>
            
            {/* <Row>
            <Form.Group as={Col} controlId='address'>
              <Form.Label>Have you lived at this address for more than 3 years?</Form.Label>
              <Form.Control
                type='radio'
                 name='address'
                value={addressData.address}
                onChange={handleChange}
                required
              />
            </Form.Group>
            </Row> */}


        
        <Form.Group as={Col} controlId='address'>
        <Row className='row'>
          <Form.Label>Have you lived at this address for more than 3 years?<span className='star'> *</span></Form.Label>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Form.Check
              type='radio'
              name='address'
              value='yes'
              label='Yes'
              checked={addressData.address === 'yes'}
              onChange={handleChange}
              required
            />
            <span style={{ margin: '0 10px' }}></span> {/* Space between options */}
            <Form.Check
              type='radio'
              name='address'
              value='no'
              label='No'
              checked={addressData.address === 'no'}
              onChange={handleChange}
              required
            />
          </div>
          </Row>
        </Form.Group>
      

      {addressData.address === 'yes' && (
        <Row className='row'>
          <Form.Group as={Col} controlId='previousAddress'>
            <Form.Label>Previous Address</Form.Label>
            <Form.Control
              type='text'
              name='previousAddress'
              value={addressData.previousAddress}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Row>
      )}

{/* <Form.Group controlId='box'>
      <Row>
        <Col xs={1} className='checkbox-col'>
          <Form.Check
            type='checkbox'
            name='box'
            value={addressData.box}
            onChange={handleChange}
            required
          />
        </Col>
        <Col xs={11}>
          <Form.Label className='checkbox-label'>
            I agree that my above information is checked with the Issuer or Official Record Holder
          </Form.Label>
        </Col>
      </Row>
            </Form.Group> */}

<div class="form-check checkbox-lg"> 
 <input class="form-check-input" type="checkbox" value="" id="checkbox-2"  /> 
  <label class="form-check-label" for="checkbox-2">I agree that my above information is checked with the Issuer or Official Record Holder</label>
  </div>


          {errorMessage && <Alert variant='danger'>{errorMessage}</Alert>}
          {responseMessage && <Alert variant='success'>{responseMessage}</Alert>}

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
