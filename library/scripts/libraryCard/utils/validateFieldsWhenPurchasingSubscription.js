import {
  addFieldValidationStyle,
  removeFieldValidationStyle,
} from '../../utils/addFieldValidationStyle.js';

const libraryCardFormController = (el) => {
  const allLetters = /[A-Za-zА-Яа-яЁё,.!?;:()@#$%^&*()~`<>/'"[\]\\{}=+_-]/;
  const russianLetters = /[А-Яа-я]/;

  const valueWithoutSpaces = el.value.replaceAll(' ', '');

  switch (el.name) {
    case 'card-number':
      if (valueWithoutSpaces.length !== 16)
        return addFieldValidationStyle(
          el,
          'The card number must be 16 digits.'
        );
      if (allLetters.test(valueWithoutSpaces))
        return addFieldValidationStyle(
          el,
          'Card number must contain only digits.'
        );
      return true;

    case 'month':
    case 'year':
      const errorElem = el.parentNode.nextSibling;

      if (valueWithoutSpaces.length !== 2) {
        return addFieldValidationStyle(
          el,
          `${
            el.name[0].toUpperCase() + el.name.slice(1)
          } number must be 2 digits.`,
          errorElem
        );
      } else if (allLetters.test(valueWithoutSpaces)) {
        return addFieldValidationStyle(
          el,
          `${
            el.name[0].toUpperCase() + el.name[0].slice(1)
          } number must contain only digits.`,
          errorElem
        );
      } else if (el.name === 'month' && +valueWithoutSpaces > 12) {
        return addFieldValidationStyle(
          el,
          'Invalid month entered (max 12).',
          errorElem
        );
      } else if (
        el.name === 'year' &&
        +new Date().getFullYear().toString().slice(2) > +valueWithoutSpaces
      ) {
        return addFieldValidationStyle(
          el,
          `Сard expired (current year ${+new Date().getFullYear()})`,
          errorElem
        );
      } else {
        el.classList.remove('validate-input');

        const fieldMonth = document.querySelector('[name="month"]');
        const fieldYear = document.querySelector('[name="year"]');

        if (
          !fieldMonth.classList.contains('validate-input') &&
          !fieldYear.classList.contains('validate-input')
        ) {
          errorElem.style.display = 'none';
        }
      }
      return true;

    case 'cvc':
      if (valueWithoutSpaces.length !== 3)
        return addFieldValidationStyle(el, 'CVC code must contain 3 digits.');
      if (allLetters.test(valueWithoutSpaces))
        return addFieldValidationStyle(
          el,
          'CVC code must contain only digits.'
        );
      return true;

    case 'cardholder':
      if (valueWithoutSpaces.length < 2)
        return addFieldValidationStyle(
          el,
          'Cardholder must contain at least two letters.'
        );
      if (russianLetters.test(valueWithoutSpaces))
        return addFieldValidationStyle(el, 'Cardholder must be in English.');
      if (/\d+/g.test(valueWithoutSpaces))
        return addFieldValidationStyle(
          el,
          'Cardholder must contain only letters.'
        );
      return true;

    case 'postal-code':
      if (valueWithoutSpaces.length !== 6)
        return addFieldValidationStyle(
          el,
          'Postal code number must be 6 digits.'
        );
      if (allLetters.test(valueWithoutSpaces))
        return addFieldValidationStyle(
          el,
          'Postal code must contain only digits.'
        );
      return true;

    case 'city':
      if (valueWithoutSpaces.length < 2)
        return addFieldValidationStyle(
          el,
          'City must contain at least two letters.'
        );
      if (russianLetters.test(valueWithoutSpaces))
        return addFieldValidationStyle(el, 'City must be in English.');
      if (/\d+/g.test(valueWithoutSpaces))
        return addFieldValidationStyle(el, 'City must contain only letters.');
      return true;

    default:
      return true;
  }
};

const validateFieldsWhenPurchasingSubscription = () => {
  const fields = [...document.querySelectorAll('.modal input')];

  const validateFields = [];

  fields.forEach((el) => {
    if (libraryCardFormController(el)) {
      if (el.name !== 'month' && el.name !== 'year') {
        removeFieldValidationStyle(el);
      }
      validateFields.push(el);
    }
  });

  return validateFields;
};

export default validateFieldsWhenPurchasingSubscription;
