const modalOpen = document.querySelector('.modal-open');
const modal = document.querySelector('#myModal1');
const modalClose = document.querySelector('.modal-close');

modalOpen.addEventListener('click', (e) => {
  e.preventDefault();
  modal.classList.add('modal--show');
});

modalClose.addEventListener('click', (e) => {
  e.preventDefault();
  modal.classList.remove('modal--show');
});
