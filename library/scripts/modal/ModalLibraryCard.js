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

    const infoBuy = {};

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
        console.log(item)
        name.length > 1 ? name.forEach((el) => infoBuy[el] = '') : infoBuy[item] = '';
        // node, name, type, placeholder, value, parentNode, ...classes
        this.cardFormInput = this.createDomNodeInput(
          this.cardFormInput,
          item,
          'text',
          '',
          null,
          name.length > 1 ? this.cardFormInputWrapper : this.cardFormItem,
          name.length > 1 ? 'modal-form__input_small' : 'modal-form__input'
        );
        if (item === 'card-number') this.cardFormInput.setAttribute('maxlength', 16);

        if (item === 'month' || item === 'year') this.cardFormInput.setAttribute('maxlength', 2);

        if (item === 'cvc') this.cardFormInput.setAttribute('maxlength', 3);

        if (item === 'postal-code') this.cardFormInput.setAttribute('maxlength', 6);

        if (el.hasOwnProperty('width')) this.cardFormInput.style.width = el.width;

        if (name.length <= 1) {
          this.registerInputTitle = this.createDomNode(
            this.registerInputTitle,
            'span',
            '',
            this.cardFormItem,
            'modal-form__input-title'
          );
        }

        this.cardFormInput.addEventListener('input', (e) => {
          infoBuy[e.target.name] = e.target.value;
          const values = Object.values(infoBuy)
          values.some((el) => !el) ? this.modalCardFormButton.disabled = true : this.modalCardFormButton.disabled = false;
        })
      });

      if (name.length > 1) {
        this.registerInputTitle = this.createDomNode(
          this.registerInputTitle,
          'span',
          '',
          this.cardFormItem,
          'modal-form__input-title'
        );
      }
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
      'Buy',
      true,
      this.modalCardFormFooter,
      'button'
    );

    this.modalCardFormButton.addEventListener('click', () => {
      const validate = this.validateBuyLibraryCard();

      if(validate) {
        localStorage.setItem('user-subscription', true);
  
        document.querySelector('.overlay').remove();
        document.querySelector('body').classList.remove('open');
      }

    })

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

  addStyleValidateField(element, textError) {
    // console.log(erorEl);
    element.classList.add('validate-input');
    // console.log(element)
    // console.log(element.nextSibling)
    element.nextSibling.textContent = textError;
    element.nextSibling.style.display = 'block';
  }

  removeStyleValidateField(element) {
    element.classList.remove('validate-input');
    element.nextSibling.style.display = 'none';
  }

  validateFieldBuyLibraryCardController(el) {
    // const {email} = JSON.parse(localStorage.getItem('user')) || '';

    const reg = new RegExp("^.*[^A-z].*$");

    // const erorEl = !el.nextSibling || el.name === 'date' ? el.parentNode.nextSibling : el.nextSibling;

    // const EMAIL_REGEXP =
    //   /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

    switch(el.name) {
      case 'card-number':
        if (el.value.length < 16 && el.value.length >= 1) return this.addStyleValidateField(el, 'The card number must be 16 digits.');
        if (isNaN(el.value)) return this.addStyleValidateField(el, 'Card number must contain only digits.');
        return true;
      case 'cvc':
        if (isNaN(el.value)) return this.addStyleValidateField(el, 'CVC code must contain only digits.');
        if (el.value.length >= 1 && el.value.length <= 2) return this.addStyleValidateField(el, 'CVC code must contain 3 digits.');
        return true;
      case 'cardholder':
        if (/[А-Яа-я]/.test(el.value)) return this.addStyleValidateField(el, 'Name must be in English.');
        if (reg.test(el.value)) return this.addStyleValidateField(el, 'The field must contain only letters.');
        return true;
      case 'postal-code':
        if (isNaN(el.value)) return this.addStyleValidateField(el, 'Postal code must contain only digits.');
        if (el.value.length < 6 && el.value.length >= 1) return this.addStyleValidateField(el, 'The postal code number must be 6 digits.');
        return true;
        case 'city':
          if (/[А-Яа-я]/.test(el.value)) return this.addStyleValidateField(el, 'City must be in English.');
          if (reg.test(el.value)) return this.addStyleValidateField(el, 'The field must contain only letters.');
          return true;
      default:
        return true;
    }
  }

  validateBuyLibraryCard() {
    const allfields = [...document.querySelectorAll('.card-form__item input')];
    const fields = [...document.querySelectorAll('.card-form__item .modal-form__input')];
    const arr = [];
    
    fields.forEach((el) => {

      if (!el.value) {
        return this.addStyleValidateField(el, 'Field must not be empty')
      } else if (this.validateFieldBuyLibraryCardController(el)) {
        this.removeStyleValidateField(el);
        arr.push(el);
      }
      // if ()x
      // if(document.querySelector('[name="date"]') && !el.value) {
      //   document.querySelector('[name="date"]').classList.add('validate-input');
      //   document.querySelector('[name="date"]').parentNode.nextSibling.textContent = 'Field must not be empty';
      //   document.querySelector('[name="date"]').parentNode.nextSibling.style.display = 'block';
      // } else if(document.querySelector('[name="year"]') && !el.value) {
      //   document.querySelector('[name="year"]').classList.add('validate-input');
      //   document.querySelector('[name="year"]').parentNode.nextSibling.textContent = 'Field must not be empty';
      //   document.querySelector('[name="year"]').parentNode.nextSibling.style.display = 'none';
      // } else if (document.querySelector('[name="date"]') && el.value) {
      //   document.querySelector('[name="year"]').classList.remove('validate-input');
      //   document.querySelector('[name="year"]').parentNode.nextSibling.style.display = 'none';
      // } else if (document.querySelector('[name="year"]') && el.value) {
      //   document.querySelector('[name="date"]').classList.remove('validate-input');
      //   document.querySelector('[name="date"]').parentNode.nextSibling.style.display = 'none';
      // } else 
      // if(!el.value) {
      //   if(el.nextSibling) {
      //     this.addStyleValidateField(el, 'Field must not be empty')
      //   } else {

      //   }
      //   // this.addStyleValidateField(el, 'Field must not be empty')
      // }
      // else if(el.name === 'card-number' && el.value.length < 16 || isNaN(el.value)) {
      //   // console.log(el.value.length)
      //   // console.log(isNaN(el.value))
      //   this.addStyleValidateField(el, 'Please enter correct bank card number')
      // } else {
      //   this.removeStyleValidateField(el)
      // }
    })

    // element.classList.add('validate-input');
    // // console.log(element)
    // // console.log(element.nextSibling)
    // element.nextSibling.textContent = textError;
    // element.nextSibling.style.display = 'block';

    const fieldsMonth = document.querySelector('[name="month"]');
    const fieldsYear = document.querySelector('[name="year"]');

    const err = fieldsMonth.parentNode.nextSibling;

    if(!fieldsMonth.value && !fieldsYear.value) {
      fieldsMonth.classList.add('validate-input');
      fieldsYear.classList.add('validate-input');

      err.textContent = 'Fields must not be empty.'
      err.style.display = 'block';
    } else if (!fieldsMonth.value && fieldsYear.value) {
      fieldsMonth.classList.add('validate-input');
      fieldsYear.classList.remove('validate-input');

      err.textContent = 'Field month must not be empty.'
      err.style.display = 'block';
    } else if (fieldsMonth.value && !fieldsYear.value) {
      fieldsMonth.classList.remove('validate-input');
      fieldsYear.classList.add('validate-input');

      err.textContent = 'Fields year must not be empty.'
      err.style.display = 'block';
    } else if (isNaN(fieldsMonth.value) || isNaN(fieldsYear.value)) {
      if (isNaN(fieldsMonth.value)) fieldsMonth.classList.add('validate-input')
      if (isNaN(fieldsYear.value)) fieldsYear.classList.add('validate-input')
      // isNaN(fieldsMonth.value) ? fieldsMonth.classList.add('validate-input') : fieldsYear.classList.add('validate-input');
      err.textContent = 'Card number must contain only digits.'
      err.style.display = 'block';
    } else if (12 < +fieldsMonth.value || +new Date().getFullYear().toString().slice(2) > +fieldsYear.value) {
      fieldsMonth.classList.add('validate-input');
      fieldsYear.classList.add('validate-input');

      err.textContent = 'Check card expiration date.'
      err.style.display = 'block';
    } else {
      fieldsMonth.classList.remove('validate-input');
      fieldsYear.classList.remove('validate-input');
      err.style.display = 'none';

      if(!fieldsMonth.classList.contains('validate-input')) arr.push(fieldsMonth)
      if(!fieldsYear.classList.contains('validate-input')) arr.push(fieldsYear)
    }


    // else if (+fieldsMonth.value > 12 && +fieldsMonth.value <= 0) {
    //   fieldsMonth.classList.add('validate-input');

    //   err.textContent = 'Enter correct month'
    //   err.style.display = 'block';
    // }

    return arr.length === allfields.length;
  }

  renderModal() {
    const content = this.generateContent();
    super.buildModal(content, '#FFFFFF');
  }
}

export default ModalLibraryCard;
