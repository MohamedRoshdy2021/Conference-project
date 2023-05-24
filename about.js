const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-list');
const close = document.querySelector('.close');

close.addEventListener('click', () => {
  nav.classList.toggle('active');
  close.classList.toggle('active');
  burger.classList.toggle('active');
});

burger.addEventListener('click', () => {
  nav.classList.toggle('active');
  burger.classList.toggle('active');
  close.classList.add('active');
});