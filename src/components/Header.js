/* eslint-disable arrow-body-style */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import Score from './Score';
import '../styles/Header.css';

const Header = () => {
  return (
    <div id="headerContainer">
      <h1 id="headerTitle">Call of Duty Memory Game</h1>
      <p>Don't click on the same weapon twice!</p>
    </div>
  );
};

export default Header;
