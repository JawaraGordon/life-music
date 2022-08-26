import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';

function Clock({ songs , setSongList, currentMood, 
    setCurrentMood}) {
  

    const [date, setDate] = useState(new Date());

    const localTime = date.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})


        // function to handle clock click
    const handleClockClick = (localTime) => {
        checkTime(localTime)
        const filteredSongs = songs.filter(
          (song) => song.mood_rank === currentMood
        );
        setSongList(filteredSongs);
        // setIsShown((currentState) => !currentState);
      };

      // regex to check time
      function checkTime(time) {
        const regexMorning = /(((0[5-9])|(1[0-2])):([0-5])(0|5)\s(A|)M)/
        const regexAfternoon = /(((0[1-9])|(1[0-2])):([0-5])(0|5)\s(A)M)/
        const regexEvening = /(((0[1-9])|(1[0-2])):([0-5])(0|5)\s(P)M)/
        const regexNight = /(((0[1-9])|(1[0-2])):([0-5])(0|5)\s(P)M)/
        const regexLate = /(((0[1-9])|(1[0-2])):([0-5])(0|5)\s(P)M)/
        if (time.match(regexMorning)) {
          setCurrentMood(2)
        } else if (time.match(regexAfternoon)){
          setCurrentMood(5)
        } else if (time.match(regexEvening)){
          setCurrentMood(3)
        } else if (time.match(regexNight)){
          setCurrentMood(4)
        } else if (time.match(regexLate)){
          setCurrentMood(1)
        }
     
    }

    // console.log(localTime)
    // console.log("clock", handleClockClick())
  
  //  fetch time
    useEffect(() => {
      const time = setInterval(() => setDate(new Date()), 1000);
      return function cleanup() {
        clearInterval(time);
      };
    },[]);
  
   
    
    
     
    

  return (
    
    <Button onClick={()=>handleClockClick(localTime)} variant="contained"
    color="secondary" size="small">
    <h2>{localTime}</h2>
    </Button>
  );
}

export default Clock;
