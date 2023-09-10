import {getLocalStorage} from '../../utils/actionsWithLocalStorage.js';
import {
  addFieldValidationStyle,
  removeFieldValidationStyle,
} from '../../utils/addFieldValidationStyle.js';

const loginFormController = (el) => {
  const {email, cardNumber, password} = getLocalStorage('user-info') || '';

  switch (el.name) {
    case 'email':
      if (el.value === email || el.value === cardNumber) return true;

      return addFieldValidationStyle(
        el,
        'Email or reader card not registered.'
      );

    case 'password':
      if (el.value === password) return true;

      return addFieldValidationStyle(el, 'Please enter correct password.');

    default:
      return true;
  }
};

const validateFormLogin = () => {
  const fields = [...document.querySelectorAll('.modal input')];

  const validateFields = [];

  fields.forEach((el) => {
    if (!el.value) {
      return addFieldValidationStyle(el, 'Field must not be empty.');
    } else if (loginFormController(el)) {
      removeFieldValidationStyle(el);
      validateFields.push(el);
    }
  });

  return validateFields.length === fields.length;
};

export default validateFormLogin;
