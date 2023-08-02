import React from "react";
import { Button } from "react-bootstrap";
import './AdminActiveTasklistDetail.css'

const AdminActiveTaskByID = () => {
  return (
    <div className="container">
      <center>
        <h2>ActiveTask Details</h2>
      </center>
      <form className="adminactivetaskform">
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
          <label htmlFor="age" className="col-sm-2 col-form-label">
            <strong>Age*</strong>
          </label>
          <div className="col-sm-8">
            <input
              type="text"
              className="form-control"
              id="age"
              placeholder="Age"
              required
            ></input>
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="creditscore" className="col-sm-2 col-form-label">
            <strong>Credit Score</strong>
          </label>
          <div className="col-sm-8">
            <input
              type="text"
              className="form-control"
              id="creditscore"
              placeholder="Credit Score"
              required
            ></input>
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="creditscore" className="col-sm-2 col-form-label">
            <strong>Select</strong>
          </label>
          <div className="col-sm-8">
            <select className="form-control">
                <option>Approve</option>
                <option>Reject</option>
                <option>Need Clarification</option>
            </select>
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

export default AdminActiveTaskByID;
