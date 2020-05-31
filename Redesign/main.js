document.addEventListener('DOMContentLoaded', function(){
    let menuToggler = document.querySelector('.menu-toggler');
    let topNav = document.querySelector('.top-nav');
    let navLink = document.querySelectorAll('.nav-link');
    menuToggler.addEventListener('click', () => {
        menuToggler.classList.toggle('open');
        topNav.classList.toggle('open');
        console.log('Из первого')
    })
    for(let i=0; i<navLink.length; i++){
        navLink[i].addEventListener('click', () => {
            console.log('Из второго')
            menuToggler.classList.remove('open');
            topNav.classList.remove('open');
            smoothScroll(navLink[i].innerHTML.toLowerCase(), 1000);
        })
    }
    let up = document.querySelector('.up');
    up.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    })
    
    AOS.init({
        easing: 'ease',
        duration: 1000,
        once: true
    });

});