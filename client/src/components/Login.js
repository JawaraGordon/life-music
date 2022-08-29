import React, { useState } from 'react';
import Button from '@mui/material/Button';
import FormLabel from '@mui/material/FormLabel';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

function Login({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <>
      {showLogin ? (
        <>
          <LoginForm setUser={setUser} />

          <div className="login-container">
            <p>
              
              <Button
                variant="contained"
                color="secondary"
                onClick={() => setShowLogin(false)}
              >
                Sign Up
              </Button>
            </p>
          </div>
        </>
      ) : (
        <>
          <SignUpForm setUser={setUser} />
          <div className="login-container">
            
                <FormLabel><h4>Already a member?</h4></FormLabel>
              <p>
                <Button
                  className="header-btn"
                  variant="contained"
                  color="secondary"
                  onClick={() => setShowLogin(true)}
                >
                  Log In
                </Button>
              </p>
            </div>
          
        </>
      )}
    </>
  );
}

export default Login;
