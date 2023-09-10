const getRandomArbitrary = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

const generateCardNumber = () => {
  const randomCardNumber = getRandomArbitrary(100000000, 999999999);
  let hexCardNumber = randomCardNumber.toString(16);

  while (hexCardNumber.length < 9) {
    hexCardNumber = '0' + hexCardNumber;
  }

  return hexCardNumber;
};

export default generateCardNumber;
