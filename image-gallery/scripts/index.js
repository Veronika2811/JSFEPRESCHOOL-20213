const accessKey = 'dzy9VUya4CbAm8bCerB1GlzD3Q7ZIbjyJp3rKcINSOo';

let currentSearch = '';

const getData = async (query = 'pink', page) => {
  const url = `https://api.unsplash.com/search/photos?&client_id=${accessKey}&query=${query}&page=${page}&per_page=30&orientation=landscape&`;
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
  return data;
};

const getRandomArrayElement = () => {
  const popularQueries = ['pink', 'green', 'blue', 'grey'];
  const random = Math.floor(Math.random() * popularQueries.length);

  return popularQueries[random];
};

const getWrapper = () => {
  const containerImageGallery = document.querySelector('.image-gallery');
  containerImageGallery.innerHTML = '';
  return containerImageGallery;
};

const loadingImageGallery = async (value, page) => {
  const containerImageGallery = getWrapper();

  currentSearch = value || getRandomArrayElement();
  const currentPage = page || 1;

  const {results} = await getData(currentSearch, currentPage);

  if (!results.length) {
    return containerImageGallery.insertAdjacentHTML(
      'afterbegin',
      '<p class="error">Nothing found for your request</p>'
    );
  }

  results.forEach((el) => {
    const {alt_description, urls, likes, links} = el;

    containerImageGallery.insertAdjacentHTML(
      'afterbegin',
      `
        <li class="image-gallery__item item">
          <img class="item__image" src="${
            urls.regular
          }" alt="${alt_description}">
          <div class="overlay">
            <div class="overlay__content">
            <span>${alt_description}</span>
            <div class="overlay__likes">
              <svg fill="#ffffff" height="20px" width="20px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 471.701 471.701" xml:space="preserve">
                <g>
                  <path d="M433.601,67.001c-24.7-24.7-57.4-38.2-92.3-38.2s-67.7,13.6-92.4,38.3l-12.9,12.9l-13.1-13.1
                    c-24.7-24.7-57.6-38.4-92.5-38.4c-34.8,0-67.6,13.6-92.2,38.2c-24.7,24.7-38.3,57.5-38.2,92.4c0,34.9,13.7,67.6,38.4,92.3
                    l187.8,187.8c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-3.9l188.2-187.5c24.7-24.7,38.3-57.5,38.3-92.4
                    C471.801,124.501,458.301,91.701,433.601,67.001z M414.401,232.701l-178.7,178l-178.3-178.3c-19.6-19.6-30.4-45.6-30.4-73.3
                    s10.7-53.7,30.3-73.2c19.5-19.5,45.5-30.3,73.1-30.3c27.7,0,53.8,10.8,73.4,30.4l22.6,22.6c5.3,5.3,13.8,5.3,19.1,0l22.4-22.4
                    c19.6-19.6,45.7-30.4,73.3-30.4c27.6,0,53.6,10.8,73.2,30.3c19.6,19.6,30.3,45.6,30.3,73.3
                    C444.801,187.101,434.001,213.101,414.401,232.701z"
                  />
                </g>
              </svg>
              <span>${likes}</span>
            </div>
            <a download href='${`${links.html}/download?force=true`}'>
              <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 16L12 8" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M9 13L11.913 15.913V15.913C11.961 15.961 12.039 15.961 12.087 15.913V15.913L15 13" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M3 15L3 16L3 19C3 20.1046 3.89543 21 5 21L19 21C20.1046 21 21 20.1046 21 19L21 16L21 15" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
            </div>
          </div>
        </li>
      `
    );
  });
};

// loadingImageGallery();

const searchBoxInput = document.querySelector('.search-box__input');
const searchBoxButton = document.querySelector('.search-box__img');

const searchForImagesByRequest = (value) => {
  currentSearch = value;
  loadingImageGallery(currentSearch);
};

searchBoxInput.addEventListener('keydown', (e) => {
  if (e.code === 'Enter') {
    searchForImagesByRequest(searchBoxInput.value);
  }
});

searchBoxButton.addEventListener('click', () => {
  searchForImagesByRequest(searchBoxInput.value);
});
