const Swiper = window.Swiper;
const slider = document.querySelector('.instructors__slider');


export const initInstructorsSlider = () =>
  slider &&
  new Swiper('.instructors__slider', {
    navigation: {
      nextEl: '.instructors__button--to-right',
      prevEl: '.instructors__button--to-left',
    },
    simulateTouch: false,
    lazy: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 14,
      },
      1230: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });
