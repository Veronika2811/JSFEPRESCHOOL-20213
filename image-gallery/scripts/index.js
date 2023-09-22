import {getData} from './getData.js';
import loadingImageGallery from './loadingImageGallery.js';
import {addPaginationClickHandler} from './addPaginationClickHandler.js';
import {addSearchBoxClickHandler} from './addSearchBoxClickHandler.js';

window.onload = () => {
  getData();
  loadingImageGallery();
  addSearchBoxClickHandler();
  addPaginationClickHandler();
};
