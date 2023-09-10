import Element from '../utils/Element.js';
import ModalLibraryCard from '../libraryCard/ModalLibraryCard.js';
import UserStatistics from '../libraryCard/UserStatistics.js';

import {
  getLocalStorage,
  setLocalStorage,
} from '../utils/actionsWithLocalStorage.js';
import searchElem from '../utils/searchElem.js';
import profileMenuController from '../utils/profileMenuController.js';

class Book extends Element {
  constructor({id, title, author, description, button, img}) {
    super();
    this.id = id;
    this.title = title;
    this.author = author;
    this.description = description;
    this.button = button;
    this.img = img;
    this.card = '';
  }

  generateBook() {
    const [userRentedBooks, userAuth] = getLocalStorage([
      'user-rentedBooks',
      'user-auth',
    ]);

    this.book = this.createDomNode(this.book, 'div', null, null, 'book');

    this.bookContent = this.createDomNode(
      this.bookContent,
      'div',
      null,
      this.book,
      'book__content'
    );

    this.bookCategory = this.createDomNode(
      this.bookCategory,
      'p',
      'Staff Picks',
      this.bookContent,
      'book__category'
    );

    this.bookTitle = this.createDomNode(
      this.bookTitle,
      'h3',
      this.title,
      this.bookContent,
      'book__title'
    );
    this.bookAuthor = this.createDomNode(
      this.bookAuthor,
      'h3',
      this.author,
      this.bookContent,
      'book__author'
    );

    this.bookDescription = this.createDomNode(
      this.bookDescription,
      'p',
      this.description,
      this.bookContent,
      'book__description'
    );

    this.bookButtonWrapper = this.createDomNode(
      this.bookButton,
      'div',
      null,
      this.bookContent,
      'book__button'
    );

    this.bookButton = this.createDomNodeButton(
      this.bookButton,
      null,
      userAuth ? searchElem(userRentedBooks, this.id) : false,
      this.bookButtonWrapper,
      'button'
    );

    this.bookCover = this.createDomNodeImage(
      this.bookCover,
      this.img,
      this.book,
      'book__cover'
    );

    this.bindEvents();

    return this.book;
  }

  bindEvents() {
    this.bookButton.addEventListener('click', () => {
      const [userAuth, userSubscription, userRentedBooks] = getLocalStorage([
        'user-auth',
        'user-subscription',
        'user-rentedBooks',
      ]);

      if (!!userAuth) {
        if (!userSubscription) {
          const modal = new ModalLibraryCard(this.id, 'modal-card');
          modal.renderModal();
        } else {
          this.bookButton.disabled = 'true';
          this.bookButton.textContent = 'Own';

          if (!searchElem(userRentedBooks, this.id)) {
            setLocalStorage([
              'user-rentedBooks',
              JSON.stringify([...userRentedBooks, this.id]),
            ]);

            const wrapper = document.querySelector('.form__details');
            wrapper.innerHTML = '';

            const content = new UserStatistics().generateStatistics();
            wrapper.append(content);
          }
        }
      } else {
        profileMenuController('Log In');
      }
    });
  }
}

export default Book;
