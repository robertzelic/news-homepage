const menuOverlay = document.querySelector('.menu-overlay');
const menu = document.querySelector('.menu');
const menuList = document.querySelector('.menu-list');
const openButton = document.querySelector('.open-button');
const closeButton = document.querySelector('.close-button');

const closeMenu = () => {
  menuOverlay.classList.remove('show');
  menu.classList.remove('opened');
};

openButton.addEventListener('click', () => {
  menuOverlay.classList.add('show');
  menu.classList.add('opened');
});

closeButton.addEventListener('click', closeMenu);
menuOverlay.addEventListener('click', closeMenu);

menuList.addEventListener('click', (e) => {
  e.target.matches('a') && closeMenu();
});
