import Modal from './Modal.js';
import {loadUserInfo} from '../userProfile/loadUserInfo.js';
import userCardVerification from '../digitaLibraryCard/userCardVerification.js';

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
        '',
        null,
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
      this.renderModal(this.modal);
    });

    this.modalRegisterButton.addEventListener('click', (e) => {
      if (e.target.textContent === 'Sign Up') {
        const validate = this.validateFormRegister();

        if (validate) {
          const data = {};

          validate.forEach((el) => {
            console.log(el);
            data[el.name] =
              el.name === 'firstName' || el.name === 'lastName'
                ? el.value.charAt(0).toUpperCase() + el.value.slice(1)
                : el.value; // el.value;
          });

          data.cardNumber = this.generateCardNumber();
          // data.visit = 1;
          // data.subscription = false;

          // console.log(data);
          // document.querySelector('.menu-profile').remove();
          document.querySelector('.menu-profile').innerHTML = '';
          // document.querySelector('.menu-profile__mask').remove();

          // this.changeContent(data);

          localStorage.setItem('user', JSON.stringify(data));
          localStorage.setItem('user-auth', true);
          localStorage.setItem('user-visit', 1);
          localStorage.setItem('user-books', 0);
          localStorage.setItem('rented-books', JSON.stringify([]));
          // localStorage.setItem('user-subscription', false);

          loadUserInfo(data);
          // userCardVerification();
          //close modal
          document.querySelector('.overlay').remove();
          document.querySelector('body').classList.remove('open');
        }
      }
      if (e.target.textContent === 'Log In') {
        const validate = this.validateFormLogin();

        if (validate) {
          localStorage.setItem('user-auth', true);

          document.querySelector('.menu-profile').innerHTML = '';

          let visit = localStorage.getItem('user-visit');
          localStorage.setItem('user-visit', ++visit);

          loadUserInfo();

          document.querySelector('.overlay').remove();
          document.querySelector('body').classList.remove('open');
        }
      }
    });

    return this.modalRegisterWrapper;
  }

  getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  generateCardNumber() {
    // getRandomArbitrary(1000000000, 999999999)
    // const randomNumber = Math.floor(Math.random() * 900000000) + 100000000;

    // const hexNumber = randomNumber.toString(16);

    const randomCardNumber = this.getRandomArbitrary(100000000, 999999999);
    const hexCardNumber = randomCardNumber.toString(16);
    // localStorage.setItem('cardNumber', hexCardNumber);
    return hexCardNumber;
    // document.querySelector('.menu-profile__title').textContent = hexCardNumber;
  }

  // changeContent(data) {
  //   const {firstName, lastName} = data;

  //   const userIcon = document.querySelector('.user_icon');

  //   const userInitials = `${firstName.slice(0, 1).toUpperCase()}${lastName
  //     .slice(0, 1)
  //     .toUpperCase()}`;
  //   // console.log(userInfo);

  //   userIcon.innerHTML = `<p class="user-icon__text" title="${firstName} ${lastName}">
  //     ${userInitials}
  //     </p>`;

  //   // const arr =
  //   // document.querySelector('.menu-profile__title').textContent = 'My profile';
  //   document.querySelector('.menu-profile_login').textContent = 'My profile';
  //   // const arr1 =
  //   document.querySelector('.menu-profile_register').textContent = 'Log Out';
  // }

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

  validateFieldRegisterController(el) {
    const {email} = JSON.parse(localStorage.getItem('user')) || '';

    // const EMAIL_REGEXP =
    //   /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

    switch(el.name) {
      case 'firstName':
      case 'lastName':
        const reg = new RegExp("^.*[^A-zА-яЁё].*$");

        if (reg.test(el.value)) return this.addStyleValidateField(el, 'The field must contain only letters.');
        return true;
      case 'password':
        if (el.value.length < 8 && el.value.length >= 1) return this.addStyleValidateField(el, 'The password must be at least 8 characters long.');
        return true;
      case 'email':
        const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

        if (!EMAIL_REGEXP.test(el.value)) return this.addStyleValidateField(el, 'Enter correct email.');
        if (el.value === email) return this.addStyleValidateField(el, 'This email is already registered.');
        return true;
      default:
        return true;
    }
  }

  validateFormRegister() {
    const fields = [...document.querySelectorAll('.modal input')];
    // const {email} = JSON.parse(localStorage.getItem('user')) || '';

    // const EMAIL_REGEXP =
    //   /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

    const arr = [];

    fields.forEach((el) => {

      if(!el.value) {
        return this.addStyleValidateField(el, 'Field must not be empty.');
      } else if (this.validateFieldRegisterController(el)) {
        this.removeStyleValidateField(el);
        arr.push(el);
      }
      // if (
      //   !el.value ||
      //   (el.name === 'password' && el.value.length < 8) ||
      //   (el.name === 'email' && !EMAIL_REGEXP.test(el.value)) ||
      //   (el.name === 'email' && el.value === email)
      // ) {
      //   el.classList.add('validate-input');
      //   el.nextSibling.style.display = 'block';
      // } else {
      //   el.classList.remove('validate-input');
      //   el.nextSibling.style.display = 'none';
      //   arr.push(el);
      // }
    });

    return arr.length === fields.length ? arr : false;
  }

  addStyleValidateField(element, textError) {
    element.classList.add('validate-input');
    element.nextSibling.textContent = textError;
    element.nextSibling.style.display = 'block';
  }

  removeStyleValidateField(element) {
    element.classList.remove('validate-input');
    element.nextSibling.style.display = 'none';
  }

  validateFieldLoginController(el) {
    const {email, cardNumber, password} =
      JSON.parse(localStorage.getItem('user')) || '';

    switch(el.name) {
      case 'email':
        if (el.value === email || el.value === cardNumber) return true;
        return this.addStyleValidateField(el, 'Email or reader card not registered.');
      case 'password':
        if (el.value !== password) return this.addStyleValidateField(el, 'Please enter correct password.');
        return true;
      default:
        return true;
    }
  }

  validateFormLogin() {
    const fields = [...document.querySelectorAll('.modal input')];
    // const {email, cardNumber, password} =
    //   JSON.parse(localStorage.getItem('user')) || '';

    const arr = [];

    fields.forEach((el) => {
      if(!el.value) {
        return this.addStyleValidateField(el, 'Field must not be empty.');
      } else if (this.validateFieldLoginController(el)) {
        this.removeStyleValidateField(el);
        arr.push(el);
      }



      // if (
      //   el.value ||
      //   (el.name === 'email' && (el.value === email || el.value === cardNumber)) ||
      //   (el.name === 'password' && el.value === password)
      // ) {
      //   this.removeStyleValidateField(el);
      //   // el.classList.remove('validate-input');
      //   // el.nextSibling.style.display = 'none';
      //   arr.push(el);
      // } else if (!el.value) {
      //   this.addStyleValidateField(el, 'Field must not be empty');
      //   // el.classList.add('validate-input');
      //   // el.nextSibling.textContent = 'Field must not be empty';
      //   // el.nextSibling.style.display = 'block';
      // } else if (
      //   el.name === 'email' &&
      //   (el.value !== email || el.value !== cardNumber)
      // ) {
      //   // console.log('зашел')
      //   this.addStyleValidateField(el, 'Email or reader card not registered');
      //   // el.classList.add('validate-input');
      //   // el.nextSibling.textContent = 'Email or reader card not registered';
      //   // el.nextSibling.style.display = 'block';
      // } else if (el.name === 'password' && el.value === password) {
      //   this.addStyleValidateField(el, 'Please enter correct password');
      //   // el.classList.add('validate-input');
      //   // el.nextSibling.textContent = 'Please enter correct password';
      //   // el.nextSibling.style.display = 'block';
      // }
    });

    return arr.length === fields.length;
  }

  renderModal(fields) {
    this.modal = fields || 'login';
    const content = this.generateContent();
    super.buildModal(content);
  }
}

export default ModalRegister;
