import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function SongList({ songs, user }) {
  // force render based on song array state 
  // const [loaded, setLoaded] = useState([]);

  // set playlist data state
  // const [playListData, setPlaylistData] = useState({
  //   name: '',
  //   image_url: '',
  //   mood_rank: '',
  //   user_id: '',
  //   song_id: '',
  // });

  // function to POST playlist from onClick listener
  const savePlayList = ()=>
  {fetch('/playlists', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }, 
    body: JSON.stringify(randomSongData),
  })}

  // randomly sort array of songs
  const randomSongs = songs.sort(() => Math.random() - 0.5).slice(0, 4);
  console.log("randomsongs", randomSongs)
  
  // create hash to POST song data
  const randomSongData = randomSongs.map((song) => {
    return {
      "name": song.title,
      "image_url": song.album_img,
      "mood_rank": song.mood_rank,
      "user_id": user.id
    }
  })
  console.log("randomsong data",randomSongData)
  
  // useEffect(() => {setPlaylistData(randomSongData)},[])
  
  //create song player JSX
  const songPlayer = randomSongs.map((s) => (
    
    <figure key={s.id}>
      <figcaption>
        <h2>{s.title}</h2>
      </figcaption>
      <div className="song-player">
      <audio controls loop>
 <source src={s.song_url} type="audio/mpeg;"/>
</audio>
</div>
    </figure>
  ));
  
  // map song images
  const songImg = randomSongs.map((song) => {
    return song.album_img;
  });
  
  // shorten random song list
    // const shortRandomSongs = randomSongs.slice(0, 4)
  
  // console.log('Songlist user', user);
  // console.log("songlist PL DATA", playListData)
  
  return (
    <>
      <img src={songImg[0]} className="song-img" />
    
    <div className="song-container">
      {songPlayer}
      <Box m={2}>
        <Button onClick={()=>savePlayList()} variant="contained">Save</Button>
      </Box>
      {/* <Box m={2}>
        <Button variant="contained">Edit</Button>
      </Box> */}
      </div>
      
    </>
  );
}

export default SongList;
