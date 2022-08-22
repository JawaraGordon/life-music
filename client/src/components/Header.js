import React from 'react';
import { useHistory } from 'react-router-dom';
import LifeMusicLogo from '../img/LifeMusicLogo.png';
import Clock from './Clock';

function Header({ setUser }) {
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
       
          <a className="header-img" href="/home">
            <img src={LifeMusicLogo} alt="logo" />
          </a>

          <Clock/>
        
        <button onClick={handleLogoutClick} className="header-btn">
          Logout
        </button>
      </div>
    </>
  );
}

export default Header;
