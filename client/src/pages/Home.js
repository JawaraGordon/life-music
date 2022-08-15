import { Container } from '@mui/system';
import Box from '@mui/material/Box';
import React, { useEffect, useState } from 'react';
import Chill from '../playlists/Chill';



function Home({songs}) {

// console.log("home", songs)

  return (
    <>
    <Box>
    <div className="home-container">
        <div>
            <Chill songs={songs}/>
        </div>
    </div>
    </Box>
    </>
  );
}

export default Home;
