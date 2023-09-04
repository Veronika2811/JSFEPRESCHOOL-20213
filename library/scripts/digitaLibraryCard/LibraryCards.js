import Element from '../Element.js';
import modalController from '../userProfile/modalController.js';

class LibraryCards extends Element {
  constructor (userAuth, userInfo) {
    super();
    this.userAuth = userAuth;
    this.userInfo = userInfo;
    this.libraryCardInfo = '';
    this.formSubmit = '';
    this.formFieldNameInput = null;
    this.formFieldCardInput = null;
    this.formFieldNameInputError = null;
    this.formFieldCardInputError = null;
  }

  buildSectionLibraryCard() {
    const libraryCardWrapper = document.querySelector('.library-card__wrapper');
    libraryCardWrapper.innerHTML = '';

    this.libraryCardForm = this.createDomNode(this.libraryCardForm, 'div', null, libraryCardWrapper, 'library-card__form', 'card-form')
    this.libraryCardFormTitle = this.createDomNode(this.libraryCardFormTitle, 'h3', 'Find your Library card', this.libraryCardForm, 'card-form__title')

    this.form = this.createDomNode(this.form, 'form', null, this.libraryCardForm, 'form')

    this.formContent = this.createDomNode(this.formContent, 'div', null, this.form, 'form__content')
    this.formLogo = this.createDomNode(this.formLogo, 'p', 'Brooklyn Public Library', this.formContent, 'form__logo', 'logo')

    this.formFields = this.createDomNode(this.formFieldsName, 'div', null, this.formContent, 'form__fields')

    this.formFieldName = this.createDomNode(this.formFieldName, 'div', null, this.formFields, 'form__field')
    this.formFieldNameInput = this.createDomNodeInput(this.formFieldNameInput, "readers-name", "text", "Reader's name", null, this.formFieldName, 'form__input')
    this.formFieldNameInputError = this.createDomNode(this.formFieldNameInputError, 'span', 'Enter a valid first and last name', this.formFieldName, 'form__field-error')

    this.formFieldCard = this.createDomNode(this.formFieldCard, 'div', null, this.formFields, 'form__field')
    this.formFieldCardInput = this.createDomNodeInput(this.formFieldCardInput, "readers-card", "text", "Card number", null, this.formFieldCard, 'form__input')
    this.formFieldCardInputError = this.createDomNode(this.formFieldCardInputError, 'span', 'Enter a valid card', this.formFieldCard, 'form__field-error')

    this.formSubmit = this.createDomNode(this.formSubmit, 'div', null, this.form, 'form-submit__wrapper')

    // <div class="library-card__info card-info">
    this.libraryCardInfo = this.createDomNode(this.libraryCardInfo, 'div', null, libraryCardWrapper, 'library-card__info', 'card-info')

    if (this.userInfo && this.userAuth) {
      const {firstName, lastName, cardNumber } = this.userInfo;

      this.formFieldNameInput.value = `${firstName} ${lastName}`
      this.formFieldCardInput.value = cardNumber;
      // this.formFieldNameInput.classList.remove('validate-input');
      // this.formFieldCardInputError.style.display = 'none';
      // this.formFieldNameInput.classList.remove('validate-input');
      // this.formFieldCardInputError.style.display = 'none';
      // this.formSubmit.innerHTML = '';
      this.generateUserInfo();
      // this.libraryCardInfo.innerHTML = '';
      this.generateAuthUserContent();
    } else {
      this.formFieldNameInput.value = ''
      this.formFieldCardInput.value = '';
      // this.formSubmit.innerHTML = ''
      this.generateButton();
      // this.libraryCardInfo.innerHTML = '';
      this.generateNoAuthUserContent();
    }
  }

  validateFormCard() {
    const {firstName, lastName, cardNumber } = JSON.parse(localStorage.getItem('user'));

    const readersName = this.formFieldNameInput.value;
    const readersCardNumber = this.formFieldCardInput.value;
    const arr = [];
  
    if (!readersName || readersName.toLowerCase() !== `${firstName} ${lastName}`.toLowerCase()) {
      console.log('no valid')
      this.formFieldNameInput.classList.add('validate-input');
      this.formFieldNameInputError.style.display = 'block';
    } else {
      console.log('valid')
      this.formFieldNameInput.classList.remove('validate-input');
      this.formFieldNameInputError.style.display = 'none';
      arr.push(readersName)
    }
  
    if (!readersCardNumber || readersCardNumber.replaceAll(' ', '') !== cardNumber) {
      this.formFieldCardInput.classList.add('validate-input');
      this.formFieldCardInputError.style.display = 'block';
    } else {
      this.formFieldCardInput.classList.remove('validate-input');
      this.formFieldCardInputError.style.display = 'none';
      arr.push(readersCardNumber)
    }
  
    return [readersName, readersCardNumber].length === arr.length;
  }

  generateButton() {
    this.formFieldButton = this.createDomNodeInput(this.formFieldButton, "form-submit", "submit", null, "Check the card", this.formSubmit, 'button', 'form__button')

    this.formFieldButton.addEventListener('click', (e) => {
      e.preventDefault();

       if(!localStorage.getItem('user')) return;
        const validate = this.validateFormCard();

        if (validate) {
          // console.log('hi')
          this.formSubmit.innerHTML = ''
          this.generateUserInfo();
          setTimeout(() => {
            this.formFieldNameInput.value = '';
            this.formFieldCardInput.value = '';
            this.formSubmit.innerHTML = ''
            this.generateButton();
          }, 10000);
        }
    })
  }

  generateUserInfo() {
    this.libraryCardUserInfo = this.createDomNode(this.libraryCardUserInfo, 'div', null, this.formSubmit, 'library-card__user-info', 'user-info__list')

    this.libraryCardUserInfoItem = this.createDomNode(this.libraryCardUserInfoItem, 'div', null, this.libraryCardUserInfo, 'user-info__item')
    this.libraryCardUserInfoTitle = this.createDomNode(this.libraryCardUserInfoTitle, 'p', 'visits', this.libraryCardUserInfoItem, 'user-info__list-title')
    this.libraryCardUserInfoSVG = this.createDomNode(this.libraryCardUserInfoSVG, 'div', null, this.libraryCardUserInfoItem, 'user-info__svg')
    this.libraryCardUserInfoSVG.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 10C13.2614 10 15.5 7.76143 15.5 5C15.5 2.23857 13.2614 0 10.5 0C7.73857 0 5.5 2.23857 5.5 5C5.5 7.76143 7.73857 10 10.5 10ZM17.5711 13.9289C19.4464 15.8043 20.5 18.3478 20.5 21H10.5H0.5C0.5 18.3478 1.55357 15.8043 3.42894 13.9289C5.30429 12.0536 7.84784 11 10.5 11C13.1522 11 15.6957 12.0536 17.5711 13.9289Z" fill="#BB945F"></path></svg>'
    this.libraryCardUserInfoSubtitle = this.createDomNode(this.libraryCardUserInfoSubtitle, 'p', localStorage.getItem('user-visit'), this.libraryCardUserInfoItem, 'user-info__subtitle')
    
    this.libraryCardUserInfoItem = this.createDomNode(this.libraryCardUserInfoItem, 'div', null, this.libraryCardUserInfo, 'user-info__item')
    this.libraryCardUserInfoTitle = this.createDomNode(this.libraryCardUserInfoTitle, 'p', 'bonuses', this.libraryCardUserInfoItem, 'user-info__list-title')
    this.libraryCardUserInfoSVG = this.createDomNode(this.libraryCardUserInfoSVG, 'div', null, this.libraryCardUserInfoItem, 'user-info__svg')
    this.libraryCardUserInfoSVG.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none"><path d="M10 0L12.2249 3.31001L15.8779 2.00532L15.8249 6.05634L19.5106 7.25532L17.2 10.5L19.5106 13.7447L15.8249 14.9437L15.8779 18.9947L12.2249 17.69L10 21L7.77508 17.69L4.12215 18.9947L4.17508 14.9437L0.489435 13.7447L2.8 10.5L0.489435 7.25532L4.17508 6.05634L4.12215 2.00532L7.77508 3.31001L10 0Z" fill="#BB945F"></path></svg>'
    this.libraryCardUserInfoSubtitle = this.createDomNode(this.libraryCardUserInfoSubtitle, 'p', '1240', this.libraryCardUserInfoItem, 'user-info__subtitle')
    
    this.libraryCardUserInfoItem = this.createDomNode(this.libraryCardUserInfoItem, 'div', null, this.libraryCardUserInfo, 'user-info__item')
    this.libraryCardUserInfoTitle = this.createDomNode(this.libraryCardUserInfoTitle, 'p', 'books', this.libraryCardUserInfoItem, 'user-info__subtitle')
    this.libraryCardUserInfoSVG = this.createDomNode(this.libraryCardUserInfoSVG, 'div', null, this.libraryCardUserInfoItem, 'user-info__svg')
    this.libraryCardUserInfoSVG.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none"><rect width="20" height="21" fill="#BB945F"></rect><rect x="2" width="1" height="19" fill="#826844"></rect><rect x="1" width="1" height="21" fill="white"></rect></svg>'
    this.libraryCardUserInfoSubtitle = this.createDomNode(this.libraryCardUserInfoSubtitle, 'p', localStorage.getItem('user-books'), this.libraryCardUserInfoItem, 'user-info__subtitle')

    return this.libraryCardUserInfo;
  }

  generateAuthUserContent() { //node, text, disabled, parentNode, ...classes
    this.libraryCardInfoTitle = this.createDomNode(this.libraryCardInfoTitle, 'h3', 'Visit your profile', this.libraryCardInfo, 'card-info__title')

    this.libraryCardInfoText = this.createDomNode(this.libraryCardInfoText, 'p', 'With a digital library card you get free access to the Library’s wide array of digital resources including e-books, databases, educational resources, and more.', this.libraryCardInfo, 'card-info__text')

    this.libraryCardInfoButtons = this.createDomNode(this.libraryCardInfoButtons, 'div', null, this.libraryCardInfo, 'card-info__buttons')
    this.libraryCardButtonProfile = this.createDomNodeButton(this.libraryCardButtonProfile, 'Profile', false, this.libraryCardInfoButtons, 'button')
    this.libraryCardButtonProfile.addEventListener('click', () => modalController('My profile'));
  }

  generateNoAuthUserContent() { //node, text, disabled, parentNode, ...classes
    this.libraryCardInfoTitle = this.createDomNode(this.libraryCardInfoTitle, 'h3', 'Get a reader card', this.libraryCardInfo, 'card-info__title')

    this.libraryCardInfoText = this.createDomNode(this.libraryCardInfoText, 'p', 'You will be able to see a reader card after logging into account or you can register a new account', this.libraryCardInfo, 'card-info__text')

    this.libraryCardButtons = this.createDomNode(this.libraryCardInfoButtons, 'div', null, this.libraryCardInfo, 'card-info__buttons')
    this.libraryCardButtonSignUp = this.createDomNodeButton(this.libraryCardButtonSignUp, 'Sign Up', false, this.libraryCardButtons, 'button')
    this.libraryCardButtonLogin = this.createDomNodeButton(this.libraryCardButtonLogin, 'Log in', false, this.libraryCardButtons, 'button')


    this.libraryCardButtonSignUp.addEventListener('click', () => modalController('Register'));
    this.libraryCardButtonLogin.addEventListener('click', () => modalController('Log In'));
  }
}

export default LibraryCards;