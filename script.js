const pages = document.querySelectorAll('.page');
let current = 0;

document.getElementById('next').addEventListener('click', () => {
  pages[current].classList.remove('active');
  current = (current + 1) % pages.length;
  pages[current].classList.add('active');
});
