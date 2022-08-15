import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
// import Login from './Login';
import Header from './Header';
import NavBar from './NavBar';
import Home from '../pages/Home';
import About from '../pages/About';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import ReactAudioPlayer from 'react-audio-player';
import Chill from '../playlists/Chill'

function App() {
  // add state for songs player
  const [songs, setSongs] = useState([]);
  const [user, setUser] = useState([]);
    
    // create function that fetches music from database by mood number
    
    useEffect(() => {
      fetch('/songs').then((resp) => {
        if (resp.ok) {
          resp.json().then((songs) => setSongs(songs));
        }
      });
    }, []);
    
 

  return (
    <>
    <Header/>
  <NavBar user={user} setUser={setUser} />
      <Switch>
        <Route exact path="/">
          <Home key={songs.id} songs={songs}/>
        </Route>
        <Route exact path="/about">
          <About/>
        </Route>
        {/* <Route path="/login">
          <Login />
        </Route> */}
        {/* <Route path="/chill"> */}
        {/* <Chill songs={songs}/> */}
        {/* </Route> */}
      </Switch>


      
    </>
  );
}

export default App;
