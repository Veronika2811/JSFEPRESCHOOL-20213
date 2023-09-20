import SONGS from '../constants/constants.js';
import {pauseAudio, playAudio} from './launchAudioPlayer.js';
import renderCurrentSong from './renderCurrentSong.js';
import {setLocalStorage, getLocalStorage} from './actionsWithLocalStorage.js';

const getWrapperSongList = () => {
  const songList = document.querySelector('.list-songs');
  songList.innerHTML = '';
  return songList;
};

const bindEvent = () => {
  const songsItems = [...document.querySelectorAll('.list-songs__item')];

  songsItems.forEach((el) => {
    el.addEventListener('click', () => {
      songsItems.forEach((item) =>
        item.classList.remove('list-songs__item_active')
      );

      el.classList.add('list-songs__item_active');

      const indexSong = +el.getAttribute('data-id');

      const [clickedCategory, isPlay] = getLocalStorage([
        'clicked-category',
        'isPlay',
      ]);

      setLocalStorage(
        ['current-category', clickedCategory],
        ['current-song', indexSong]
      );

      renderCurrentSong();

      if (JSON.parse(isPlay)) {
        pauseAudio();
        playAudio();
      } else {
        playAudio();
      }
    });
  });
};

const generateSongList = (category) => {
  const songList = getWrapperSongList();

  const [currentCategory, currentSong] = getLocalStorage([
    'current-category',
    'current-song',
  ]);

  console.log(category);

  SONGS[category].forEach((el) => {
    songList.insertAdjacentHTML(
      'beforeend',
      `<li class="list-songs__item item ${
        category === currentCategory && el.id === +currentSong
          ? 'list-songs__item_active'
          : 'item'
      }" data-id="${el.id}">
       <div>
        <p class="item__name">${el.name}</p>
       </div>
      </li>`
    );
  });
  bindEvent();
};

export default generateSongList;
