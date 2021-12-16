const menuBtn = document.querySelector('.menu-btn');
const overlay = document.querySelector('.overlay');
const navMenuWrapper = document.querySelector('.nav-menu-wrapper');

const itemLink = document.querySelectorAll('.item-link');
const itemLinkFooter = document.querySelectorAll('.item-link-footer');
const itemLinkButton = document.querySelectorAll('.item-link-button');
const allLinks = [itemLink, itemLinkFooter, itemLinkButton];

// Call the function watchLinks to close mobile menu (if opened) when a link is clicked
watchLinks(allLinks);

function watchLinks(allLinks) {
    for (i = 0; i < 3; i++) {
        allLinks[i].forEach(link => {
            link.addEventListener('click', closeMenu);
            // console.log(link);
        })
    }
}

menuBtn.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);


function verifyMenu() {
    if (navMenuWrapper.classList.contains('active')) {        
        return true;
    } else {        
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


 


gsap.registerPlugin(ScrollTrigger);

tlHeader = gsap.timeline({
    scrollTrigger: {
        trigger: "header",        
    }
});

tlAbout = gsap.timeline({
    scrollTrigger: {
        trigger: ".about",
        markers: true,
        start: "center center"
    }
})

tlHeader.from("h1", {x: -1000, duration: 2, ease: "power4.inOut"});
tlHeader.from(".hero-img", {x: 1000, duration: 1.5, ease: "back.out(2)"});
tlHeader.from(".top-bar", {opacity: 0, duration: 2, ease: "power4.inOut"});

tlAbout.from(".intro h2", {x: 1000, duration: 2, ease: "power4.out"});
 