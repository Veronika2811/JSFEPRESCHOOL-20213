import {GameProgress} from './GameProgress.js';
import {Cards, countMoves} from './Cards.js';

import {createDomNode} from '../utils/createDomNode.js';

class Game {
  constructor(shuffledCards) {
    this.shuffledCards = shuffledCards;
  }

  renderGame() {
    this.gameWrapper = createDomNode(
      this.gameWrapper,
      'div',
      null,
      null,
      'main__game'
    );

    this.gameWrapper.append(new GameProgress().buildGameProgress());
    this.gameWrapper.append(new Cards(this.shuffledCards).buildCards());

    return this.gameWrapper;
  }

  renderCountMoves() {
    this.countMoves = createDomNode(
      this.countMoves,
      'div',
      null,
      this.gameProgressWrapper,
      'progress__count-moves',
      'count-moves'
    );
    this.countMovesTitle = createDomNode(
      this.countMovesTitle,
      'p',
      'Ходы: ',
      this.countMoves,
      'count-moves__title'
    );
    this.countMovesValue = createDomNode(
      this.countMovesValue,
      'p',
      countMoves,
      this.countMoves,
      'count-moves__value'
    );

    return this.countMoves;
  }
}

export default Game;
