import { useState, useRef, useEffect } from 'react'
import Box from '@mui/material/Box';
import SavePlaylistDialog from '../components/SavePlaylistDialog'
import BasicMenu from '../components/BasicMenu';

function SongList({ songs, user }) {

  const [randomSongs, setRandomSongs] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const audioRef = useRef(null);

  // randomly sort array of songs
  useEffect(() => {
    if (songs.length > 0) {
      const selectedSongs = [...songs]
        .sort(() => Math.random() - 0.5)
        .slice(0, 4);
      setRandomSongs(selectedSongs);
      console.log('Selected Random Songs:', selectedSongs); 
    }
  }, [songs]);
 
  const handleSongEnd = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < randomSongs.length - 1 ? prevIndex + 1 : 0
    );
  };

    // auto-play the next song
    useEffect(() => {
      if (audioRef.current) {
        audioRef.current.play();
      }
    }, [currentIndex]);

 // playback navigation
 const playPrevious = () => {
  setCurrentIndex((prevIndex) =>
    prevIndex > 0 ? prevIndex - 1 : randomSongs.length - 1
  );
};


const playNext = () => {
  setCurrentIndex((prevIndex) =>
    prevIndex < randomSongs.length - 1 ? prevIndex + 1 : 0
  );
};

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
      <div className="songimg-container"></div>
      <br />
      <div className="songs-container">
        <Box m={2}>
          <BasicMenu variant="contained">Songs</BasicMenu>
        </Box>

        <div className="playlist-view">
          <h3>Playlist</h3>
          <ul>
            {randomSongs.map((song, index) => (
              <li
                key={song.id}
                style={{
                  fontWeight: currentIndex === index ? 'bold' : 'normal',
                  color: currentIndex === index ? '#0bff99' : 'white',
                  cursor: 'pointer'
                }}
                onClick={() => setCurrentIndex(index)}
              >
                {song.title} - {song.artist}
              </li>
            ))}
          </ul>
        </div>

        <figure>
          <figcaption>
            <h2>{randomSongs[currentIndex]?.title}</h2>
            <p>{randomSongs[currentIndex]?.artist}</p>
          </figcaption>
          <div className="song-player">
            <audio
              ref={audioRef}
              controls
              onEnded={handleSongEnd}
              src={randomSongs[currentIndex]?.song_url}
            >
              Your browser does not support the audio element.
            </audio>
          </div>
          <div className="playlist-controls">
            <button onClick={playPrevious}>Previous</button>
            <button onClick={playNext}>Next</button>
          </div>
        </figure>

        <Box m={2}>
          <SavePlaylistDialog savePlayList={savePlayList} variant="contained">
            Save
          </SavePlaylistDialog>
        </Box>
        <br />
      </div>
    </>
  );
}

export default SongList;
