import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import ReactAudioPlayer from 'react-audio-player';

function SongList({ songs, user }) {

  // const [loaded, setLoaded] = useState([]);
  const [playListData, setPlaylistData] = useState({
    name: '',
    image_url: '',
    mood_rank: '',
    user_id: '',
    song_id: '',
  });

  console.log("playlist Data", playListData)

  
  const savePlayList = ()=>
  {fetch(`/playlists`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },

    body: JSON.stringify(playListData),
  })}
    





// setTimeout(() => {<SongList songs={songList} />},1000)

  const randomSongsAlbumImg = songs.album_img

  // randomly sort array or songs
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
