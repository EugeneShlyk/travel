const Swiper = window.Swiper;

export const initToursSlider = () =>
  new Swiper('.tours__slider', {
    navigation: {
      nextEl: '.tours__header-part-button--to-right',
      prevEl: '.tours__header-part-button--to-left',
    },
    simulateTouch: false,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 18,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
