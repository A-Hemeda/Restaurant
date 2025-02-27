/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

/* Show menu */
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}
/* Hide menu */
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('show-menu');
}

navLink.forEach(link => link.addEventListener('click', linkAction));

/*=============== ADD SHADOW TO HEADER ===============*/
const shadowHeader = () => {
  const header = document.getElementById('header');
  const SCROLL_THRESHOLD = 50;
  
  header.classList.toggle('shadow-header', window.scrollY >= SCROLL_THRESHOLD);
}

window.addEventListener('scroll', shadowHeader);

/*=============== SWIPER POPULAR ===============*/
const swiperPopular = new Swiper('.swiper', {
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
});

/*=============== SHOW SCROLL UP ===============*/

const showScrollUp = () => {
  const scrollUp = document.getElementById('scroll-up');
  scrollUp.classList.toggle('show-scroll', window.scrollY >= 350);
}

window.addEventListener('scroll', showScrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]'); 

const scrollActive = () => {
  const scrollDown = window.scrollY; 

  sections.forEach(section => {
    const sectionHeight = section.offsetHeight; 
    const sectionTop = section.offsetTop - 58;
    const sectionId = section.getAttribute('id');
    const sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add('active-link');
    }else{
      sectionsClass.classList.remove('active-link')
    }
  });
}

window.addEventListener('scroll', scrollActive);


/*=============== SCROLL REVEAL ANIMATION===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 300,
  // reset: true
})

sr.reveal(`.home__data , .popular__container, .footer`)
sr.reveal(`.home__board`,{delay:700,distance:'100px',origin:'right'})
sr.reveal(`.home__pizza`,{delay:1400,distance:'100px',origin:'bottom',rotate:{z:-90}})
sr.reveal(`.home__ingredient`,{delay:2000,interval:100})
sr.reveal(`.about__data, .recipe__list, .contact__data`,{origin:'right'})
sr.reveal(`.about__img, .recipe__img, .contact__image`,{origin:'left'})
sr.reveal(`.products__card`,{interval:100})
