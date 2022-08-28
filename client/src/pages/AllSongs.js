import allsongsbanner from '../img/allsongsbanner.png'

function AllSongs({ songs, user }) {
  const songPlayer = songs
    .sort((a, b) => a.id - b.id)
    .map((s) => (
      <figure key={s.id}>
        <figcaption>
          <h2>{s.title}</h2>
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
      <img
        src={allsongsbanner}
        className="allsongs-img"
        alt="album art"
      />

      <div className="songs-container">
        {songPlayer}

        <br></br>
      </div>
    </>
  );
}

export default AllSongs;
