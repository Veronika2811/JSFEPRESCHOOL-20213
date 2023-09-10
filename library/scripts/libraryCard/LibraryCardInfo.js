import Element from '../utils/Element.js';

import {LIBRARY_FORM_BUTTONS} from '../constants/constants.js';
import profileMenuController from '../utils/profileMenuController.js';

class LibraryCardInfo extends Element {
  constructor(userInfo, userAuth) {
    super();
    this.userAuth = userAuth;
    this.userInfo = userInfo;
  }

  generateContent() {
    const userVerification = this.userAuth && this.userInfo;

    this.libraryCardInfo = this.createDomNode(
      this.libraryCardInfo,
      'div',
      null,
      null,
      'library-card__info',
      'card-info'
    );

    this.cardInfoTitle = this.createDomNode(
      this.cardInfoTitle,
      'h3',
      userVerification ? 'Visit your profile' : 'Get a reader card',
      this.libraryCardInfo,
      'card-info__title'
    );

    this.cardInfoSubtitle = this.createDomNode(
      this.cardInfoSubtitle,
      'p',
      userVerification
        ? 'With a digital library card you get free access to the Library’s wide array of digital resources including e-books, databases, educational resources, and more.'
        : 'You will be able to see a reader card after logging into account or you can register a new account',
      this.libraryCardInfo,
      'card-info__subtitle'
    );

    this.libraryCardButtons = this.createDomNode(
      this.libraryCardInfoButtons,
      'div',
      null,
      this.libraryCardInfo,
      'card-info__buttons'
    );

    this.renderButtonsForm(userVerification);

    return this.libraryCardInfo;
  }

  renderButtonsForm(userVerification) {
    const value = userVerification ? 'auth' : 'noAuth';

    LIBRARY_FORM_BUTTONS[value].forEach((el) => {
      this.libraryCardButton = this.createDomNodeButton(
        this.libraryCardButton,
        el,
        false,
        this.libraryCardButtons,
        'button'
      );
      this.libraryCardButton.addEventListener('click', (e) => {
        const target = e.target.textContent;

        const currentValue =
          target === 'Profile'
            ? 'My profile'
            : target === 'Sign Up'
            ? 'Register'
            : 'Log In';

        profileMenuController(currentValue);
      });
    });
  }
}

export default LibraryCardInfo;
