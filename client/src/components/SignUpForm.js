import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import LifeMusicLogo from '../img/LifeMusicLogo.png';
import FormLabel from '@mui/material/FormLabel';

function SignUpForm({ setUser }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [bio, setBio] = useState('');
  const [age, setAge] = useState('');
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch('/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation,
        image_url: imageUrl,
        bio,
        age,
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => setUser(user));
        history.push('/about');
      } else {
        r.json().then((err) => setErrors(err.errors));
        setTimeout(() => setErrors([]), 3000);
      }
    });
  }

  return (
    <div className="login-container">
      <div>
        <div className="login-logo">
          <img src={LifeMusicLogo} />
        </div>
      </div>
      <div className="login-form">
        <div className="user-button">
          <form className="login-form" onSubmit={handleSubmit}>
            <FormLabel>
              <input
                className="input-text"
                placeholder="Username"
                required
                type="text"
                id="username"
                autoComplete="off"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </FormLabel>
            <br></br>
            <FormLabel>
              <input
                className="input-text"
                placeholder="Password"
                required
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
              />
            </FormLabel>
            <br></br>
            <FormLabel>
              <input
                className="input-text"
                placeholder="Confirm Password"
                required
                type="password"
                id="password_confirmation"
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
                autoComplete="current-password"
              />
            </FormLabel>
            <br></br>
            <FormLabel>
              <input
                className="input-text"
                placeholder="Profile Image URL"
                required
                type="text"
                id="imageUrl"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
              />
            </FormLabel>
            <br></br>
            <FormLabel>
              <input
                className="input-text"
                placeholder="Bio"
                required
                type="text"
                id="bio"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
              />
            </FormLabel>
            <br></br>
            <FormLabel>
              <input
                className="input-text"
                placeholder="Age"
                required
                type="number"
                id="age"
                min="13"
                max="115"
                value={age}
                onChange={(e) => setAge(Number(e.target.value))}
              />
            </FormLabel>
            <br></br>
            <FormLabel>
              <Button
                className="header-btn"
                variant="contained"
                color="secondary"
                type="submit"
              >
                {isLoading ? 'Loading...' : 'Sign Up'}
              </Button>
            </FormLabel>
            <br></br>
            <FormLabel>
              {errors.map((err) => (
                <Alert variant="filled" severity="error" key={err}>
                  {err}
                </Alert>
              ))}
            </FormLabel>
          </form>
        </div>
      </div>
    </div>
  );
}
export default SignUpForm;
