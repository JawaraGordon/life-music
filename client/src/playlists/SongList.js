import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import ReactAudioPlayer from 'react-audio-player';

function SongList({ songs, user }) {

  // const [loaded, setLoaded] = useState([]);
  const [playListData, setPlaylistData] = useState({
    user_id: '',
    username: '',
    image_url: '',
    bio: '',
    age: '',
  });

  console.log("songList songs", songs)

  
  // const savePlayList = ()=>
  // {fetch(`/playlists/${user.id}`, {
  //   method: 'PATCH',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     Accept: 'application/json',
  //   },

  //   body: JSON.stringify(randomSongs),
  // })}
    





// setTimeout(() => {<SongList songs={songList} />},1000)

  const randomSongsAlbumImg = songs.album_img

  // randomly sort array or songs
  const randomSongs = songs.sort(() => Math.random() - 0.5);

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
  
  return (
    <>
      <img src={songImg[0]} className="song-img" />
    
    <div className="song-container">
      {songPlayer}
      <Box m={2}>
        <Button variant="contained">Save</Button>
      </Box>
      {/* <Box m={2}>
        <Button variant="contained">Edit</Button>
      </Box> */}
      </div>
      
    </>
  );
}

export default SongList;
