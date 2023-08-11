const Swiper = window.Swiper;

export const initInstructorsSlider = () =>
  new Swiper('.instructors__slider', {
    // navigation: {
    //   nextEl: '.instructors__button--to-right',
    //   prevEl: '.instructors__button--to-left',
    // },
    simulateTouch: false,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });
