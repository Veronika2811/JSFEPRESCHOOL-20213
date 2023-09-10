import {addHamburgerClickHandler} from './hamburger/addHamburgerClickHandler.js';
import addLimitedCarousel from './about/addLimitedCarousel.js';
import loadUserInfo from './loadUserInfo/loadUserInfo.js';
import {addProfileMenuClickHandler} from './userProfile/addProfileMenuClickHandler.js';
import addControlsFavoritesClickHandler from './favorites/addControlsFavoritesClickHandler.js';
import showPerformanceEvaluation from './utils/showPerformanceEvaluation.js';

window.onload = () => {
  addHamburgerClickHandler();
  addLimitedCarousel();
  loadUserInfo();
  addProfileMenuClickHandler();
  addControlsFavoritesClickHandler();
  showPerformanceEvaluation();
};
