import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./homepage/homepage";
import Registration from "./registration/registration";
import Login from "./login/login";
import { BrowserRouter as Router } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CardDetails from "./card/CardDetails";
import CustomerQueryPage from "./CustomerQueryPage/CustomerQueryPage";
import AdminLogin from "./AdminLogin/adminlogin";


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
        <Route path="/cardDetails" component={CardDetails} />
        <Route path="/customerQueryPage" component={CustomerQueryPage} />
        <Route path="/adminLogin" component={AdminLogin} />
        <Route path="*" component={() => "404 Not found"} />
      </Switch>
    </Router>
  );
}

export default App;
