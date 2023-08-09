// import ModalProfile from '../modal/ModalProfile.js';
import ModalLibraryCard from '../modal/ModalLibraryCard.js';

const renderArticleModalWindow = () => {
  let modal = new ModalLibraryCard('modal-card');
  modal.renderModal();
}

const addUserProfileClickHandler = () => {
  const userProfile = document.querySelector('.header__user-profile');

  userProfile.addEventListener('click', renderArticleModalWindow)
}

export default addUserProfileClickHandler;