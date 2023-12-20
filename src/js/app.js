import * as flsFunctions from "./modules/functions.js";


flsFunctions.isWebp();

window.addEventListener('scroll', e => {
    document.body.style.cssText += `--scrollTop: ${window.pageYOffset}px`;
});


gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.content'
}

)
