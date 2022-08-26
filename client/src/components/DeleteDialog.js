import * as React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function DeleteDialog({ user }) {
  const [open, setOpen] = React.useState(false);

  const history = useHistory()
  // console.log('alert user', user.id);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleDelete = () => {
    fetch(`users/${user.id}`, {
      method: 'DELETE',
      headers: { Accept: 'application/json' },
    });
    handleClose();
    window.location.reload();
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
        onClick={handleClickOpen}
      >
        Delete
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete your account?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>No</Button>
          <Button onClick={handleDelete} autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default DeleteDialog;
