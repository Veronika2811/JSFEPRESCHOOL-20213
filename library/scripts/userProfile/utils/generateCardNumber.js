const generateCardNumber = () => {
  const randomCardNumber = Math.floor(Math.random() * (16**9)) + 1;
  let hexCardNumber = randomCardNumber.toString(16).padStart(9, '0');

  return hexCardNumber;
};

export default generateCardNumber;
