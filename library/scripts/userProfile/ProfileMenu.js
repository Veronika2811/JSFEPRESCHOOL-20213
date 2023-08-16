import Element from '../Element.js';

class ProfileMenu extends Element {
  renderProfileMenu() {
    const headerWrapper = document.querySelector('.header__user-profile');

    this.menuProfile = this.createDomNode(this.menuProfile, 'div', null, headerWrapper, 'menu-profile');

    this.menuProfileTitle = this.createDomNode(this.menuProfileTitle, 'h2', 'Profile', this.menuProfile, 'menu-profile__title');
    this.menuProfileSubtitle = this.createDomNode(this.menuProfileSubtitle, 'p', 'Log In', this.menuProfile, 'menu-profile__subtitle');
    this.menuProfileSubtitle = this.createDomNode(this.menuProfileSubtitle, 'p', 'Register', this.menuProfile, 'menu-profile__subtitle');
    this.menuProfileMask = this.createDomNode(this.menuProfileMask, 'div', null, headerWrapper, 'menu-profile__mask');

    // this.menuProfileMask.addEventListener('click', () => {
    //   console.log('close')
    //   // const profileMenu = document.querySelector('.menu-profile');
    //   this.menuProfile.style.transform = 'translateX(100vw)';
    //   // this.menuProfile.classList.remove('open');
    //   // this.menuProfileMask.classList.remove('open');
    // })
  }
}

export default ProfileMenu;