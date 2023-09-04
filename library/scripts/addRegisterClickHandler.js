import { toogleProfileMenu } from './userProfile/addUserProfileClickHandler.js';
import ModalRegister from './modal/ModalRegister.js';
import modalController from './userProfile/modalController.js';

// const registerUser = (info) => {
//   new ModalRegister('modal-register').renderModal(info);
// }

const addRegisterClickHandler = () => {
  // // const register = document.querySelector('.menu-profile__register');
  // const buttonSignUp = document.querySelector('.button__sign-up');
  
  // // const login = document.querySelector('.menu-profile__login');
  // const buttonLogin = document.querySelector('.button__login');
  
  // // register.addEventListener('click', (e) => {
  // //   e.stopPropagation();
  // //   toogleProfileMenu();
  // //   registerUser('register');
  // // });
  
  // buttonSignUp.addEventListener('click', () => modalController('Register'));

  // // login.addEventListener('click', (e) => {
  // //   e.stopPropagation();
  // //   toogleProfileMenu();
  // //   registerUser('login');
  // // });

  // buttonLogin.addEventListener('click', () => modalController('Log In'));
}

export default addRegisterClickHandler;
