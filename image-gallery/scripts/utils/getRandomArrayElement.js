const getRandomArrayElement = (arr) => {
  const random = Math.floor(Math.random() * arr.length);
  return arr[random];
};

export default getRandomArrayElement;
