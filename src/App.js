import React, { Fragment} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Navbar from "./components/layout/Navbar";
import Login from "./components/auth/Login";
import Dashboard from "./components/dashboard/Dashboard";
import DonationPage from "./components/donation/DonationPage";
import Footer from "./components/layout/Footer";

const App = () => {
  return (
    <Router>
      <Fragment>
        <Navbar/>
        <Route exact path="/" component={Landing}/>
        <section className="container">
          <Switch>
            <Route exact path="/register" component={Register}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/dashboard" component={Dashboard}/>
            <Route exact path="/donation-page/rackgivesback" component={DonationPage}/>
          </Switch>
        </section>
        <Footer/>
      </Fragment>
    </Router>
  );
};

export default App;
