const loadingPlayer = () => {
  const song = document.querySelector('.songs').firstElementChild;

  song.querySelector('p').classList.add('song-active');

  const arrSong = song.querySelector('p').textContent.split('-').map((el) => el.trim());
  
  document.querySelector('.song__musician').textContent = arrSong[0];
  document.querySelector('.song__name').textContent = arrSong[1];
}

export default loadingPlayer;