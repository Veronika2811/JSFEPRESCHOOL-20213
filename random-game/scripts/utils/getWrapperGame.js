const getWrapperGame = () => {
  const containerGame = document.querySelector('.main__wrapper');
  containerGame.innerHTML = '';
  return containerGame;
};

export default getWrapperGame;
