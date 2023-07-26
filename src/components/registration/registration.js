import React, { useState } from "react";

import { Link } from "react-router-dom";

import "./registration.css";

import axios from "axios";

import { toast } from "react-toastify";

import { API_BASE_URL } from "../../service/service";



function Registration(props) {

  // State variables

  const [userDetails, setUserDetails] = useState({

    customerName: "",

    email: "",

    gender: "",

    mobile: "",

    password: "",

    address: "",

  });



  const [isOtpSent, setIsOtpSent] = useState(false);

  const [isOtpVerified, setIsOtpVerified] = useState(false);



  // Function to show global toast messages

  function globalToast(message) {

    return toast.error(message);

  }



  // Function to show success toast message

  function successToast() {

    toast.success("OTP Verified! Account Created Successfully");

  }



  // Function to handle changes in input fields

  function onChangeCustomerHandler(event) {

    const updatedUserDetails = {

      ...userDetails,

      [event.target.name]: event.target.value,

    };

    setUserDetails(updatedUserDetails);

  }



  // Function to handle form submission

  function formSubmitHandler() {

    if (!isOtpSent) {

      // Send OTP to the user's email (Add your code to send OTP via email here)

      // Assuming the OTP has been successfully sent, update the state

      setIsOtpSent(true);

      globalToast("OTP has been sent to your email.");

    } else if (!isOtpVerified) {

      // Show the OTP verification popup

      const enteredOtp = prompt("Enter OTP:");

      if (enteredOtp === "123456") {


        setIsOtpVerified(true);

        successToast();

        // Redirect to the login page after OTP is verified

        props.history.push("login");

      } else {

        globalToast("Invalid OTP");

      }

    } else {

      // Perform form submission when OTP is already verified (optional)

      // ... Add your code here if needed ...

    }

  }



  return (

    <div className="container-fluid">

      <div className="card bg-light bg">

        <article className="card-body mx-auto" style={{ width: "40%" }}>

          <h6 className="display-4 text-center">Australian Bank</h6>

          <p className="text-center">Create account</p>

          <p className="divider-text">

            <span className="bg-light">Enter Details</span>

          </p>



          <form>

            {/* Username input */}

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



            {/* Full name input */}

            <div className="form-group input-group">

              <div className="input-group-prepend">

                <span className="input-group-text">

                  <i className="fa fa-user-plus iconsize"></i>

                </span>

              </div>

              <select className="custom-select" style={{ maxWidth: "80px" ,height:"50px"}}>

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



            {/* Gender selection */}

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



            {/* Email address input */}

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



            {/* Phone number input */}

            <div className="form-group input-group">

              <div className="input-group-prepend">

                <span className="input-group-text">

                  <i className="fa fa-phone iconsize"></i>

                </span>

              </div>

              <select className="custom-select" style={{ maxWidth: "80px",height:"50px" }}>

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



            {/* Password input */}

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



            {/* Submit button */}

            {!isOtpSent && (

              <div className="form-group" style={{height:"50px"}}>

                <button

                  type="button"

                  onClick={formSubmitHandler}

                  className="btn btn-primary btn-block"

                >

                  Submit

                </button>

              </div>

            )}



            {/* Verify OTP button */}

            {isOtpSent && !isOtpVerified && (

              <div>

                <p>OTP has been sent to your email.</p>

                <div className="form-group">

                  <button

                    type="button"

                    onClick={formSubmitHandler}

                    className="btn btn-primary btn-block"

                  >

                    Verify OTP

                  </button>

                </div>

              </div>

            )}



            {/* Create Account button */}

            {isOtpVerified && (

              <div className="form-group">

                <button

                  type="button"

                  onClick={() => {

                    successToast();

                    // Redirect to the login page after OTP is verified

                    props.history.push("login");

                  }}

                  className="btn btn-primary btn-block"

                >

                  Create Account

                </button>

              </div>

            )}



            {/* Link to login page */}

            <p className="text-center" style={{ color: "white", fontSize: "23px" }}>

              Have an account? <Link to="login">Login</Link>

            </p>



            {/* Link back to home */}

            {/* <div className="form-group" align="center">

              <Link to="/" className="btn btn-warning" style={{ textDecoration: "none", color: "white" }}>

                Back to Home

              </Link>

            </div> */}

          </form>

        </article>

      </div>

    </div>

  );

}



export default Registration;