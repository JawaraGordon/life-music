import Box from '@mui/material/Box';
import BasicMenu from '../components/BasicMenu';
import allsongsbanner from '../img/allsongsbanner.png';

function AllSongs({ songs}) {
  const songPlayer = songs
    .sort((a, b) => a.id - b.id)
    .map((s) => (
      <figure key={s.id}>
        <figcaption>
          <h4>{s.title}</h4>
        </figcaption>
        <div className="song-player">
          <audio controls loop controlsList="nodownload">
            <source src={s.song_url} type="audio/mpeg;" />
          </audio>
        </div>
        <div></div>
      </figure>
    ));

  if (!songPlayer.length) return 'Loading...';

  return (
    <>
      <img src={allsongsbanner} className="allsongs-img" alt="album art" />

      <div className="songs-container">
        <Box m={2}>
          <BasicMenu variant="contained">Songs</BasicMenu>
        </Box>
        {songPlayer}

        <br></br>
      </div>
    </>
  );
}

export default AllSongs;
