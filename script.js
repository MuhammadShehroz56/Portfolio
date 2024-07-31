// Function to add animation class on load Home Section
window.addEventListener('load', () => {
    document.querySelector('.home__container').classList.add('animate-move-in');
});

// Function to add animation class on scroll
window.addEventListener('scroll', () => {
    const scrollElements = document.querySelectorAll('.home__scroll, .home__scroll-button');
    
    scrollElements.forEach((element) => {
        if (element.getBoundingClientRect().top < window.innerHeight) {
            element.classList.add('animate-move-in');
        }
    });
});

// Function to add animation class on load About Section
window.addEventListener('load', () => {
    document.querySelector('.home__container').classList.add('animate-move-in');
    document.querySelector('.about__img').classList.add('animate-move-in-left');
    document.querySelector('.about__data').classList.add('animate-move-in-right');
});

// Function to add animation class on scroll
window.addEventListener('scroll', () => {
    const scrollElements = document.querySelectorAll('.home__scroll, .home__scroll-button, .about__img, .about__data');
    
    scrollElements.forEach((element) => {
        if (element.getBoundingClientRect().top < window.innerHeight) {
            if (element.classList.contains('about__img')) {
                element.classList.add('animate-move-in-left');
            } else if (element.classList.contains('about__data')) {
                element.classList.add('animate-move-in-right');
            } else {
                element.classList.add('animate-move-in');
            }
        }
    });
});