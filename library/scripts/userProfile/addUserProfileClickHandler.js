import {toggleMenu} from '../addHamburgerClickHandler.js';
// import ProfileMenu from './ProfileMenu.js';

// const maskContent = document.querySelector('.menu-profile__mask');
// const profileMenu = document.querySelector('.menu-profile');

export const toogleProfileMenu = () => {
  // console.log('addUserProfileClickHandler')
  // const maskContent = document.querySelector('.menu-profile__mask');
  const profileMenu = document.querySelector('.menu-profile');
  profileMenu.classList.toggle('open');
  // maskContent.classList.toggle('open');
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

  document.addEventListener('click', (e) => { // e.target.classList.contains('navigation__link')
    // console.log(profileMenu.classList.contains('open') && !e.target.closest('.menu-profile'))
    if(!e.target.closest('.header__user-profile') && profileMenu.classList.contains('open')) {
      toogleProfileMenu();
    }
  })

  // document.addEventListener( 'click', (e) => {
  //   const withinBoundaries = e.composedPath().includes(div);
   
  //   if ( ! withinBoundaries ) {
  //     div.style.display = 'none'; // скрываем элемент т к клик был за его пределами
  //   }
  // })

  // if(profileMenu) {
  // console.log('s')
  // maskContent.addEventListener('click', (e) => {
  //   e.stopPropagation();
  //   toogleProfileMenu();
  // });
  // }
};

export default {addUserProfileClickHandler, toogleProfileMenu};
