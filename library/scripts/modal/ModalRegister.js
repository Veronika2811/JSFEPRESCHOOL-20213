import Modal from './Modal.js';
import loadUserIcon from '../userProfile/loadUserIcon.js';

import {REGISTER_FIELDS} from '../constants.js';

class ModalRegister extends Modal {
  constructor(classes) {
    super(classes);
    this.modal = '';
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
      const {title, name, error} = el;

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
        name === 'password' ? 'password' : name === 'email' ? 'email' : 'text',
        this.registerItem,
        'modal-form__input'
      );
      this.registerInputTitle = this.createDomNode(
        this.registerInputTitle,
        'span',
        error,
        this.registerItem,
        'modal-form__input-title'
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

    this.modalRegisterButton.addEventListener('click', (e) => {
      const validate = this.validateForm();

      if (validate) {
        const data = {};

        validate.forEach((el) => {
          data[el.name] = el.value;
        });

        loadUserIcon(data);
        // this.generateIconUser(data);

        localStorage.setItem('user', JSON.stringify(data));
      }
    });

    return this.modalRegisterWrapper;
  }

  // generateIconUser(data) {
  //   const userIcon = document.querySelector('.user_icon');

  //   userIcon.innerHTML = '';

  //   const {firstName, lastName} = data;

  //   this.userIconText = this.createDomNode(
  //     this.userIconText,
  //     'p',
  //     `${firstName.slice(0, 1).toUpperCase()}${lastName
  //       .slice(0, 1)
  //       .toUpperCase()}`,
  //     userIcon,
  //     'user-icon__text'
  //   );
  // }

  validateForm() {
    const fields = [...document.querySelectorAll('.modal input')];

    const EMAIL_REGEXP =
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

    const arr = [];

    fields.forEach((el) => {
      if (
        !el.value ||
        (el.name === 'password' && el.value.length < 8) ||
        (el.name === 'email' && !EMAIL_REGEXP.test(el.value))
      ) {
        el.classList.add('validate-input');
        el.nextSibling.style.display = 'block';
      } else {
        el.classList.remove('validate-input');
        el.nextSibling.style.display = 'none';
        arr.push(el);
      }
    });

    return arr.length === fields.length ? arr : false;
  }

  renderModal(fields) {
    this.modal = fields || 'login';
    const content = this.generateContent();
    super.buildModal(content);
  }
}

export default ModalRegister;
