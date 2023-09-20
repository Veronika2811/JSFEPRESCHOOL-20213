import {setLocalStorage} from './utils/actionsWithLocalStorage.js';
import generateSongList from './utils/generateSongList.js';

const addCategoryClickHandler = () => {
  const categoryWrapper = document.querySelector('.playlist__list');

  categoryWrapper.addEventListener('click', (e) => {
    const target = e.target;

    if (target.classList.contains('playlist__input')) {
      const value = target.value;
      setLocalStorage(['clicked-category', value]);

      generateSongList(value);
    }
  });
};

export default addCategoryClickHandler;
