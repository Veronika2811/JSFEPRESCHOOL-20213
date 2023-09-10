const addFieldValidationStyle = (element, textError, errorElem) => {
  element.classList.add('validate-input');
  !errorElem
    ? (element.nextSibling.textContent = textError)
    : (errorElem.textContent = textError);
  !errorElem
    ? (element.nextSibling.style.display = 'block')
    : (errorElem.style.display = 'block');

  return false;
};

const removeFieldValidationStyle = (element) => {
  element.classList.remove('validate-input');
  element.nextSibling.style.display = 'none';
};

export {addFieldValidationStyle, removeFieldValidationStyle};
