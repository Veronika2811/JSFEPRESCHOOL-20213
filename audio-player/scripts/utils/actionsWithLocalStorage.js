const setLocalStorage = (...args) => {
  args.forEach((el) => {
    const [key, value] = el;
    return localStorage.setItem(key, value);
  });
};

const getLocalStorage = (key) => {
  if (Array.isArray(key)) {
    return key.map((el) => localStorage.getItem(el));
  }

  return localStorage.getItem(key);
};

export {setLocalStorage, getLocalStorage};
