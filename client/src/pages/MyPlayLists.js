import { Container } from '@mui/system';
import Box from '@mui/material/Box';
import React, { useEffect, useState } from 'react';
import SongList from '../playlists/SongList';

function MyPlayLists({  user, songList }) {
 
  const { username, image_url, bio, location } = user;

  
  return (
    <>
      {/* <div className="home-container">
        <div className="profile">
          <h1>{username}</h1>
          <img src={image_url} className="user-img" />
          <h3>{bio}</h3>
          <h3>{location}</h3>
        </div> */}
      {/* </div> */}
        
        <div className="playlists-container">
        <div>
          <SongList songs={songList} />
        </div>
        <div>
          <SongList songs={songList} />
        </div>
        <div>
          <SongList songs={songList} />
        </div>
        <div>
          <SongList songs={songList} />
        </div>
        </div>
    </>
  );
}

export default MyPlayLists;
