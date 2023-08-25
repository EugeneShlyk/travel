const slides = document.querySelectorAll('.hero-card');
const pagination = document.querySelector('.hero__box-button');
const video = document.querySelector('.hero-card__video');

export const addVideoSrc = () => {
  pagination.addEventListener('click', () => {
    slides.forEach((slide) => {

      if (slide.querySelector('.hero-card__video') &&
        slide.classList.contains('swiper-slide-active')) {
        console.log('я работаю');
        console.log(video);
        slide.style.background = 'red';
        video.
        // video.src = 'img/html-academy-courses.mp4';
        // video.setAttribute('src', 'img/html-academy-courses.mp4');
      } else {
        video.removeAttribute('src');
      }
    });
  });
};
