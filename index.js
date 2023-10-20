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
  const lastChild = slides[slides.length - 1]
  track.removeChild(lastChild)
  track.prepend(lastChild)
  // }
  // moveToSlide();
};

function moveToSlide() {
  track.style.transform = 'translateX(-' + slideWidth * currentSlide + 'px)';
}

function validateForm(e) {
  e.preventDefault()
  const firstName = document.getElementById('firstName');
  const lastName = document.getElementById('lastName');
  const email = document.getElementById('email');
  const telephone = document.getElementById('telephone');
  let isValid = true;

  // Reset previous error messages
  document.querySelectorAll('.error-message').forEach((error) => (error.textContent = ''));

  if (!firstName.value.trim()) {
    const input = document.getElementById("firstName");
    const text = document.getElementById('firstNameError');
    text.textContent = 'Please enter a valid First Name';
    input.style.border = "1px solid #cf4127";
    input.style.backgroundColor = "#fdf9f7";
    input.style.color = "#cf4127";
    text.style.color = "red";
    text.style.fontStyle = "italic";
    isValid = false;
  }

  if (!lastName.value.trim()) {
    const text = document.getElementById('lastNameError')
    text.textContent = 'Please enter a valid Last Name';
    text.style.color = "red"
    text.style.fontStyle = "italic"
    isValid = false;
  }

  if (!telephone.value.trim()) {
    const text = document.getElementById('telephoneError')
    text.textContent = 'Please enter a valid Phone Number';
    text.style.color = "red"
    text.style.fontStyle = "italic"
    isValid = false;
  }

  const emailInput = document.getElementById('email')
  const isValidEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(emailInput.value)
  if (!isValidEmail) {
    const text = document.getElementById('emailError')
    text.textContent = 'Please enter a valid Email';
    text.style.color = "red"
    text.style.fontStyle = "italic"
    isValid = false;
  }

  return isValid;
}

document.getElementById("form").addEventListener("submit", validateForm)