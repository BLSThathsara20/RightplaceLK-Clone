// Add Property banner carousel image height
const carouselImage = document.querySelector('.carousel-images');
const Selectcarousel = document.querySelector('.carousel');
let currHeight = carouselImage.clientHeight;

export const setCarouselHeight = () => {
    Selectcarousel.style.height = currHeight + 'px';
}

// Coarousel function
const track = document.querySelector('.carousel-track');
const slieds = Array.from(track.children);
const prevButton = document.querySelector('.carousel-btn--left');
const nextButton = document.querySelector('.carousel-btn--right');
const dotsNav = document.querySelector('.carousel-nav');
const dots = Array.from(dotsNav.children);

const slideWidth = slieds[0].getBoundingClientRect().width;

const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
};

slieds.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-'+ targetSlide.style.left +')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}

//Click right, move slides to the right 
nextButton.addEventListener('click', e =>{
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    
    moveToSlide (track, currentSlide, nextSlide);
});

//Click left, move slides to the left 
prevButton.addEventListener('click', e =>{
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;

    moveToSlide (track, currentSlide, prevSlide);
});