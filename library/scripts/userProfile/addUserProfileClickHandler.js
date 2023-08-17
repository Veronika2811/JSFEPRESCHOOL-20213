import { toggleMenu } from '../addHamburgerClickHandler.js';

const maskContent = document.querySelector('.menu-profile__mask');
const profileMenu = document.querySelector('.menu-profile');

export const toogleProfileMenu = () => {
  profileMenu.classList.toggle('open');
  maskContent.classList.toggle('open');
};

export const addUserProfileClickHandler = () => {
  const userProfile = document.querySelector('.header__user-profile');

  userProfile.addEventListener('click', () => {
    const headerNavigation = document.querySelector('.header__navigation');
    if (headerNavigation.classList.contains('open')) toggleMenu();
    toogleProfileMenu();
  });

  maskContent.addEventListener('click', toogleProfileMenu);
};

export default {addUserProfileClickHandler, toogleProfileMenu};
