const video = document.querySelector('.hero-card__video');
const button = document.querySelector('.hero-card__video-button');

const videoButtonHandler = () => {
  if (video.paused) {
    video.play();
    button.style.display = 'none';
  } else {
    video.pause();
  }
};

const videoOnclick = () => {
  video.pause();
  button.style.display = 'block';
};

export const videoWork = () => {
  if (video) {
    video.addEventListener('click', videoOnclick);
    button.addEventListener('click', videoButtonHandler);
  }
};
