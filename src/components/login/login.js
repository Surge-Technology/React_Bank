import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Header from "../header/header";

// Initial state for the login form
const initialLoginState = {
  email: "",
  password: "",
  error: ""
};

// Define the Login component
export default function Login(props) {
  // State to manage login form data
  const [login, setLogin] = useState(initialLoginState);
  const [showOTPModal, setShowOTPModal] = useState(false); // State to control OTP modal visibility

  // Function to handle changes in login form input fields
  function onChangeLoginHandler(event) {
    const updatedLogin = {
      ...login,
      [event.target.name]: event.target.value
    };
    setLogin(updatedLogin);
  }

  // Function to handle login form submission
  function handleLogin() {
    // Validate if email and password are provided
    if (!login.email) {
      setLogin({ ...login, error: "Please enter email" });
    } else if (!login.password) {
      setLogin({ ...login, error: "Please enter password" });
    } else {
      // Simulating successful login for demonstration purposes
      // Replace this with your actual authentication logic
      // You can use an API call or authentication library like Firebase
      // For now, we assume the login is successful for any non-empty values
      // You should implement actual authentication and user role checks in your application

      // Show the OTP verification popup
      setShowOTPModal(true);
    }
  }

  // Function to handle OTP verification
  function handleOTPVerification(otp) {
    // Here you can implement the actual OTP verification logic.
    // You may use an API call to verify the OTP and handle success or failure accordingly.

    // For demonstration purposes, let's assume OTP verification is successful
    const isOTPVerified = true;

    if (isOTPVerified) {
      // Display a success toast notification for OTP verification
      toast.success("OTP verified successfully!", {
        position: toast.POSITION.TOP_LEFT
      });

      // Hide the OTP verification popup after successful verification
      setShowOTPModal(false);

      // Redirect to the AddressFillForm component after successful OTP verification
      props.history.push("/addressfillform");
    } else {
      // Display an error toast notification for OTP verification failure
      toast.error("Invalid OTP. Please try again.", {
        position: toast.POSITION.TOP_LEFT
      });
    }
  }

  // Render the Login component
  return (
    <div className="container-fluid back">
      {/* Display the Header component with the message */}
      <Header message="Customer Login" />

      {/* Create the login form */}
      <div className="container" style={{ marginTop: "5%", width: "50%" }}>
        <div className="card bg-light">
          <article className="card-body mx-auto" style={{ width: "50%" }}>
            {/* Display the "Enter Credentials" divider */}
            <p className="divider-text">
              <span className="bg-light">Enter Credentials</span>
            </p>

            <form>
              {/* Input field for email */}
              <div className="form-group input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    {" "}
                    <i className="fa fa-envelope iconsize"></i>{" "}
                  </span>
                </div>
                <input
                  name="email"
                  className="form-control"
                  placeholder="Email"
                  type="email"
                  value={login.email}
                  onChange={onChangeLoginHandler}
                />
              </div>

              {/* Input field for password */}
              <div className="form-group input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    {" "}
                    <i className="fa fa-lock iconsize"></i>
                  </span>
                </div>
                <input
                  name="password"
                  className="form-control"
                  placeholder="Password"
                  type="password"
                  value={login.password}
                  onChange={onChangeLoginHandler}
                />
              </div>

              {/* Button to trigger the login */}
              <button
                type="button"
                className="btn btn-primary btn-block"
                onClick={handleLogin}
              >
                Login
              </button>

              {/* Display the error message, if any */}
              <div className="text-center" style={{ color: "red" }}>
                {login.error}
              </div>

              {/* Link to the Registration component */}
              <strong>
                {" "}
                <p className="text-center" style={{ fontSize: "20px" }}>
                  <small>New User?</small>
                  <Link to="/registration">
                    <br /> Create new Account
                  </Link>
                </p>
              </strong>
            </form>
          </article>
        </div>
        <br />
        <br />

        {/* OTP verification popup */}
        {showOTPModal && (
          <div className="modal" tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Enter OTP</h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                    onClick={() => setShowOTPModal(false)}
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  {/* Input field for OTP */}
                  <div className="form-group">
                    <label htmlFor="otpInput">OTP:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="otpInput"
                      placeholder="Enter OTP"
                      // You may need to manage the OTP state separately
                      // and update the value attribute accordingly
                    />
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => handleOTPVerification(/*Pass OTP value here*/)}
                  >
                    OK
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
