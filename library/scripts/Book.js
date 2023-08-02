import FavoritesCard from './FavoritesCard.js';

class Book extends FavoritesCard {
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
    this.card = this.createDomNode(this.card, 'div', null, null, 'card');
    this.cardContent = this.createDomNode(
      this.cardContent,
      'div',
      null,
      this.card,
      'card__content'
    );

    this.cardTitle = this.createDomNode(
      this.cardTitle,
      'p',
      'Staff Picks',
      this.cardContent,
      'card__title'
    );
    this.cardBookTitle = this.createDomNode(
      this.cardBookTitle,
      'h3',
      this.title,
      this.cardContent,
      'card__book-title'
    );

    this.cardBookAuthor = this.createDomNode(
      this.cardBookAuthor,
      'h3',
      this.author,
      this.cardContent,
      'card__book-author'
    );
    this.cardBookDescription = this.createDomNode(
      this.cardBookDescription,
      'h3',
      this.description,
      this.cardContent,
      'card__book-description'
    );
    this.buttonNode = this.createDomNodeButton(
      this.buttonNode,
      this.button,
      this.cardContent,
      'button_small'
    );

    this.image = this.createDomNodeImage(
      this.image,
      this.img,
      this.card,
      'card__book'
    );
    return this.card;
  }
}

export default Book;
