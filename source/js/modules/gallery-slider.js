const Swiper = window.Swiper;
const slider = document.querySelector('.gallery__slider-wrapper');


export const initGallerySlider = () =>
  window.matchMedia('(min-width: 1200px)').matches && slider &&
  new Swiper('.gallery__slider-wrapper', {
    navigation: {
      nextEl: '.gallery__button--to-right',
      prevEl: '.gallery__button--to-left',
    },
    simulateTouch: false,
    spaceBetween: 5,
    slidesPerView: 'auto',
    freeMode: true,
  });
