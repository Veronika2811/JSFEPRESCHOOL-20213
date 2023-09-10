import {toggleMenu} from '../hamburger/addHamburgerClickHandler.js';

const toogleProfileMenu = () => {
  const profileMenu = document.querySelector('.drop-menu');
  profileMenu.classList.toggle('open');
};

const addProfileMenuClickHandler = () => {
  const profileMenu = document.querySelector('.drop-menu');
  const userIcon = document.querySelector('.user-profile__icon');

  userIcon.addEventListener('click', () => {
    const headerNavigation = document.querySelector('.header__navigation');

    if (headerNavigation.classList.contains('open')) toggleMenu();

    toogleProfileMenu();
  });

  document.addEventListener('click', (e) => {
    if (
      !e.target.closest('.header__user-profile') &&
      profileMenu.classList.contains('open')
    )
      toogleProfileMenu();
  });
};

export {addProfileMenuClickHandler, toogleProfileMenu};
