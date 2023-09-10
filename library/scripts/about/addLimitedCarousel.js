const addLimitedCarousel = () => {
  new Swiper('.swiper', {
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
      bulletActiveClass: 'pagination__bullet_active',
      bulletClass: 'pagination__bullet',
      clickable: true,
    },
  });
};

export default addLimitedCarousel;
