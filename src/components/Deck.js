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
    {
      id: 3,
      src: acr,
      name: 'acr',
      generated: false,
    },
    {
      id: 4,
      src: ak47,
      name: 'ak47',
      generated: false,
    },
    {
      id: 5,
      src: aughbar,
      name: 'aughar',
      generated: false,
    },
    {
      id: 6,
      src: barret50cal,
      name: 'barret50cal',
      generated: false,
    },
    {
      id: 7,
      src: f2000,
      name: 'f2000',
      generated: false,
    },
    {
      id: 8,
      src: fal,
      name: 'fal',
      generated: false,
    },
    {
      id: 9,
      src: intervention,
      name: 'intervention',
      generated: false,
    },
    {
      id: 10,
      src: l86lsw,
      name: 'l86lsw',
      generated: false,
    },
    {
      id: 11,
      src: m14ebr,
      name: 'm14ebr',
      generated: false,
    },
    {
      id: 12,
      src: m16,
      name: 'm16',
      generated: false,
    },
    {
      id: 13,
      src: m240,
      name: 'm240',
      generated: false,
    },
    {
      id: 14,
      src: mg4,
      name: 'mg4',
      generated: false,
    },
    {
      id: 15,
      src: miniuzi,
      name: 'miniuzi',
      generated: false,
    },
    {
      id: 16,
      src: mp5k,
      name: 'mp5k',
      generated: false,
    },
    {
      id: 17,
      src: p90,
      name: 'p90',
      generated: false,
    },
    {
      id: 18,
      src: rpd,
      name: 'rpd',
      generated: false,
    },
    {
      id: 19,
      src: scarh,
      name: 'scarh',
      generated: false,
    },
    {
      id: 20,
      src: tar21,
      name: 'tar21',
      generated: false,
    },
    {
      id: 21,
      src: ump45,
      name: 'ump45',
      generated: false,
    },
    {
      id: 22,
      src: vector,
      name: 'vector',
      generated: false,
    },
    {
      id: 23,
      src: wa2000,
      name: 'wa2000',
      generated: false,
    },
  ];

  // const { currentScore, bestScore } = score;
  const [card, setCard] = useState(images);
  const { givePoint, gameOverScore, currScore } = props;

  const generateAtLeastOneTrue = (deck) => {
    if (currScore === 0) {
      return -1;
    }
    const min = Math.ceil(0);
    const max = Math.floor(23);

    let rng = Math.floor(Math.random() * (max - min) + min);
    let alreadyTrue = deck[rng].generated;

    while (!alreadyTrue) {
      rng = Math.floor(Math.random() * (max - min) + min);
      alreadyTrue = deck[rng].generated;
    }

    return rng;
  };
  // Generate three cards, but also generate at least 1 generated: true card
  const generateThreeCards = (deck) => {
    const deckSize = images.length;
    const min = Math.ceil(0);
    const max = Math.floor(23);

    // const threeCards = deck.map()
    const threeCards = [];
    for (let i = 0; i < 3; i += 1) {
      let rng = Math.floor(Math.random() * (max - min) + min);
      let duplicateNumber = threeCards.includes(deck[rng]);
      const generatedDupe = generateAtLeastOneTrue(deck);
      console.log(`Dupe ID: ${generatedDupe}`);
      if (generatedDupe !== -1 && !threeCards.includes(deck[rng])) {
        threeCards.push(deck[rng]);
        continue;
      }

      while (duplicateNumber) {
        rng = Math.floor(Math.random() * (max - min) + min);
        duplicateNumber = threeCards.includes(deck[rng]);
      }
      // console.log(deck[rng]);
      threeCards.push(deck[rng]);
    }
    console.log(threeCards);
    const result = threeCards.map((randomImage) => {
      return <img src={randomImage.src} id={randomImage.id} className="gunCard" alt="randomGun" key={randomImage.id} />;
    });

    return result;
  };

  useEffect(() => {
    const changeGeneratedOnClick = (imageNumber) => {
      const cardArr = [...card];
      // console.log(imageNumber);
      // console.log(imageNumber.id);
      // console.log(card[imageNumber.id]);

      // console.log(`${imageNumber.id - 1} ${cardArr[imageNumber.id - 1].generated}`);
      if (cardArr[imageNumber.id - 1].generated === false) {
        givePoint();
        cardArr[imageNumber.id - 1].generated = true;
        setCard(cardArr);

        console.log('IN CHANGE GENERATED ON CLICK');
      } else {
        gameOverScore();
      }
    };

    const gunImage = document.querySelectorAll('.gunCard');

    for (let i = 0; i < gunImage.length; i += 1) {
      gunImage[i].addEventListener('click', () => {
        changeGeneratedOnClick(gunImage[i]);
        // console.log(gunImage[i]);
      });
    }

    return () => {
      for (let j = 0; j < gunImage.length; j += 1) {
        gunImage[j].removeEventListener('click', changeGeneratedOnClick);
      /*  gunImage[j].removeEventListener('click', () => {
          changeGeneratedOnClick(gunImage[j]);
          // console.log(gunImage[j]);
        }); */
      }
    };
    // gunImage.addEventListener('click', changeGeneratedOnClick);
  }, [card, currScore]);
  return (
    <div>
      <div>
        {generateThreeCards(card)}
      </div>
    </div>
  );
};

export default Deck;
