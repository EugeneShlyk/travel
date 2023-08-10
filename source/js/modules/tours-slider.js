const Swiper = window.Swiper;

export const initToursSlider = () =>
  new Swiper('.tours__slider', {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
      nextEl: '.tours__header-part-button--to-right',
      prevEl: '.tours__header-part-button--to-left',
    },
    simulateTouch: false,
  });
