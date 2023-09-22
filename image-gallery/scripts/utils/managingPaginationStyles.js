import {
  FIRST_PAGE_BUTTON,
  PREV_PAGE_BUTTON,
  NEXT_PAGE_BUTTON,
  LAST_PAGE_BUTTON,
} from '../constants/constants.js';

import {totalPages} from '../getData.js';

const managingPaginationStyles = (result, currentPage) => {
  if (!result || (currentPage === 1 && currentPage === totalPages)) {
    FIRST_PAGE_BUTTON.disabled = true;
    PREV_PAGE_BUTTON.disabled = true;
    NEXT_PAGE_BUTTON.disabled = true;
    LAST_PAGE_BUTTON.disabled = true;
  } else if (currentPage === 1 && currentPage !== totalPages) {
    FIRST_PAGE_BUTTON.disabled = true;
    PREV_PAGE_BUTTON.disabled = true;
    NEXT_PAGE_BUTTON.disabled = false;
    LAST_PAGE_BUTTON.disabled = false;
  } else if (currentPage === totalPages) {
    FIRST_PAGE_BUTTON.disabled = false;
    PREV_PAGE_BUTTON.disabled = false;
    NEXT_PAGE_BUTTON.disabled = true;
    LAST_PAGE_BUTTON.disabled = true;
  } else if (currentPage !== 1 && currentPage !== totalPages) {
    FIRST_PAGE_BUTTON.disabled = false;
    PREV_PAGE_BUTTON.disabled = false;
    NEXT_PAGE_BUTTON.disabled = false;
    LAST_PAGE_BUTTON.disabled = false;
  }
};

export default managingPaginationStyles;
