import Element from '../utils/Element.js';

import {USER_INFO} from '../constants/constants.js';
import {getLocalStorage} from '../utils/actionsWithLocalStorage.js';

class UserStatistics extends Element {
  constructor() {
    super();
  }

  generateStatistics(type) {
    const [userVisit, userRentedBooks] = getLocalStorage([
      'user-visit',
      'user-rentedBooks',
    ]);

    this.userStatistics = this.createDomNode(
      this.userStatistics,
      'div',
      null,
      null,
      'user-statistics',
      type ? 'modal__user-statistics' : 'card__user-statistics'
    );

    USER_INFO.forEach((el) => {
      const {title, svg} = el;

      const count =
        title === 'visits'
          ? userVisit
          : title === 'bonuses'
          ? 1240
          : userRentedBooks.length || '0';

      this.userStatisticsItem = this.createDomNode(
        this.userStatisticsItem,
        'div',
        null,
        this.userStatistics,
        type ? 'modal__user-statistics_indent' : 'card__user-statistics_indent'
      );

      this.itemTitle = this.createDomNode(
        this.itemTitle,
        'div',
        title,
        this.userStatisticsItem,
        type
          ? 'user-statistics__title_big-font'
          : 'user-statistics__title_small-font'
      );

      this.itemTitle.insertAdjacentHTML('afterend', svg);

      this.itemCount = this.createDomNode(
        this.itemCount,
        'p',
        count,
        this.userStatisticsItem,
        'user-statistics__count'
      );
    });

    return this.userStatistics;
  }
}

export default UserStatistics;
