import {addHamburgerClickHandler} from './addHamburgerClickHandler.js';
import addControlsFavoritesClickHandler from './favorites/addControlsFavoritesClickHandler.js';
import addLibraryFormClickHandler from './libraryForm/addLibraryFormClickHandler.js';
import {addUserProfileClickHandler} from './userProfile/addUserProfileClickHandler.js';
import addAboutSlider from './about/addAboutSlider.js';
import addRegisterClickHandler from './addRegisterClickHandler.js';
import loadUserIcon from './userProfile/loadUserIcon.js';
import performanceAppraisal from './performanceAppraisal.js';

window.onload = () => {
  addHamburgerClickHandler();
  addAboutSlider();
  addControlsFavoritesClickHandler();
  // addLibraryFormClickHandler();
  addUserProfileClickHandler();
  addRegisterClickHandler();
  loadUserIcon();

  // Оценка работы
  performanceAppraisal();
};
