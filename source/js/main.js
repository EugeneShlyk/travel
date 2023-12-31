import {addAudioSrc} from './modules/add-audio-src.js';
import {addVideoSrc} from './modules/add-video-src.js';
import {initAdvantagesSlider} from './modules/advantages-slider.js';
import {initCommentsSlider} from './modules/comments-slider.js';
import {initGallerySlider} from './modules/gallery-slider.js';
import {workHeroSlider} from './modules/hero-slider.js';
import {initInstructorsSlider} from './modules/instructors-slider.js';
import {changePoster} from './modules/poster-video.js';
import {initToursSlider} from './modules/tours-slider.js';
import {videoWork} from './modules/video.js';
import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {Form} from './modules/form-validate/form';
import {toggleMenuHandler} from './modules/navigation.js';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();
  workHeroSlider();
  initToursSlider();
  toggleMenuHandler();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
    const form = new Form();
    window.form = form;
    form.init();
    videoWork();
    changePoster();
    initInstructorsSlider();
    initCommentsSlider();
    initAdvantagesSlider();
    initGallerySlider();
    addAudioSrc();
    addVideoSrc();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
