import {FIRST_PAGE} from './constants/constants.js';
import Preloader from './utils/Preloader.js';
import ImageGallery from './utils/ImageGallery.js';
import getWrapperImageGallery from './utils/getWrapperImageGallery.js';
import managingPaginationStyles from './utils/managingPaginationStyles.js';

import {getData} from './getData.js';
import {currentSearch} from './addSearchBoxClickHandler.js';

const loadingImageGallery = async (page) => {
  const containerImageGallery = getWrapperImageGallery();

  const preloader = new Preloader();
  preloader.renderPreloader();

  const currentPage = page || FIRST_PAGE;

  const {results} = await getData(currentSearch, currentPage);

  const activePage = document.querySelector('.pagination__item_active');
  activePage.textContent = currentPage;
  managingPaginationStyles(results.length, currentPage);

  if (!results.length) {
    preloader.removePreloader();
    return containerImageGallery.insertAdjacentHTML(
      'afterbegin',
      '<p class="error">Nothing found for your request</p>'
    );
  }

  const images = new ImageGallery(results).generateContent();
  images.forEach((el) => {
    containerImageGallery.append(el);
  });
};

export default loadingImageGallery;
