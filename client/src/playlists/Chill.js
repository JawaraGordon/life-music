import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import ReactAudioPlayer from 'react-audio-player';

function Chill({ songs }) {
  // const [
  //   id,
  //   album_img,
  //   artist,
  //   bpm,
  //   key_of_song,
  //   length,
  //   mood_rank,
  //   song_url,
  //   title,
  // ] = songs;

  const randomSongsAlbumImg = songs.album_img

  // randomly sort array or songs
  const randomSongs = songs.sort(() => Math.random() - 0.5);


  // console.log("rs album img", randomSongsAlbumImg)

  const songPlayer = randomSongs.map((s) => (
    <figure key={s.id}>
      <div>
      {/* <img src={s.album_img} className="song-img" /> */}
      </div>
      <figcaption>
        <h2>{s.title}</h2>
      </figcaption>
      <ReactAudioPlayer src={s.song_url} controls maxWidth="sm" />
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

  // console.log("filtered songs", filteredSongNames)
  // console.log("song urls", songUrl)
  console.log("album img", songImg)
  // console.log('random songs', randomSongs);

  return (
    <>
      {/* <Container maxWidth="sm" style={{ backgroundColor: '#000000' }}> */}

      {/* <div className="card"> */}
      <h2>Chill Playlist</h2>
      <img src={songImg[0]} className="song-img" />

      {songPlayer}
      <Box m={2}>
        <Button variant="contained">Save</Button>
      </Box>
      <Box m={2}>
        <Button variant="contained">Edit</Button>
      </Box>
      <hr></hr>

      {/* </div> */}

      {/* </Container> */}
    </>
  );
}

export default Chill;
