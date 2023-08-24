import {addHamburgerClickHandler} from './addHamburgerClickHandler.js';
import addControlsFavoritesClickHandler from './favorites/addControlsFavoritesClickHandler.js';
import addLibraryFormClickHandler from './libraryForm/addLibraryFormClickHandler.js';
import {addUserProfileClickHandler} from './userProfile/addUserProfileClickHandler.js';
import addAboutSlider from './about/addAboutSlider.js';
// import addRegisterClickHandler from './addRegisterClickHandler.js';
import {loadUserInfo} from './userProfile/loadUserInfo.js';
import performanceAppraisal from './performanceAppraisal.js';

window.onload = () => {
  // Hamburger
  addHamburgerClickHandler();

  // About Slider
  addAboutSlider();

  // Favorites
  addControlsFavoritesClickHandler();
  // addLibraryFormClickHandler();

  // User
  loadUserInfo();
  addUserProfileClickHandler();
  // addRegisterClickHandler();

  // Оценка работы
  performanceAppraisal();
};
