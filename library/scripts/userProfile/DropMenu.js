import Element from '../utils/Element.js';

import profileMenuController from '../utils/profileMenuController.js';
import {toogleProfileMenu} from './addProfileMenuClickHandler.js';

class DropMenu extends Element {
  constructor(card) {
    super();
    this.card = card;
  }

  buildDropMenu() {
    const dropMenu = document.querySelector('.drop-menu');

    this.dropMenuTitle = this.createDomNode(
      this.dropMenuTitle,
      'h2',
      !this.card ? 'Profile' : this.card,
      dropMenu,
      'drop-menu__title'
    );

    this.dropMenuSubtitleFirst = this.createDomNode(
      this.dropMenuSubtitleFirst,
      'p',
      !this.card ? 'Log In' : 'My profile',
      dropMenu,
      'drop-menu__subtitle'
    );
    this.dropMenuSubtitleSecond = this.createDomNode(
      this.dropMenuSubtitleSecond,
      'p',
      !this.card ? 'Register' : 'Log Out',
      dropMenu,
      'drop-menu__subtitle'
    );

    this.bindEventsDropMenu();
  }

  bindEventsDropMenu() {
    [this.dropMenuSubtitleFirst, this.dropMenuSubtitleSecond].forEach(
      (el) => {
        el.addEventListener('click', (e) => {
          const target = e.target.textContent;

          profileMenuController(target);
          toogleProfileMenu();
        });
      }
    );
  }
}

export default DropMenu;
