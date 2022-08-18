import React, { useState } from "react";
import Button from '@mui/material/Button';
import LoginForm from "./LoginForm";
// import SignUpForm from "./SignUpForm";

function Login({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
          
    <>
         
      <div className="logo-small">
            {/* <img src={LifeMusicLogo} alt="logo" /> */}
          </div>
      {showLogin ? (
        <>
          <LoginForm setUser={setUser} />
          
            <div className="login-container">
          <p>
             &nbsp;
            <Button variant="contained" color="secondary" onClick={() => setShowLogin(false)}>
              Sign Up
            </Button> 
          </p>
            </div>
        </>
      ) : (
        <>
          {/* <SignUpForm onLogin={onLogin} /> */}
          
          <div className="user-button">
          <p>
            Already have an account? &nbsp;
            <Button variant="contained" color="secondary" onClick={() => setShowLogin(true)}>
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
