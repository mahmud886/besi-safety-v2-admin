import React from 'react';
import {  Link } from "react-router-dom";
import './Login.css';


const Login = () => {
    return (
        <>

            <div className="login-main-container">
                <div className='login-container rounded shadow-lg '>
                    <form className='m-5 text-center '>
                        <h3 className='py-3'>Sign In</h3>

                        <div className="form-group">

                            <input type="text" className="form-control" placeholder="username" />
                        </div>

                        <div className="form-group">

                            <input type="password" className="form-control" placeholder="password" />
                        </div>

                        <div className="form-group">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                            </div>
                        </div>

                        <Link to='/dashboard'>
                            <button type="submit" className="btn btn-main btn-block">Login</button>
                        </Link>
                        <p className="forgot-password text-center">
                            Forgot <Link to="#">password?</Link>
                        </p>
                    </form>
                </div>
            </div>

        </>
    );
};

export default Login;
