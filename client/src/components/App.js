import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './Login';
import Header from './Header';
import NavBar from './NavBar';
import MoodBar from './MoodBar';
import Music from '../pages/Music';
import About from '../pages/About';
import Account from '../pages/Account';
import MyPlayLists from '../pages/MyPlayLists';
import AllSongs from '../pages/AllSongs';
import SongsByGenre from '../pages/SongsByMood';

function App() {
  const [songs, setSongs] = useState([]);
  const [user, setUser] = useState(null);
  const [isShown, setIsShown] = useState(false);
  const [currentMood, setCurrentMood] = useState([]);
  const [songList, setSongList] = useState([]);

  // fetch user credentials
  useEffect(() => {
    fetch('/me').then((resp) => {
      if (resp.ok) {
        resp.json().then((user) => setUser(user));
      }
    });
  }, []);

  // fetch all songs
  useEffect(() => {
    fetch('/songs').then((resp) => {
      if (resp.ok) {
        resp.json().then((songs) => {
          setSongs(songs);
        });
      }
    });
  }, []);

  const addPlaylistToUser = (newPlaylist) => {

    setUser((prevUser) => ({...prevUser, "playlists": [...prevUser.playlists,newPlaylist]}))

  }
  const handleChillClick = () => {
    // setCurrentMood(() => 2);

    const filteredSongs = songs.filter((song) => song.mood_rank === 2);
    setSongList(filteredSongs);
    setIsShown((currentState) => !currentState);
  };
  const handleEnergizedClick = () => {
    // setCurrentMood(() => 3);

    const filteredSongs = songs.filter((song) => song.mood_rank === 3);
    setSongList(filteredSongs);
    setIsShown((currentState) => !currentState);
  };
  const handleFocusedClick = () => {
    // setCurrentMood(() => 1);
    const filteredSongs = songs.filter((song) => song.mood_rank === 1);
    setSongList(filteredSongs);
    setIsShown((currentState) => !currentState);
  };
  const handleSadClick = () => {
    // setCurrentMood(() => 4);

    const filteredSongs = songs.filter((song) => song.mood_rank === 4);
    setSongList(filteredSongs);
    setIsShown((currentState) => !currentState);
  };
  const handleHappyClick = () => {
    // setCurrentMood(() => 5);
    const filteredSongs = songs.filter((song) => song.mood_rank === 5);
    setSongList(filteredSongs);
    setIsShown((currentState) => !currentState);
  };

  if (!user)
    return (
      <Route path="/">
        <Login setUser={setUser} />
      </Route>
    );

  return (
    <>
      <Header
        setUser={setUser}
        songs={songs}
        setSongList={setSongList}
        currentMood={currentMood}
        setCurrentMood={setCurrentMood}
        />
        <div className="mobile">
      <NavBar user={user} setUser={setUser} />
      <MoodBar
        user={user}
        setUser={setUser}
        handleChillClick={handleChillClick}
        handleEnergizedClick={handleEnergizedClick}
        handleFocusedClick={handleFocusedClick}
        handleSadClick={handleSadClick}
        handleHappyClick={handleHappyClick}
      />
  </div>
      <Switch>
        <Route exact path="/music">
          <Music
            songs={songs}
            setSongs={setSongs}
            user={user}
            isShown={isShown}
            songList={songList}
            currentMood={currentMood}
            setCurrentMood={setCurrentMood}
            addPlaylistToUser={addPlaylistToUser}
          />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/account">
          <Account user={user} setUser={setUser} />
        </Route>
        <Route path="/playlists">
          <MyPlayLists user={user} setUser={setUser} songList={songList} />
        </Route>
        <Route path="/songs">
          <AllSongs user={user} songs={songs} />
        </Route>
        <Route path="/moods">
          <SongsByGenre user={user} songs={songs} />
        </Route>
      </Switch>
    </>
  );
}

export default App;
