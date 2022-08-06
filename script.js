
window.addEventListener("scroll",() => {
    document.querySelector('nav').classList.toggle('window-scrolled', window.scrollY > 0);
})

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  }
});

const nav = document.querySelector('.nav-links');
const openNavBtn = document.querySelector('#nav-toggle-open');
const closeNavBtn = document.querySelector('#nav-toggle-close');

const openNav = () => {
  nav.style.display = "flex";
  openNavBtn.style.display = 'none';
  closeNavBtn.style.display = 'inline-block';
}

openNavBtn.addEventListener('click', openNav);

const closeNav = () => {
  nav.style.display = "none";
  openNavBtn.style.display = 'inline-block';
  closeNavBtn.style.display = 'none';
}

closeNavBtn.addEventListener('click', closeNav);

const textButtons = document.querySelectorAll('.contact-btn');

textButtons.forEach(textButton  => {
  let text = textButton.querySelector("p");
  text.innerHTML= text.innerHTML.split('').map((Character, index) => `<span style="transform: rotate(${index * 12}deg)">${Character}</span>`).join()
});

