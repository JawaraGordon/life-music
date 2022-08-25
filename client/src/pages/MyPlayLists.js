import { Container } from '@mui/system';
import Box from '@mui/material/Box';
import React, { useEffect, useState } from 'react';
import SongList from '../playlists/SongList';

function MyPlayLists() {
  const [userPlaylists, setUserPlaylists] = useState([]);

  useEffect(() => {
    fetch('/playlists').then((resp) => {
      if (resp.ok) {
        resp.json().then((playlists) => setUserPlaylists(playlists));
      }
    });
  }, []);

  // console.log("Myplaylists", userPlaylists)

  return (
    <>
      <div className="playlists-container">
        <div className="playlist-song-container">
          <h2>Playlists</h2>
          <div>
            <div className="playlist-line"></div>
            {userPlaylists.map((playlist, index) => {
              return (
                <div key={index}>
                  <h2>{playlist.name}</h2>
                  {playlist.favorite_songs.map((s, index) => {
                    return (
                      <div key={index}>
                        <h2>{s.song_name}</h2>
                        <audio controls loop>
                          <source src={s.song_url} type="audio/mpeg;" />
                        </audio>
                      </div>
                    );
                  })}
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
