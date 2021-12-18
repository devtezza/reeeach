<<<<<<< HEAD

// window.addEventListener('load', animateHeader);

=======
const header = document.querySelector('header');
>>>>>>> test
const menuBtn = document.querySelector('.menu-btn');
const overlay = document.querySelector('.overlay');
const navMenuWrapper = document.querySelector('.nav-menu-wrapper');

<<<<<<< HEAD
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
=======
const itemLink = document.querySelectorAll('.item-link');
const itemLinkFooter = document.querySelectorAll('.item-link-footer');
const itemLinkButton = document.querySelectorAll('.item-link-button');
const allLinks = [itemLink, itemLinkFooter, itemLinkButton];
const testimonial = document.querySelectorAll('.testimonial');
const feature = document.querySelectorAll('.feature');

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
>>>>>>> test

menuBtn.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);


function verifyMenu() {
<<<<<<< HEAD
    if (navMenuWrapper.classList.contains('active')) {
        // console.log('menu is active');
        return true;
    } else {
        // console.log('menu is INACTIVE');
=======
    if (navMenuWrapper.classList.contains('active')) {        
        return true;
    } else {        
>>>>>>> test
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
    
<<<<<<< HEAD
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
=======
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
        start: "top 65%",
        end: "bottom 65%"
    }
});

tlFeatures = gsap.timeline({
    scrollTrigger: {
        trigger: ".features",
        // markers: true,
        start: "top 65%",
        end: "bottom 65%",
    }
});

tlTestimonials = gsap.timeline({
    scrollTrigger: {
        trigger: ".testimonials",
        // markers: true,
        start: "top 65%",
        end: "bottom 65%",
    }
});

tlCtaSection = gsap.timeline({
    scrollTrigger: {
        trigger: ".cta-section",
        // markers: true,
        start: "top 65%",
        end: "bottom 65%",
    }
});

tlFooter = gsap.timeline({
   scrollTrigger: {
    trigger: "footer",
    // markers: true,
    start: "20% 80%",
    end: "bottom center",
   }
});


ScrollTrigger.matchMedia({
    // desktop devices
    "(min-width: 1024px)": () => {
        // Animations in tlAbout (div -> Intro)
        tlAbout.from(".intro", {x: 3000, duration: 1.5, ease: "power4.out"});        

        // Animations for tlAbout (div -> How It Works)
        tlAbout.from(".how-it-works", {x: -3000, duration: 1.5, ease: "power4.out"});
       
        // Animations for tlFeatures
        tlFeatures.from(".features h2", {x: 3000, duration: 2, ease: "power4.out"});
        tlFeatures.from(".feature", {scale: 0, duration: 3, ease: "power2.out", stagger: 0.7});
        tlFeatures.from(".features .cta-btn", {x: -3000, duration: 0.1, ease: "power4.out"});

        // Animations for tlTestimonials
        tlTestimonials.from(".testimonials h2", {x: -3000, duration: 2, ease:"power4.out"});
        tlTestimonials.from(testimonial[0], {x: -3000, duration: 1.5, ease: "power4.out"});
        tlTestimonials.from(testimonial[2], {x: 3000, duration: 1.5, ease: "power4.out"});
        tlTestimonials.from(testimonial[1], {scale: 0, duration: 2, ease: "power4.out"});

        // Animations for CTA Section
        tlCtaSection.from(".cta-section .cta-img", {x: 3000, rotation: 360, duration: 2, ease:"power4.out"});

        // Animations for Footer
        tlFooter.from("footer .logo", {scale: 0, duration: 1, ease: "power4.out"});
        tlFooter.from("footer .newsletter", {scale: 0, duration: 1, ease: "power4.out"});
        tlFooter.from(".nav-footer", {scale: 0, duration: 1, ease: "power4.out"});
        tlFooter.from(".social-icons", {scale: 0, duration: 1, ease: "power4.out"});
        tlFooter.from(".attribution", {scale: 0, duration: 1.5, ease: "power4.out"});
    },

    // mobile devices
    "(max-width: 1023px)": () => {
        // Animations in tlAbout (div -> Intro)
        tlAbout.from(".intro h2", {x: 3000, duration: 1, ease: "power4.out"});
        tlAbout.from(".intro p", {x: 3000, duration: 2, ease: "power4.out"});
        tlAbout.from(".intro .cta-btn", {x: 3000, duration: 0.1, ease: "power4.out"});
 
        // Animations for tlAbout (div -> How It Works)
        tlAbout.from(".how-it-works h2", {x: -3000, duration: 2, ease: "power4.out"});
        tlAbout.from(".how-it-works ul", {x: -3000, duration: 2, ease: "power4.out"});
 
        // Animations for tlFeatures
        tlFeatures.from(".features h2", {x: 3000, duration: 2, ease: "power4.out"});
        tlFeatures.from(feature[0], {scale: 0, duration: 1.5, ease: "power2.out"});
        tlFeatures.from(feature[1], {scale: 0, duration: 1.5, ease: "power2.out"});
        tlFeatures.from(feature[2], {scale: 0, duration: 1.5, ease: "power2.out"});
        tlFeatures.from(feature[3], {scale: 0, duration: 1.5, ease: "power2.out"}); 
        tlFeatures.from(".features .cta-btn", {x: -3000, duration: 0.1, ease: "power4.out"});
 
        // Animations for tlTestimonials
        tlTestimonials.from(".testimonials h2", {x: -3000, duration: 2, ease:"power4.out"});
        tlTestimonials.from(testimonial[0], {x: 3000, duration: 1.5, ease: "power4.out"});
        tlTestimonials.from(testimonial[1], {x: -3000, duration: 1.5, ease: "power4.out"});
        tlTestimonials.from(testimonial[2], {x: 3000, duration: 1.5, ease: "power4.out"});

        // Animations for Footer
        tlFooter.from("footer .logo", {opacity: 0, y: 50, duration: 1, ease: "power4.out"});
        tlFooter.from("footer .newsletter", {opacity: 0, y: 50, duration: 1, ease: "power4.out"});
        tlFooter.from(".nav-footer", {opacity: 0, y: 50, duration: 1, ease: "power4.out"});
        tlFooter.from(".social-icons", {opacity: 0, y: 50, duration: 1, ease: "power4.out"});
        tlFooter.from(".attribution", {opacity: 0, y: 40, duration: 1.5, ease: "power4.out"});
    },

    // all devices
    "all": () => {
        // Animations for in tlHeader
        tlHeader.from(".top-bar", {opacity: 0, duration: 0.8, ease: "power4.inOut"});
        tlHeader.from("h1", {x: -1000, duration: 2, ease: "power4.inOut"});
        tlHeader.from(".hero-img", {x: 1000, duration: 1.5, ease: "back.out(2)"});        

        // Animations for tlCtaSection
        tlCtaSection.from(".cta-section h2", {x: 3000, duration: 2, ease:"power4.out"});
        tlCtaSection.from(".cta-section .cta-btn", {x: -3000, duration: 0.2, ease:"power2.out"});        
        
       
    }
});
>>>>>>> test
