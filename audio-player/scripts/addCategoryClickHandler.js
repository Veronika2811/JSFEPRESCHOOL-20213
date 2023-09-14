const LIST_OF_CATEGORIES = {
  'popular': ['5UTRA - Iskorki', 'Тайпан feat. Li Za - Где-То Там', 'Subbota - Дым Бомбим'],
  'in-trend': ['Гио ПиКа - Листопадом', 'Ahmed Shad - Вольная', 'LIANDRES - Моё море'],
  'time-machine': ['Демо - Солнышко', 'Руки Вверх - Алёшка', 'Руслан Набиев - По ресторанам'],
}

let currentCategory = 'popular';

const getWrapperSongList = () => {
  const songList = document.querySelector('.songs-list');
  songList.innerHTML = '';
  return songList;
}

const generateSongList = (category) => {
  const songList = getWrapperSongList();

  LIST_OF_CATEGORIES[category].forEach((el, i) =>
    songList.insertAdjacentHTML('beforeend',
    `<li class="songs__item">
      <p>${el}</p>
      <img class="ico ico_small ico_play" src="./images/png/control/play.png" alt="play">
    </li>`,
    ),
  );
};

const addCategoryClickHandler = () => {
  const categoryWrapper = document.querySelector('.category__controls');

  generateSongList(currentCategory)

  categoryWrapper.addEventListener('click', (e) => {
    const target = e.target;

    const inputs = document.querySelectorAll('.category__label');

    if(target.classList.contains('category__input')) {
      if(target.parentNode.classList.contains('active')) return;

      inputs.forEach((el) => el.classList.remove('active'))
      target.parentNode.classList.add('active');

      currentCategory = target.value;
      generateSongList(target.value)
    }
  })
}

export default addCategoryClickHandler;