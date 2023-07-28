import React, { useState } from "react";

import { Link } from "react-router-dom";

import "./registration.css";

import axios from "axios";

import { toast } from "react-toastify";

function Registration(props) {
  const [userDetails, setUserDetails] = useState({
    customerName: "",

    email: "",

    gender: "",

    mobile: "",

    password: "",
  });

  const [isOtpSent, setIsOtpSent] = useState(false);

  const [isOtpVerified, setIsOtpVerified] = useState(false);

  // State variable to store errors

  const [errors, setErrors] = useState({});

  function globalToast(message) {
    return toast.error(message);
  }

  function successToast() {
    toast.success("OTP Verified! Account Created Successfully");
  }

  function onChangeCustomerHandler(event) {
    const updatedUserDetails = {
      ...userDetails,

      [event.target.name]: event.target.value,
    };

    setUserDetails(updatedUserDetails);
  }

  function formSubmitHandler() {
    // Validate the form fields

    const newErrors = validateForm();

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      if (!isOtpSent) {
        // Send OTP to the user's email (Add your code to send OTP via email here)

        // Assuming the OTP has been successfully sent, update the state

        setIsOtpSent(true);

        globalToast("OTP has been sent to your email.");
      } else if (!isOtpVerified) {
        // Show the OTP verification popup

        const enteredOtp = prompt("Enter OTP:");

        if (enteredOtp === "123456") {
          // Replace "123456" with your actual OTP verification logic (either from backend or other methods)

          setIsOtpVerified(true);

          successToast();

          // Redirect to the login page after OTP is verified

          props.history.push("login");
        } else {
          globalToast("Invalid OTP");
        }
      } else {
        // Perform form submission when OTP is already verified

        axios

          .post("http://localhost:8080/startWorkflow", userDetails)

          .then((response) => {
            // Handle the response from the API if needed

            console.log("API Response:", response.data);

            globalToast("Registration Successful!"); // Display a success message to the user

            props.history.push("login"); // Redirect to the login page after successful registration
          })

          .catch((error) => {
            // Handle any error that occurred during the API request

            console.error("API Error:", error);

            globalToast("Failed to submit form. Please try again later.");
          });
      }
    } else {
      globalToast("Please fill in all required fields.");
    }
  }

  function validateForm() {
    const newErrors = {};

    if (!userDetails.customerName.trim()) {
      newErrors.customerName = "Full name is required";
    }

    if (!userDetails.gender) {
      newErrors.gender = "Gender selection is required";
    }

    if (!userDetails.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(userDetails.email)) {
      newErrors.email = "Invalid email address";
    }

    if (!userDetails.mobile.trim()) {
      newErrors.mobile = "Phone number is required";
    }

    if (!userDetails.password.trim()) {
      newErrors.password = "Password is required";
    }

    return newErrors;
  }

  return (
    <div className="container-fluid">
      <div className="card bg-light bg">
        <article className="card-body mx-auto" style={{ width: "40%" }}>
          <h6 className="display-4 text-center">Australian Bank</h6>

          <p className="text-center">Create Account</p>

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

              <select>
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

              <select>
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

            {!isOtpSent && (
              <div className="form-group">
                <button
                  type="button"
                  onClick={formSubmitHandler}
                  className="btn btn-primary btn-block"
                >
                  Submit
                </button>
              </div>
            )}

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

            <p
              className="text-center"
              style={{ color: "white", fontSize: "23px" }}
            >
              Have an account? <Link to="login">Login</Link>
            </p>
          </form>
        </article>
      </div>
    </div>
  );
}

export default Registration;
