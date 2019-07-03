import React, { Fragment} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Navbar from "./components/layout/Navbar";
import Login from "./components/auth/Login";
import Dashboard from "./components/dashboard/Dashboard";

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
          </Switch>
        </section>
      </Fragment>
    </Router>
  );
};

export default App;
