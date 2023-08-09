import addHamburgerClickHandler from './addHamburgerClickHandler.js';
import addControlsFavoritesClickHandler from './favorites/addControlsFavoritesClickHandler.js';
import addLibraryFormClickHandler from './libraryForm/addLibraryFormClickHandler.js';
import addUserProfileClickHandler from './userProfile/addUserProfileClickHandler.js';

window.onload = () => {
  addHamburgerClickHandler();
  addControlsFavoritesClickHandler();
  addLibraryFormClickHandler();
  addUserProfileClickHandler();
};

console.log(
  '1. Вёрстка соответствует макету. Ширина экрана 768px +26.\n- блок <header> +2\n- секция Welcome +2\n- секция About +2.\n- Под картинкой находится 5 точек +2\n- секция Favorites +4\n- секция CoffeShop +4\n- секция Contacts +4\n- секция LibraryCard +4\n- блок <footer> + 2\n2.Ни на одном из разрешений до 640px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +12\n- нет полосы прокрутки при ширине страницы от 1440рх до 640рх +4.\n- элементы не выходят за пределы окна браузера при ширине страницы от 1440рх до 640рх +4.\n- элементы не наезжают друг на друга при ширине страницы от 1440рх до 640рх +4.\n3. На ширине экрана 768рх реализовано адаптивное меню +12\n- при нажатии на бургер-иконку плавно появляется адаптивное меню +4\n- при нажатии на крестик, или на область вне меню, адаптивное меню плавно скрывается, уезжая за экран +4\n- ссылки в адаптивном меню работают, обеспечивая плавную прокрутку по якорям при нажатии, а само адаптивное меню при этом плавно скрывается +4\n\nScore: 50/50'
);
