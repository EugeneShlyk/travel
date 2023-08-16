const Swiper = window.Swiper;
const slider = document.querySelector('.gallery__slider-wrapper');


export const initGallerySlider = () =>
  slider && new Swiper('.gallery__slider-wrapper', {
    navigation: {
      nextEl: '.gallery__button--to-right',
      prevEl: '.gallery__button--to-left',
    },
    simulateTouch: false,
    freeMode: true,
    slidesPerView: 'auto',
    breakpoints: {
      320: {
        spaceBetween: 3,
      },
      768: {
        spaceBetween: 5,
      },
    },
  });
