import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./components/homepage/homepage";
import Registration from "./components/registration/registration";
import Login from "./components/login/login";
import { BrowserRouter as Router } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddressFillForm from "./components/AddressFillingForm/AddressFillForm"; 
import PersonalDetails from "./components/PersonalDetails/PersonalDetails";


function App() {
  toast.configure({
    autoClose: 6000,
    draggable: false

    //etc you get the idea
  });
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/registration" component={Registration} />
        <Route path="/login" component={Login} />
        <Route path="/addressFillForm" component={AddressFillForm} />
        <Route path="/personalDetails" component={PersonalDetails} />
        <Route path="*" component={() => "404 Not found"} />
      </Switch>
    </Router>
  );
}

export default App;