import * as React from 'react';
import { useHistory } from 'react-router-dom'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const history = useHistory()

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleTopClick = () => {

        history.push('/songs');
  };

  const handleBottomClick = () => {
    history.push('/moods');
  };

  return (
    <div>
      <Button
      variant="contained"
      color="secondary"
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Songs
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleTopClick}>All Songs</MenuItem>
        <MenuItem onClick={handleBottomClick}>Songs By Mood</MenuItem>
      </Menu>
    </div>
  );
}

export default BasicMenu