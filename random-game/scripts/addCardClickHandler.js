let lockBoard = false;
const clickedCards = [];

const disableCards = () =>
  clickedCards.forEach((el) => el.removeEventListener('click', expandCard));

const flipCard = () => {
  lockBoard = true;

  clickedCards.forEach((el) => {
    setTimeout(() => {
      el.classList.remove('active');
      lockBoard = false;
    }, 600);
  });
};

const expandCard = (e) => {
  const card = e.target.closest('.card');

  if (lockBoard) return;
  if (card.classList.contains('active')) return;

  card.classList.add('active');
  clickedCards.push(card);

  const nameCards = clickedCards.map((el) => el.dataset.name);

  if (nameCards.length === 2) {
    if ([...new Set(nameCards)].length === 1) {
      disableCards();
    } else {
      flipCard();
    }
    clickedCards.length = 0;
  }
};

const addCardClickHandler = () => {
  const cards = document.querySelectorAll('.card');

  cards.forEach((item) => {
    item.addEventListener('click', expandCard);
  });
};

export default addCardClickHandler;
