/* eslint-disable arrow-body-style */
import React, { useState, useEffect } from 'react';
import '../styles/GameSpace.css';
import Deck from './Deck';

const GameSpace = () => {
  return (
    <div id="gameSpaceContainer">
      <Deck />
    </div>
  );
};

export default GameSpace;
