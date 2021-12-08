const menuBtn = document.querySelector('.menu-btn');
const navWrapper = document.querySelector('.nav-wrapper');



menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    menuBtn.classList.toggle('active');
    navWrapper.classList.toggle('active');
}