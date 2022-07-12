/* eslint-disable arrow-body-style */
import React, { useState, useEffect } from 'react';
import '../styles/GameSpace.css';
import Card from './Card';

const GameSpace = () => {
  return (
    <div id="gameSpaceContainer">
      <Card />
    </div>
  );
};

export default GameSpace;
