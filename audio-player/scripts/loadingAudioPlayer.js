import {
  setLocalStorage,
  getLocalStorage,
} from './utils/actionsWithLocalStorage.js';
import generateSongList from './utils/generateSongList.js';
import renderCurrentSong from './utils/renderCurrentSong.js';

const loadingAudioPlayer = () => {
  const [currentCategory, currentSong] = getLocalStorage([
    'current-category',
    'current-song',
  ]);

  const category = currentCategory ? currentCategory : 'popular';

  setLocalStorage(
    ['current-category', category],
    ['clicked-category', category],
    ['current-song', currentSong ? currentSong : 1],
    ['isPlay', false]
  );

  const categoryInputs = [...document.querySelectorAll('.playlist__input')];

  categoryInputs.forEach((el) => {
    el.checked = false;
    if (el.value === category) el.checked = true;
  });

  renderCurrentSong();
  generateSongList(category);
};

export default loadingAudioPlayer;
