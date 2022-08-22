import React, { useState, useEffect } from 'react';

function Clock() {
  const [date, setDate] = useState(new Date());

  const localTime = date.toLocaleTimeString()

//   console.log(localTime)
    
  useEffect(() => {
    const time = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(time);
    };
  });

  return (
    
    <button className="clock-btn">
    <h3>{localTime}</h3>
    </button>
  );
}

export default Clock;
