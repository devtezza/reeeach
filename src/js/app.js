const header = document.querySelector('header');
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
    header.classList.toggle('active');
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
        trigger: header,        
    }
});

tlAbout = gsap.timeline({
    scrollTrigger: {
        trigger: ".about",
        // markers: true,
        start: "10% center",
        end: "bottom center"
    }
});

tlFeatures = gsap.timeline({
    scrollTrigger: {
        trigger: ".features",
        // markers: true,
        start: "top center",
        end: "bottom center",
    }
});


// Animations for in tlHeader
tlHeader.from("h1", {x: -1000, duration: 2, ease: "power4.inOut"});
tlHeader.from(".hero-img", {x: 1000, duration: 1.5, ease: "back.out(2)"});
tlHeader.from(".top-bar", {opacity: 0, duration: 2, ease: "power4.inOut"});

// Animations in tlAbout (div -> Intro)
tlAbout.from(".intro h2", {x: 3000, duration: 1, ease: "power4.out"});
tlAbout.from(".intro p", {x: 3000, duration: 2, ease: "power4.out"});
tlAbout.from(".intro .cta-btn", {x: 3000, duration: 0.1, ease: "power4.out"});

// Animations for tlAbout (div -> How It Works)
tlAbout.from(".how-it-works h2", {x: -3000, duration: 2, ease: "power4.out"});
tlAbout.from(".how-it-works ul", {x: -3000, duration: 3, ease: "power4.out"});

// Animations for tlFeatures
tlFeatures.from(".features h2", {x: 3000, duration: 2, ease: "power4.out"});
tlFeatures.from(".feature", {scale: 0, duration: 3, ease: "power2.out", stagger: 0.7});
tlFeatures.from(".features .cta-btn", {x: -3000, duration: 0.1, ease: "power4.out"});
