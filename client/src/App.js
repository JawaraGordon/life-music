import * as React from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import ReactAudioPlayer from 'react-audio-player';
import Brunch from '../src/audio/0500Brunch.mp3';

function App() {
  return (
    <>
      <Container maxWidth="sm" style={{ backgroundColor: '#cfe8fc' }}>
        <h1>Chill Playlist</h1>

        <Button variant="contained">Life Music</Button>
        <figure>
          <figcaption>0500 Brunch:</figcaption>
          <ReactAudioPlayer src={Brunch} autoPlay controls />
        </figure>
        <figure>
          <figcaption>3AM FOMO:</figcaption>
          <ReactAudioPlayer src="https://jawaragordon.com/music/3AM%20FOMO%20ft.%20Andres.mp3" autoPlay controls />
        </figure>
        <figure>
          <figcaption>0500 Brunch:</figcaption>
          <ReactAudioPlayer src={Brunch} autoPlay controls />
        </figure>
        <figure>
          <figcaption>0500 Brunch:</figcaption>
          <ReactAudioPlayer src={Brunch} autoPlay controls />
        </figure>
      </Container>
    </>
  );
}

export default App;
