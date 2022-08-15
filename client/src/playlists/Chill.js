import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import ReactAudioPlayer from 'react-audio-player';



function Chill({songs}) {

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
          <Container maxWidth="sm" style={{ backgroundColor: '#000000' }}>
            
              <div className="card">
                <h1>Chill Playlist</h1>
    
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
                <Box m={2} >
                <Button variant="contained">Save</Button>
                </Box>
                <Box m={2} >
                <Button variant="contained">Edit</Button>
                </Box>
                <hr></hr>
    
              </div>
            
          </Container>
        </>
      );
}

export default Chill