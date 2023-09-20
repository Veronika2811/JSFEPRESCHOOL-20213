import {getLocalStorage} from './actionsWithLocalStorage.js';

const changeCurrentSong = () => {
  const [currentCategory, clickedCategory, currentSong] = getLocalStorage([
    'current-category',
    'clicked-category',
    'current-song',
  ]);
  const listSongsItems = [...document.querySelectorAll('.list-songs__item')];

  listSongsItems.forEach((el) => {
    el.classList.remove('list-songs__item_active');

    if (
      currentCategory === clickedCategory &&
      el.getAttribute('data-id') === currentSong
    ) {
      el.classList.add('list-songs__item_active');
    }
  });
};

export default changeCurrentSong;
