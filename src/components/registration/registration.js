import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./registration.css";
import { toast } from "react-toastify";
import axios from "axios";

function Registration(props) {
  const [userDetails, setUserDetails] = useState({
    customerName: "",
    email: "",
    gender: "",
    mobile: "",
    password: "",
    address: "",
  });

  const [errors, setErrors] = useState({});

  function globalToast(message) {
    return toast.error(message);
  }

  function successToast() {
    toast.success("Account Created Successfully");
  }

  function onChangeCustomerHandler(event) {
    const { name, value } = event.target;
    setUserDetails((prevUserDetails) => ({
      ...prevUserDetails,
      [name]: value,
    }));
  }

  function formSubmitHandler() {
    const newErrors = validateForm();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      axios
        .post("http://localhost:8080/startWorkflow", userDetails)
        .then((response) => {
          // Handle the response from the API if needed
          console.log("API Response:", response.data);
          successToast();
          // Redirect to the login page after successful registration
          props.history.push("login");
        })
        .catch((error) => {
          // Handle any error that occurred during the API request
          console.error("API Error:", error);
          globalToast("Failed to submit form. Please try again later.");
        });
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

    // Remove the phone number required error
    if (userDetails.mobile.trim() === "") {
      // Remove the phone number error message
      delete newErrors.mobile;
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
          <h6 className="display-4 text-center">Create Account</h6>
          <p className="text-center">Get started with your free account</p>
          <p className="divider-text">
            <span className="bg-light">Enter Details</span>
          </p>

          <form>
            {/* Full name input */}
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
                className={`form-control ${errors.customerName ? "is-invalid" : ""}`}
                placeholder="Full name"
                type="text"
                value={userDetails.customerName}
                onChange={onChangeCustomerHandler}
              />
              {errors.customerName && <span className="error-text">{errors.customerName}</span>}
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
                className={`form-control ${errors.gender ? "is-invalid" : ""}`}
                value={userDetails.gender}
                onChange={onChangeCustomerHandler}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              {errors.gender && <span className="error-text">{errors.gender}</span>}
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
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                placeholder="Email address"
                type="email"
                value={userDetails.email}
                onChange={onChangeCustomerHandler}
              />
              {errors.email && <span className="error-text">{errors.email}</span>}
            </div>

            {/* Phone number input */}
            <div className="form-group input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fa fa-phone iconsize"></i>
                </span>
              </div>
              <select className="custom-select" style={{ maxWidth: "80px" }}>
                <option value="+91">+91</option>
                <option value="+0">+0</option>
                <option value="+1">+1</option>
                <option value="+44">+44</option>
                <option value="+33">+33</option>
              </select>
              <input
                name="mobile"
                className={`form-control ${errors.mobile ? "is-invalid" : ""}`}
                placeholder="Phone number"
                type="text"
                value={userDetails.mobile}
                onChange={onChangeCustomerHandler}
              />
              {errors.mobile && <span className="error-text">{errors.mobile}</span>}
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
                className={`form-control ${errors.password ? "is-invalid" : ""}`}
                placeholder="Create password"
                type="password"
                value={userDetails.password}
                onChange={onChangeCustomerHandler}
              />
              {errors.password && <span className="error-text">{errors.password}</span>}
            </div>

            {/* Submit button */}
            <div className="form-group">
              <button
                type="button"
                onClick={formSubmitHandler}
                disabled={Object.keys(errors).length !== 0}
                className="btn btn-primary btn-block"
              >
                Submit
              </button>
            </div>

            {/* Link to login page */}
            <p className="text-center" style={{ color: "white", fontSize: "23px" }}>
              Have an account? <Link to="login">Login</Link>
            </p>

            {/* Link back to home */}
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
