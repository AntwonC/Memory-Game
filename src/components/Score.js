/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
import React, { useState, useEffect } from 'react';
import '../styles/Score.css';

const Score = (props) => {
  const { currScore, bestScore } = props;

  return (
    <div id="scoreContainer">
      <div className="scoreText">
        Current Score:
        {' '}
        {currScore}
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
