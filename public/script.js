const menuBtn = document.getElementById('menu-btn');
const mobileNav = document.getElementById('mobile-nav');

menuBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('hidden');
    mobileNav.classList.toggle('flex');

    if(menuBtn.getAttribute('src') == './images/icon-hamburger.svg'){
        menuBtn.setAttribute('src', './images/icon-close.svg');
        menuBtn.setAttribute('alt', 'close')
    } else {
        menuBtn.setAttribute('src', './images/icon-hamburger.svg');
        menuBtn.setAttribute('alt', 'hamburger')
    }
})

mobileNav.addEventListener('click', () => {
    mobileNav.classList.add('hidden');
    mobileNav.classList.remove('flex');

    if(menuBtn.getAttribute('src') == './images/icon-hamburger.svg'){
        menuBtn.setAttribute('src', './images/icon-close.svg');
        menuBtn.setAttribute('alt', 'close')
    } else {
        menuBtn.setAttribute('src', './images/icon-hamburger.svg');
        menuBtn.setAttribute('alt', 'hamburger')
    }
})

const form = document.querySelector('#update-form');
const errorMess = document.querySelector('#error');

form.addEventListener('submit', e => {
    e.preventDefault();
    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(form.email.value.match(mailFormat)){
        errorMess.classList.add('hidden');
        form.email.classList.remove('error-border');
        form.email.classList.remove('text-red-600');
        form.reset();
    } else {
        errorMess.classList.remove('hidden');
        form.email.classList.add('error-border');
        form.email.classList.add('text-red-600');
    }
})

const swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
});

const toTop = document.querySelector('#to-top');
const scrollBtn = document.querySelector('#scroll-btn');

document.addEventListener('scroll', () => {
    scrollBtn.addEventListener('click', () => {
        window.scrollTo(0,0)
    })

    if(window.scrollY > 90){
        toTop.classList.remove('hidden');
        console.log('scroll')
    } else {
        toTop.classList.add('hidden');
    }
})