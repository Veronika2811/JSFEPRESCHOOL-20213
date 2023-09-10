import {removeLocalStorage} from '../utils/actionsWithLocalStorage.js';
import loadUserInfo from '../loadUserInfo/loadUserInfo.js';

const logOutUser = () => {
  removeLocalStorage('user-auth');

  document.querySelector('.drop-menu').innerHTML = '';
  loadUserInfo();
};

export default logOutUser;
