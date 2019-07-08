import React from 'react';
import { Link } from 'react-router-dom';
import ActionButtons from "./ActionButtons";
import Donations from "../donation/Donations";

const Dashboard = () => {

  let dashboardContent =
        <div>
          <p className="lead text-muted">
            Welcome <Link to={`/profile/johndoe`}>John Doe</Link>
          </p>
          <ActionButtons/>
          <Donations/>
        </div>;

  return (
    <div className="dashboard">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="display-4">Dashboard</h1>
            {dashboardContent}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;