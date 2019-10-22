import React from 'react';
import { Link } from "react-router-dom";



const Login = () => {
  return (
    <div className="login">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Log In</h1>
            <p className="lead text-center">
              Sign in to your Givifun account
            </p>
            <form>
              <div className="form-group">
                <input
                  type='email'
                  className='form-control form-control-lg'
                  placeholder='Email'
                  name='email'
                />
                <small className="form-text text-muted"/>
              </div>

              <div className="form-group">
                <input
                  type='password'
                  className='form-control form-control-lg'
                  placeholder='Password'
                  name='password'
                />
                <small className="form-text text-muted"/>
              </div>
              <input type="submit" className="btn btn-primary btn-block mt-4" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;