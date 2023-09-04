import Modal from './Modal.js';
import { USER_INFO, RENTED_BOOKS } from '../constants.js';
import data from '../favorites/data.js';

class ModalProfile extends Modal {
  constructor(classes) {
    super(classes);
  }

  generateContent() {
    const userInfo = JSON.parse(localStorage.getItem('user'));
    const {firstName, lastName, cardNumber} = userInfo;

    const rentedBooks = JSON.parse(localStorage.getItem('rented-books'));

    const userInitials = `${firstName.slice(0, 1).toUpperCase()}${lastName
      .slice(0, 1)
      .toUpperCase()}`;

    this.modalProfileWrapper = this.createDomNode(this.modalProfileWrapper, 'div', null, null, 'modal-profile__wrapper');

    this.modalProfileUser = this.createDomNode(this.modalProfileWrapper, 'div', null, this.modalProfileWrapper, 'modal-profile__user', 'user');
    this.userAvator = this.createDomNode(this.userAvator, 'p', userInitials, this.modalProfileUser, 'user__avator');
    this.userName = this.createDomNode(this.userName, 'p', `${firstName} ${lastName}`, this.modalProfileUser, 'user__name');

    this.modalProfileUserInfo = this.createDomNode(this.modalProfileUserInfo, 'div', null, this.modalProfileWrapper, 'modal-profile__user-info', 'user-info');
    this.userInfoTitle = this.createDomNode(this.modalProfileUserInfo, 'h3', 'My profile', this.modalProfileUserInfo, 'user-info__title');
    this.userInfoWrapper = this.createDomNode(this.userInfoTitleWrapper, 'div', null, this.modalProfileUserInfo, 'user-info__wrapper', 'cards-profile');

    USER_INFO.forEach((el) => {
      const { title, svg } = el;
      const count = title === 'visits' ? localStorage.getItem('user-visit') : title === 'bonuses' ? 1240 : rentedBooks.length;

      this.cardsProfileItem = this.createDomNode(this.cardsProfileItem, 'div', null, this.userInfoWrapper, 'cards-profile__item', 'item');
      this.itemTitle = this.createDomNode(this.itemTitle, 'div', title, this.cardsProfileItem, 'item__title');
      this.itemSvg = this.createDomNode(this.itemTitle, 'div', null, this.cardsProfileItem, 'item__svg');
      this.itemSvg.innerHTML = svg;
      this.itemCount = this.createDomNode(this.itemCount, 'p', count, this.cardsProfileItem, 'item__count');
    })

    this.cardsProfileRentedBooks = this.createDomNode(this.cardsProfileRentedBooks, 'div', null, this.modalProfileUserInfo, 'cards-profile__rented-books', 'rented-books');
    this.rentedBooksTitle = this.createDomNode(this.rentedBooksTitle, 'p', 'Rented books', this.cardsProfileRentedBooks, 'rented-books__title');
    this.rentedBooksList = this.createDomNode(this.rentedBooksList, 'ul', null, this.cardsProfileRentedBooks, 'rented-books__list', 'list');

    

    for(let key in data) {
      data[key].forEach((el) => {
        if(this.contains(JSON.parse(localStorage.getItem('rented-books')), el.id)) {
          console.log(el);
          this.rentedBooksListItem = this.createDomNode(this.rentedBooksListItem, 'li', `${el.title}, ${el.author.slice(3)}`, this.rentedBooksList, 'list__item');
        }
      })
    }
    // RENTED_BOOKS.forEach((el) => {
    //   this.rentedBooksListItem = this.createDomNode(this.rentedBooksListItem, 'li', el, this.rentedBooksList, 'list__item');
    // })

    this.cardsProfileCard = this.createDomNode(this.cardsProfileCard, 'div', null, this.modalProfileUserInfo, 'cards-profile__card', 'card');
    this.cardTitle = this.createDomNode(this.cardTitle, 'span', 'Card number', this.cardsProfileCard, 'card__title');
    this.cardNumber = this.createDomNode(this.cardNumber, 'span', cardNumber, this.cardsProfileCard, 'card__number');
    this.cardNumberCopy = this.createDomNode(this.cardNumberCopy, 'span', null, this.cardsProfileCard, 'card__svg');
    this.cardNumberCopy.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" viewBox="0 0 14 12" fill="none"><rect x="2.46826" y="0.25" width="10.5917" height="9.5" rx="0.75" stroke="black" stroke-width="0.5"/><rect x="0.25" y="2.25" width="10.5917" height="9.5" rx="0.75" fill="white" stroke="black" stroke-width="0.5"/></svg>';

    this.cardNumberCopy.addEventListener('click', () => {
      navigator.clipboard.writeText(this.cardNumber.textContent)
      .then(() => {
          setTimeout(() => {
            alert('Text copied to clipboard');
          }, 1000)
      })
      .catch(err => {
          console.error('Error in copying text: ', err);
      });
    })

    return this.modalProfileWrapper;
  }

  contains(arr, elem) {
    return arr.indexOf(elem) !== -1;
  }

  renderModal() {
    const content = this.generateContent();
    super.buildModal(content);
  }
}

export default ModalProfile;