// define all UI variable
const navContainer = document.querySelector('.navbar-nav');
const nav= document.querySelector('.navbar');
const navMenu = document.querySelector('.navbar .pamenu');
const navMenuChild = document.querySelector('.navbar .submenu');
const navMenuChild2 = document.querySelector('.navbar .submenu2');
const navTogglerOpenSub = document.querySelector('.pamenu-item .arrowSub');
const navTogglerOpenSub2 = document.querySelector('.pamenu-item .arrowSub2');
const arrow= document.querySelector('.arrowSub');
const arrow2= document.querySelector('.arrowSub2');
const navToggler = document.querySelector('.buttonOpen');
allEventListners();
function allEventListners() {
  navToggler.addEventListener('click', togglerClick);
  navTogglerOpenSub.addEventListener('click', togglerClickSub);
  navTogglerOpenSub2.addEventListener('click', togglerClickSub2);
}

function togglerClick() {
  navContainer.classList.toggle('containerShow');
  navMenu.classList.toggle('open');
  navToggler.classList.toggle('changeIcon');
  nav.classList.toggle('insideContainerShow');
}
function togglerClickSub() {
  navMenuChild.classList.toggle('openChild');
  arrow.classList.toggle('run');;
}
function togglerClickSub2() {
  navMenuChild2.classList.toggle('openChild2');
  arrow2.classList.toggle('run2');
}