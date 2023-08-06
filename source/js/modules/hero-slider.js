const Swiper = window.Swiper;

export const workSlider = () =>
  new Swiper('.hero__slider', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    pagination: {
      el: '.hero__box-button',
      clickable: true,
    },
    simulateTouch: false,
  });
