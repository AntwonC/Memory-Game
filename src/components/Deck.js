/* eslint-disable prefer-const */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-continue */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable global-require */
/* eslint-disable arrow-body-style */
import React, { useState, useEffect } from 'react';
import famas from '../images/famas.png';
import m4a1 from '../images/m4a1.png';
import acr from '../images/acr.png';
import ak47 from '../images/ak47.png';
import aughbar from '../images/aughbar.png';
import barret50cal from '../images/barret50cal.png';
import f2000 from '../images/f2000.png';
import fal from '../images/fal.png';
import intervention from '../images/intervention.png';
import l86lsw from '../images/l86lsw.png';
import m14ebr from '../images/m14ebr.png';
import m16 from '../images/m16.png';
import m240 from '../images/m240.png';
import mg4 from '../images/mg4.png';
import miniuzi from '../images/miniuzi.png';
import mp5k from '../images/mp5k.png';
import p90 from '../images/p90.png';
import rpd from '../images/rpd.png';
import scarh from '../images/scarh.png';
import tar21 from '../images/tar21.png';
import ump45 from '../images/ump45.png';
import vector from '../images/vector.png';
import wa2000 from '../images/wa2000.png';

const Deck = (props) => {
  const images = [
    {
      id: 0,
      src: famas,
      name: 'famas',
      generated: false,
    },
    {
      id: 1,
      src: m4a1,
      name: 'm4a1',
      generated: false,
    },
    {
      id: 2,
      src: acr,
      name: 'acr',
      generated: false,
    },
    {
      id: 3,
      src: ak47,
      name: 'ak47',
      generated: false,
    },
    {
      id: 4,
      src: aughbar,
      name: 'aughar',
      generated: false,
    },
    {
      id: 5,
      src: barret50cal,
      name: 'barret50cal',
      generated: false,
    },
    {
      id: 6,
      src: f2000,
      name: 'f2000',
      generated: false,
    },
    {
      id: 7,
      src: fal,
      name: 'fal',
      generated: false,
    },
    {
      id: 8,
      src: intervention,
      name: 'intervention',
      generated: false,
    },
    {
      id: 9,
      src: l86lsw,
      name: 'l86lsw',
      generated: false,
    },
    {
      id: 10,
      src: m14ebr,
      name: 'm14ebr',
      generated: false,
    },
    {
      id: 11,
      src: m16,
      name: 'm16',
      generated: false,
    },
    {
      id: 12,
      src: m240,
      name: 'm240',
      generated: false,
    },
    {
      id: 13,
      src: mg4,
      name: 'mg4',
      generated: false,
    },
    {
      id: 14,
      src: miniuzi,
      name: 'miniuzi',
      generated: false,
    },
    {
      id: 15,
      src: mp5k,
      name: 'mp5k',
      generated: false,
    },
    {
      id: 16,
      src: p90,
      name: 'p90',
      generated: false,
    },
    {
      id: 17,
      src: rpd,
      name: 'rpd',
      generated: false,
    },
    {
      id: 18,
      src: scarh,
      name: 'scarh',
      generated: false,
    },
    {
      id: 19,
      src: tar21,
      name: 'tar21',
      generated: false,
    },
    {
      id: 20,
      src: ump45,
      name: 'ump45',
      generated: false,
    },
    {
      id: 21,
      src: vector,
      name: 'vector',
      generated: false,
    },
    {
      id: 22,
      src: wa2000,
      name: 'wa2000',
      generated: false,
    },
  ];

  const [card, setCard] = useState(images);
  const { givePoint, gameOverScore, currScore } = props;
  const numberOfCards = 3;
  const maxScore = 23;

  // Randomize array in-place using Durstenfeld shuffle algorithm
  const shuffleArray = (array) => {
    const shuffledArr = [...array];
    for (let i = shuffledArr.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = shuffledArr[i];
      shuffledArr[i] = shuffledArr[j];
      shuffledArr[j] = temp;
    }

    return shuffledArr;
  };
  // When the player loses
  const gameOverReset = () => {
    const cardArr = [...card];

    for (let i = 0; i < cardArr.length; i += 1) {
      cardArr[i].generated = false;
    }

    setCard(cardArr);
  };
  // Changing the score after the initial pick
  const manuallyAddFirstPoint = () => {
    const cardArr = [...card];

    if (currScore === 0) {
      for (let i = 0; i < cardArr.length; i += 1) {
        if (cardArr[i].generated) {
          givePoint();
          break;
        }
      }
    }
  };
  // Returns a card that is already true
  const generateAtLeastOneTrue = (deck) => {
    if (currScore === 0) {
      return -1;
    }
    const min = Math.ceil(0);
    const max = Math.floor(23);

    let rng = Math.floor(Math.random() * (max - min) + min);
    let alreadyTrue = deck[rng].generated;

    while (alreadyTrue === false) {
      rng = Math.floor(Math.random() * (max - min) + min);
      alreadyTrue = deck[rng].generated;
    }

    return rng;
  };
  // Returns a card that is false
  const generateAtLeastOneFalse = (deck) => {
    const min = Math.ceil(0);
    const max = Math.floor(23);

    let rng = Math.floor(Math.random() * (max - min) + min);
    let alreadyFalse = deck[rng].generated; // Look for false

    while (alreadyFalse) {
      rng = Math.floor(Math.random() * (max - min) + min);
      alreadyFalse = deck[rng].generated;
    }

    return rng;
  };
  // function run when a card is clicked
  const changeGeneratedOnClick = (evt) => {
    const cardArr = [...card];
    const { id } = evt.target;

    if (currScore === 0) {
      if (cardArr[id].generated === false) {
        cardArr[id].generated = true;
      }
      manuallyAddFirstPoint();
      setCard(cardArr);
    } else if (cardArr[id].generated === false) {
      cardArr[id].generated = true;
      givePoint();
      setCard(cardArr);
    } else if (cardArr[id].generated === true) {
      gameOverReset();
      gameOverScore();
    }
  };
  // Generate three cards, but also generate at least 1 generated: true card
  const generateThreeCards = (deck) => {
    const deckSize = images.length;
    const min = Math.ceil(0);
    const max = Math.floor(23);

    let threeCards = [];
    let cardOne = generateAtLeastOneFalse(deck);
    let cardTwo = generateAtLeastOneTrue(deck);
    let cardThree = generateAtLeastOneFalse(deck);
    let cardFour = generateAtLeastOneFalse(deck);
    let cardFive = generateAtLeastOneTrue(deck);

    // Issue: ran out of false. Infinite loop
    if (cardTwo === -1) {
    // Duplicate
      while (cardOne === cardThree || cardFour === cardThree || cardFour === cardOne) {
        cardOne = generateAtLeastOneFalse(deck);
        cardThree = generateAtLeastOneFalse(deck);
        cardFour = generateAtLeastOneFalse(deck);
      }

      threeCards.push(deck[cardOne]);
      threeCards.push(deck[cardThree]);
      threeCards.push(deck[cardFour]);
    } else if (currScore >= 20 && currScore < 23) {
      while (cardTwo === cardFive) {
        cardTwo = generateAtLeastOneTrue(deck);
        cardFive = generateAtLeastOneTrue(deck);
      }
      threeCards.push(deck[cardOne]);
      threeCards.push(deck[cardTwo]);
      threeCards.push(deck[cardFive]);
    } else {
      while (cardOne === cardThree) {
        cardOne = generateAtLeastOneFalse(deck);
        cardThree = generateAtLeastOneFalse(deck);
      }
      threeCards.push(deck[cardOne]);
      threeCards.push(deck[cardTwo]);
      threeCards.push(deck[cardThree]);
    }

    threeCards = shuffleArray(threeCards);

    const result = threeCards.map((randomImage) => {
      return <img src={randomImage.src} onClick={changeGeneratedOnClick} id={randomImage.id} className="gunCard" alt="randomGun" key={randomImage.id} />;
    });

    return result;
  };
  // Resets the game automatically because of useEffect() hook.
  const winningScreenElement = () => {
    useEffect(() => {
      if (currScore === maxScore) {
        gameOverScore();
        gameOverReset();
      }
    }, [currScore]);
  };

  useEffect(() => {
    const gunImage = document.querySelectorAll('.gunCard');
    return () => {
      for (let j = 0; j < gunImage.length; j += 1) {
        gunImage[j].removeEventListener('click', changeGeneratedOnClick);
      }
    };
  }, [card]);
  return (
    <div>
      <div className="cardContainer">
        {currScore < maxScore && generateThreeCards(card)}
      </div>
      {winningScreenElement()}
    </div>
  );
};

export default Deck;
