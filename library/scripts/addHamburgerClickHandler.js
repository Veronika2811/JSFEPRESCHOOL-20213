const hamburger = document.querySelector('.hamburger');
const headerNavigation = document.querySelector('.header__navigation');
const maskContent = document.querySelector('.mask-content');
const body = document.querySelector('body');

export const toggleMenu = () => {
  if (window.innerWidth > 1180) return;
  if(headerNavigation.classList.contains('open')) {
    const maskContent = document.querySelector('.menu-profile__mask');
    const profileMenu = document.querySelector('.menu-profile');

    maskContent.classList.remove('open');
    profileMenu.style.transform = 'translateX(-100%)';
  };

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
