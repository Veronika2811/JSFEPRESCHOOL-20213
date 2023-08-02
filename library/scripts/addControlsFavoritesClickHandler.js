import data from './data.js';
import Book from './Book.js';

const getBooksWrapper = () => {
  const booksContainer = document.querySelector('.favorites__cards');
  booksContainer.innerHTML = '';
  return booksContainer;
};

const generateBooks = (currentSeason) => {
  const favoritesCards = getBooksWrapper();

  data[currentSeason].forEach((el) =>
    favoritesCards.append(new Book(el).generateBook())
  );
};

const addControlsFavoritesClickHandler = () => {
  const season = document.querySelector('.season');
  const inputChecked = season.querySelector('input').value;

  generateBooks(inputChecked);

  season.addEventListener('click', (e) => {
    if (e.target.classList.contains('season__control')) {
      const currentSeason = e.target.value;

      generateBooks(currentSeason);
    }
  });
};

export default addControlsFavoritesClickHandler;
