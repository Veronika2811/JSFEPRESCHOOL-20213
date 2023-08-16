import ProfileMenu from './ProfileMenu.js';
import { toggleMenu } from '../addHamburgerClickHandler.js';


const toogleProfileMenu = () => {
  const maskContent = document.querySelector('.menu-profile__mask');
  // console.log(maskContent)
  const profileMenu = document.querySelector('.menu-profile');
  const headerNavigation = document.querySelector('.header__navigation');

  if(headerNavigation.classList.contains('open')) toggleMenu();

  profileMenu.classList.add('open');
  maskContent.classList.add('open');

  // const transform = window.innerWidth > 1180 ? 'translateX(0)' : 'translateX(-105px)';

  profileMenu.style.transform = 'translateX(0)';
}

const closeProfileMenu = () => {
  const profileMenu = document.querySelector('.menu-profile');
  profileMenu.style.transform = 'translateX(100vw)';
  // maskContent.classList.remove('open');
}

const addUserProfileClickHandler = () => {
  
  new ProfileMenu().renderProfileMenu();
  
  const maskContent = document.querySelector('.menu-profile__mask');
  const userProfile = document.querySelector('.header__user-profile');

  userProfile.addEventListener('click', toogleProfileMenu);
  maskContent.addEventListener('click', closeProfileMenu);
}

export default addUserProfileClickHandler;