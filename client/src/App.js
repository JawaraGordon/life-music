import * as React from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { makeStyles } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ReactAudioPlayer from 'react-audio-player';
import Brunch from '../src/audio/0500Brunch.mp3';

function App() {
  return (
    <>
  
   
  
      <Container maxWidth="md" style={{ backgroundColor: '#000000' }} >
      <Box m={2} pt={3} pb={3}>
      <Container maxWidth="sm" style={{ backgroundColor: '#cfe8fc' }} >
        <h1>Chill Playlist</h1>

        <Button variant="contained">Life Music</Button>
        <figure>
          <figcaption>0500 Brunch:</figcaption>
          <ReactAudioPlayer src={Brunch} controls />
        </figure>
        <figure>
          <figcaption>3AM FOMO:</figcaption>
          <ReactAudioPlayer src="https://jawaragordon.com/music/3AM%20FOMO%20ft.%20Andres.mp3" controls />
        </figure>
        <figure>
          <figcaption>Poolin Chillside:</figcaption>
          <ReactAudioPlayer src="https://jawaragordon.com/music/Poolin%20Chillside.mp3" controls />
        </figure>
        <figure >
          <figcaption>Paper Work:</figcaption>
          <ReactAudioPlayer src="https://jawaragordon.com/music/Paper%20Work.mp3" controls />
        </figure>
        <hr></hr>
      </Container>
      </Box>
      </Container>
      
    </>
  );
}

export default App;
