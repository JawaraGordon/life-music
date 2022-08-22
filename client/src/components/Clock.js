import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';

function Clock({ handleClockClick}) {
  

    const [date, setDate] = useState(new Date());

    const localTime = date.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})


    // console.log(localTime)
  
  //  fetch time
    useEffect(() => {
      const time = setInterval(() => setDate(new Date()), 1000);
      return function cleanup() {
        clearInterval(time);
      };
    },[]);
  
    

  return (
    
    <Button onClick={() => handleClockClick()} variant="contained"
    color="secondary" size="small">
    <h2>{localTime}</h2>
    </Button>
  );
}

export default Clock;
