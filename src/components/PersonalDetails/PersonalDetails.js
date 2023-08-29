import React, { useState } from "react";

import { Form, Button, Container, Row, Col } from "react-bootstrap";

import "./PersonalDetails.css";

import Axios from "axios";

import { useHistory } from "react-router-dom";



const PersonalDetails = (props) => {

  const history = useHistory();
  const [data, setData] = useState({

    firstName: "",

    lastName: "",

    dob: 0,
    gender: "",

    age: 0,

    annualIncome: 0,

    accountType: "",
    phoneNo: 0
  });



  const {

    age,

    annualIncome,

    firstName,

    lastName,

    dob,
    gender = gender.toString(),

    accountType: selected,
    phoneNo,



  } = data;

  // const [accountType, setAccountType] = useState("");
  // const [selected, setSelected] = useState('');


  const onSubmit = (e) => {

    e.preventDefault();



    let processInstanceKey = sessionStorage.getItem("key");

    console.log("dataaaa", processInstanceKey);



    const result = Axios.post(

      `http://localhost:8080/GetCreditScore/${processInstanceKey}`,

      data

    );

    console.log("resulttt" + JSON.stringify(result));



    let baseScore = 500;

    let ageFactor = 10;

    // let incomeFactor = 0.01;



    let ageScore = age * ageFactor;

    let incomeScore = annualIncome / 1000;



    let creditScore = baseScore + ageScore + Math.floor(incomeScore);





    // const creditScore = result.data.creditScore;

    console.log("creditScore", creditScore);



    if (creditScore > 700) {

      history.push("/happyPath");

    } else if (creditScore >= 500 && creditScore <= 700) {

      history.push("/Popup");

    } else {

      history.push("/registrationReject");

    }

    //props.history.push('happyPath')

  };



  const onInputChangeInt = (e) => {

    setData({ ...data, [e.target.name]: parseInt(e.target.value) || 0 });

  };





  const onInputChange = (e) => {

    setData({ ...data, [e.target.name]: e.target.value });


  };

  const handleGenderChange = (event) => {
    setData({ ...data, gender: event.target.value });
  };

  const handleAccountTypeChange = (event) => {
    setData({ ...data, accountType: event.target.value });
  };


  const handleChange = event => {
    console.log(event.target.value);
    // setSelected(event.target.value);
    // setSelected1(event.target.value);
    // setGender(event.target.value);

  };



  return (
    <div className="personForm">
      <div className="container">
        <br />
        <center>

          <h2>Personal Details</h2>

        </center>
        <br />


        <form className="personalform" onSubmit={onSubmit}>

          <div className="form-group row">

            <label htmlFor="firstName" className="col-sm-2 col-form-label">

              <strong>First Name</strong>

            </label>

            <div className="col-sm-8">

              <input

                type="text"

                className="form-control"

                id="firstName"

                placeholder="First Name"

                name="firstName"

                value={firstName}

                onChange={(e) => onInputChange(e)}

              ></input>

            </div>

          </div>



          <div className="form-group row">

            <label htmlFor="lastName" className="col-sm-2 col-form-label " >

              <strong>Last Name</strong>

            </label>

            <div className="col-sm-8">

              <input

                type="text"

                className="form-control"

                id="lastName"

                placeholder="Last Name"

                name="lastName"

                value={lastName}

                onChange={(e) => onInputChange(e)}

              ></input>

            </div>

          </div>



          <div className="form-group row">

            <label htmlFor="age" className="col-sm-2 col-form-label">

              <strong > Age <span className="star">*</span></strong>

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
                max={100}
              ></input>

            </div>

          </div>



          <div className="form-group row">

            <label htmlFor="dob" className="col-sm-2 col-form-label">

              <strong>DOB</strong>

            </label>

            <div className="col-sm-8">

              <input

                type="text"

                className="form-control"

                id="dob"

                placeholder="Date of Birth"

                name="dob"

                value={dob}

                onChange={(e) => onInputChangeInt(e)}

              ></input>

            </div>

          </div>

          <div className="form-group row">

            <label htmlFor="phoneNo" className="col-sm-2 col-form-label">

              <strong>Phone Number</strong>

            </label>

            <div className="col-sm-8">

              <input

                type="text"

                className="form-control"

                id="phoneNo"

                placeholder="Phone Number"

                name="phoneNo"

                value={phoneNo}

                onChange={(e) => onInputChangeInt(e)}

              ></input>

            </div>

          </div>

          <div className="form-group row">
            <label htmlFor="gender" className="col-sm-2 col-form-label">
              <strong>Gender</strong>
            </label>
            <div className="col-sm-8">
              <select
                className="form-control"
                id="gender"
                name="gender"
                value={gender}
                onChange={(e) => handleGenderChange(e)}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          {/* <div className="form-group row">
  <label htmlFor="gender" className="col-sm-2 col-form-label">
    <strong>Gender</strong>
  </label>
  <div className="col-sm-8">
    <select
      className="form-control"
      id="gender"
      name="gender"
      value={gender}
      onChange={(e) => onInputChange(e)}
    >
      <option value="">Select Gender</option>
      <option value="male">Male</option>
      <option value="female">Female</option>
      <option value="other">Other</option>
    </select>
  </div>
</div> */}




          {/* <Form.Group controlId='gender'>
            <label>Gender</label>
            <Form.Control
              id='gender'
              as='select'
              name='gender'
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value=''>Select Gender</option>
              <option value='male'>Male</option>
              <option value='female'>Female</option>
              <option value='other'>Other</option>
            </Form.Control>
          </Form.Group> */}


          <div className="form-group row">

            <label htmlFor="annualIncome" className="col-sm-2 col-form-label">

              <strong>Annual Income <span className="star">*</span></strong>

            </label>

            <div className="col-sm-8">

              <input

                type="number"

                className="form-control"

                id="annualIncome"

                placeholder="Annual Income"

                name="annualIncome"

                value={annualIncome}

                onChange={onInputChangeInt}

                required
                min={2}

              ></input>

            </div>

          </div>

          {/* <div className="form-group row">

            <label htmlFor="accountType" className="col-sm-2 col-form-label">

              <strong>AccountType</strong>

            </label> */}


          {/* <div className="form-group row">
            <label className="col-sm-2 col-lg-2">
              <strong>Account Type</strong>
            </label>
            <div className="col-sm-8">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="selectedAccountType"
                  value="savings"
                  checked={selectedAccountType === "savings"}
                  onChange={() => setSelectedAccountType("savings")}
                />
                <label className="form-check-label">Savings</label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="selectedAccountType"
                  value="current"
                  checked={selectedAccountType === "current"}
                  onChange={() => setSelectedAccountType("current")}
                />
                <label className="form-check-label">Current</label>
              </div>
            </div>
          </div> */}
          <div className="form-group row">

            <label htmlFor="accountType" className="col-sm-2 col-form-label">

              <strong>AccountType</strong>

            </label>
            <br /><br />
            <div className="col-sm-8" style={{ display: 'flex', alignItems: 'center' }}>

              <input
                type="radio"
                id="savings"
                name="choose"
                value="saving"
                checked={selected === 'saving'}
                onChange={handleAccountTypeChange}
              />
              <label htmlFor="saving" >Savings</label>
              <span style={{ margin: '0 10px' }}></span>

              <input
                type="radio"
                id="current"
                name="choose"
                value="current"
                onChange={handleChange}
                checked={selected === 'current'}
              />
              <label htmlFor="current">Current</label>
            </div>
          </div>


          {/* </div> */}

          <center>

            <Button variant="primary" type="submit">

              Submit

            </Button>

          </center>

        </form>

      </div>
    </div>
  );

};



export default PersonalDetails;