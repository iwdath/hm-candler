const menuBtn = document.querySelector('.menu__btn');
const menuMobile = document.querySelector('.header__list');

menuBtn.addEventListener('click', () => {
  menuMobile.classList.toggle('menu--open');
});


const swiperOne = new Swiper('.feedback__slider', {
  spaceBetween: 20,
  grabCursor: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    1000: {
      spaceBetween: 30,
    },
  },
});

const swiperTwo = new Swiper('.certificates__slider', {
  slidesPerView: "auto",
  spaceBetween: 10,
  grabCursor: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    1000: {
      spaceBetween: 20,
    },
  },
});