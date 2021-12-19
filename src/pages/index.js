import React from 'react';
import Button from '@mui/material/Button';

import './index.css';

function startVideo() {
  console.log("button clicked");
  return ""
}

const Home = () => {
  return (
    <div className="HeroContainer">
      <p className="pre-text">Let's go to...</p>
      <p className="location">Maldives?</p>
      <Button
        variant="contained"
        id="start-button"
        onClick={startVideo()}>
        START
      </Button>
    </div>)
};

export default Home;
