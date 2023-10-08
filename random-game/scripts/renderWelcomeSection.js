import WelcomeSection from './layouts/WelcomeSection.js';

import getWrapperGame from './utils/getWrapperGame.js';

const renderWelcomeSection = () => {
  const container = getWrapperGame();

  container.append(new WelcomeSection().buildWelcomeSection());
};

export default renderWelcomeSection;
