import Element from '../Element.js';
import { toogleProfileMenu, addUserProfileClickHandler } from './addUserProfileClickHandler.js';
import modalController from './modalController.js';
// import { addUserProfileClickHandler } from './addUserProfileClickHandler.js';

class ProfileMenu extends Element {
  renderProfileMenu(current) {
    console.log(current)
    const menuProfile = document.querySelector('.menu-profile');
    // const headerUserWrapper = document.querySelector('.header__user-profile');
    const headerWrapper = document.querySelector('.header__wrapper');

    // this.menuProfile = this.createDomNode(this.menuProfile, 'div', null, headerUserWrapper, 'menu-profile');

    this.menuProfileTitle = this.createDomNode(this.menuProfileTitle, 'h2', !current ? 'Profile' : current, menuProfile, 'menu-profile__title');
    this.menuProfileSubtitleFirst = this.createDomNode(this.menuProfileSubtitleFirst, 'p', !current ? 'Log In' : 'My profile', menuProfile, 'menu-profile__subtitle', 'menu-profile_login');
    this.menuProfileSubtitleSecond = this.createDomNode(this.menuProfileSubtitleSecond, 'p', !current ? 'Register' : 'Log Out', menuProfile, 'menu-profile__subtitle', 'menu-profile_register');
    // this.menuProfileMask = this.createDomNode(this.menuProfileMask, 'div', null, menuProfile, 'menu-profile__mask');
    // if(!current) {
      this.menuProfileMask = this.createDomNode(this.menuProfileMask, 'div', null, headerWrapper, 'menu-profile__mask');
    // }

    // addUserProfileClickHandler();

    [this.menuProfileSubtitleFirst, this.menuProfileSubtitleSecond].forEach((el) => {
      el.addEventListener('click', (e) => {
        // console.log(e);
        // e.stopPropagation();
        const target = e.target.textContent;
        console.log(target)

        modalController(target);
        // console.log(e.target.textContent)

        toogleProfileMenu();
      })
    })
  }
}

export default ProfileMenu;