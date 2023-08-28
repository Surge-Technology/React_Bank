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
import AddFill from "./components/AddressFillingForm/AddFill";
import AdminLogin from"./components/admin/adminlogin"
// import AdminLogin from"./components/AdminLogin/AdminLogin"
import AdminActiveTaskByID from "./components/AdminActiveTasklist/AdminActiveTaskByID"
// import Sidebar from "./components/admin/sidebar"
import CustomerQueryPage from "./components/CustomerQuery/CustomerQueryPage"
// import ActiveTaskList from "./components/TableComponent/TableComponent"
import AdminActiveTasklistDetail from "./components/AdminActiveTasklist/AdminActiveTasklistDetail"
import CardDetails from "./components/CardDetails/CardDetails"
import ActiveTaskList from "./components/AdminActiveTasklist/ActiveTaskList"
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
        <Route path="/dummy" component={EmailOTPVerification} />
        <Route path="/happyPath" component={CongratulationsScreen} />
        <Route path="/registrationReject" component={RegistrationReject} />
        <Route path="/Popup" component={Popup} />
        <Route path="/Otp" component={Otp} />
        <Route path="/AddFill" component={AddFill} />
        <Route path="/adminlogin" component={AdminLogin} />
        {/* <Route path="/AdminLogin" component={AdminLogin} /> */}
        {/* <Route path="/sidebar" component={Sidebar} /> */}
        <Route path="/CustomerQueryPage" component={CustomerQueryPage} />
        <Route path="/tableComponent" component={ActiveTaskList}/>
        <Route path="/adminActiveTasklistDetail" component={AdminActiveTasklistDetail}/>
        <Route path="/adminActiveTaskByID" component={AdminActiveTaskByID}/>
        <Route path="/cardDetails" component={CardDetails}/>
        <Route path="/ActiveTaskList" component={ActiveTaskList}/>


        

        <Route path="*" component={() => "404 Not found"} />
      </Switch>
    </Router>
  );
}

export default App;
