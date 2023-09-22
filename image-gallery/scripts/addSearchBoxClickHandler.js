import {POPULAR_QUERIES} from './constants/constants.js';
import getRandomArrayElement from './utils/getRandomArrayElement.js';

import loadingImageGallery from './loadingImageGallery.js';

let currentSearch = getRandomArrayElement(POPULAR_QUERIES);

const searchForImagesByRequest = (value) => {
  currentSearch = value || getRandomArrayElement(POPULAR_QUERIES);
  loadingImageGallery();
};

const addSearchBoxClickHandler = () => {
  const searchBoxInput = document.querySelector('.search-box__input');
  const searchBoxButton = document.querySelector('.search-box__img');

  searchBoxInput.addEventListener('keydown', (e) => {
    if (e.code === 'Enter') {
      searchForImagesByRequest(searchBoxInput.value);
    }
  });

  searchBoxButton.addEventListener('click', () => {
    searchForImagesByRequest(searchBoxInput.value);
  });
};

export {addSearchBoxClickHandler, currentSearch};
