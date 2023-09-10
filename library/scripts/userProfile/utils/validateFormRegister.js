import {getLocalStorage} from '../../utils/actionsWithLocalStorage.js';
import {
  addFieldValidationStyle,
  removeFieldValidationStyle,
} from '../../utils/addFieldValidationStyle.js';

const registerFormController = (el) => {
  const {email} = getLocalStorage('user-info') || '';

  switch (el.name) {
    case 'firstName':
    case 'lastName':
      const reg = new RegExp('^.*[^A-zА-яЁё].*$');

      if (reg.test(el.value))
        return addFieldValidationStyle(
          el,
          'The field must contain only letters.'
        );
      return true;

    case 'email':
      const EMAIL_REGEXP =
        /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

      if (!EMAIL_REGEXP.test(el.value))
        return addFieldValidationStyle(el, 'Enter correct email.');
      if (el.value === email)
        return addFieldValidationStyle(el, 'This email is already registered.');
      return true;

    case 'password':
      if (el.value.length < 8 && el.value.length >= 1)
        return addFieldValidationStyle(
          el,
          'The password must be at least 8 characters long.'
        );
      return true;

    default:
      return true;
  }
};

const validateFormRegister = () => {
  const fields = [...document.querySelectorAll('.modal input')];

  const validateFields = [];

  fields.forEach((el) => {
    if (!el.value) {
      return addFieldValidationStyle(el, 'Field must not be empty.');
    } else if (registerFormController(el)) {
      removeFieldValidationStyle(el);
      validateFields.push(el);
    }
  });

  return validateFields.length === fields.length ? validateFields : false;
};

export default validateFormRegister;
