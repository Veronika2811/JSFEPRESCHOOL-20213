import SONGS from '../constants/constants.js';
import {getLocalStorage} from './actionsWithLocalStorage.js';

const audio = document.querySelector('audio');

const renderCurrentSong = () => {
  const [currentCategory, currentSong] = getLocalStorage([
    'current-category',
    'current-song',
  ]);

  const {name, src, background} = SONGS[currentCategory].find(
    (el) => el.id === +currentSong
  );

  const [singer, songName] = name.split('-').map((el) => el.trim());

  document.querySelector('.current-song__singer').textContent = singer;
  document.querySelector('.current-song__name').textContent = songName;

  document.querySelector(
    '.player__cover'
  ).style.backgroundImage = `url(${background})`;
  document.querySelector('.body').style.backgroundImage = `url(${background})`;
  audio.src = src;

  document.querySelector(
    '.current-settings__current-playlist'
  ).textContent = `Current playlist: ${currentCategory.toUpperCase()}`;
};

export default renderCurrentSong;
