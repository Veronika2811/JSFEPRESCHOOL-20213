import {countMoves} from './Cards.js';

import {createDomNode} from '../utils/createDomNode.js';

let intervalId;

class GameProgress {
  constructor() {
    this.seconds = 0;
    this.minutes = 0;
    this.hours = 0;
    this.gameProgressTimer = '';
  }

  buildGameProgress() {
    this.gameProgressWrapper = createDomNode(
      this.gameProgressWrapper,
      'div',
      null,
      null,
      'game__progress',
      'progress'
    );

    this.gameProgressWrapper.append(this.renderCountMoves());

    this.gameProgressTimer = createDomNode(
      this.gameProgressTimer,
      'div',
      '00:00:00',
      this.gameProgressWrapper,
      'timer'
    );

    intervalId = setInterval(this.updateTime, 1000);

    return this.gameProgressWrapper;
  }

  renderCountMoves() {
    this.countMoves = createDomNode(
      this.countMoves,
      'div',
      null,
      null,
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

  updateTime = () => {
    this.seconds++;
    if (this.seconds === 60) {
      this.minutes++;
      this.seconds = 0;
    }
    if (this.minutes === 60) {
      this.hours++;
      this.minutes = 0;
    }
    this.gameProgressTimer.textContent = `${this.hours
      .toString()
      .padStart(2, '0')}:${this.minutes
      .toString()
      .padStart(2, '0')}:${this.seconds.toString().padStart(2, '0')}`;
  };
}

export {GameProgress, intervalId};
