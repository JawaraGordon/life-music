import React, { useState } from 'react';
import Button from '@mui/material/Button';
import FormLabel from '@mui/material/FormLabel';
import { useHistory } from 'react-router-dom';
import LifeMusicLogin from '../img/LifeMusicLogin.png';

function LoginForm({ setUser }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    }).then((resp) => {
      setIsLoading(false);
      if (resp.ok) {
        resp.json().then((user) => {
          setUser(user);
          history.push('/');
        });
      } else {
        resp.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <>
      <div className="login-container">
        <div className="login-img">
          <img src={LifeMusicLogin} />
        </div>
        <div className="login-form">
          <form onSubmit={handleSubmit}>
            <div>
              <FormLabel htmlFor="username">Username</FormLabel>
              <input
                className="input"
                type="text"
                id="username"
                autoComplete="off"
                placeholder="Keisha"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <FormLabel htmlFor="password">Password</FormLabel>
              <input
                className="input"
                type="password"
                id="password"
                autoComplete="current-password"
                placeholder="123"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
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
            {/* maps styled error message */}
            {/* <div>
        {errors.map((err) => (
          <Error key={err}>{err}</Error>
        ))}
      </div> */}
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
