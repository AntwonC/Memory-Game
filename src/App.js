/* eslint-disable arrow-body-style */
import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import GameSpace from './components/GameSpace';

const App = () => {
  return (
    <div>
      <Header />
      <GameSpace />
    </div>
  );
};

export default App;
