import { Container } from '@mui/system';
import Box from '@mui/material/Box';
import React, { useEffect, useState } from 'react';
import SongList from '../playlists/SongList';

function MyPlayLists({  user, songList }) {
 
  const { username, image_url, bio, location } = user;

  
  return (
    <>
        
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
