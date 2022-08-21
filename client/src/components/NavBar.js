import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {


  return (
    <>
      <div className="navbar">
      <NavLink to="/home">
        <button className="nav-btn">
          <h3>Home</h3>
        </button>
      </NavLink>
      <NavLink to="/about">
        <button className="nav-btn">
          <h3>About</h3>
        </button>
      </NavLink>
      <NavLink to="/playlists">
        <button className="nav-btn">
          <h3>My Playlists</h3>
        </button>
      </NavLink>
      <NavLink to="/account">
        <button className="nav-btn">
          <h3>Account</h3>
        </button>
      </NavLink>
    </div>
    </>
  );
}

export default NavBar;
