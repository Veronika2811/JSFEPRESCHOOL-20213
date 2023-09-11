import Modal from '../utils/Modal.js';
import UserStatistics from './UserStatistics.js';

import {LIBRARY_CARD_FORM} from '../constants/constants.js';
import {setLocalStorage} from '../utils/actionsWithLocalStorage.js';
import validateFieldsWhenPurchasingSubscription from './utils/validateFieldsWhenPurchasingSubscription.js';
import addControlsFavoritesClickHandler from '../favorites/addControlsFavoritesClickHandler.js';

class ModalLibraryCard extends Modal {
  constructor(id, classes) {
    super(classes);
    this.id = id;
  }

  generateContent() {
    this.modalCardWrapper = this.createDomNode(
      this.modalCardWrapper,
      'div',
      null,
      null,
      'modal-card__wrapper'
    );

    this.modalCardTitle = this.createDomNode(
      this.modalCardTitle,
      'p',
      'Buy a library card',
      this.modalCardWrapper,
      'modal-card__title'
    );

    this.modalCardContent = this.createDomNode(
      this.modalCardContent,
      'div',
      null,
      this.modalCardWrapper,
      'modal-card__content'
    );

    this.modalCardForm = this.createDomNode(
      this.modalCardContent,
      'form',
      null,
      this.modalCardContent,
      'modal-card__form'
    );

    const infoBuy = {};

    LIBRARY_CARD_FORM.forEach((el) => {
      const {title, name} = el;

      this.formItem = this.createDomNode(
        this.formItem,
        'div',
        null,
        this.modalCardForm,
        'form-item'
      );

      this.formItemTitle = this.createDomNode(
        this.formItemTitle,
        'p',
        title,
        this.formItem,
        'form-item__title'
      );

      if (name.length > 1) {
        this.formItemWrapper = this.createDomNode(
          this.formItemWrapper,
          'div',
          null,
          this.formItem,
          'form-item__wrapper'
        );
        this.formItemError = this.createDomNode(
          this.formItemError,
          'span',
          '',
          this.formItem,
          'form-item__error'
        );
      }

      name.forEach((item) => {
        name.length > 1
          ? name.forEach((el) => (infoBuy[el] = ''))
          : (infoBuy[item] = '');

        this.cardFormInput = this.createDomNodeInput(
          this.cardFormInput,
          item,
          'text',
          '',
          null,
          name.length > 1 ? this.formItemWrapper : this.formItem,
          'form-item__input'
        );

        if (item === 'cvc') this.formItem.style.paddingBottom = '20px';

        if (el.hasOwnProperty('width'))
          this.cardFormInput.style.width = el.width;

        if (name.length === 1) {
          this.formItemError = this.createDomNode(
            this.formItemError,
            'span',
            '',
            this.formItem,
            'form-item__error'
          );
        }

        this.cardFormInput.addEventListener('input', (e) => {
          infoBuy[e.target.name] = e.target.value;
          const values = Object.values(infoBuy);
          if (values.some((el) => !el)) {
            this.modalCardFormButton.textContent = 'Buy';
            this.modalCardFormButton.disabled = true;
          } else {
            this.modalCardFormButton.disabled = false;
          }
        });
      });
    });

    this.modalCardFormFooter = this.createDomNode(
      this.modalCardFormfooter,
      'div',
      null,
      this.modalCardForm,
      'modal-card__footer',
      'modal-footer'
    );

    this.modalCardFormButton = this.createDomNodeButton(
      this.modalCardFormButton,
      'Buy',
      true,
      this.modalCardFormFooter,
      'button'
    );

    this.modalFooterCount = this.createDomNode(
      this.modalFooterCount,
      'span',
      '$ 25,00',
      this.modalCardFormFooter,
      'modal-footer__count'
    );

    const description =
      'If you are live, work, attend school, or pay property taxes in New York State, you can get a $25 digital library card right now using this online form. Visitors to New York State can also use this form to apply for a temporary card.';
    this.modalCardDescription = this.createDomNode(
      this.modalCardDescription,
      'p',
      description,
      this.modalCardContent,
      'modal-card__description'
    );

    this.bindEventsModalLibraryCard();

    return this.modalCardWrapper;
  }

  bindEventsModalLibraryCard() {
    this.modalCardFormButton.addEventListener('click', () => {
      if (this.validateBuyLibraryCard()) {
        setLocalStorage(
          ['user-subscription', true],
          ['user-rentedBooks', JSON.stringify([this.id])]
        );

        addControlsFavoritesClickHandler();

        const formDetails = document.querySelector('.form__details');
        formDetails.innerHTML = '';

        const content = new UserStatistics().generateStatistics();
        formDetails.append(content);

        this.closeModal();
      }
    });
  }

  validateBuyLibraryCard() {
    const fields = [...document.querySelectorAll('.modal input')];

    const validateLibraryCard = validateFieldsWhenPurchasingSubscription();

    return validateLibraryCard.length === fields.length;
  }

  renderModal() {
    const content = this.generateContent();
    super.buildModal(content, '#FFFFFF');
  }
}

export default ModalLibraryCard;
