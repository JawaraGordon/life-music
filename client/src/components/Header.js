import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import LifeMusicLogo from '../img/LifeMusicLogo.png';
import Clock from './Clock';

function Header({ setUser, songs, setSongList, currentMood, setCurrentMood }) {
  const history = useHistory();

  
  function handleLogoutClick() {
    fetch('/logout', { method: 'DELETE' }).then((r) => {
      if (r.ok) {
        setUser(false);
        history.push('/login');
      }
    });
  }

  return (
    <>
      <div className="header">
        <a className="header-img" href="/music">
          <img src={LifeMusicLogo} alt="logo" />
        </a>
        <br></br>

        <Clock
          songs={songs}
          setSongList={setSongList}
          currentMood={currentMood}
          setCurrentMood={setCurrentMood}
        />
      <br></br>
        <Button 
        className="header-btn"
        onClick={handleLogoutClick} 
        variant="contained"
        style={{
          backgroundColor: "#0bff99",
          color: "#000",
          fontWeight:`bold`,
      }}
        >
          Logout
        </Button>
      </div>
    </>
  );
}

export default Header;
