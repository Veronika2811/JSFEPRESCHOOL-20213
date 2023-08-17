import { toogleProfileMenu } from './userProfile/addUserProfileClickHandler.js';

const hamburger = document.querySelector('.hamburger');
const headerNavigation = document.querySelector('.header__navigation');
const maskContent = document.querySelector('.mask-content');

export const toggleMenu = () => {
  const body = document.querySelector('body');

  if (window.innerWidth > 1180) return;

  const profileMenu = document.querySelector('.menu-profile');
  if (profileMenu.classList.contains('open')) toogleProfileMenu();

  hamburger.classList.toggle('open');
  headerNavigation.classList.toggle('open');
  maskContent.classList.toggle('open');
  body.classList.toggle('open');
};

export const addHamburgerClickHandler = () => {
  hamburger.addEventListener('click', toggleMenu);
  maskContent.addEventListener('click', toggleMenu);

  headerNavigation.addEventListener('click', (e) => {
    if (e.target.classList.contains('navigation__link')) toggleMenu();
  });
};
