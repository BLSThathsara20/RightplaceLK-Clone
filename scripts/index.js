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