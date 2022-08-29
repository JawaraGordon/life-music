import React from 'react';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';


function NavBar() {

  return (
    <>
      <div className="navbar">
      <NavLink to="/music">
        <Button 
        variant="contained"
        style={{
          backgroundColor: "#0bff99",
      }}>
          <h3 className="nav-tag"> &nbsp;Music &nbsp;</h3>
        </Button>
      </NavLink>
      <NavLink to="/about">
        <Button 
        variant="contained"
        style={{
          backgroundColor: "#0bff99",
      }}>
          <h3 className="nav-tag"> &nbsp;About &nbsp;</h3>
        </Button>
      </NavLink>
      <NavLink to="/playlists">
        <Button 
        style={{
          backgroundColor: "#0bff99",
      }}>
          <h3 className="nav-tag"> &nbsp;Playlists</h3>
        </Button>
      </NavLink>
      <NavLink to="/account">
        <Button 
        style={{
          backgroundColor: "#0bff99",
      }}>
          <h3 className="nav-tag"> &nbsp;Account &nbsp;</h3>
        </Button>
      </NavLink>
    </div>
    </>
  );
}

export default NavBar;
