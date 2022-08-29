import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import AccessTimeFilledSharp from '@mui/icons-material/AccessTimeFilledSharp';
import timehop from '../img/timehop.png'

function Clock({ songs, setSongList, currentMood, setCurrentMood }) {
  const [date, setDate] = useState(new Date());

  
// create localtime variable 
  const localTime = date.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });

  // function to handle clock click
  const handleClockClick = (localTime) => {
    checkTime(localTime);
    const filteredSongs = songs.filter(
      (song) => song.mood_rank === currentMood
    );
    setSongList(filteredSongs);
    
  };

  // regex to check time
  function checkTime(time) {
    const regexAM = /(0?[1-9]|1[0-2]):([0-5]\d)\s?(([Aa])\.?[Mm]\.?)/;
    const regexPM = /(0?[1-9]|1[0-2]):([0-5]\d)\s?(([Pp])\.?[Mm]\.?)/
    if (time.match(regexAM)) {
      setCurrentMood(2);
    } else if (time.match(regexPM)) {
      setCurrentMood(3);
    }
  }

  //  fetch time
  useEffect(() => {
    const time = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(time);
    };
  }, []);

  return (
    <>
    <Button
      onClick={() => handleClockClick(localTime)}
      variant="contained"
      color="secondary"
      size="small"
      
      >
      {<AccessTimeFilledSharp/>}
      <h2>{localTime}</h2>
      <img
        src={timehop}
        className="header-img"
        alt="album art"
      />
    </Button>
    </>
  );
  
}


export default Clock;
