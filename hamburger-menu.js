const hmbBtn = document.getElementById('ham-btn');
const mobileMenu = document.getElementById('mobile-menu');
const toggleBtn = document.getElementById('hamburger-menu');
const toggleBtnIcon = toggleBtn.querySelector('i');

const hamburgerMenu = () => {
  toggleBtnIcon.classList.toggle('fa-bars');
  toggleBtnIcon.classList.toggle('fa-x');
  mobileMenu.classList.toggle('show-menu');
};

hmbBtn.addEventListener('click', () => hamburgerMenu());
