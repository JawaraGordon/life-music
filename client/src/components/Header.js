import React from 'react';
import { useHistory } from 'react-router-dom';
import LifeMusicLogo from '../img/LifeMusicLogo.png';
import Clock from './Clock';

function Header({ setUser, songs, setSongList, currentMood, 
  setCurrentMood}) {
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

          <Clock
          songs={songs}
          setSongList={setSongList}
          currentMood={currentMood}
          setCurrentMood={setCurrentMood}
          />
        
        <button onClick={handleLogoutClick} className="header-btn">
          Logout
        </button>
        
      </div>
    </>
  );
}

export default Header;
