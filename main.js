const swiper = new Swiper('.banners', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
});

const swiperCollections = new Swiper('.collections', {
  // Optional parameters
  slidesPerView: 4,
  direction: 'horizontal',
  loop: false,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
});
