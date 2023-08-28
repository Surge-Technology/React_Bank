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

  });



  const {

    age,

    annualIncome,

    firstName,

    lastName,

    dob,
    gender,




    accountType,

  } = data;

  const [selectedAccountType, setSelectedAccountType] = useState("");
  const [selected, setSelected] = useState('');


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

  const handleChange = event => {
    console.log(event.target.value);
    setSelected(event.target.value);
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

                type="date"

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

            <label htmlFor="gender" className="col-sm-2 col-form-label">

              <strong>Gender</strong>

            </label>
            <div className="col-sm-8">

              <input
                type="radio"
                id="male"
                name="choose"
                value="Male"
                checked={selected === 'Male'}
                onChange={handleChange}
              />
              <label htmlFor="Male">Male</label>

              <input
                type="radio"
                id="Female"
                name="choose"
                value="Female"
                onChange={handleChange}
                checked={selected === 'Female'}
              />
              <label htmlFor="Female">Female</label>
            </div>
</div>


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

            {/* <div className="col-sm-8">

              <input

                type="radio"

                className="form-control"

                id="accountType"

                placeholder="accountType"

                name="accountType"

                value={accountType}

                onChange={(e) => onInputChange(e)}

              ></input>

            </div> */}
            <div className="form-group row">
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