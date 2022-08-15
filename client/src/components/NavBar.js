import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar({ user, setUser }) {


  return (
    <>
      <div className="navbar">
      <NavLink exact to="/">
        <button className="nav-btn">
          <h3>Home</h3>
        </button>
      </NavLink>
      <NavLink exact to="/about">
        <button className="nav-btn">
          <h3>About</h3>
        </button>
      </NavLink>
      <NavLink exact to="/playlists">
        <button className="nav-btn">
          <h3>My Playlists</h3>
        </button>
      </NavLink>
      <NavLink exact to="/account">
        <button className="nav-btn">
          <h3>Account</h3>
        </button>
      </NavLink>
    </div>
    </>
  );
}

export default NavBar;
