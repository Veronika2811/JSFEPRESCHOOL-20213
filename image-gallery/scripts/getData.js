import {ACCESS_KEY} from './constants/constants.js';

let totalPages;

const getData = async (query = 'pink', page) => {
  const url = `https://api.unsplash.com/search/photos?&client_id=${ACCESS_KEY}&query=${query}&page=${page}&per_page=30&orientation=landscape`;
  const res = await fetch(url);

  if (res.status === 403) {
    return alert(
      'Демо доступ разрешает 50 запросов в час. Попробуйте проверить работу через час.'
    );
  }

  const data = await res.json();
  totalPages = data.total_pages;
  return data;
};

export {getData, totalPages};
