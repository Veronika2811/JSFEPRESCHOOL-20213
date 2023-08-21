const titleStyle = [
  'padding: 0.5rem;',
  'background: linear-gradient(green, blue);',
  'text-shadow: 0 2px grey;',
  'font: 1 Georgia;',
  'color: white;',
].join('');

const performanceAppraisal = () => {
  console.log('%c%s', titleStyle, 'Этап 1: Пользователь не зарегистрирован');
  console.log(
    '%c - Ограниченная карусель в блоке About (+25) %c',
    'color: red;',
    ''
  );
};

export default performanceAppraisal;
