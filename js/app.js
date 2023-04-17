var swiper = new Swiper(".mySwiper", {
  slidesPerView: 5,
  spaceBetween: 5,
  breakpoints: {
      1: {
          slidesPerView: 2,
          spaceBetween: 0,
        },
      450: {
          slidesPerView: 2.5,
          spaceBetween: 0,
        },
        // when window width is >= 640px
    640: {
      slidesPerView: 2.5,
      spaceBetween: 0,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 3.5,
      spaceBetween: 0,
    },
    // when window width is >= 1024px
    1024: {
      slidesPerView: 4.5,
      spaceBetween: 10,
    },
  },
});
