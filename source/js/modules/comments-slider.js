const Swiper = window.Swiper;
const slider = document.querySelector('.comments__slider');

export const initCommentsSlider = () =>
  slider &&
  new Swiper('.comments__slider', {
    navigation: {
      nextEl: '.comments__button--to-right',
      prevEl: '.comments__button--to-left',
    },
    simulateTouch: false,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 'auto',
        spaceBetween: 30,
      },
    },
  });
