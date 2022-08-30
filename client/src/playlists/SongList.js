import Box from '@mui/material/Box';
import SavePlaylistDialog from '../components/SavePlaylistDialog'
import BasicMenu from '../components/BasicMenu';

function SongList({ songs, user }) {

  // randomly sort array of songs
  const randomSongs = songs.sort(() => Math.random() - 0.5).slice(0, 4);


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


  // function to POST playlist from onClick 
  const savePlayList = () => {

    fetch('/playlists', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        user_id: user.id,
        random_songs: randomSongs}),
    })
      
    };

  if (!songPlayer.length ) return 

  return (
    <>
    <div className="songimg-container">

      </div>
      <br></br>
      
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
