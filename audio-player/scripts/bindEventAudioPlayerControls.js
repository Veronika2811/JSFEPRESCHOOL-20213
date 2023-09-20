import SONGS from './constants/constants.js';
import {
  setLocalStorage,
  getLocalStorage,
} from './utils/actionsWithLocalStorage.js';
import {playAudio} from './utils/launchAudioPlayer.js';
import updatePlaylist from './utils/updatePlaylist.js';

const bindEventIconForward = () => {
  const [currentCategory, currentSong, isPlay] = getLocalStorage([
    'current-category',
    'current-song',
    'isPlay',
  ]);

  if (SONGS[currentCategory].length === +currentSong) {
    setLocalStorage(['current-song', 1]);
  } else {
    setLocalStorage(['current-song', +currentSong + 1]);
  }

  updatePlaylist();
};

const bindEventIconBackward = () => {
  const [currentCategory, currentSong, isPlay] = getLocalStorage([
    'current-category',
    'current-song',
    'isPlay',
  ]);

  if (+currentSong === 1) {
    setLocalStorage(['current-song', SONGS[currentCategory].length]);
  } else {
    setLocalStorage(['current-song', +currentSong - 1]);
  }

  updatePlaylist();
};

const bindEventAudioPlayerControls = () => {
  const icoPlay = document.querySelector('.ico_play');
  icoPlay.addEventListener('click', playAudio);

  const icoForward = document.querySelector('.ico_forward');
  icoForward.addEventListener('click', bindEventIconForward);

  const icoBackward = document.querySelector('.ico_backward');
  icoBackward.addEventListener('click', bindEventIconBackward);
};

export default bindEventAudioPlayerControls;
