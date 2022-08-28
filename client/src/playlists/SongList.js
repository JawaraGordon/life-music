import Box from '@mui/material/Box';
import SavePlaylistDialog from '../components/SavePlaylistDialog'
import BasicMenu from '../components/BasicMenu';

function SongList({ songs, user }) {

  // console.log("All songs state", songs.map((s) => s.favorite_songs))
  // randomly sort array of songs
  const randomSongs = songs.sort(() => Math.random() - 0.5).slice(0, 4);

  console.log('songlist randomsongs', randomSongs);

  //create song player JSX
  const songPlayer = randomSongs.map((s) => (
        
    <figure key={s.id}>
      <figcaption>
        <h2>{s.title}</h2>
      </figcaption>
      <div className="song-player">
          <audio controls loop controlsList="nodownload">
          <source src={s.song_url} type="audio/mpeg;" />
        </audio>
      </div>
      <div>
      </div>
    </figure>
        
  ));

  // map song images
  const songImg = randomSongs.map((song) => {
    return song.album_img;
  });

  
  // function to POST playlist from onClick 
  const savePlayList = () => {

    // function to POST favorite_songs
    function saveFaveSong(songObj) {
      fetch('/favorite_songs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(songObj),
      });
    };
    fetch('/playlists', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        user_id: user.id}),
    })
    .then((resp) => resp.json())
    .then (playlist => {
      

      randomSongs.map((song) => 
      saveFaveSong({
        song_id: song.id,
        playlist_id: playlist.id,
      }
      ))})
      
    };
    
// console.log("Songlist save playlist after function", randomSongs)
// console.log("Songlist save playlist", playlist)
// console.log("Songlist save playlist before function", randomSongs)
// console.log('randomsong data', randomSongData);
// console.log('Songlist user', user);
// console.log("songlist PL DATA", playListData)

  if (!songPlayer.length ) 
return ("")

  return (
    <>
      <img src={songImg[0]} className="song-img" alt="album art"/>

      <div className="songs-container">
    <Box m={2}>
          <BasicMenu 
           variant="contained">
            Songs
          </BasicMenu>
        </Box>
        {songPlayer} 
        <Box m={2}>
          <SavePlaylistDialog 
          savePlayList={savePlayList}
           variant="contained">
            Save
          </SavePlaylistDialog>
        </Box>
        <br></br>
      </div>
    </>
  );
}

export default SongList;
