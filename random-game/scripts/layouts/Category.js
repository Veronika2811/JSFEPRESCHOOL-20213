import {createDomNode, createDomNodeImage} from '../utils/createDomNode.js';

let checkedCategory = 'animals';

class Category {
  constructor(array) {
    this.array = array;
    this.category = '';
  }

  buildCategoryWrapper() {
    this.category = createDomNode(this.category, 'div', null, null, 'category');

    this.array.forEach((el) => {
      this.category.append(this.buildCategoryItem(el));
    });

    this.bindEventsCategory();

    return this.category;
  }

  buildCategoryItem(item) {
    this.categoryItem = createDomNode(
      this.categoryItem,
      'label',
      null,
      null,
      'category__item',
      'item'
    );

    this.categoryInput = createDomNode(
      this.categoryInput,
      'input',
      null,
      this.categoryItem,
      'item__input'
    );
    this.categoryInput.type = 'radio';
    this.categoryInput.name = 'category';
    this.categoryInput.value = item.name;
    this.categoryInput.checked = item.name === checkedCategory;

    this.categoryItemWrapperImage = createDomNode(
      this.categoryItemWrapperImage,
      'div',
      null,
      this.categoryItem,
      'item__image',
      'cover'
    );

    this.categoryItemImage = createDomNodeImage(
      this.categoryItemImage,
      item.cover,
      item.name,
      this.categoryItemWrapperImage,
      'cover__image'
    );

    this.categoryItemTitle = createDomNode(
      this.categoryItemTitle,
      'p',
      item.name[0].toUpperCase() + item.name.slice(1),
      this.categoryItem,
      'item__title'
    );

    return this.categoryItem;
  }

  bindEventsCategory() {
    this.category.addEventListener('click', (e) => {
      const target = e.target;

      if (target.classList.contains('item__input')) {
        checkedCategory = target.value;
      }
    });
  }
}

export {Category, checkedCategory};
