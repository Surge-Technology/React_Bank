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
import EmailOTPVerification from "./components/dummy"
import CongratulationsScreen from "./layout/happyPath";
import Popup from "./layout/Popup";
import RegistrationReject from "./layout/registrationReject";
import Otp from "./components/OtpVerification/Otp";
// import TableComponent from "./components/TableComponent/TableComponent";
import TableComponent from "./components/TableComponent/TableComponent";
import CustomerQueryPage from "./components/CustomerQuery/CustomerQueryPage";
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
        <Route path="/otp" component={Otp} />
        <Route exact path="/" component={TableComponent} />
        <Route exact path="/customerQueryPage" component={CustomerQueryPage} />
        <Route path="/addressFillForm" component={AddressFillForm} />
        <Route path="/personalDetails" component={PersonalDetails} />
        <Route path="/dummy" component={EmailOTPVerification} />
        <Route path="/happyPath" component={CongratulationsScreen} />
        <Route path="/registrationReject" component={RegistrationReject} />
        <Route path="/Popup" component={Popup} />
        

        <Route path="*" component={() => "404 Not found"} />
      </Switch>
    </Router>
  );
}

export default App;
