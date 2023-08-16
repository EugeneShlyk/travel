const Swiper = window.Swiper;
const slider = document.querySelector('.advantages__slider-wrapper');


export const initAdvantagesSlider = () =>
  window.matchMedia('(min-width: 1200px)').matches && slider &&
  new Swiper('.advantages__slider-wrapper', {
    navigation: {
      nextEl: '.advantages__button--to-right',
      prevEl: '.advantages__button--to-left',
    },
    simulateTouch: false,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        initialSlide: 0,
        slidesPerView: 2,
        spaceBetween: 0,
      },
      1200: {
        initialSlide: 1,
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
