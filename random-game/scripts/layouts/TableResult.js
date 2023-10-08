import Modal from './Modal.js';

import {createDomNode} from '../utils/createDomNode.js';

class TableResult extends Modal {
  constructor(classes) {
    super(classes);
    this.tableResult = '';
  }

  generateContent() {
    const results = JSON.parse(localStorage.getItem('table-result'));

    this.tableResultWrapper = createDomNode(
      this.tableResult,
      'div',
      null,
      null,
      'table-result__content'
    );

    if (!!results) {
      this.tableResult = createDomNode(
        this.tableResult,
        'table',
        null,
        this.tableResultWrapper,
        'table-result'
      );
      this.tableResult.width = '100%';
      this.tableResult.border = '1';

      this.tableResultTitle = createDomNode(
        this.tableResultTitle,
        'caption',
        'Top scores',
        this.tableResult,
        'table-result__title'
      );

      this.tr = createDomNode(
        this.mainLine,
        'tr',
        null,
        this.tableResult,
        'tr'
      );
      this.th = createDomNode(this.th, 'th', '#', this.tr, 'th');
      this.th = createDomNode(this.th, 'th', 'Name player', this.tr, 'th');
      this.th = createDomNode(this.th, 'th', 'Moves', this.tr, 'th');
      this.th = createDomNode(this.th, 'th', 'Time', this.tr, 'th');

      results
        .sort((a, b) =>
          a.gameMoves > b.gameMoves ? 1 : a.gameMoves < b.gameMoves ? -1 : 0
        )
        .slice(0, 10)
        .forEach((el, i) => {
          this.tr = createDomNode(this.tr, 'tr', null, this.tableResult, 'tr');
          this.td = createDomNode(this.td, 'td', i + 1, this.tr, 'td');
          this.td = createDomNode(this.td, 'td', el.namePlayer, this.tr, 'td');
          this.td = createDomNode(this.td, 'td', el.gameMoves, this.tr, 'td');
          this.td = createDomNode(this.td, 'td', el.gameTime, this.tr, 'td');
        });
    } else {
      this.tableResult = createDomNode(
        this.tableResultSubtitle,
        'p',
        'In order to see the table you need to play',
        this.tableResultWrapper,
        'table-result__subtitle'
      );
    }

    this.button = createDomNode(
      this.button,
      'button',
      'Close table',
      this.tableResultWrapper,
      'button'
    );

    this.bindEventsTableResult();

    return this.tableResultWrapper;
  }

  bindEventsTableResult() {
    this.button.addEventListener('click', this.closeModal);
  }

  renderTableResult() {
    const content = this.generateContent();
    super.buildModal(content);
  }
}

export default TableResult;
