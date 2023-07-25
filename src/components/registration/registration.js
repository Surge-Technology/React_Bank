import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./registration.css";
import axios from "axios";
import { toast } from "react-toastify";
import { API_BASE_URL } from "../../service/service";

function Registration(props) {
  // State to store user details
  const [userDetails, setUserDetails] = useState({
    customerName: "",
    email: "",
    gender: "",
    mobile: "",
    password: "",
    address: "", // Add a state to store the address for address verification
  });

  // State to handle OTP input and verification
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [otp, setOtp] = useState("");

  // Function to display global toast messages
  function globalToast(message) {
    return toast.error(message);
  }

  // Function to display success toast messages
  function successToast() {
    toast.success("OTP Verified! Account Created Successfully");
  }

  // Event handler for user details input fields
  function onChangeCustomerHandler(event) {
    const updatedUserDetails = {
      ...userDetails,
      [event.target.name]: event.target.value,
    };
    setUserDetails(updatedUserDetails);
  }

  // Event handler for OTP input field
  function onChangeOtpHandler(event) {
    setOtp(event.target.value);
  }

  // Function to handle form submission
  function formSubmitHandler() {
    if (!isOtpVerified) {
      // Show the OTP verification popup
      const enteredOtp = prompt("Enter OTP:");
      if (enteredOtp === "123456") {
        setIsOtpVerified(true);
        successToast();
      } else {
        globalToast("Invalid OTP");
      }
    } else {
      // Perform form submission when OTP is verified
      if (userDetails.userName === "") {
        globalToast("Empty username");
      } else if (!userDetails.customerName.match("[A-Z][a-z]*([ ][A-Z][a-z]*)*")) {
        globalToast("Invalid Name");
      } else if (!userDetails.email.match("[^@]+@[^.]+..+")) {
        globalToast("Invalid Email");
      } else if (userDetails.mobile.length !== 10 || !userDetails.mobile.match("[0-9]{10}")) {
        globalToast("Invalid mobile number, 10 digits required");
      } else {
        axios
          .post(API_BASE_URL + "startWorkflow", userDetails)
          .then((res) => {
            console.log(res);
            successToast();
            props.history.push("address-verification"); // Redirect to address verification page
          })
          .catch((error) => {
            if (error.response && error.response.data) {
              console.log(error.response.data);
              globalToast("User Already Exists");
            } else {
              console.log("Error:", error);
              globalToast("Error occurred while submitting the form");
            }
          });
      }
    }
  }

  return (
    // JSX code for the registration form
    <div className="container-fluid">
      <div className="card bg-light bg">
        <article className="card-body mx-auto" style={{ width: "40%" }}>
          <h6 className="display-4 text-center">Create Account</h6>
          <p className="text-center">Get started with your free account</p>
          <p className="divider-text">
            <span className="bg-light">Enter Details</span>
          </p>

          <form>
            <div className="form-group input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fa fa-user iconsize"></i>
                </span>
              </div>
              <input
                name="userName"
                className="form-control"
                placeholder="Username"
                type="text"
                value={userDetails.userName}
                onChange={onChangeCustomerHandler}
              />
            </div>

            <div className="form-group input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fa fa-user-plus iconsize"></i>
                </span>
              </div>
              <select className="custom-select" style={{ maxWidth: "80px" }}>
                <option value="Mr.">Mr.</option>
                <option value="Mrs.">Mrs.</option>
                <option value="">-</option>
              </select>
              <input
                name="customerName"
                className="form-control"
                placeholder="Full name"
                type="text"
                value={userDetails.customerName}
                onChange={onChangeCustomerHandler}
              />
            </div>

            <div className="form-group input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fas fa-venus-mars iconsize"></i>
                </span>
              </div>
              <select
                name="gender"
                className="form-control"
                value={userDetails.gender}
                onChange={onChangeCustomerHandler}
              >
                <option>Select Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>

            <div className="form-group input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fa fa-envelope iconsize"></i>
                </span>
              </div>
              <input
                name="email"
                className="form-control"
                placeholder="Email address"
                type="email"
                value={userDetails.email}
                onChange={onChangeCustomerHandler}
              />
            </div>

            <div className="form-group input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fa fa-phone iconsize"></i>
                </span>
              </div>
              <select className="custom-select" style={{ maxWidth: "80px" }}>
                <option selected="" value="+91">
                  +91
                </option>
                <option value="+0">+0</option>
                <option value="+1">+1</option>
                <option value="+44">+44</option>
                <option value="+33">+33</option>
              </select>
              <input
                name="mobile"
                className="form-control"
                placeholder="Phone number"
                type="text"
                value={userDetails.mobile}
                onChange={onChangeCustomerHandler}
              />
            </div>

            <div className="form-group input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fa fa-lock iconsize"></i>
                </span>
              </div>
              <input
                name="password"
                className="form-control"
                placeholder="Create password"
                type="password"
                value={userDetails.password}
                onChange={onChangeCustomerHandler}
              />
            </div>

            {!isOtpVerified && (
              <div className="form-group input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fa fa-lock iconsize"></i>
                  </span>
                </div>
                <input
                  name="otp"
                  className="form-control"
                  placeholder="Enter OTP"
                  type="text"
                  value={otp}
                  onChange={onChangeOtpHandler}
                />
              </div>
            )}

            <div className="form-group">
              <button
                type="button"
                onClick={formSubmitHandler}
                className="btn btn-primary btn-block"
              >
                {!isOtpVerified ? "Submit" : "Create Account"}
              </button>
            </div>

            <p className="text-center" style={{ color: "white", fontSize: "23px" }}>
              Have an account? <Link to="login">Login</Link>
            </p>

            <div className="form-group" align="center">
              <Link to="/" className="btn btn-warning" style={{ textDecoration: "none", color: "white" }}>
                Back to Home
              </Link>
            </div>
          </form>
        </article>
      </div>
    </div>
  );
}

export default Registration;
