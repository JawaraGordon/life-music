import { Container } from '@mui/system';
import Box from '@mui/material/Box';
import React, { useEffect, useState } from 'react';
import SongList from '../playlists/SongList';

function MyPlayLists({  user, songList }) {

  const [userPlaylists, setUserPlaylists] = useState([])
 
  // const { username, image_url, bio, location } = user;

  console.log(userPlaylists)

  useEffect(() => {
    fetch('/playlists/').then((resp) => {
      if (resp.ok) {
        resp.json().then((playlists) => setUserPlaylists(playlists));
      }
    });
  }, []);

  const playlistPlayer = userPlaylists.map((playlist) => (
    
    <figure key={playlist.song.id}>
      <figcaption>
        <img src={playlist.song.album_img} className="song-img"/>
        <h2>{playlist.song.title}</h2>
      </figcaption>
      <div className="song-player">
      <audio controls loop>
 <source src={playlist.song.song_url} type="audio/mpeg;"/>
</audio>
</div>
    </figure>
    
  ));

  
  return (
    <>
        
        <div className="playlists-container">
        <div className="song-container">
          {playlistPlayer}
        </div>
        </div>
        
    </>
  );
}

export default MyPlayLists;
