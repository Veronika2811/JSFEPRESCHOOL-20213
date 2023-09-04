const titleStyle = [
  'padding: 0.2rem;',
  'background: linear-gradient(pink, violet);',
  'text-shadow: 0 2px grey;',
  'font: 1 Georgia;',
  'color: white;',
].join('');

const performanceAppraisal = () => {
  console.log('%c%s', titleStyle, 'Этап 1: Пользователь не зарегистрирован (+50)');
  console.log(
    '%c - Ограниченная карусель в блоке About (+25)\n - Слайдер в блоке Favorites (+23)\n - До регистрации (+)\n - До авторизации (+2) %c',
    'color: pink;',
    ''
  );
  console.log('%c%s', titleStyle, 'Этап 2: Пользователь на этапе регистрации (+49)');
  console.log(
    '%c - Меню авторизации при нажатии на иконку пользователя (+8)\n - Модальное окно REGISTER (+29)\n - Окончание регистрации (+8)\n - При наличии регистрации, но будучи не авторизованным (+4) %c',
    'color: pink;',
    ''
  );
  console.log('%c%s', titleStyle, 'Этап 3: Пользователь на этапе входа в учётную запись после регистрации. (+29)');
  console.log(
    '%c - Модальное окно LOGIN (+27)\n - Блок Favorites (+2) %c',
    'color: pink;',
    ''
  );
  console.log('%c%s', titleStyle, 'Этап 4: Пользователь после входа в учётную запись (+76)');
  console.log(
    '%c - Меню профиля при нажатии на иконку с инициалами пользователя (+16)\n - Модальное окно MY PROFILE (+25)\n - Блок Favorites (+6)\n - Модальное окно BUY A LIBRARY CARD (+27)\n - Блок Digital Library Cards (+2) %c',
    'color: pink;',
    ''
  );
  console.log('Score: 204')
};

export default performanceAppraisal;
