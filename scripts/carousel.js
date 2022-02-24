// Add Property banner carousel image height
const carouselImage = document.querySelector('.carousel-images');
const Selectcarousel = document.querySelector('.carousel');
let currHeight = carouselImage.clientHeight;

export function setCarouselHeight() {
    Selectcarousel.style.height = currHeight + 'px';
}