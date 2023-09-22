import {
  FIRST_PAGE_BUTTON,
  PREV_PAGE_BUTTON,
  NEXT_PAGE_BUTTON,
  LAST_PAGE_BUTTON,
} from './constants/constants.js';

import {totalPages} from './getData.js';
import loadingImageGallery from './loadingImageGallery.js';

let currentPage = 1;

const goToNextPage = () => {
  currentPage++;
  loadingImageGallery(currentPage);
};

const goToPrevPage = () => {
  currentPage--;
  loadingImageGallery(currentPage);
};

const goToFirstPage = () => {
  currentPage = 1;
  loadingImageGallery(currentPage);
};

const goToLastPage = () => {
  currentPage = totalPages;
  loadingImageGallery(currentPage);
};

const addPaginationClickHandler = () => {
  FIRST_PAGE_BUTTON.addEventListener('click', goToFirstPage);
  PREV_PAGE_BUTTON.addEventListener('click', goToPrevPage);
  NEXT_PAGE_BUTTON.addEventListener('click', goToNextPage);
  LAST_PAGE_BUTTON.addEventListener('click', goToLastPage);
};

export {addPaginationClickHandler, currentPage};
