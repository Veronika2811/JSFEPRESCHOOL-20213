import data from './data.js';
import Book from './Book.js';

const getBooksWrapper = () => {
  const booksContainer = document.querySelector('.favorites__books');
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
    // console.log(e.target.classList.contains('season__control'))
    // console.log(e.target.checked)
    // const checkedInut = [...document.querySelectorAll('.season__control')];
    // checkedInut.forEach((el) => el.classList.remove('books_active'))
    // e.target.classList.add('books_active');

    const booksContainer = document.querySelector('.favorites__books');

    if (e.target.classList.contains('season__control')) {
      // if (e.target.value === checkedInut.value) return;

      booksContainer.classList.add('transition-damping');

      booksContainer.addEventListener('animationend', (animationEvent) => {
        const {animationName} = animationEvent;

        if (animationName === 'damping') {
          booksContainer.classList.remove('transition-damping');

          const currentSeason = e.target.value;
          generateBooks(currentSeason);

          booksContainer.classList.add('transition-appearance');
        } else if (animationName === 'appearance') {
          booksContainer.classList.remove('transition-appearance');
        }
      });
    }
  });
};

export default addControlsFavoritesClickHandler;
