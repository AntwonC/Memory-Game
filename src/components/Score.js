/* eslint-disable arrow-body-style */
import React, { useState, useEffect } from 'react';
import '../styles/Score.css';

const Score = () => {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  return (
    <div id="scoreContainer">
      <div className="scoreText">
        Current Score:
        {' '}
        {currentScore}
        {' '}
      </div>
      <div className="scoreText">
        Best Score:
        {' '}
        {bestScore}
      </div>
    </div>

  );
};

export default Score;
