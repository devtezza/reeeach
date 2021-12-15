const menuBtn = document.querySelector('.menu-btn');
const overlay = document.querySelector('.overlay');
const navMenuWrapper = document.querySelector('.nav-menu-wrapper');

const itemLink = document.querySelectorAll('.item-link');
const itemLinkFooter = document.querySelectorAll('.item-link-footer');
const itemLinkButton = document.querySelector('.item-link-button');

console.log (itemLink);
console.log(itemLinkFooter);
console.log(itemLinkButton);


itemLink.forEach(link => {
    link.addEventListener('click', () => console.log('clicked'));
});


menuBtn.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);


function verifyMenu() {
    if (navMenuWrapper.classList.contains('active')) {
        console.log('menu is active');
        return true;
    } else {
        console.log('menu is INACTIVE');
        return false;
    }
}

function toggleMenu() {
    menuBtn.classList.toggle('active');
    navMenuWrapper.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.classList.toggle('scrolling');
}

// Closes menu on resize and on any menu-link
function closeMenu() {
    if (verifyMenu()) {
        toggleMenu();
    } 
}




window.addEventListener('resize', () => {
    
    if (this.innerWidth > 1023) {
        console.log('window has been resized, but is media-lg or larger');
        closeMenu();
    } 
    
    // else {
    //     console.log('window has been resized, but is media-md or smaller');
    //     preventAnimation();
    // }
    
 });