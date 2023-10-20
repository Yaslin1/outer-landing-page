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

nextButton.onclick = () => {
  const track = document.querySelector('.carousel-track')
  const slides = track.children
  // if (currentSlide === slides.length - 1) {
  // currentSlide = 0;
  // } else {
  // currentSlide++;
  const firstChild = slides[0]
  track.removeChild(firstChild)
  track.append(firstChild)
  // }
  // moveToSlide();
};

prevButton.onclick = () => {
  const track = document.querySelector('.carousel-track');
  const slides = track.children
  // if (currentSlide === 0) {
  // currentSlide = slides.length - 1;
  // } else {
  // currentSlide--;
  const lastChild = slides[slides.length -1]
  track.removeChild(lastChild)
  track.prepend(lastChild)
  // }
  // moveToSlide();
};

function moveToSlide() {
  track.style.transform = 'translateX(-' + slideWidth * currentSlide + 'px)';
}