const setLocalStorage = (...args) => {
  args.forEach((el) => {
    const [key, value] = el;
    return JSON.stringify(localStorage.setItem(key, value));
  });
};

const getLocalStorage = (key) => {
  if (Array.isArray(key)) {
    return key.map((el) => JSON.parse(localStorage.getItem(el)));
  }

  return JSON.parse(localStorage.getItem(key));
};

const removeLocalStorage = (key) => {
  return localStorage.removeItem(key);
};

export {setLocalStorage, getLocalStorage, removeLocalStorage};
