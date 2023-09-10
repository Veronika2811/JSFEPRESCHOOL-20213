import Modal from '../utils/Modal.js';

import {REGISTER_FIELDS} from '../constants/constants.js';
import {
  getLocalStorage,
  setLocalStorage,
} from '../utils/actionsWithLocalStorage.js';
import validateFormLogin from './utils/validateFormLogin.js';
import validateFormRegister from './utils/validateFormRegister.js';
import generateCardNumber from './utils/generateCardNumber.js';
import loadUserInfo from '../loadUserInfo/loadUserInfo.js';

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

    this.modalRegisterForm = this.createDomNode(
      this.modalRegisterForm,
      'form',
      null,
      this.modalRegisterWrapper,
      'modal-register__form',
    );

    REGISTER_FIELDS[this.modal].fields.forEach((el) => {
      const {title, name, error} = el;

      this.formItem = this.createDomNode(
        this.formItem,
        'div',
        null,
        this.modalRegisterForm,
        'form-item'
      );

      this.formItemTitle = this.createDomNode(
        this.formItemTitle,
        'p',
        title,
        this.formItem,
        'form-item__title'
      );
      this.formItemInput = this.createDomNodeInput(
        this.formItemInput,
        name,
        name === 'password' ? 'password' : name === 'email' ? 'email' : 'text',
        '',
        null,
        this.formItem,
        'form-item__input'
      );
      this.formItemInputError = this.createDomNode(
        this.formItemInputError,
        'span',
        error,
        this.formItem,
        'form-item__error'
      );
    });

    this.modalRegisterButton = this.createDomNodeButton(
      this.modalRegisterButton,
      REGISTER_FIELDS[this.modal].buttonText,
      false,
      this.modalRegisterForm,
      'button',
      'button_fixed-width',
      'modal-register__button'
    );

    this.modalRegisterAdition = this.createDomNode(
      this.modalRegisterAdition,
      'div',
      null,
      this.modalRegisterWrapper,
      'modal-register__adition',
      'adition'
    );
    this.aditionTitle = this.createDomNode(
      this.aditionTitle,
      'span',
      REGISTER_FIELDS[this.modal].aditionText,
      this.modalRegisterAdition,
      'adition__title'
    );
    this.aditionLink = this.createDomNode(
      this.aditionLink,
      'span',
      REGISTER_FIELDS[this.modal].aditionLink,
      this.modalRegisterAdition,
      'adition__link'
    );

    this.bindEventsModalRegister();

    return this.modalRegisterWrapper;
  }

  bindEventsModalRegister() {
    this.modalRegisterButton.addEventListener('click', (e) => {
      const target = e.target.textContent;

      if (target === 'Sign Up') {
        const validate = validateFormRegister();

        if (validateFormRegister()) {
          const data = {};

          validate.forEach((el) => {
            data[el.name] =
              el.name === 'firstName' || el.name === 'lastName'
                ? el.value.charAt(0).toUpperCase() + el.value.slice(1)
                : el.value;
          });

          data.cardNumber = generateCardNumber();

          document.querySelector('.drop-menu').innerHTML = '';

          setLocalStorage(
            ['user-info', JSON.stringify(data)],
            ['user-auth', true],
            ['user-visit', 1],
            ['user-rentedBooks', JSON.stringify([])]
          );

          loadUserInfo();

          this.closeModal();
        }
      }
      if (target === 'Log In') {
        const validate = validateFormLogin();

        if (validate) {
          document.querySelector('.drop-menu').innerHTML = '';
          let visit = getLocalStorage('user-visit');

          setLocalStorage(['user-auth', true], ['user-visit', ++visit]);

          loadUserInfo();

          this.closeModal();
        }
      }
    });

    this.aditionLink.addEventListener('click', (e) => {
      this.closeModal();

      this.modal = e.target.textContent.toLowerCase();
      this.renderModal(this.modal);
    });
  }

  renderModal(fields) {
    this.modal = fields || 'login';
    const content = this.generateContent();
    super.buildModal(content);
  }
}

export default ModalRegister;
