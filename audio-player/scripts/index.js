import loadingAudioPlayer from './loadingAudioPlayer.js';
import addCategoryClickHandler from './addCategoryClickHandler.js';
import bindEventAudioPlayerControls from './bindEventAudioPlayerControls.js';
import addVolumeClickHandler from './addVolumeClickHandler.js';
import addProgressClickHandler from './addProgressClickHandler.js';

window.onload = () => {
  loadingAudioPlayer();
  addCategoryClickHandler();
  bindEventAudioPlayerControls();
  addVolumeClickHandler();
  addProgressClickHandler();
};
