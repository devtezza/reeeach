const menuBtn = document.querySelector('.menu-btn');
const overlay = document.querySelector('.overlay');
const navMenuWrapper = document.querySelector('.nav-menu-wrapper');

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

function resetAnimation() {
    console.log('inside function resetAnimation');
    navMenuWrapper.classList.remove('prevent-slide-animation');
}

function preventAnimation() {
    if(!verifyMenu()) {
        console.log('inside funcion preventAnimation');
        if(!navMenuWrapper.classList.contains('prevent-slide-animation')) {
            navMenuWrapper.classList.add('prevent-slide-animation');
            navMenuWrapper.addEventListener('transitioned', resetAnimation());
        }
    }
          
}

function closeMenuOnResize() {
    if (verifyMenu()) {
        toggleMenu();
    } 
}

window.addEventListener('resize', () => {
    
    if (this.innerWidth > 1023) {
        console.log('window has been resized, but is media-lg or larger');
        closeMenuOnResize();
    } 
    
    // else {
    //     console.log('window has been resized, but is media-md or smaller');
    //     preventAnimation();
    // }
    
 });