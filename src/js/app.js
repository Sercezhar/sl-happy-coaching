import { burgerMenu } from './modules/burgerMenu';
import { useDynamicAdapt } from './modules/dynamicAdapt';

burgerMenu();
useDynamicAdapt();

// add styles to header on scroll
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    header.classList.add('header--shadow');
  } else {
    header.classList.remove('header--shadow');
  }
});
