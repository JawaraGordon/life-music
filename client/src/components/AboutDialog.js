import * as React from 'react';
import Button from '@mui/material/Button';
import Info from '@mui/icons-material/Info';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function AboutDialog({ savePlayList }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        className="header-btn"
        variant="contained"
        color="secondary"
        startIcon={<Info />}
        onClick={handleClickOpen}
      >
        Instructions
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {'Save this Playlist?'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            🎵 Press the Music button.
            <br></br>
            <br></br>✅ Choose a Mood from the Mood-bar to generate a random
            list of songs with that vibe.
            <br></br>
            <br></br>✅ A new list of songs will be generated each time a Mood
            is pressed.
            <br></br>
            <br></br>✅ Save the list of songs with the "save" button at the
            bottom of the playlist.
            <br></br>
            <br></br>✅ View your saved playlists with the Playlists button.
            <br></br>
            <br></br>✅ Press the Songs button at the top of the playlist
            to see a page with all of the songs or choose to see all of
            the songs categorized by mood.
            <br></br>
            <br></br>✅ While on the music tab, press the "Time Hop" button next
            to the clock to generate a random list of
            songs based on the current time of day.
            <br></br>
            <br></br>✅ Pressing the logo in the top left corner takes you
            to user's profile view.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose()} autoFocus>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AboutDialog;
