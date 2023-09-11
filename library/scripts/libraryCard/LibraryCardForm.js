import Element from '../utils/Element.js';
import UserStatistics from './UserStatistics.js';

import validateLibraryFormCard from './utils/validateLibraryFormCard.js';

class LibraryCardForm extends Element {
  constructor(userInfo, userAuth) {
    super();
    this.userAuth = userAuth;
    this.userInfo = userInfo;
  }

  buildLibraryCardForm() {
    this.libraryCardForm = this.createDomNode(
      this.libraryCardForm,
      'div',
      null,
      null,
      'library-card__form',
      'card-search'
    );
    this.cardSearchTitle = this.createDomNode(
      this.cardSearchTitle,
      'h3',
      this.userInfo && this.userAuth ? 'Your Library card' : 'Find your Library card',
      this.libraryCardForm,
      'card-search__title'
    );

    this.cardSearchForm = this.createDomNode(
      this.cardSearchForm,
      'form',
      null,
      this.libraryCardForm,
      'card-search__form',
      'form'
    );

    this.formContent = this.createDomNode(
      this.formContent,
      'div',
      null,
      this.cardSearchForm,
      'form__content'
    );

    this.formLogo = this.createDomNode(
      this.formLogo,
      'p',
      'Brooklyn Public Library',
      this.formContent,
      'library-logo',
      'card-search__logo'
    );

    this.formFields = this.createDomNode(
      this.formFieldsName,
      'div',
      null,
      this.formContent,
      'form__fields'
    );

    this.formFieldName = this.createDomNode(
      this.formFieldName,
      'div',
      null,
      this.formFields,
      'form__field'
    );
    this.formFieldNameInput = this.createDomNodeInput(
      this.formFieldNameInput,
      'readers-name',
      'text',
      "Reader's name",
      null,
      this.formFieldName,
      'form__input'
    );
    this.formFieldNameError = this.createDomNode(
      this.formFieldNameError,
      'span',
      'Enter a valid first and last name',
      this.formFieldName,
      'form__field_error'
    );

    this.formFieldCard = this.createDomNode(
      this.formFieldCard,
      'div',
      null,
      this.formFields,
      'form__field'
    );
    this.formFieldCardInput = this.createDomNodeInput(
      this.formFieldCardInput,
      'readers-card',
      'text',
      'Card number',
      null,
      this.formFieldCard,
      'form__input'
    );
    this.formFieldCardError = this.createDomNode(
      this.formFieldCardError,
      'span',
      'Enter a valid card',
      this.formFieldCard,
      'form__field_error'
    );

    this.formDetails = this.createDomNode(
      this.formDetails,
      'div',
      null,
      this.cardSearchForm,
      'form__details'
    );

    if (this.userInfo && this.userAuth) {
      const {firstName, lastName, cardNumber} = this.userInfo;

      this.fillFormFields(`${firstName} ${lastName}`, cardNumber);

      const content = new UserStatistics().generateStatistics();
      this.formDetails.append(content);
    } else {
      this.fillFormFields();
      this.buildButtonTheForm();
    }

    return this.libraryCardForm;
  }

  fillFormFields(name = '', card = '') {
    this.formFieldNameInput.value = name;
    this.formFieldCardInput.value = card;
  }

  buildButtonTheForm() {
    this.formFieldButton = this.createDomNodeInput(
      this.formFieldButton,
      'form-submit',
      'submit',
      null,
      'Check the card',
      this.formDetails,
      'button',
      'form__button'
    );

    this.bindEvents();

    return this.formFieldButton;
  }

  bindEvents() {
    this.formFieldButton.addEventListener('click', (e) => {
      e.preventDefault();

      if (!this.userAuth && !this.userInfo) return;

      if (
        validateLibraryFormCard(
          this.formFieldNameInput,
          this.formFieldCardInput
        )
      ) {
        this.formDetails.innerHTML = '';

        const content = new UserStatistics().generateStatistics();
        this.formDetails.append(content);

        setTimeout(() => {
          this.fillFormFields();
          this.formDetails.innerHTML = '';

          this.buildButtonTheForm();
        }, 10000);
      }
    });
  }
}

export default LibraryCardForm;
