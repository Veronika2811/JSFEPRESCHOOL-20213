import SONGS from './constants/constants.js';
import {
  setLocalStorage,
  getLocalStorage,
} from './utils/actionsWithLocalStorage.js';
import fillTimeValue from './utils/fillTimeValue.js';
import updatePlaylist from './utils/updatePlaylist.js';

const audio = document.querySelector('audio');
const progressBar = document.querySelector('.progress__bar');
const progressRange = document.querySelector('.progress__range');

const changeVideoProgress = () => {
  progressRange.value = Math.floor(audio.currentTime);
  progressBar.value = Math.floor(audio.currentTime);

  document.querySelector('.time__current').textContent = fillTimeValue(
    audio.currentTime
  );

  if (audio.ended) {
    const [currentCategory, currentSong] = getLocalStorage([
      'current-category',
      'current-song',
    ]);

    if (SONGS[currentCategory].length === +currentSong) {
      setLocalStorage(['current-song', 1]);
    } else {
      setLocalStorage(['current-song', +currentSong + 1]);
    }

    updatePlaylist();
  }
};

const updateProgress = (event) => {
  const target = event.target;
  const progressVideo = Math.round(
    (event.offsetX / target.clientWidth) *
      parseInt(target.getAttribute('max'), 10)
  );

  progressRange.setAttribute('data-progress', progressVideo);
};

const toggleProgress = (event) => {
  const target = event.target;
  const progressAudio = target.dataset.progress
    ? target.dataset.progress
    : target.value;

  audio.currentTime = progressAudio;
  progressBar.value = progressAudio;
  progressRange.value = progressAudio;
};

const addProgressClickHandler = () => {
  audio.onloadedmetadata = () => {
    progressBar.setAttribute('max', Math.floor(audio.duration));
    progressRange.setAttribute('max', Math.floor(audio.duration));

    document.querySelector('.time__duration').textContent = fillTimeValue(
      audio.duration
    );
  };

  audio.addEventListener('timeupdate', changeVideoProgress);
  progressRange.addEventListener('mousemove', updateProgress);
  progressRange.addEventListener('input', toggleProgress);
};

export default addProgressClickHandler;
