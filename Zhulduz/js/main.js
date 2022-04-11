'use strict';

const accordionFunc = () => {
    let accordion = document.querySelectorAll('.question');
    accordion.forEach((e) => {
        e.addEventListener('click', function() {
            this.classList.toggle('active');
            let dropdown = this.nextElementSibling;
            if (dropdown.style.maxHeight){
                dropdown.style.maxHeight = null;
            } else {
                dropdown.style.maxHeight = dropdown.scrollHeight + "px";
            } 
        });
    });
};
accordionFunc();

const ospanov = document.querySelector('.ospanov');
const animateToParallax = () => {
    ospanov.style.transform = `translateY(${-window.scrollY / 10}px)`;
};

const checkBrowserWidth = () => {
    if (window.innerWidth >= 1024) {
        window.addEventListener('scroll', animateToParallax);
    } else {
        window.removeEventListener('scroll', animateToParallax);
        ospanov.removeAttribute('style');
    }
};
checkBrowserWidth();
window.addEventListener('resize', checkBrowserWidth);
