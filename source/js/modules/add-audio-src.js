
const slides = document.querySelectorAll('.hero-card');
const pagination = document.querySelector('.hero__box-button');
const audio = document.querySelector('.hero-card__inner-container-audio');

export const addAudioSrc = () => {
  pagination.addEventListener('click', () => {
    slides.forEach((slide) => {

      if (slide.querySelector('.hero-card__inner-container-audio') &&
        slide.classList.contains('swiper-slide-active')) {
        audio.src = 'https://music.yandex.ru/iframe/#track/116161079/25474374';
      } else {
        audio.removeAttribute('src');
      }
    });
  });
};
