import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Header from "../header/header";

const initialLoginState = {
  email: "",
  password: "",
  error: "",
};

export default function Login(props) {
  const [login, setLogin] = useState(initialLoginState);

  function onChangeLoginHandler(event) {
    const updatedLogin = {
      ...login,
      [event.target.name]: event.target.value,
    };
    setLogin(updatedLogin);
  }

  function handleLogin() {
    if (!login.email) {
      setLogin({ ...login, error: "Please enter email" });
    } else if (!login.password) {
      setLogin({ ...login, error: "Please enter password" });
    } else {
      const registeredUserDetails = JSON.parse(localStorage.getItem("registeredUser"));
      if (registeredUserDetails) {
        if (login.email === registeredUserDetails.email && login.password === registeredUserDetails.password) {
          // Display a success toast notification for successful login
          toast.success("Login successful!", {
            position: toast.POSITION.TOP_LEFT,
          });

          // Redirect to the AddressFillForm component after successful login
          props.history.push("/addressfillform");
        } else {
          // Display an error toast notification for invalid credentials
          toast.error("Invalid email or password. Please try again.", {
            position: toast.POSITION.TOP_LEFT,
          });
        }
      } else {
        // Display an error toast notification if no registered user is found
        toast.error("No registered user found. Please register first.", {
          position: toast.POSITION.TOP_LEFT,
        });
      }
    }
  }

  return (
    <div className="container-fluid back">
      <Header message="Customer Login" />

      <div className="container" style={{ marginTop: "5%", width: "50%" }}>
        <div className="card bg-light">
          <article className="card-body mx-auto" style={{ width: "50%" }}>
            <p className="divider-text">
              <span className="bg-light">Enter Credentials</span>
            </p>

            <form>
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

              <button type="button" className="btn btn-primary btn-block" onClick={handleLogin}>
                Login
              </button>

              <div className="text-center" style={{ color: "red" }}>
                {login.error}
              </div>

              <strong>
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
      </div>
    </div>
  );
}
