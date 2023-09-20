import {setLocalStorage, getLocalStorage} from './actionsWithLocalStorage.js';

const audio = document.querySelector('audio');
const icoPlay = document.querySelector('.ico_play');

const playAudio = () => {
  if (JSON.parse(getLocalStorage('isPlay'))) return pauseAudio();
  audio.play();
  icoPlay.classList.add('ico_pause');
  setLocalStorage(['isPlay', true]);
};

const pauseAudio = () => {
  audio.pause();
  icoPlay.classList.remove('ico_pause');
  setLocalStorage(['isPlay', false]);
};

export {playAudio, pauseAudio};
