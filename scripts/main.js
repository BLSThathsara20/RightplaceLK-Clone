// Improt the property module
import * as proprty from './property.js';


// Site preloader function
const loader = document.querySelector('#site-preloader');
window.addEventListener('load', () => {
    loader.parentElement.removeChild(loader);
});

// Colors
const white = '#fff';
const black = '#000';
const primaryTextColor = '#707070';

const primaryNav = document.querySelector('.main-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');
const navToggleIcon = document.querySelector('#toggler');

navToggle.addEventListener('click', () =>{
    const visibility = primaryNav.getAttribute('data-visible');

    if(visibility === 'false'){
        primaryNav.setAttribute('data-visible', true);
        navToggle.setAttribute('area-expanded', true);
        navToggleIcon.classList.add('fa-times');
        navToggleIcon.classList.remove('fa-bars');
    }
    else if(visibility === 'true'){
        primaryNav.setAttribute('data-visible', false);
        navToggle.setAttribute('area-expanded', false);
        navToggleIcon.classList.add('fa-bars');
        navToggleIcon.classList.remove('fa-times');
    }
});

// Main link cards mouse hover effect
const mainLinkCardSelect1 = document.querySelector('.main-link-card-1');
const mainLinkCardStyle1 = document.getElementsByClassName('card-hover-1');

const mainLinkCardSelect2 = document.querySelector('.main-link-card-2');
const mainLinkCardStyle2 = document.getElementsByClassName('card-hover-2');

const mainLinkCardSelect3 = document.querySelector('.main-link-card-3');
const mainLinkCardStyle3 = document.getElementsByClassName('card-hover-3');

// Change font colors in to white | card 1
mainLinkCardSelect1.addEventListener('mouseover', () => {
    for(let i of mainLinkCardStyle1) {
        i.style.color = white;
    }
});

// Change back font colors in to default | card 1
mainLinkCardSelect1.addEventListener('mouseleave', () => {
    for(let i = 1; i< mainLinkCardStyle1.length; i++) {
        mainLinkCardStyle1[i].style.color = primaryTextColor;
    }
    mainLinkCardStyle1[0].style.color = black;
});


// Change font colors in to white | card 2
mainLinkCardSelect2.addEventListener('mouseover', () => {
    for(let i of mainLinkCardStyle2) {
        i.style.color = white;
    }
});

// Change back font colors in to default | card 2
mainLinkCardSelect2.addEventListener('mouseleave', () => {
    for(let i = 1; i< mainLinkCardStyle2.length; i++) {
        mainLinkCardStyle2[i].style.color = primaryTextColor;
    }
    mainLinkCardStyle2[0].style.color = black;
});


// Change font colors in to white | card 3
mainLinkCardSelect3.addEventListener('mouseover', () => {
    for(let i of mainLinkCardStyle3) {
        i.style.color = white;
    }
});

// Change back font colors in to default | card 3
mainLinkCardSelect3.addEventListener('mouseleave', () => {
    for(let i = 1; i< mainLinkCardStyle3.length; i++) {
        mainLinkCardStyle3[i].style.color = primaryTextColor;
    }
    mainLinkCardStyle3[0].style.color = black;
});

