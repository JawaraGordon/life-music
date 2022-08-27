import * as React from 'react';
import Button from '@mui/material/Button';
import SaveOutlined from '@mui/icons-material/SaveOutlined';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


function SavePlaylistDialog({ savePlayList, randomSongs }) {
  const [open, setOpen] = React.useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    savePlayList()
    setOpen(false);
  };

  // console.log("Save Playlist dialog", randomSongs)

  return (
    <div>
      <Button
        className="header-btn"
        variant="contained"
        color="secondary"
        startIcon={<SaveOutlined/>}
        onClick={handleClickOpen}
      >
        Save
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Save this Playlist?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Saved to <i>"My Playlists"</i>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() =>handleClose()} autoFocus>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default SavePlaylistDialog;
