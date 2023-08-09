import Element from '../Element.js';

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
      this.button,
      this.bookButton,
      'button'
    );

    this.image = this.createDomNodeImage(
      this.image,
      this.img,
      this.card,
      'book__image'
    );
    return this.card;
  }
}

export default Book;
