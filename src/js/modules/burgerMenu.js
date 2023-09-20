export function burgerMenu() {
  const burger = document.querySelector('.header__burger');
  const menu = document.querySelector('.menu__wrapper');
  const body = document.querySelector('body');

  burger.addEventListener('click', () => {
    if (!menu.classList.contains('menu__wrapper--active')) {
      menu.classList.add('menu__wrapper--active');
      burger.classList.add('header__burger--active');
      body.classList.add('locked');
    } else {
      menu.classList.remove('menu__wrapper--active');
      burger.classList.remove('header__burger--active');
      body.classList.remove('locked');
    }
  });
  // navbar breakpoint
  window.addEventListener('resize', () => {
    if (window.innerWidth > 767.98) {
      menu.classList.remove('menu__wrapper--active');
      burger.classList.remove('header__burger--active');
      body.classList.remove('locked');
    }
  });
}
