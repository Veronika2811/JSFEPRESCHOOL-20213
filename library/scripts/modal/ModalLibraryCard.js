import Modal from './Modal.js';
import {LIBRARY_CARD_FORM} from '../constants.js';

class ModalLibraryCard extends Modal {
  constructor(classes) {
    super(classes);
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

    LIBRARY_CARD_FORM.forEach((el) => {
      const {title, name} = el;

      this.cardFormItem = this.createDomNode(
        this.cardFormItem,
        'div',
        null,
        this.modalCardForm,
        'card-form__item'
      );
      this.cardFormTitle = this.createDomNode(
        this.cardFormTitle,
        'p',
        title,
        this.cardFormItem,
        'modal-form__title'
      );

      if (name.length > 1) {
        this.cardFormInputWrapper = this.createDomNode(
          this.cardFormInputWrapper,
          'div',
          null,
          this.cardFormItem,
          'modal-form__wrapper-input'
        );
      }
      name.forEach((item) => {
        this.cardFormInput = this.createDomNodeInput(
          this.cardFormInput,
          item,
          'text',
          name.length > 1 ? this.cardFormInputWrapper : this.cardFormItem,
          'modal-form__input'
        );
        if (el.hasOwnProperty('width'))
          this.cardFormInput.style.width = el.width;
      });
    });

    this.modalCardFormFooter = this.createDomNode(
      this.modalCardFormfooter,
      'div',
      null,
      this.modalCardForm,
      'modal-form__footer'
    );

    this.modalCardFormButton = this.createDomNodeButton(
      this.modalCardFormButton,
      null,
      false,
      this.modalCardFormFooter,
      'button'
    );

    this.modalCardFormCount = this.createDomNode(
      this.modalCardFormCount,
      'span',
      '$ 25,00',
      this.modalCardFormFooter,
      'modal-form__count'
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

    return this.modalCardWrapper;
  }

  renderModal() {
    const content = this.generateContent();
    super.buildModal(content, '#FFFFFF');
  }
}

export default ModalLibraryCard;
