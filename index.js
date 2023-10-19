const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');
const slideWidth = slides[0].getBoundingClientRect().width;

// Arrange the slides next to one another
slides.forEach((slide, index) => {
    slide.style.left = slideWidth * index + 'px';
});

let currentSlide = 0;

nextButton.addEventListener('click', () => {
    if (currentSlide === slides.length - 1) {
        currentSlide = 0;
    } else {
        currentSlide++;
    }
    moveToSlide();
});

prevButton.addEventListener('click', () => {
    if (currentSlide === 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide--;
    }
    moveToSlide();
});

function moveToSlide() {
    track.style.transform = 'translateX(-' + slideWidth * currentSlide + 'px)';
}