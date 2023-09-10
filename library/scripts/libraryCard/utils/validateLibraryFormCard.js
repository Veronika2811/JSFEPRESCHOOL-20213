import {getLocalStorage} from '../../utils/actionsWithLocalStorage.js';
import {
  addFieldValidationStyle,
  removeFieldValidationStyle,
} from '../../utils/addFieldValidationStyle.js';

const libraryCardFormController = (el) => {
  const {firstName, lastName, cardNumber} = getLocalStorage('user-info') || '';

  switch (el.name) {
    case 'readers-name':
      const inputName = el.value.toLowerCase();
      const registeredName = `${firstName} ${lastName}`.toLowerCase();
      const registeredNameReverse = `${lastName} ${firstName}`.toLowerCase();

      if (
        inputName === firstName.toLowerCase() ||
        inputName === lastName.toLowerCase() ||
        inputName === registeredName ||
        inputName === registeredNameReverse
      )
        return true;
      return addFieldValidationStyle(el, "Reader's name not registered.");

    case 'readers-card':
      if (el.value === cardNumber) return true;
      return addFieldValidationStyle(el, "Reader's card not registered.");

    default:
      return true;
  }
};

const validateLibraryFormCard = (nameElem, cardElem) => {
  const fields = [nameElem, cardElem];
  const validateFields = [];

  fields.forEach((el) => {
    if (!el.value) {
      return addFieldValidationStyle(el, 'Field must not be empty.');
    } else if (libraryCardFormController(el)) {
      removeFieldValidationStyle(el);
      validateFields.push(el);
    }
  });

  return fields.length === validateFields.length;
};

export default validateLibraryFormCard;
