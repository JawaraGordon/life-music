import React from 'react';
import LifeMusicLogo from '../img/LifeMusicLogo.png'


function Header() {

//   function handleLogoutClick() {
//     fetch('/api/logout', { method: 'DELETE' }).then((r) => {
//       if (r.ok) {
//         setUser(null);
//       }
//     });
//   }




  return (
<>
    <div className="header">
      <div className="header-img">
      <a className="header-img" href="/">
        <img src={LifeMusicLogo} alt="logo" /></a>
      </div>
    <button className="header-btn" >
      Logout
    </button>
    </div>
</>
  );
}

export default Header;
