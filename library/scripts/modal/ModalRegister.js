import Modal from './Modal.js';

import { REGISTER_FIELDS } from '../constants.js';

class ModalRegister extends Modal {
  constructor(classes) {
    super(classes);
    this.modal = 'login';
  }

  generateContent() {
    this.modalRegisterWrapper = this.createDomNode(
      this.modalRegisterWrapper,
      'div',
      null,
      null,
      'modal-register__wrapper'
    );

    this.modalRegisterTitle = this.createDomNode(
      this.modalRegisterWrapper,
      'p',
      this.modal,
      this.modalRegisterWrapper,
      'modal-register__title'
    );

    this.modalRegisterContent = this.createDomNode(
      this.modalRegisterContent,
      'form',
      null,
      this.modalRegisterWrapper,
      'modal-register__content',
      'register'
    );

    REGISTER_FIELDS[this.modal].fields.forEach((el) => {
      const {title, name} = el;
      this.registerItem = this.createDomNode(
        this.registerItem,
        'div',
        null,
        this.modalRegisterContent,
        'register__item'
      );
      this.registerTitle = this.createDomNode(
        this.registerTitle,
        'p',
        title,
        this.registerItem,
        'modal-form__title'
      );
      this.registerInput = this.createDomNodeInput(
        this.registerInput,
        name,
        'text',
        this.registerItem,
        'modal-form__input'
      );
    });

    this.modalRegisterButton = this.createDomNodeButton(
      this.modalRegisterButton,
      REGISTER_FIELDS[this.modal].buttonText,
      false,
      this.modalRegisterContent,
      'button'
    );

    this.modalRegisterAdition = this.createDomNode(
      this.modalRegisterAdition,
      'div',
      null,
      this.modalRegisterWrapper,
      'modal-register__adition',
      'adition'
    );
    this.aditionText = this.createDomNode(
      this.aditionText,
      'span',
      REGISTER_FIELDS[this.modal].aditionText,
      this.modalRegisterAdition,
      'adition__text'
    );
    this.aditionLink = this.createDomNode(
      this.aditionLink,
      'span',
      REGISTER_FIELDS[this.modal].aditionLink,
      this.modalRegisterAdition,
      'adition__link'
    );

    this.aditionLink.addEventListener('click', (e) => {
      document.querySelector('.overlay').remove();

      this.modal = e.target.textContent.toLowerCase();
      this.renderModal();
    });

    return this.modalRegisterWrapper;
  }

  renderModal() {
    const content = this.generateContent();
    super.buildModal(content);
  }
}

export default ModalRegister;
