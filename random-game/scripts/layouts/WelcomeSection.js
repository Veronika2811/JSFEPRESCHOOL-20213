import {Category} from './Category.js';

import {CATEGORY_GAME} from '../constants/constants.js';
import {createDomNode} from '../utils/createDomNode.js';
import renderGame from '../renderGame.js';

class WelcomeSection {
  constructor() {
    this.welcomeInput;
    this.welcomeInputError = '';
    this.button = '';
  }

  buildWelcomeSection() {
    this.welcome = createDomNode(
      this.welcome,
      'div',
      null,
      null,
      'main__welcome',
      'welcome'
    );

    this.welcomeSubtitle = createDomNode(
      this.welcomeSubtitle,
      'p',
      'Hello! Introduce youreself',
      this.welcome,
      'welcome__subtitle'
    );

    this.welcomeInput = createDomNode(
      this.welcomeInput,
      'input',
      null,
      this.welcome,
      'welcome__input'
    );
    this.welcomeInput.type = 'text';
    this.welcomeInput.placeholder = 'Name player';
    this.welcomeInput.value = localStorage.getItem('player-name');
    this.welcomeInput.autofocus = true;
    this.welcomeInput.autocomplete = 'off';

    this.welcomeInputError = createDomNode(
      this.welcomeInputError,
      'span',
      'Please, introduce yourself',
      this.welcome,
      'welcome__error'
    );

    this.welcome.append(new Category(CATEGORY_GAME).buildCategoryWrapper());

    this.button = createDomNode(
      this.button,
      'button',
      'Start',
      this.welcome,
      'button'
    );

    this.bindEventsWelcomeSection();

    return this.welcome;
  }

  bindEventsWelcomeSection() {
    this.button.addEventListener('click', () => {
      if (this.welcomeInput.value) {
        this.welcomeInputError.style.display = 'none';
        localStorage.setItem('player-name', this.welcomeInput.value);

        renderGame();
      } else {
        this.welcomeInputError.style.display = 'block';
      }
    });
  }
}

export default WelcomeSection;
