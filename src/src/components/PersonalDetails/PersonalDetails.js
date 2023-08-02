import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import './PersonalDetails.css';
import Axios from "axios";

const PersonalDetails = () => {

  const[data, setData] =useState({
    firstname:'',
    lastname:'',
    middlename:'',
    email:'',
    dob:'',
    phoneno:'',
    address:'',
    occupation:'',
    // saving:'',
    // current:'',
    age:0,
    annualIncome:0,
  })

  const{age , annualIncome, firstname,lastname,middlename,dob,email,phoneno,address,occupation} = data;

  const onSubmit = (e) => {
    e.preventDefault();
   const result= Axios.post('http://localhost:8080/GetCreditScore/2251799826947998',data)
    console.log('resulttt'+JSON.stringify(result));
    
  }

  const onInputChangeInt =  (e) => {
    setData({...data,[e.target.name] :parseInt( e.target.value) || 0});
    
  };

  const onInputChange = (e) =>{
    setData({...data,[e.target.name]:e.target.value});
  };


  return (
    <div className="container">
      <center>
        <h2>Personal Details</h2>
      </center>
      <form className="personalform" onSubmit={onSubmit}>
        <div className="form-group row">
          <label htmlFor="firstname" className="col-sm-2 col-form-label">
            <strong>First Name</strong>
          </label>
          <div className="col-sm-8">
            <input
              type="text"
              className="form-control"
              id="firstname"
              placeholder="First Name"
              name="firstname"
              value={firstname}
              onChange={(e)=>onInputChange(e)}
            ></input>
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="lastname" className="col-sm-2 col-form-label">
            <strong>Last Name</strong>
          </label>
          <div className="col-sm-8">
            <input
              type="text"
              className="form-control"
              id="lastname"
              placeholder="Last Name"
              name="lastname"
              value={lastname}
              onChange={(e)=>onInputChange(e)}
            ></input>
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="middlename" className="col-sm-2 col-form-label">
            <strong>Middle Name</strong>
          </label>
          <div className="col-sm-8">
            <input
              type="text"
              className="form-control"
              id="middlename"
              placeholder="Middle Name"
              name="middlename"
              value={middlename}
              onChange={(e)=>onInputChange(e)}
            ></input>
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="age" className="col-sm-2 col-form-label">
            <strong>Age*</strong>
          </label>
          <div className="col-sm-8">
            <input
              type="text"
              className="form-control"
              id="age"
              placeholder="Age"
              name="age"
              value={age}
              onChange={onInputChangeInt}
              required
            ></input>
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="dob" className="col-sm-2 col-form-label">
            <strong>DOB</strong>
          </label>
          <div className="col-sm-8">
            <input
              type="date"
              className="form-control"
              id="dob"
              placeholder="Date of Birth"
              name="dob"
              value={dob}
              onChange={(e)=>onInputChange(e)}
            ></input>
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="email" className="col-sm-2 col-form-label">
            <strong>Email</strong>
          </label>
          <div className="col-sm-8">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e)=>onInputChange(e)}
            ></input>
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="phoneno" className="col-sm-2 col-form-label">
            <strong>Phone Number</strong>
          </label>
          <div className="col-sm-8">
            <input
              type="text"
              className="form-control"
              id="phoneno"
              placeholder="Phone Number"
              name="phoneno"
              value={phoneno}
              onChange={(e)=>onInputChange(e)}
            ></input>
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="annualIncome" className="col-sm-2 col-form-label">
            <strong>Annual Income*</strong>
          </label>
          <div className="col-sm-8">
            <input
              type="text"
              className="form-control"
              id="annualIncome"
              placeholder="Annual Income"
              name="annualIncome"
              value={annualIncome}
              onChange={onInputChangeInt}
              required
            ></input>
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="address" className="col-sm-2 col-form-label">
            <strong>Address</strong>
          </label>
          <div className="col-sm-8">
            <input
              type="text"
              className="form-control"
              id="address"
              placeholder="Address"
              name="address"
              value={address}
             onChange={(e)=>onInputChange(e)}
            ></input>
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="occupation" className="col-sm-2 col-form-label">
            <strong>Occupation</strong>
          </label>
          <div className="col-sm-8">
            <input
              type="text"
              className="form-control"
              id="occupation"
              placeholder="Occupation"
              name="occupation"
              value={occupation}
              onChange={(e)=>onInputChange(e)}
            ></input>
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="occupation" className="col-sm-2 col-form-label">
            <strong>Account</strong>
          </label>
          <div className="col-sm-8">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="saving"
                id="saving"
                value="saving"
                onChange={(e)=>onInputChange(e)}
              />
              <label className="form-check-label" htmlFor="saving">
                Saving
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="current"
                id="current"
                value="current"
                onChange={(e)=>onInputChange(e)}
              />
              <label className="form-check-label" htmlFor="current">
                Current
              </label>
            </div>
          </div>
        </div>

        <center>
          <Button   variant="primary" type="submit">
            Submit
          </Button>
        </center>
      </form>
    </div>
  );
};

export default PersonalDetails;
