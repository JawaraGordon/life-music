import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import ReactAudioPlayer from 'react-audio-player';

function App() {
  // add state for songs player
  const [songs, setSongs] = useState([]);
  
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
    
    // create function that fetches music from database by mood number
    
    useEffect(() => {
      fetch('/songs').then((resp) => {
        if (resp.ok) {
          resp.json().then((songs) => setSongs(songs));
        }
      });
    }, []);
    
  // randomly sort array or songs  
  const randomSongs = songs.sort(() => Math.random() - 0.5)

// filter song names
  const filteredSongNames = randomSongs
    .map((song) => song.title)
    .filter(
      (title, index, name) => name.indexOf(title) === index
    )
  
  // map song URLs
  const songUrl = randomSongs.map((song) => {
    return song.song_url
    // return {url: song.song_url, title: song.title}
  })

  // map song images
  const songImg = randomSongs.map((song) => {
    return song.album_img
    // return {url: song.song_url, title: song.title}
  })

  console.log("filtered songs", filteredSongNames)
  console.log("song urls", songUrl)
  console.log("album img", songImg)

  return (
    <>
      <Container maxWidth="md" style={{ backgroundColor: '#000000' }}>
        <Box m={2} pt={3} pb={3}>
          <Container maxWidth="sm" style={{ backgroundColor: '#cfe8fc' }}>
            <h1>Chill Playlist</h1>

            <Button variant="contained">Life Music</Button>
            <figure>
              
              <div>
                <img src={songImg[0]} className="song-img"/>
              </div>
              
              <figcaption>{filteredSongNames[0]}</figcaption>
              <ReactAudioPlayer src={songUrl[0]} controls maxWidth="sm"/>
              {/* <ReactAudioPlayer src={sortedSongs[0].url} controls /> */}
            </figure>
            <figure>
              <figcaption>{filteredSongNames[1]}</figcaption>
              <ReactAudioPlayer src={songUrl[1]} controls />
              {/* <ReactAudioPlayer src={sortedSongs[1]} controls /> */}
            </figure>
            <figure>
              <figcaption>{filteredSongNames[2]}</figcaption>
              <ReactAudioPlayer src={songUrl[2]} controls />
              {/* <ReactAudioPlayer src={sortedSongs[2]} controls /> */}
            </figure>
            <figure>
              <figcaption>{filteredSongNames[3]}</figcaption>
              <ReactAudioPlayer src={songUrl[3]} controls />
              {/* <ReactAudioPlayer src={sortedSongs[3]} controls /> */}
            </figure>
            <hr></hr>

          </Container>
        </Box>
      </Container>
    </>
  );
}

export default App;
