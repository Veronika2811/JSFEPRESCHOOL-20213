import Game from './layouts/Game.js';

import {checkedCategory} from './layouts/Category.js';
import data from './utils/data.js';
import shuffle from './utils/shuffle.js';
import getWrapperGame from './utils/getWrapperGame.js';

const renderGame = () => {
  const cards = [...data[checkedCategory], ...data[checkedCategory]];
  const shuffledCards = shuffle(cards);
  const container = getWrapperGame();

  container.append(new Game(shuffledCards).renderGame());
};

export default renderGame;
