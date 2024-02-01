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


const accordeon = document.querySelector('.accordeon');
const accordeonTitles = accordeon.querySelectorAll('.accordeon__title');

accordeonTitles.forEach.call(accordeonTitles, function (accordeonTitle) {
  accordeonTitle.addEventListener('click', function () {
    const currentText = accordeonTitle.parentElement.querySelector('.accordeon__content');

    accordeonTitle.classList.toggle('accordeon__title--active');
    currentText.classList.toggle('accordeon__content--visible');

    if (currentText.classList.contains('accordeon__content--visible')) {
      currentText.style.maxHeight = currentText.scrollHeight + 'px'
    } else {
      currentText.style.maxHeight = null
    }
  });
});