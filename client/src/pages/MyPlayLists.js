import { Container } from '@mui/system';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import React, { useEffect, useState } from 'react';
import SongList from '../playlists/SongList';

function MyPlayLists() {
  const [userPlaylists, setUserPlaylists] = useState([]);

  //fetch all playlists 
  useEffect(() => {
    fetch('/playlists/').then((resp) => {
      if (resp.ok) {
        resp.json().then((playlists) => setUserPlaylists(playlists));
      }
    });
  }, []);

  
const deletePlayList = (id) => {
  fetch(`playlists/${id}`, {
    method: 'DELETE',
    headers: { Accept: 'application/json' },
  }).then(() => setUserPlaylists (prevPlaylist => 
    prevPlaylist.filter(playlist => playlist.id !== id)))
}

  // console.log("Myplaylists", userPlaylists)

  return (
    <>
      <div className="playlists-container">
        <div className="playlist-song-container">
          <h2>Playlists</h2>
          <div>
            <div className="playlist-line"></div>
            {userPlaylists.map((p) => {
              return (
                <div key={p.id}>
                  <h2>{p.name}</h2>
                  {p.favorite_songs.map((s) => {
                    return (
                      <div key={s.id}>
                        <img src={s.album_img}/>
                        <h2>{s.song_name}</h2>
                        <audio controls loop controlsList="nodownload">
                          <source src={s.song_url} type="audio/mpeg;" />
                        </audio>
                      </div>
                    );
                  })}
                   <Box m={2}>
          <Button 
          
          className="header-btn"
            variant="contained"
            color="primary"
            onClick={() => deletePlayList(p.id)}>
            Delete
          </Button>
        </Box>
                  <br></br>
                  <div className="playlist-line"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default MyPlayLists;
