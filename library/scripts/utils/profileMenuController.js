import ModalRegister from '../userProfile/ModalRegister.js';
import ModalProfile from '../userProfile/ModalProfile.js';

import logOutUser from '../userProfile/logOutUser.js';

const profileMenuController = (current) => {
  switch (current) {
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
};

export default profileMenuController;
