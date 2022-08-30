import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import { useHistory } from 'react-router-dom';
import LifeMusicLogin from '../img/LifeMusicLogin.png';

function LoginForm({ setUser }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    }).then((resp) => {
      
      if (resp.ok) {
        resp.json().then((user) => {
          setUser(user);
          history.push('/about');
        });
      } else {
        resp.json().then((err) => setErrors(err.errors));
        setTimeout(() => setErrors([]), 3000);
      }
    });
  }

  return (
    <>
      <div className="login-container">
        <div className="login-img">
          <img src={LifeMusicLogin} alt={'logo'}/>
        </div>
        <div className="login-form">
          <form onSubmit={handleSubmit}>
            <div>
              <input
                
                type="text"
                id="username"
                autoComplete="off"
                className="input-text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <br></br>
            <div>
              <input
                
                type="password"
                id="password"
                autoComplete="current-password"
                className="input-text"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <br></br>
            <div>
              <Button
                className="header-btn"
                variant="contained"
                color="secondary"
                type="submit"
              >
                Login
              </Button>
            </div>
            <div className="error-message">
              {errors.map((err) => (
                <Alert variant="filled" severity="error" key={err}>
                  {err}
                </Alert>
              ))}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
