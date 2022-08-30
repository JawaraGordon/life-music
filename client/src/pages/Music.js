import SongList from '../playlists/SongList';

function Music({ user, songList, setSongs, addPlaylistToUser }) {
  const { username, image_url, bio, age, location } = user;


  return (
    <>
      <div className="home-container">
        <div className="profile">
          <h1>{username}</h1>
          <div className="profile-img">
            <img src={image_url} className="user-img" alt="user"/>
          </div>
          <div className="profile-text">
            <h3>Age: {age}</h3>
            <h3>{bio}</h3>
            <h3>{location}</h3>
          </div>
        </div>
        <div>
          <SongList 
          songs={songList} 
          setSongs={setSongs} 
          user={user} 
          addPlaylistToUser={addPlaylistToUser}/>
        </div>
      </div>
    </>
  );
}

export default Music;
