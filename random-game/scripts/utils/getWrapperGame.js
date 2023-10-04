const getWrapperGame = () => {
  const containerGame = document.querySelector('.game');
  containerGame.innerHTML = '';
  return containerGame;
};

export default getWrapperGame;