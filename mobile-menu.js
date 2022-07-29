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

//

const menuLinks = mobileMenu.querySelectorAll('li');

for (let i = 0; i < menuLinks.length; i += 1) {
  menuLinks[i].addEventListener('click', () => {
    hamburgerMenu();
  });
}