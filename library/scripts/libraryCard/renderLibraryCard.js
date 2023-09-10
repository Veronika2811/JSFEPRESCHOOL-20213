import LibraryCardForm from './LibraryCardForm.js';
import LibraryCardInfo from './LibraryCardInfo.js';

import {getLocalStorage} from '../utils/actionsWithLocalStorage.js';

const getLibraryCardWrapper = () => {
  const libraryCardContainer = document.querySelector('.library-card__wrapper');
  libraryCardContainer.innerHTML = '';
  return libraryCardContainer;
};

const renderLibraryCard = () => {
  const [userInfo, userAuth] = getLocalStorage(['user-info', 'user-auth']);
  const libraryCardWrapper = getLibraryCardWrapper();

  libraryCardWrapper.append(
    new LibraryCardForm(userInfo, userAuth).buildLibraryCardForm()
  );
  libraryCardWrapper.append(
    new LibraryCardInfo(userInfo, userAuth).generateContent()
  );
};

export default renderLibraryCard;
