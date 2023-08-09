const navigation = document.querySelector('.navigation');
const navigationToggle = document.querySelector('.header__button-menu');
const logo = document.querySelector('.header__logo-link');
const phone = document.querySelector('.header__phone');
const cardWrapper = document.querySelector('.hero-card__inner');
const body = document.querySelector('body');
const modal = document.querySelector('.navigation__list');
const menuLink = document.querySelector('.navigation__list-item-link');

export const toggleMenuHandler = () => {
  navigationToggle.addEventListener('click', function () {
    if (navigation.classList.contains('navigation--closed')) {
      navigation.classList.remove('navigation--closed');
      navigation.classList.add('navigation--opened');
      navigationToggle.classList.remove('header__button-menu--closed');
      navigationToggle.classList.add('header__button-menu--opened');
      logo.classList.remove('header__logo-link--closed-menu');
      logo.classList.add('header__logo-link--opened-menu');
      phone.classList.remove('header__phone--closed-menu');
      phone.classList.add('header__phone--opened-menu');
      cardWrapper.classList.remove('hero-card__inner--closed-menu');
      cardWrapper.classList.add('hero-card__inner--opened-menu');
      body.classList.add('opened-menu');
      document.addEventListener('click', onOverlayClick);
      menuLink.addEventListener('click', onMenuLinksClick);
    } else {
      closeModal();
      document.removeEventListener('click', onOverlayClick);
    }
  });
};

const closeModal = () => {
  navigation.classList.add('navigation--closed');
  navigation.classList.remove('navigation--opened');
  navigationToggle.classList.remove('header__button-menu--opened');
  navigationToggle.classList.add('header__button-menu--closed');
  logo.classList.remove('header__logo-link--opened-menu');
  logo.classList.add('header__logo-link--closed-menu');
  phone.classList.add('header__phone--closed-menu');
  phone.classList.remove('header__phone--opened-menu');
  cardWrapper.classList.remove('hero-card__inner--opened-menu');
  cardWrapper.classList.add('hero-card__inner--closed-menu');
  body.classList.remove('opened-menu');
};

const onOverlayClick = (evt) => {
  if (evt.target === navigation && evt.target !== modal) {
    closeModal();
  }
};

const onMenuLinksClick = () => {
  closeModal();
};
