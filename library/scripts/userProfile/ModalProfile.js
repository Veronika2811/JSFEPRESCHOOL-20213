import Modal from '../utils/Modal.js';
import UserStatistics from '../libraryCard/UserStatistics.js';

import {ICON_CORY_CARD} from '../constants/constants.js';
import {getLocalStorage} from '../utils/actionsWithLocalStorage.js';
import searchElem from '../utils/searchElem.js';
import books from '../favorites/books.js';

class ModalProfile extends Modal {
  constructor(classes) {
    super(classes);
  }

  generateContent() {
    const [userInfo, userRentedBooks] = getLocalStorage([
      'user-info',
      'user-rentedBooks'
    ]);
    const {firstName, lastName, cardNumber} = userInfo;

    const userInitials = `${firstName.slice(0, 1).toUpperCase()}${lastName
      .slice(0, 1)
      .toUpperCase()}`;

    this.modalProfileWrapper = this.createDomNode(
      this.modalProfileWrapper,
      'div',
      null,
      null,
      'modal-profile__wrapper'
    );

    this.modalProfileUser = this.createDomNode(
      this.modalProfileWrapper,
      'div',
      null,
      this.modalProfileWrapper,
      'modal-profile__user',
      'user'
    );
    this.userAvator = this.createDomNode(
      this.userAvator,
      'p',
      userInitials,
      this.modalProfileUser,
      'user__avator'
    );
    this.userName = this.createDomNode(
      this.userName,
      'p',
      `${firstName} ${lastName}`,
      this.modalProfileUser,
      'user__name'
    );

    this.modalProfileContent = this.createDomNode(
      this.modalProfileContent,
      'div',
      null,
      this.modalProfileWrapper,
      'modal-profile__content',
      'profile'
    );

    this.profileTitle = this.createDomNode(
      this.profileTitle,
      'h3',
      'My profile',
      this.modalProfileContent,
      'profile__title'
    );

    this.profileStatistics = this.createDomNode(
      this.profileStatistics,
      'div',
      null,
      this.modalProfileContent,
      'profile__statistics'
    );

    const content = new UserStatistics().generateStatistics('modal');
    this.profileStatistics.append(content);

    this.profileRentedBooks = this.createDomNode(
      this.profileRentedBooks,
      'div',
      null,
      this.modalProfileContent,
      'profile__rented-books',
      'rented-books'
    );
    this.rentedBooksTitle = this.createDomNode(
      this.rentedBooksTitle,
      'p',
      'Rented books',
      this.profileRentedBooks,
      'rented-books__title'
    );
    this.rentedBooksList = this.createDomNode(
      this.rentedBooksList,
      'ul',
      null,
      this.profileRentedBooks,
      'rented-books__list',
      'list'
    );

    if (!userRentedBooks.length) {
      this.rentedBooksListItem = this.createDomNode(
        this.rentedBooksListItem,
        'li',
        'No books for rent',
        this.rentedBooksList,
        'list__item'
      );
    } else {
      for (let key in books) {
        books[key].forEach((el) => {
          if (searchElem(userRentedBooks, el.id)) {
            this.rentedBooksListItem = this.createDomNode(
              this.rentedBooksListItem,
              'li',
              `${el.title}, ${el.author.slice(3)}`,
              this.rentedBooksList,
              'list__item'
            );
          }
        });
      }
    }

    this.profileCard = this.createDomNode(
      this.profileCard,
      'div',
      null,
      this.modalProfileContent,
      'profile__card',
      'card'
    );
    this.cardTitle = this.createDomNode(
      this.cardTitle,
      'span',
      'Card number',
      this.profileCard,
      'card__title'
    );
    this.cardNumber = this.createDomNode(
      this.cardNumber,
      'span',
      cardNumber,
      this.profileCard,
      'card__number'
    );
    this.cardNumberCopy = this.createDomNode(
      this.cardNumberCopy,
      'span',
      null,
      this.profileCard,
      'card__svg'
    );
    this.cardNumberCopy.innerHTML = ICON_CORY_CARD;

    this.bindEventsModalProfile();

    return this.modalProfileWrapper;
  }

  bindEventsModalProfile() {
    this.cardNumberCopy.addEventListener('click', () => {
      navigator.clipboard
        .writeText(this.cardNumber.textContent)
        .then(() => {
          setTimeout(() => {
            alert('Text copied to clipboard');
          }, 1000);
        })
        .catch((err) => {
          console.error('Error in copying text: ', err);
        });
    });
  }

  renderModal() {
    const content = this.generateContent();
    super.buildModal(content);
  }
}

export default ModalProfile;
