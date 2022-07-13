/* eslint-disable global-require */
/* eslint-disable arrow-body-style */
import React, { useState, useEffect } from 'react';
import gunlist from '../data/gunlist.json';
import famas from '../images/famas.png';
import m4a1 from '../images/m4a1.png';

const Deck = () => {
  const images = [
    {
      id: 1,
      src: famas,
      name: 'famas',
      generated: false,
    },
    {
      id: 2,
      src: m4a1,
      name: 'm4a1',
      generated: false,
    },
  ];

  const [card, setCard] = useState(images);

  return (
    <div>
      <div>
        {card.map((element) => {
          console.log(element.image);
          return (

            <img src={element.src} key={element.id} alt={element.name} />
          );
        })}
      </div>
    </div>
  );
};

export default Deck;
