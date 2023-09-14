import SONGS from './constants.js';

let clickedCategory = 'popular';
let curentCategory = 'popular';

let indexMusic = 0;

const audio = new Audio();

let isPlay = false;

function playAudio() {
  if (isPlay) return pauseAudio();
  // audio.src = src;
  // audio.currentTime = 0;
  audio.play();
  icoPlay.classList.add('ico_pause');
  isPlay = true;
}

function pauseAudio() {
  audio.pause();
  icoPlay.classList.remove('ico_pause');
  isPlay = false;
}

// Clicked category
const categoryWrapper = document.querySelector('.category__controls');

const getWrapperSongList = () => {
  const songList = document.querySelector('.songs-list');
  songList.innerHTML = '';
  return songList;
};

const generateSongList = (category) => {
  const songList = getWrapperSongList();

  SONGS[category].forEach((el, i) => {
    songList.insertAdjacentHTML(
      'beforeend',
      `<li class="songs__item ${
        category === curentCategory && i === indexMusic ? 'song-active' : 'item'
      }" data-id="${el.id}">
       <div>
        <p class="item_title">${el.name}</p>
       </div>
      </li>`
    );
  });
  bindEvent();
};

categoryWrapper.addEventListener('click', (e) => {
  const target = e.target;

  if (target.classList.contains('category__input')) {
    clickedCategory = target.value;

    generateSongList(clickedCategory);
  }
});

const loadingPlayer = () => {
  generateSongList(curentCategory);
  document.querySelector(
    '.current-playlist'
  ).textContent = `Current playlist: ${curentCategory.toUpperCase()}`;

  const obj = SONGS[curentCategory].find((el, i) => i === indexMusic);

  const arrSong = obj.name.split('-').map((el) => el.trim());

  document.querySelector('.song__musician').textContent = arrSong[0];
  document.querySelector('.song__name').textContent = arrSong[1];

  document.querySelector(
    '.cover'
  ).style.backgroundImage = `url(${obj.background})`;
  document.querySelector(
    '.body'
  ).style.backgroundImage = `url(${obj.background})`;
  audio.src = obj.src;
};

loadingPlayer();

function bindEvent() {
  const songsItems = [...document.querySelectorAll('.songs__item')];

  songsItems.forEach((el) => {
    el.addEventListener('click', () => {
      // console.log(el);
      // if (el.classList.contains('song-active')) return;

      songsItems.forEach((item) => item.classList.remove('song-active'));

      el.classList.add('song-active');

      indexMusic = +el.getAttribute('data-id') - 1;

      const obj = SONGS[clickedCategory].find((el, i) => i === indexMusic);

      const arrSong = obj.name.split('-').map((el) => el.trim());

      document.querySelector('.song__musician').textContent = arrSong[0];
      document.querySelector('.song__name').textContent = arrSong[1];

      document.querySelector(
        '.cover'
      ).style.backgroundImage = `url(${obj.background})`;
      document.querySelector(
        '.body'
      ).style.backgroundImage = `url(${obj.background})`;
      audio.src = obj.src;

      curentCategory = clickedCategory;

      document.querySelector(
        '.current-playlist'
      ).textContent = `Current playlist: ${curentCategory.toUpperCase()}`;

      if (isPlay) {
        pauseAudio();
        playAudio();
      } else {
        playAudio();
      }
    });
  });
}

const icoPlay = document.querySelector('.ico_play');

icoPlay.addEventListener('click', () => {
  playAudio();
});

const icoForward = document.querySelector('.ico_forward');

icoForward.addEventListener('click', () => {
  if (SONGS[curentCategory].length - 1 === indexMusic) {
    indexMusic = 0;
  } else {
    indexMusic++;
  }

  const obj = SONGS[curentCategory].find((el, i) => i === indexMusic);

  const arrSong = obj.name.split('-').map((el) => el.trim());

  document.querySelector('.song__musician').textContent = arrSong[0];
  document.querySelector('.song__name').textContent = arrSong[1];

  document.querySelector(
    '.cover'
  ).style.backgroundImage = `url(${obj.background})`;
  document.querySelector(
    '.body'
  ).style.backgroundImage = `url(${obj.background})`;
  audio.src = obj.src;

  const songsItems = [...document.querySelectorAll('.songs__item')];

  songsItems.forEach((el) => {
    el.classList.remove('song-active');
    if (
      clickedCategory === curentCategory &&
      +el.getAttribute('data-id') - 1 === indexMusic
    ) {
      el.classList.add('song-active');
    }
  });
  if (isPlay) {
    pauseAudio();
    playAudio();
  }
});

const icoBackward = document.querySelector('.ico_backward');

icoBackward.addEventListener('click', () => {
  if (indexMusic === 0) {
    indexMusic = SONGS[curentCategory].length - 1;
  } else {
    indexMusic--;
  }
  const obj = SONGS[curentCategory].find((el, i) => i === indexMusic);

  const arrSong = obj.name.split('-').map((el) => el.trim());

  document.querySelector('.song__musician').textContent = arrSong[0];
  document.querySelector('.song__name').textContent = arrSong[1];

  document.querySelector(
    '.cover'
  ).style.backgroundImage = `url(${obj.background})`;
  document.querySelector(
    '.body'
  ).style.backgroundImage = `url(${obj.background})`;
  audio.src = obj.src;

  const songsItems = [...document.querySelectorAll('.songs__item')];

  songsItems.forEach((el) => {
    el.classList.remove('song-active');
    if (
      clickedCategory === curentCategory &&
      +el.getAttribute('data-id') - 1 === indexMusic
    ) {
      el.classList.add('song-active');
    }
  });
  if (isPlay) {
    pauseAudio();
    playAudio();
  }
});

//Progress
const progressBar = document.querySelector('.progress-bar');
const progress = document.querySelector('.progress');

const updateProgress = (event) => {
  const progressVideo = Math.round(
    (event.offsetX / event.target.clientWidth) *
      parseInt(event.target.getAttribute('max'), 10)
  );
  progress.setAttribute('data-progress', progressVideo);
};

audio.onloadedmetadata = () => {
  progressBar.setAttribute('max', Math.floor(audio.duration));
  progress.setAttribute('max', Math.floor(audio.duration));

  const current = Math.floor(audio.duration);
  const minutes = Math.floor(current / 60);
  const seconds = current > 9 ? current % 60 : `0${current % 60}`;
  document.querySelector('.time__duration').textContent = `${minutes
    .toString()
    .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};

const toggleProgress = (event) => {
  const progressAudio = event.target.dataset.progress
    ? event.target.dataset.progress
    : event.target.value;
  audio.currentTime = progressAudio;
  progressBar.value = progressAudio;
  progress.value = progressAudio;
};

const changeVideoProgress = () => {
  const current = Math.floor(audio.currentTime);

  const minutes = Math.floor(current / 60);
  const seconds = current > 9 ? current % 60 : `0${current % 60}`;

  const cur = document.querySelector('.time__current');
  cur.textContent = `${minutes.toString().padStart(2, '0')}:${seconds
    .toString()
    .padStart(2, '0')}`;

  progress.value = Math.floor(audio.currentTime);
  progressBar.value = Math.floor(audio.currentTime);

  if (audio.ended) {
    if (SONGS[curentCategory].length - 1 === indexMusic) {
      indexMusic = 0;
    } else {
      indexMusic++;
    }

    const obj = SONGS[curentCategory].find((el, i) => i === indexMusic);

    const arrSong = obj.name.split('-').map((el) => el.trim());

    document.querySelector('.song__musician').textContent = arrSong[0];
    document.querySelector('.song__name').textContent = arrSong[1];

    document.querySelector(
      '.cover'
    ).style.backgroundImage = `url(${obj.background})`;
    document.querySelector(
      '.body'
    ).style.backgroundImage = `url(${obj.background})`;
    audio.src = obj.src;

    const songsItems = [...document.querySelectorAll('.songs__item')];

    songsItems.forEach((el) => {
      el.classList.remove('song-active');
      if (
        clickedCategory === curentCategory &&
        +el.getAttribute('data-id') - 1 === indexMusic
      ) {
        el.classList.add('song-active');
      }
    });
    if (isPlay) {
      pauseAudio();
      playAudio();
    }
  }
};

audio.addEventListener('timeupdate', changeVideoProgress);
progress.addEventListener('mousemove', updateProgress);
progress.addEventListener('input', toggleProgress);

let currentVolume = 0.5;

//Volume

const volumeIcon = document.querySelector('.volume-icon');
const volume = document.querySelector('.volume');

volumeIcon.addEventListener('click', (e) => {
  console.log(currentVolume);
  if (currentVolume == 0) return;

  if (!e.target.classList.contains('volume-off')) {
    e.target.classList.add('volume-off');
    volume.value = 0;
    audio.muted = true;
  } else {
    e.target.classList.remove('volume-off');
    volume.value = currentVolume;
    audio.muted = false;
  }
});

const toggleVolume = (event) => {
  if (event.target.value == 0) {
    volumeIcon.classList.add('volume-off');
  } else {
    volume === event.target.value;
    volumeIcon.classList.remove('volume-off');
  }
  currentVolume = event.target.value;
  audio.volume = event.target.value;
};

volume.addEventListener('input', toggleVolume);
