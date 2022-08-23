import React, { useState, useEffect } from 'react';
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
    fetch(`/users/${user.id}`)
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

    fetch(`/users/${user.id}`, {
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
    history.push('/home');
  }

  function onUpdate(updatedUser) {
    setUser(updatedUser);
  }
// delete the user
  const handleDelete = () => {
    fetch(`users/${user.id}`, {
      method: 'DELETE',
      headers: { Accept: 'application/json' },
    });
    window.location.reload();
  };

  function confirmAction() {
    let confirmAction = window.confirm('Are you sure?');
    if (confirmAction) {
      alert('The music is not in the notes, but in the silence between. - Mozart');
      handleDelete(user.id);
    } else {
      alert('Music is life!');
    }
  }

  function pushToHome() {
    history.push('/home');
  }

  return (
    <div className="login-container">
      <div className="login-form">
        <form autoComplete="off" onSubmit={handleUpdate}>
          <h3>Edit Your Info</h3>
     
          <div>
            <input
              className="input-text"
              type="text"
              placeholder="Username"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>

          <br></br>
          <div>
            <input
              className="input-text"
              id="image_url"
                placeholder="Image Url"
              name="image_url"
              value={formData.image_url}
              onChange={handleChange}
            />
          </div>
          <br></br>
          <div>
            <input
              className="input-text"
              type="text"
              placeholder="Bio"
              id="bio"
              name="bio"
              value={formData.bio}
              onChange={handleChange}
            />
          </div>
          <br></br>
          <div>
            <input
              className="input-text"
              type="number"
              placeholder="Age"
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
          {' '} 
          
          <Button
            className="header-btn"
            variant="contained"
            color="secondary"
            onClick={pushToHome}
          >
            
            Home
          </Button>
          {' '} 
          
          <Button
            className="header-btn"
            variant="contained"
            color="secondary"
            onClick={() => confirmAction(user.id)}
          >
            
            Delete
          </Button>
        </form>
        <div>

        </div>
      </div>
    </div>
  );
}

export default Account;
