const volume = document.querySelector('.volume__range');
const volumeIcon = document.querySelector('.ico_volume');
const audio = document.querySelector('audio');

let currentVolumeValue = 0.5;

const toggleVolume = (event) => {
  const value = event.target.value;
  if (value == 0) {
    volumeIcon.classList.add('volume-off');
  } else {
    volume === value;
    volumeIcon.classList.remove('volume-off');
  }
  currentVolumeValue = value;
  audio.volume = value;
};

const addVolumeClickHandler = () => {
  volumeIcon.addEventListener('click', (e) => {
    if (currentVolumeValue == 0) return;

    if (!e.target.classList.contains('volume-off')) {
      e.target.classList.add('volume-off');
      volume.value = 0;
      audio.muted = true;
    } else {
      e.target.classList.remove('volume-off');
      volume.value = currentVolumeValue;
      audio.muted = false;
    }
  });

  volume.addEventListener('input', toggleVolume);
};

export default addVolumeClickHandler;
