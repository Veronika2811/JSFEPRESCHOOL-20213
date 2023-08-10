const addAboutSlider = () => {
  new Swiper('.mySwiper', {
    breakpoints: {
      768: {
        slidesPerView: 1,
        spaceBetween: 25,
      },
      769: {
        slidesPerView: 2,
        spaceBetween: 25,
      },
      1180: {
        slidesPerView: 3,
        spaceBetween: 25,
      },
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      clickable: true,
    },

    pagination: {
      el: '.swiper-pagination',
      bulletActiveClass: 'swiper-pagination__item_active',
      bulletClass: 'swiper-pagination__item',
      clickable: true,
    },
  });
};

export default addAboutSlider;
