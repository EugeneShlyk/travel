const Swiper = window.Swiper;
const slider = document.querySelector('.advantages__slider-wrapper');


export const initAdvantagesSlider = () =>
  window.matchMedia('(min-width: 1200px)').matches && slider &&
  new Swiper('.advantages__slider-wrapper', {
    navigation: {
      nextEl: '.advantages-button--to-right',
      prevEl: '.advantages-button--to-left',
    },
    simulateTouch: false,
    initialSlide: 1,
    slidesPerView: 3,
    spaceBetween: 30,
  });
