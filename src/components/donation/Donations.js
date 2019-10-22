import React, { Fragment} from 'react';
import { Link } from "react-router-dom";
import DonationCard from "./DonationCard";

const Donations = () => {
  return (
    <Fragment>
      <form className="form-inline mb-3">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
        </input>
      </form>
      <div className='card-columns'>
        <DonationCard/>
        <DonationCard/>
        <DonationCard/>
      </div>
    </Fragment>
  );
};

export default Donations;