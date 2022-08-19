import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './Login';
import Header from './Header';
import NavBar from './NavBar';
import MoodBar from './MoodBar';
import Home from '../pages/Home';
import Chill from '../playlists/SongList';
import songList from '../pages/Home';
import About from '../pages/About';
import Account from '../pages/Account';
import MyPlayLists from '../pages/MyPlayLists';


function App() {
  // add state for songs player
  const [songs, setSongs] = useState([]);
  const [user, setUser] = useState(null);
  const [isShown, setIsShown] = useState(false);
  const [currentMood, setCurrentMood] = useState([]);
  const [songList, setSongList] = useState([]);
  

    
    // create function that fetches users from database
    
    // useEffect(() => {
    //   fetch('/users').then((resp) => {
    //     if (resp.ok) {
    //       resp.json().then((user) => setUser(user));
    //     }
    //   });
    // }, []);


    // fetch user credentials 
  useEffect(() => {
    fetch('/me').then((resp) => {
      if (resp.ok) {
        resp.json().then((user) => setUser(user));
      }
    });
  }, []);

    
    // useEffect(() => {
    //   fetch('/songs').then((resp) => {
    //     if (resp.ok) {
    //       resp.json().then((songs) => setSongs(songs))
    //     }
    //   });
    // }, []);
    
  const handleChillClick = () => {
    setCurrentMood(()=>2)
    fetch('/songs').then((resp) => {
      if (resp.ok) {
        resp.json().then((songs) => {
          

          setSongs(songs)})
        
      }
    });
    const filteredSongs = songs.filter( 
          (song) => song.mood_rank === currentMood
          );
        setSongList(filteredSongs);
        setIsShown((currentState) => !currentState)
   }
   const handleExcitedClick = () => {
     setCurrentMood(()=> 3)
     fetch('/songs').then((resp) => {
       if (resp.ok) {
         resp.json().then((songs) => setSongs(songs))
       }
     });
 
     const filteredSongs = songs.filter( 
       (song) => song.mood_rank === currentMood
       );
     setSongList(filteredSongs);
     setIsShown((currentState) => !currentState)
 
    }

    const handleFocusedClick = () => {
      setCurrentMood(()=>1)
      fetch('/songs').then((resp) => {
        if (resp.ok) {
          resp.json().then((songs) => setSongs(songs))
          
        }
      });
      const filteredSongs = songs.filter( 
            (song) => song.mood_rank === currentMood
            );
          setSongList(filteredSongs);
          setIsShown((currentState) => !currentState)
     }

     const handleSadClick = () => {
      setCurrentMood(()=>4)
      fetch('/songs').then((resp) => {
        if (resp.ok) {
          resp.json().then((songs) => setSongs(songs))
          
        }
      });
      const filteredSongs = songs.filter( 
            (song) => song.mood_rank === currentMood
            );
          setSongList(filteredSongs);
          setIsShown((currentState) => !currentState)
     }

     const handleHappyClick = () => {
      setCurrentMood(()=>5)
      fetch('/songs').then((resp) => {
        if (resp.ok) {
          resp.json().then((songs) => setSongs(songs))
          
        }
      });
      const filteredSongs = songs.filter( 
            (song) => song.mood_rank === currentMood
            );
          setSongList(filteredSongs);
          setIsShown((currentState) => !currentState)
     }

  //  console.log("app songlist" , songList)

    console.log("user",user)
    // if (!user) return <Login  />;
    if (!user) return <Route path="/login">
      <Login setUser={setUser}/>
  </Route>;



  return (
    <>
  <Header setUser={setUser}/>
  <NavBar user={user} setUser={setUser} />
  <MoodBar user={user} setUser={setUser} handleChillClick={handleChillClick} handleExcitedClick={handleExcitedClick} handleFocusedClick={handleFocusedClick} handleSadClick={handleSadClick} handleHappyClick={handleHappyClick}/>
      
      <Switch>
      
        <Route exact path="/">
          <Home  
          songs={songs} 
          user={user} 
          isShown={isShown}
          songList={songList} 
          currentMood={currentMood} 
          setCurrentMood={setCurrentMood}/>
        </Route>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/account">
          <Account user={user} setUser={setUser}/>
        </Route>
        <Route path="/playlists">
          <MyPlayLists user={user} setUser={setUser} songList={songList}/>
        </Route>
      </Switch>
    </>
  );
}

export default App;
