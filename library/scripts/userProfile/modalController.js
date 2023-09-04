import ModalRegister from '../modal/ModalRegister.js';
import ModalProfile from '../modal/ModalProfile.js';
import { loadUserInfo } from './loadUserInfo.js';
import userCardVerification from '../digitaLibraryCard/userCardVerification.js';

const logOutUser = () => {
  localStorage.removeItem("user-auth");
  // localStorage.clear();
  document.querySelector('.menu-profile').innerHTML = '';
  // document.querySelector('.menu-profile__mask').remove();
  loadUserInfo();
  userCardVerification();
}

const modalController = (current) => {
  console.log(current)
  switch(current) {
    case 'Log In':
      new ModalRegister('modal-register').renderModal();
      break;
    case 'Register':
      new ModalRegister('modal-register').renderModal('register');
      break;
    case 'My profile':
      new ModalProfile('modal-profile').renderModal();
      break;
    case 'Log Out':
      logOutUser();
      break;
    default:
  }
}

export default modalController;

// switch(x) {
//   case 'value1':  // if (x === 'value1')
//     ...
//     [break]

//   case 'value2':  // if (x === 'value2')
//     ...
//     [break]

//   default:
//     ...
//     [break]
// }