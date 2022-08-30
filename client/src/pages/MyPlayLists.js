import DeleteOutlined from '@mui/icons-material/DeleteOutlined';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import React, { useEffect, useState } from 'react';


function MyPlayLists({user}) {
  const [userPlaylists, setUserPlaylists] = useState([]);

  //fetch all playlists 
  useEffect(() => {
    fetch(`/users/${user.id}/playlists/`).then((resp) => {
      if (resp.ok) {
        resp.json().then((playlists) => {
          
          setUserPlaylists(playlists)
        
        })}
    });
  }, [user.id]);

  
const deletePlayList = (id) => {
  fetch(`playlists/${id}`, {
    method: 'DELETE',
    headers: { Accept: 'application/json' },
  }).then(() => setUserPlaylists (prevPlaylist => 
    prevPlaylist.filter(playlist => playlist.id !== id)))
}

if (!userPlaylists.length || !userPlaylists) 
return (<h2 className="playlists-container">Save a Playlist...</h2>)

  return (
    <>
      <div className="playlists-container">
        <div className="playlist-song-container">
          <h2>Playlists</h2>
          <div>
            <img src={"https://source.unsplash.com/random/?playlist"}  className="playlist-img" alt="album art"/>
            <br></br>
            <div className="playlist-line"></div>
            {userPlaylists.map((p) => {
              return (
                <div key={p.id}>
                  <h2>{p.name}</h2>
                  {p.favorite_songs.map((s) => {
                    return (
                      <div key={s.id}>
                        <h2>{s.song_name}</h2>
                        <audio controls loop controlsList="nodownload">
                          <source src={s.song_url} type="audio/mpeg;" />
                        </audio>
                      </div>
                    );
                  })}
                   <Box m={2}>
          <Button 
          style={{
            backgroundColor: "#0bff99",
            color: "#000",
            fontWeight: "bold"
        }}
            className="header-btn"
            variant="contained"
            color="primary"
            startIcon={<DeleteOutlined />}
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
