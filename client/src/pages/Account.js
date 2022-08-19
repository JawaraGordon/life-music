import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';

function Account({ user, setUser, onLogin }) {
  const [formData, setFormData] = useState({
    id: '',
    username: '',
    image_url: '',
    bio: '',
    age: '',
  });
  const history = useHistory();

  // console.log("account user", user);

  useEffect(() => {
    fetch(`/user/${user.id}`)
      .then((resp) => resp.json())
      .then((user) => setFormData(user));
  }, [user.id]);

  function handleChange(e) {
    setFormData((formData) => ({
      ...formData,
      [e.target.name]: e.target.value,
    }));
  }

  // updates the user info in database
  function handleUpdate(e) {
    e.preventDefault();

    fetch(`/user/${user.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },

      body: JSON.stringify(formData),
    })
      .then((resp) => resp.json())
      .then((updatedUser) => {
        onUpdate(updatedUser);
      });
    history.push('/');
  }

  function onUpdate(updatedUser) {
    setUser(updatedUser);
  }

  function pushToHome() {
    history.push('/');
  }

  return (
    <div className="login-container">
      <div className="login-form">
        <form autoComplete="off" onSubmit={handleUpdate}>
          <h3>Edit Your Info</h3>
          <FormLabel htmlFor="name">Username</FormLabel>
          <div>
            <input
              className="input-text"
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>

          <FormLabel htmlFor="image_url">Image Url</FormLabel>
          <div>
            <input
              className="input-text"
              id="image_url"
              name="image_url"
              value={formData.image_url}
              onChange={handleChange}
            />
          </div>
          <FormLabel htmlFor="bio">Bio</FormLabel>
          <div>
            <input
              className="input-text"
              type="text"
              id="bio"
              name="bio"
              value={formData.bio}
              onChange={handleChange}
            />
          </div>
          <FormLabel htmlFor="bio">Age</FormLabel>
          <div>
            <input
              className="input-text"
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
            />
          </div>
          <br></br>
          <Button
            className="header-btn"
            variant="contained"
            color="secondary"
            
            type="submit"
          >
            Update
          </Button>
          <Button
            className="header-btn"
            variant="contained"
            color="secondary"
            onClick={pushToHome}
          >
            Home
          </Button>
        </form>
        <div>

        </div>
      </div>
    </div>
  );
}

export default Account;