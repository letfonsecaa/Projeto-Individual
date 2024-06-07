// Adiciona a transição automática
let slideIndex = 0;
const slides = document.querySelectorAll('.slide1');

function showSlides() {
    slides.forEach(slide => {
        slide.style.marginLeft = `-${slideIndex * 68}%`;
    });
    slideIndex++;
    if (slideIndex === slides.length) {
        slideIndex = 0;
    }
    setTimeout(showSlides, 5500);
}

showSlides();

 