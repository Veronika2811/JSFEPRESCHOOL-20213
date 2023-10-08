import TableResult from './layouts/TableResult.js';

const addResultClickHandler = () => {
  const resultButton = document.querySelector('.button__results');

  resultButton.addEventListener('click', () => {
    new TableResult('modal__table-result').renderTableResult();
  });
};

export default addResultClickHandler;
