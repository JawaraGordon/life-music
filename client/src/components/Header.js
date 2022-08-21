import React from 'react';
import {useHistory} from 'react-router-dom'
import LifeMusicLogo from '../img/LifeMusicLogo.png';

function Header({ setUser }) {

const history = useHistory()

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
        <div className="header-img">
          <a className="header-img" href="/home">
            <img src={LifeMusicLogo} alt="logo" />
          </a>
        </div>
        <button onClick={handleLogoutClick} className="header-btn">
          Logout
        </button>
      </div>
    </>
  );
}

export default Header;
