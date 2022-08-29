import Box from '@mui/material/Box';
import BasicMenu from '../components/BasicMenu';
import allmoodsbanner from '../img/allmoodsbanner.png'

function SongsByMood({ songs }) {

  //happy Songs Filter
    const happySongs = songs.filter((s) => (
        s.mood_rank === 5
      ));

  //energized Songs filter
    const energizedSongs = songs.filter((s) => (
        s.mood_rank === 3
      ));

   //chill Songs filter
   const chillSongs = songs.filter((s) => (
    s.mood_rank === 2
  ));   

   //focused Songs filter
   const focusedSongs = songs.filter((s) => (
    s.mood_rank === 1
  ));     

   //intense Songs filter
   const intenseSongs = songs.filter((s) => (
    s.mood_rank === 4
  ));     

 //happy Songs player
    const happySongPlayer = happySongs
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
    
    //energized Songs player
    const energizedSongPlayer = energizedSongs
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
    
    //chill Songs player
       const chillSongPlayer = chillSongs
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

    //focused Songs player
       const focusedSongPlayer = focusedSongs
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

    //intense Songs player
       const intenseSongPlayer = intenseSongs
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
    

  if (!songs.length) return 'Loading...';

  return (
    <>
    <img
        src={allmoodsbanner}
        className="allsongs-img"
        alt="album art"
      />

      <div className="songs-container">
      <Box m={2}>
          <BasicMenu 
           variant="contained">
            Songs
          </BasicMenu>
        </Box>
      <h2>Happy Songs</h2>
        {happySongPlayer}

        <br></br>
        <br></br>
        <br></br>

        <div className="playlist-line">
         </div> 
         <br></br>
         <br></br>
      <h2>Energized Songs</h2>
        {energizedSongPlayer}
        <br></br>
        <br></br>
        <br></br>

        <div className="playlist-line">
         </div> 
         <br></br>
         <br></br>
         <h2>Chill Songs</h2>
        {chillSongPlayer}
        <br></br>
        <br></br>
        <br></br>
        <div className="playlist-line">
         </div> 
         <br></br>
         <br></br>
         <h2>Focused Songs</h2>
        {focusedSongPlayer}
        <br></br>
        <br></br>
        <br></br>
        <div className="playlist-line">
         </div> 
         <br></br>
         <br></br>
         <h2>Intense Songs</h2>
        {intenseSongPlayer}
        <br></br>
        <div className="playlist-line">
         </div> 
         <br></br>
         
      </div>
    </>
  );
}

export default SongsByMood;
