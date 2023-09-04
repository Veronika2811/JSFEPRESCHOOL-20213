import Element from '../Element.js';
import modalController from '../userProfile/modalController.js';
import ModalLibraryCard from '../modal/ModalLibraryCard.js';
import LibraryCards from '../digitaLibraryCard/LibraryCards.js';
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
    const rentedBooks = JSON.parse(localStorage.getItem('rented-books'));

    this.card = this.createDomNode(this.card, 'div', null, null, 'favorites__book', 'book');
    this.cardContent = this.createDomNode(
      this.cardContent,
      'div',
      null,
      this.card,
      'book__content'
    );

    this.cardTitle = this.createDomNode(
      this.cardTitle,
      'p',
      'Staff Picks',
      this.cardContent,
      'card__category'
    );
    this.cardBookTitle = this.createDomNode(
      this.cardBookTitle,
      'h3',
      this.title,
      this.cardContent,
      'book__title'
    );

    this.cardBookAuthor = this.createDomNode(
      this.cardBookAuthor,
      'h3',
      this.author,
      this.cardContent,
      'book__author'
    );
    this.cardBookDescription = this.createDomNode(
      this.cardBookDescription,
      'p',
      this.description,
      this.cardContent,
      'book__description'
    );
    this.bookButton = this.createDomNode(
      this.bookButton,
      'div',
      null,
      this.cardContent,
      'book__button'
    );
    this.buttonNode = this.createDomNodeButton(
      this.buttonNode,
      null,
      localStorage.getItem('user-auth') ? this.contains(rentedBooks, this.id) : false,
      this.bookButton,
      'button'
    );

    this.image = this.createDomNodeImage(
      this.image,
      this.img,
      this.card,
      'book__image'
    );

    this.buttonNode.addEventListener('click', () => {
      if(!!localStorage.getItem('user-auth')) {
        if(!localStorage.getItem('user-subscription')) {
          const modal = new ModalLibraryCard('modal-card');
          modal.renderModal();
        } else {
          let books = localStorage.getItem('user-books');
          const rentedBooks = JSON.parse(localStorage.getItem('rented-books'));

          this.buttonNode.disabled = 'true';
          this.buttonNode.textContent = 'Own';

          if(!this.contains(rentedBooks, this.id)) {
            localStorage.setItem('rented-books', JSON.stringify([...rentedBooks, this.id]));
            localStorage.setItem('user-books', ++books);

            const wrapper = document.querySelector('.form-submit__wrapper')
            wrapper.innerHTML = '';

            const info = new LibraryCards().generateUserInfo()

            wrapper.append(info);
          }
        }
      } else {
        modalController('Log In')
      }
    })

    return this.card;
  }

  contains(arr, elem) {
    return arr.indexOf(elem) !== -1;
 }
}

export default Book;
