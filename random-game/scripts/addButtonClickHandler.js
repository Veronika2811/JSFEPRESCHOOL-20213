import {checkedCategory} from './addCategoryClickHandler.js';
import getWrapperGame from './utils/getWrapperGame.js';
import data from './utils/data.js';
import shuffle from './utils/shuffle.js';
import addCardClickHandler from './addCardClickHandler.js';

const addButtonClickHandler = () => {
  const button = document.querySelector('.button');

  button.addEventListener('click', () => {
    const namePlayer = document.querySelector('.input').value;
    if (!!namePlayer) {
      const cards1 = [...data[checkedCategory], ...data[checkedCategory]];
      const shuffledCards = shuffle(cards1);

      const container = getWrapperGame();

      shuffledCards.forEach((el) => {
        container.insertAdjacentHTML('afterbegin', `
        <div class="card" data-name=${el}>
          <div class="card-front"></div>
          <img class="card-back" src=./images/cards/${checkedCategory}/${el}.${checkedCategory === 'other' ? 'png' : 'jpg'}></img>
        </div>
        `)
      })
      addCardClickHandler();
    }
  })
};

export default addButtonClickHandler;
