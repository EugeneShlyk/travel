const video = document.querySelector('.hero-card__video');

export const changePoster = () => {
  if (window.matchMedia('(min-width: 1200px)').matches) {
    video.poster = './../../img/hero/caucasus/hero-video-poster.jpg';
  } if (window.matchMedia('(max-width: 1199px)').matches) {
    video.poster = './../../img/hero/caucasus/hero-video-poster-tablet.jpg';
  }
};
