import React from 'react';
import Button from '@mui/material/Button';

import './index.css';

function startVideo() {
  console.log("button clicked");
  return ""
}

const Home = () => {
  return (
    <div id="landing-page-flex-container">
      <div id="landing-page-flex-item-text">
        <p id="pre-text">Let's go to...</p>
        <p id="location">Maldives?</p>
      </div>
      <div id="landing-page-flex-item-button">
        <Button
          variant="contained"
          id="start-button"
          onClick={startVideo()}>
          START
        </Button>
      </div>
    <div id="landing-page-flex-item-previous-destinations">
      <a href="#">previous destinations</a>
    </div>
    </div>)
};

export default Home;
