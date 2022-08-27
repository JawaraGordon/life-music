import { Container } from '@mui/system';
import Box from '@mui/material/Box';
import React, { useEffect, useState } from 'react';
import SongList from '../playlists/SongList';

function Music({ user, isShown, songList, setSongs, addPlaylistToUser }) {
  const { username, image_url, bio, age, location } = user;

  return (
    <>
      <div className="home-container">
        <div className="profile">
          <h1>{username}</h1>
          <div className="profile-img">
            <img src={image_url} className="user-img" />
          </div>
          <div className="profile-text">
            <h3>Age: {age}</h3>
            <h3>{bio}</h3>
            <h3>{location}</h3>
          </div>
        </div>
        <div>
          <SongList 
          songs={songList} 
          setSongs={setSongs} 
          user={user} 
          addPlaylistToUser={addPlaylistToUser}/>
        </div>
        {/* {!isShown ? null : (
        )} */}
      </div>
    </>
  );
}

export default Music;
