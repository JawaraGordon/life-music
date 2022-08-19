import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import ReactAudioPlayer from 'react-audio-player';

function SongList({ songs }) {

  const [loaded, setLoaded] = useState(false);

console.log("songList songs", songs)


  const randomSongsAlbumImg = songs.album_img

  // randomly sort array or songs
  const randomSongs = songs.sort(() => Math.random() - 0.5);




  const songPlayer = randomSongs.map((s) => (
    <figure key={s.id}>
      
      <figcaption>
        <h2>{s.title}</h2>
      </figcaption>
      {/* <ReactAudioPlayer src={s.song_url} controls loop maxWidth="sm" /> */}
      <div className="song-player">
      <audio controls loop>
 <source src={s.song_url} type="audio/mpeg;"/>
 {/* <source src={s.song_url} type="audio/mpeg;"/>
 <source src={s.song_url} type="audio/mpeg"/> */}
</audio>
</div>
    </figure>
  ));

  // // filter song names
  // const filteredSongNames = randomSongs
  //   .map((song) => song.title)
  //   .filter((title, index, name) => name.indexOf(title) === index);

  // // map song URLs
  // const songUrl = randomSongs.map((song) => {
  //   return song.song_url;
  //   // return {url: song.song_url, title: song.title}
  // });

  // map song images
  const songImg = randomSongs.map((song) => {
    return song.album_img;
    // return {url: song.song_url, title: song.title}
  });


  // setTimeout(() => {<SongList songs={songList} />},1000)
  return (
    <>
      <img src={songImg[0]} className="song-img" />
    
    <div className="song-container">
      {songPlayer}
      <Box m={2}>
        <Button variant="contained">Save</Button>
      </Box>
      {/* <Box m={2}>
        <Button variant="contained">Edit</Button>
      </Box> */}
      </div>
      
    </>
  );
}

export default SongList;
