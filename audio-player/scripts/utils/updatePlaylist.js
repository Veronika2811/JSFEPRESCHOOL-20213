import { getLocalStorage } from './actionsWithLocalStorage.js';
import changeCurrentSong from './changeCurrentSong.js';
import {playAudio, pauseAudio} from './launchAudioPlayer.js';
import renderCurrentSong from './renderCurrentSong.js';

const updatePlaylist = () => {
  const isPlay = getLocalStorage('isPlay');

  changeCurrentSong();
  renderCurrentSong();

  if (JSON.parse(isPlay)) {
    pauseAudio();
    playAudio();
  }
};

export default updatePlaylist;
