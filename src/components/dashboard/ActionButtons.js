import React from 'react';
import { Link } from "react-router-dom";

const ActionButtons = () => {
  return (
    <div className="btn-group mb-4" role="group">
      <Link to="/profile/edit" className="btn btn-light">
        <i className="fas fa-user-circle text-primary mr-1" /> Edit Profile
      </Link>
      <Link to="/donation-page/add" className="btn btn-light">
        <i className="fas fa-plus-circle text-primary mr-1" />
        Create Donation Page
      </Link>
      <Link to="/donation-page/all" className="btn btn-light">
        <i className="fas fa-users text-primary mr-1" />
        Join Existing Page
      </Link>
    </div>
  );
};

export default ActionButtons;