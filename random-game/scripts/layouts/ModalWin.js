import {Category} from './Category.js';
import Modal from './Modal.js';

import {CATEGORY_GAME} from '../constants/constants.js';
import {createDomNode} from '../utils/createDomNode.js';
import renderGame from '../renderGame.js';
import renderWelcomeSection from '../renderWelcomeSection.js';

class ModalWin extends Modal {
  constructor(classes) {
    super(classes);
    this.buttonNewGame = '';
    this.buttonReturnMainPage = '';
  }

  generateContent(resultGame) {
    console.log(resultGame)
    this.modalWinWrapper = createDomNode(
      this.modalWinWrapper,
      'div',
      null,
      null,
      'modal-win__content'
    );

    this.modalWinTitle = createDomNode(
      this.modalWinTitle,
      'p',
      'Victory!!!'.toUpperCase(),
      this.modalWinWrapper,
      'modal-win__title'
    );

    this.modalWinSubtitle = createDomNode(
      this.modalWinSubtitle,
      'p',
      `Congratulations, ${
        localStorage.getItem('player-name')[0].toUpperCase() +
        localStorage.getItem('player-name').slice(1)
      }!!!`,
      this.modalWinWrapper,
      'modal-win__subtitle'
    );

    this.modalWinResultWrapper = createDomNode(
      this.modalWinResultWrapper,
      'div',
      null,
      this.modalWinWrapper,
      'modal-win__result',
      'result'
    );

    this.modalWinResultMoves = createDomNode(
      this.modalWinResultMoves,
      'p',
      `Ходы: ${resultGame.gameMoves}`,
      this.modalWinResultWrapper,
      'result__moves'
    );

    this.modalWinResultTime = createDomNode(
      this.modalWinResultTime,
      'p',
      `Время: ${resultGame.gameTime}`,
      this.modalWinResultWrapper,
      'result__time'
    );

    this.modalWinWrapper.append(
      new Category(CATEGORY_GAME).buildCategoryWrapper()
    );

    this.modalWinButtonsWrapper = createDomNode(
      this.modalWinButtonsWrapper,
      'div',
      null,
      this.modalWinWrapper,
      'modal-win__buttons'
    );

    this.buttonNewGame = createDomNode(
      this.button,
      'button',
      'New game',
      this.modalWinButtonsWrapper,
      'button'
    );

    this.buttonReturnMainPage = createDomNode(
      this.button,
      'button',
      'Return main page',
      this.modalWinButtonsWrapper,
      'button'
    );

    this.bindEventsModalWin();

    return this.modalWinWrapper;
  }

  bindEventsModalWin() {
    this.buttonNewGame.addEventListener('click', () => {
      renderGame();
      this.closeModal();
    });
    this.buttonReturnMainPage.addEventListener('click', () => {
      renderWelcomeSection();
      this.closeModal();
    });
  }

  renderModal(resultGame) {
    const content = this.generateContent(resultGame);
    super.buildModal(content);
  }
}

export default ModalWin;
