const body = document.querySelector('body');
const hamburgerBtn = document.querySelector('#btn-hamburger');
const header = document.querySelector('.header');
const overlayDiv = document.querySelector('.overlay');
const headerMenu = document.querySelector('.header__menu');
const fadeElems = document.querySelectorAll('.has-fade');

const desktopMenus = document.querySelectorAll('#desktop-menu');

// Adding event listener
hamburgerBtn.addEventListener('click', showMenu);
desktopMenus.forEach((item) => {
  item.addEventListener('click', makeActive);
});

// Functions
function showMenu() {
  if (header.classList.contains('open')) {
    // When the user close the hamburger
    header.classList.remove('open');
    body.classList.remove('noscroll');
    fadeElems.forEach((e) => {
      e.classList.remove('fade-in')
      e.classList.add('fade-out');
    });
  } else {
    // When the user tap the hamburger
    header.classList.add('open');
    body.classList.add('noscroll');
    fadeElems.forEach((e) => {
      e.classList.remove('fade-out')
      e.classList.add('fade-in');
    });
  }
}

function makeActive(e) {
  // Remove all active class
  desktopMenus.forEach((item) => {
    item.classList.remove('active-menu')
  });

  // Add active class to clicked element
  e.target.classList.toggle('active-menu');
}