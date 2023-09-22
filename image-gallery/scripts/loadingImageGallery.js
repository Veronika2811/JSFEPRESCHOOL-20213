import {FIRST_PAGE} from './constants/constants.js';
import getWrapperImageGallery from './utils/getWrapperImageGallery.js';
import managingPaginationStyles from './utils/managingPaginationStyles.js';
import renderImageGallery from './utils/renderImageGallery.js';

import {getData} from './getData.js';
import {currentSearch} from './addSearchBoxClickHandler.js';

const loadingImageGallery = async (page) => {
  const containerImageGallery = getWrapperImageGallery();
  const currentPage = page || FIRST_PAGE;

  const {results} = await getData(currentSearch, currentPage);

  const activePage = document.querySelector('.pagination__item_active');
  activePage.textContent = currentPage;
  managingPaginationStyles(results.length, currentPage);

  if (!results.length) {
    return containerImageGallery.insertAdjacentHTML(
      'afterbegin',
      '<p class="error">Nothing found for your request</p>'
    );
  }

  results.forEach((el) => {
    const image = renderImageGallery(el);
    containerImageGallery.insertAdjacentHTML('afterbegin', image);
  });
};

export default loadingImageGallery;
