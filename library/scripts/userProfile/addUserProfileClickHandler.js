import {toggleMenu} from '../addHamburgerClickHandler.js';
// import ProfileMenu from './ProfileMenu.js';

// const maskContent = document.querySelector('.menu-profile__mask');
// const profileMenu = document.querySelector('.menu-profile');

export const toogleProfileMenu = () => {
  // console.log('addUserProfileClickHandler')
  const maskContent = document.querySelector('.menu-profile__mask');
  const profileMenu = document.querySelector('.menu-profile');
  profileMenu.classList.toggle('open');
  maskContent.classList.toggle('open');
};

// const addStyle = () => {
//   // const profileMenu = document.querySelector('.menu-profile');
//   profileMenu.style.transform = 'translateY(28px)';
// }

// const renderProfileMenu = () => {
//   let modal = new ProfileMenu();
//   modal.renderProfileMenu();
//   addStyle();
//   // transform: translateY(28px);
//   // toogleProfileMenu();
// }

export const addUserProfileClickHandler = () => {
  const maskContent = document.querySelector('.menu-profile__mask');
  const profileMenu = document.querySelector('.menu-profile');
  // console.log(maskContent, profileMenu)
  // const userProfile = document.querySelector('.header__user-profile');
  const userIcon = document.querySelector('.user_icon');

  userIcon.addEventListener('click', () => {
    // console.log(userIcon)
    // console.log('addUserProfileClickHandler')
    // const target = e.target;
    // console.log(target);
    const headerNavigation = document.querySelector('.header__navigation');
    if (headerNavigation.classList.contains('open')) toggleMenu();

    // renderProfileMenu();
    // if(profileMenu) {
    toogleProfileMenu();
    // }
  });

  // if(profileMenu) {
  // console.log('s')
  maskContent.addEventListener('click', () => {
    // const target = e.target;
    // console.log(target);
    // if (classes.contains('overlay') || classes.contains('modal__close-icon')) {
    //   document.querySelector('.overlay').remove();
    //   document.querySelector('body').classList.remove('open');
    // }
    toogleProfileMenu();
  });
  // }
};

export default {addUserProfileClickHandler, toogleProfileMenu};
