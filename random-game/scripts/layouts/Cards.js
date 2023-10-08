import {checkedCategory} from './Category.js';
import {intervalId} from './GameProgress.js';
import ModalWin from './ModalWin.js';

import {createDomNode, createDomNodeImage} from '../utils/createDomNode.js';

let countMoves = '0';

class Cards {
  constructor(shuffledCards) {
    this.shuffledCards = shuffledCards;
    this.gameWrapper = '';
    this.lockBoard = false;
    this.clickedCards = [];
    this.countCard = 0;
  }

  buildCards() {
    this.gameWrapper = createDomNode(
      this.gameWrapper,
      'div',
      null,
      null,
      'game'
    );

    this.shuffledCards.forEach((el) => {
      this.card = createDomNode(
        this.card,
        'div',
        null,
        this.gameWrapper,
        'card'
      );
      this.card.dataset.name = el;

      this.cardFront = createDomNode(
        this.cardFront,
        'div',
        null,
        this.card,
        'card-front'
      );
      this.cardBack = createDomNodeImage(
        this.cardBack,
        `./images/cards/${checkedCategory}/${el}.${
          checkedCategory === 'other' ? 'png' : 'jpg'
        }`,
        el,
        this.card,
        'card-back'
      );
    });

    this.bindEventsCards();

    return this.gameWrapper;
  }

  bindEventsCards() {
    this.gameWrapper.addEventListener('click', (e) => {
      const target = e.target;

      if (target.classList.contains('card-front')) {
        this.expandCard(e);
      }
    });
  }

  expandCard(e) {
    const card = e.target.closest('.card');

    if (this.lockBoard) return;
    if (card.classList.contains('active')) return;

    card.classList.add('active');
    this.clickedCards.push(card);

    const nameCards = this.clickedCards.map((el) => el.dataset.name);

    if (nameCards.length === 2) {
      countMoves++;
      document.querySelector('.count-moves__value').textContent = countMoves;

      if ([...new Set(nameCards)].length === 1) {
        this.countCard += 2;
        this.disableCards();
      } else {
        this.flipCard();
      }
      this.clickedCards.length = 0;
    }
  }

  disableCards() {
    const cards = document.querySelectorAll('.card').length;

    if (cards === this.countCard) {
      setTimeout(() => {
        const time = document.querySelector('.timer').textContent;

        const results = JSON.parse(localStorage.getItem('table-result')) || [];

        const resultCurrentGame = {
          gameTime: time,
          gameMoves: countMoves,
          namePlayer: localStorage.getItem('player-name'),
        };

        localStorage.setItem(
          'table-result',
          JSON.stringify([...results, resultCurrentGame])
        );

        countMoves = '0';
        clearInterval(intervalId);

        new ModalWin('modal-win').renderModal(resultCurrentGame);
      }, 400);
    }

    this.clickedCards.forEach((el) =>
      el.removeEventListener('click', this.expandCard)
    );
  }

  flipCard() {
    this.lockBoard = true;

    this.clickedCards.forEach((el) => {
      setTimeout(() => {
        el.classList.remove('active');
        this.lockBoard = false;
      }, 600);
    });
  }
}

export {Cards, countMoves};
