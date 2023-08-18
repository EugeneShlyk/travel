const header = document.querySelector('.header');

const navigation = document.querySelector('.navigation');
const navigationToggle = document.querySelector('.header__button-menu');
const body = document.querySelector('body');
const modal = document.querySelector('.navigation__list');
const menuLinks = document.querySelectorAll('.navigation__list-item-link');

export const toggleMenuHandler = () => {
  menuLinks.forEach((link) => link.addEventListener('click', closeModal));

  navigationToggle.addEventListener('click', () => {
    if (header.classList.contains('header--navigation-closed')) {
      header.classList.remove('header--navigation-closed');
      header.classList.add('header--navigation-opened');
      body.classList.add('opened-menu');
      document.addEventListener('click', onOverlayClick);
    } else {
      closeModal();
      document.removeEventListener('click', onOverlayClick);
    }
  });
};

const closeModal = () => {
  header.classList.add('header--navigation-closed');
  header.classList.remove('header--navigation-opened');
  body.classList.remove('opened-menu');
};

const onOverlayClick = (evt) => {
  if (evt.target === navigation && evt.target !== modal) {
    closeModal();
  }
};
