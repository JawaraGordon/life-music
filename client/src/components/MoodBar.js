import Button from '@mui/material/Button';

function MoodBar({
  handleHappyClick,
  handleSadClick,
  handleChillClick,
  handleExcitedClick,
  handleFocusedClick,
}) {
  return (
    <>
      <div className="mood-bar">
        <Button
          onClick={handleHappyClick}
          variant="contained"
          color="secondary"
        >
          <h3>Happy</h3>
        </Button>
        <Button
          onClick={handleExcitedClick}
          variant="contained"
          color="secondary"
        >
          {' '}
          <h3 className="mood-tag">Energized</h3>
        </Button>
        <Button
          onClick={handleChillClick}
          variant="contained"
          color="secondary"
        >
          <h3 className="mood-tag">Chill</h3>
        </Button>
        <Button
          onClick={handleFocusedClick}
          variant="contained"
          color="secondary"
        >
          <h3 className="mood-tag">Focused</h3>
        </Button>
        <Button onClick={handleSadClick} variant="contained" color="secondary">
          <h3 className="mood-tag">Intense</h3>
        </Button>
      </div>
    </>
  );
}

export default MoodBar;
