import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

const PersonalDetails = () => {
  return (
    <div className="container">
      <center>
        <h2>Personal Details</h2>
      </center>
      <form>
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
            ></input>
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="age" className="col-sm-2 col-form-label">
            <strong>Age</strong>
          </label>
          <div className="col-sm-8">
            <input
              type="text"
              className="form-control"
              id="age"
              placeholder="Age"
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
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="saving"
              />
              <label className="form-check-label" htmlFor="inlineRadio1">
                Saving
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="current"
              />
              <label className="form-check-label" htmlFor="inlineRadio2">
                Current
              </label>
            </div>
          </div>
        </div>

        <center>
          <Button  variant="primary" type="submit">
            Submit
          </Button>
        </center>
      </form>
    </div>
  );
};

export default PersonalDetails;
