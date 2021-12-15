const menuBtn = document.querySelector('.menu-btn');
const overlay = document.querySelector('.overlay');
const navMenuWrapper = document.querySelector('.nav-menu-wrapper');

const itemLink = document.querySelectorAll('.item-link');
const itemLinkFooter = document.querySelectorAll('.item-link-footer');
const itemLinkButton = document.querySelectorAll('.item-link-button');
const allLinks = [itemLink, itemLinkFooter, itemLinkButton];

console.log(allLinks);

watchLinks(allLinks);


// console.log (itemLink);
// console.log(itemLinkFooter);
// console.log(itemLinkButton);

function watchLinks(allLinks) {
    for (i = 0; i < 3; i++) {
        allLinks[i].forEach(link => {
            link.addEventListener('click', closeMenu);
            // console.log(link);
        })
    }
}

// itemLink.forEach(link => {
//     link.addEventListener('click', () => console.log('clicked'));
// });

menuBtn.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);


function verifyMenu() {
    if (navMenuWrapper.classList.contains('active')) {
        // console.log('menu is active');
        return true;
    } else {
        // console.log('menu is INACTIVE');
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
    console.log('enter closeMenu function');
    if (verifyMenu()) {
        toggleMenu();
    }
    else {
        console.log('menu is already closed');
    } 
}

window.addEventListener('resize', () => {
    
    if (this.innerWidth > 1023) {        
        closeMenu();
    } 
 });