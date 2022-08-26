import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function SongList({ songs, user }) {
  // force render based on song array state
  // const [loaded, setLoaded] = useState([]);

    // randomly sort array of songs
    const randomSongs = songs.sort(() => Math.random() - 0.5).slice(0, 4);
    console.log('randomsongs', randomSongs);

    // function to POST playlist from onClick listener
  const saveFaveSong = (songObj) => {
    fetch('/favorite_songs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(songObj),
    });
  };


  // function to POST playlist from onClick listener
  const savePlayList = () => {
    fetch('/playlists', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        user_id: user.id}),
    })
    .then((resp) => resp.json())
    .then (playlist => {

      console.log("Songlist save playlist", playlist)
      randomSongs.map((song) => {

        saveFaveSong({

          playlist_id: playlist.id,
          song_id: song.id

        })

      }
    )})

  };
  
  // console.log('randomsong data', randomSongData);


  //create song player JSX
  const songPlayer = randomSongs.map((s) => (
    <figure key={s.id}>
      <figcaption>
        <h2>{s.title}</h2>
      </figcaption>
      <div className="song-player">
        <audio controls loop controlsList="nodownload">
          <source src={s.song_url} type="audio/mpeg;" />
        </audio>
      </div>
    </figure>
  ));

  // map song images
  const songImg = randomSongs.map((song) => {
    return song.album_img;
  });


  // console.log('Songlist user', user);
  // console.log("songlist PL DATA", playListData)

  return (
    <>
      <img src={songImg[0]} className="song-img" />

      <div className="song-container">
        {songPlayer}
        <Box m={2}>
          <Button onClick={() => savePlayList()} variant="contained">
            Save
          </Button>
        </Box>
        {/* <Box m={2}>
        <Button variant="contained">Edit</Button>
      </Box> */}
      </div>
    </>
  );
}

export default SongList;
