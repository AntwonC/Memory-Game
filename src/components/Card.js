/* eslint-disable arrow-body-style */
import React, { useState, useEffect } from 'react';
import famas from '../images/famas.png';
import '../styles/Card.css';

const Card = () => {
  return (
    <div>
      <div id="cardElement">
        <img src={famas} id="gunCard" alt="famas" />
      </div>
    </div>
  );
};

export default Card;
