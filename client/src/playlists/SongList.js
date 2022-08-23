import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function SongList({ songs, user }) {

  // force render based on song array state 
  // const [loaded, setLoaded] = useState([]);

  // set playlist data state
  const [playListData, setPlaylistData] = useState({
    name: '',
    image_url: '',
    mood_rank: '',
    user_id: '',
    song_id: '',
  });

  // function to POST playlist from onClick listener
  const savePlayList = ()=>
  {fetch('/playlists', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },

    body: JSON.stringify(playListData),
  })}
    
// generate random song album image
  const randomSongsAlbumImg = songs.album_img

  // randomly sort array of songs
  const randomSongs = songs.sort(() => Math.random() - 0.5);

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

  // create hash to POST song data
  useEffect(() => {
  const randomSongData = randomSongs.map((song) => {
    return {
      "name": song.title,
      "image_url": song.album_img,
      "mood_rank": song.mood_rank,
      "user_id": user.id,
      "song_id": song.id,
    }})
  setPlaylistData(randomSongData)
  // console.log("randomsong data",randomSongData)
  
  },[])
  
  const shortSongList = songPlayer.slice(0, 4)

  // console.log("playlist Data", playListData)
  // console.log('Songlist user', user);
  console.log("songlist PL DATA", playListData)
  
  return (
    <>
      <img src={songImg[0]} className="song-img" />
    
    <div className="song-container">
      {shortSongList}
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
