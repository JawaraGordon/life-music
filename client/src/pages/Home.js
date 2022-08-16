import { Container } from '@mui/system';
import Box from '@mui/material/Box';
import React, { useEffect, useState } from 'react';
import Chill from '../playlists/Chill';

function Home({ songs, user }) {
  const [songList, setSongList] = useState([]);
  const [currentMood, setCurrentMood] = useState(2);

  // create checkbox functionality to set current mood_rank
  useEffect(() => {
    const filteredSongs = songs.filter(
      (song) => song.mood_rank === currentMood
      );
      console.log('home songs', songs);
    setSongList(filteredSongs);
    console.log('useEffect filteredSongs', filteredSongs);
  }, []);

  const userNames = user.map((user) => {
    return user.username;
  });

  const userImg = user.map((user) => {
    return user.image_url;
  });

  const userBio = user.map((user) => {
    return user.bio;
  });

  const userLocation = user.map((user) => {
    return user.location;
  });

  // console.log("home", songs.map((s) => s.mood_rank))
  // console.log('home songlist', songList);
  // console.log('home songs', songs);
  // console.log("home mood" , songs)
  // console.log("home", user)
  // console.log("home userimage", userImg)

  return (
    <>
      <div className="home-container">
        <div className="profile">
          <h1>{userNames[0]}</h1>
          <img src={userImg[0]} className="user-img" />
          <h3>{userBio[0]}</h3>
          <h3>{userLocation[0]}</h3>
        </div>
        <div>
          <Chill songs={songList} />
        </div>
      </div>
    </>
  );
}

export default Home;
