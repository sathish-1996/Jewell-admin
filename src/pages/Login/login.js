// src/components/Login.js

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputField from '../../components/Input/input';
import { Button } from 'react-bootstrap';

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ email: "", password: "" })
  const [otp, setOtp] = useState(false)

  const [timer, setTimer] = useState(30); // Timer starts from 60 seconds
  const [isResendDisabled, setIsResendDisabled] = useState(true);

  useEffect(() => {
    let interval = null;

    if (!isResendDisabled && timer > 0) {
      interval = setInterval(() => {
        setTimer(prev => prev - 1);
      }, 1000);
    } else if (timer === 0) {
      setIsResendDisabled(true);
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timer, isResendDisabled]);

  const handleResend = () => {
    // logic to resend OTP goes here
    console.log('OTP Resent');
    setTimer(30);
    setIsResendDisabled(false);
  };
  const handleData = (name, value) => {
    console.log(name, value, "value")
    setUser({ ...user, [name]: value })

  }
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission

    navigate('/');
  };

  return (
    <div className="flex items-center justify-center min-h-screen from-blue-500 to-teal-400 new_bg" style={{ height: "600px", display: "flex", justifyContent: "center", alignItems: "center" }}>
      {/* <video autoPlay muted loop id="myVideo" src={require('../images/video.mp4')} /> */}
      <div className="flex w-full max-w-4xl bg-white shadow-lg rounded-lg" style={{ height: "500px", borderRadius: "10px" }}>
        {/* Left side image */}
        <div className="w-1/2 hidden md:block">
          <img
            src={require('../../components/images/Login.jpg')}
            alt="Login Illustration"
            className="w-full h-full object-cover rounded-l-lg"
          />
        </div>

        {/* Right side login form */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Sign In</h2>
          <p className="text-gray-400 mb-8" style={{ fontSize: "14px", fontFamily: "serif" }}>Welcome back! Please enter your credentials to continue.</p>

          {/* Login Form */}
          <form onSubmit={handleSubmit}>
            <div className='row'>
              <div className="col-md-12">
                {/* <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email</label> */}
                <InputField
                  inputType="number"
                  id="email"
                  label={"Mobile Number"}
                  onChange={handleData}
                  value={user['email']}
                  keyname={'email'}
                  name="email"
                  className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  placeholder="Enter your mobile number"
                  required
                  maxlength="10"
                />
              </div>

              {otp && (
                <div className="col-md-12">
                  {/* <label htmlFor="password" className="block text-sm font-semibold text-gray-700">Password</label> */}
                  <InputField
                    inputType="number"
                    id="password"
                    name="password"
                    label={"OTP"}
                    onChange={handleData}
                    value={user['password']}
                    className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                    placeholder="Enter your otp"
                    required
                  />
                </div>
              )}

            </div>
            {/* <div className='otp-btn-align'>
              <Button className='primary' onClick={() => setOtp(true)}>
            {  isResendDisabled ?    "Resend  OTP" : "Send OTP"}
              </Button>
            </div> */}
            <div style={{ marginTop: '10px' }} className='otp-btn-align'>
              {isResendDisabled ? (
                <Button className='primary' onClick={() => { setOtp(true); handleResend() }}>
                  {timer > 0 ? "Send  OTP" : "Resend OTP"}
                </Button>

              ) : (
                <span>Resend OTP in {timer}s</span>
              )}
            </div>
            <div style={{ padding: "10px" }}>
              <button
              style={{border:"blue"}}
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              >
                Sign In
              </button>
            </div>
          </form>

          <div className="flex items-center justify-between mt-6">
            <label className="inline-flex items-center text-sm text-gray-600">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2">Remember me</span>
            </label>
            <span className="text-sm text-indigo-600 hover:text-indigo-700">Forgot password?</span>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              Don’t have an account?{' '}
              <span className="text-indigo-600 hover:text-indigo-700">Sign up</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
