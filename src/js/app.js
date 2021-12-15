
// window.addEventListener('load', animateHeader);

const menuBtn = document.querySelector('.menu-btn');
const overlay = document.querySelector('.overlay');
const navMenuWrapper = document.querySelector('.nav-menu-wrapper');

gsap.registerPlugin(ScrollTrigger);
const header = document.querySelector('header');
const h1 = document.querySelector('h1');
const topBar = document.querySelector('.top-bar');
const heroImage = document.querySelector('.hero-image');

const intro = document.querySelector('.intro');
const howItWorks = document.querySelector('.how-it-works');

const features = document.querySelector('.features');
const h2 = document.querySelectorAll('h2');

const testimonials = document.querySelector('.testimonials');
const testimonial = document.querySelectorAll('.testimonial');

console.log(features);

animateElements();

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
        // console.log('window has been resized, but is media-lg or larger');
        closeMenuOnResize();
    } 
    
    // else {
    //     console.log('window has been resized, but is media-md or smaller');
    //     preventAnimation();
    // }
    
 });

 function animateElements() {    
    gsap.ticker.fps(60);
    const headerAnimations = [
        
        gsap.fromTo(topBar, {
            autoAlpha: 0
        }, {
            autoAlpha: 1,   
            duration: 2,
            ease: "back.inOut(4)"
        }),        
        

        gsap.from(h1, {
            x: -800,           
            duration: 3,
            delay: 0.5,
            ease: "back.inOut(2)"
        }),

        gsap.from(heroImage, {
            x: 800,
            duration: 3.2,
            delay: 0.5,
            ease: "back.inOut(2)"
        })

    ];

    for (i= 0; i < 4; i++) {
        ScrollTrigger.create({
            trigger: header,
            animation: headerAnimations[i],
            // markers: true,
            start: "top 75%",
            end: "bottom 25%",
            // toggleActions: "play reset play"  
        });
    }

    const aboutAnimations = [
        gsap.from(".about", {
            x: -2000,
            // delay: 0.5,
            duration: 4, 
            ease: "power4.out",
            scrollTrigger: {
                // markers: true,
                trigger: ".about",
                start: "15% 70%",
                end: "80% 25%",
            }
        })
    ];

    const tlFeaturesAnimations = new TimelineMax({});

    
    tlFeaturesAnimations

    .from(h2[2], {
        scale: 0,
        duration: 1.5, 
        ease: "power4.in",       
    })

    .from(".feature", {
        scale: 0,
        duration: 1, 
        ease: "power4.out",
        stagger: 0.4,       
    })
    
    .fromTo(".features-cta", {autoAlpha: 0}, {
        autoAlpha: 1,
        duration: 0.1,            
        ease: "power1.out",
    });


    ScrollTrigger.create({
        trigger: features,
        animation: tlFeaturesAnimations,
        markers: true,
        start: "20% 75%",
        end: "90% 25%",
        // toggleActions: "play reset play"  
    });

    const tlTestimonialsAnimations = new TimelineMax({});

    tlFeaturesAnimations

        .from(h2[3], {
            scale: 0,
            // delay: 0.5,
            duration: 1.5, 
            ease: "power4.in",            
        })

        .from(testimonial[0], {
            x: -2000,
            // delay: 0.5,
            duration: 0.8, 
            ease: "power4.out",          
        })

        .from(testimonial[2], {
            x: 2000,
            // delay: 0.5,
            duration: 0.8, 
            ease: "power4.out",           
        })

        .from(testimonial[1], {
            scale: 0,
            // delay: 0.5,
            // delay: 0.3,
            duration: 0.8, 
            ease: "power4.out",           
        });

        ScrollTrigger.create({
            trigger: testimonials,
            animation: tlTestimonialsAnimations,
            // markers: true,
            start: "50% 65%",
            end: "bottom 15%",
            // toggleActions: "play reset play"  
        });
}