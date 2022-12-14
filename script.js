
// scrolled effect in navbar

window.addEventListener("scroll",() => {
    document.querySelector('nav').classList.toggle('window-scrolled', window.scrollY > 0);
})

// swiper js section

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints:{
    599: {
      slidesPerView: 2,
      spaceBetween: 40
    },
    1023: {
      slidesPerView: 3,
      spaceBetween: 60
    }
  }
});


// navbar in tablets and mobiles

const nav = document.querySelector('.nav-links');
const openNavBtn = document.querySelector('#nav-toggle-open');
const closeNavBtn = document.querySelector('#nav-toggle-close');
const body = document.body

const openNav = () => {
  nav.style.display = "flex";
  openNavBtn.style.display = 'none';
  closeNavBtn.style.display = 'inline-block';
  body.style.overflow = 'hidden'
}
openNavBtn.addEventListener('click', openNav);


const closeNav = () => {
  nav.style.display = "none";
  openNavBtn.style.display = 'inline-block';
  closeNavBtn.style.display = 'none';
  body.style.overflow = 'auto'
}
closeNavBtn.addEventListener('click', closeNav);

if(document.body.clientWidth < 1024){
  nav.querySelectorAll('li a').forEach(navLink =>{
    navLink.addEventListener('click', closeNav);
  })
}

if(document.body.clientWidth < 1024){
  nav.querySelector('body').forEach(navLink =>{
    navLink.addEventListener('click', closeNav);
  })
}


