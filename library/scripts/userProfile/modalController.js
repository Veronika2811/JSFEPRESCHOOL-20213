import ModalRegister from '../modal/ModalRegister.js';

const modalController = (current) => {
  console.log(current)
  switch(current) {
    case 'Log In':
      new ModalRegister('modal-register').renderModal('login');
      break;
    case 'Register':
      new ModalRegister('modal-register').renderModal('register');
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