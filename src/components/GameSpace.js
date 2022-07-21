/* eslint-disable arrow-body-style */
import React, { useState, useEffect } from 'react';
import '../styles/GameSpace.css';
import Deck from './Deck';
import Score from './Score';

const GameSpace = () => {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const increaseScore = () => {
    setScore(score + 1);
  };

  const resetScore = () => {
    const highestScore = Math.max(score, bestScore);
    setBestScore(highestScore);
    setScore(0);
  };

  return (
    <div id="gameSpaceContainer">
      <Score currScore={score} bestScore={bestScore} />
      <Deck givePoint={increaseScore} gameOverScore={resetScore} currScore={score} />
    </div>
  );
};

export default GameSpace;
