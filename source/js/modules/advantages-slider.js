const Swiper = window.Swiper;
const slider = document.querySelector('.advantages__slider-wrapper');


export const initAdvantagesSlider = () =>
  slider &&
  new Swiper('.advantages__slider-wrapper', {
    // navigation: {
    //   nextEl: '.advantages-button--to-right',
    //   prevEl: '.advantages-button--to-left',
    // },
    simulateTouch: false,
    initialSlide: 2,
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
