const hamburger = document.querySelector('.hamburger');
const headerNavigation = document.querySelector('.header__navigation');
const maskContent = document.querySelector('.mask');

const toggleMenu = () => {
  if (window.innerWidth > 1205) return;

  const body = document.querySelector('body');

  hamburger.classList.toggle('open');
  headerNavigation.classList.toggle('open');
  maskContent.classList.toggle('open');
  body.classList.toggle('open');
};

const addHamburgerClickHandler = () => {
  hamburger.addEventListener('click', toggleMenu);
  maskContent.addEventListener('click', toggleMenu);

  headerNavigation.addEventListener('click', (e) => {
    if (e.target.classList.contains('navigation__link')) toggleMenu();
  });
};

export {addHamburgerClickHandler, toggleMenu};