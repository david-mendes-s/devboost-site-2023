// Biblioteca AOS
AOS.init({
  duration: 1000,
  easing: 'ease-in-out',
  delay: 100,
  once: true
});


// Carrossel com a biblioteca Swiper
var mySwiper = new Swiper('.swiper-container', {
      loop: true,
      pagination: {
          el: '.swiper-pagination',
      },
      slidesPerView: 'auto',
      breakpoints: {
          768: {
              slidesPerView: 2,
          }
      },
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
});

// JS do modal do vídeo do Youtube
var botao = document.querySelector(".play");
var modal = document.querySelector(".modal");
var modalFechar = document.querySelector(".modal-fechar");

botao.addEventListener("click", function() {
  modal.style.display = "block";
});

modalFechar.addEventListener("click", function() {
  modal.style.display = "none";
});

window.addEventListener("click", function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

//Menu dropdown

const buttonDropDown = document.getElementById('menu-toggle');
const nav = document.getElementById('menu-dropdown');
// adiciona um padding a proxima section 
const text = document.getElementById('text-pd');

let isMenuOpen = false;

buttonDropDown.addEventListener('click', function( ){
  
  if (isMenuOpen) {
    nav.classList.add("menu-dropdown");
    isMenuOpen = false;
    text.classList.add("text-pd");
    
  } else {
    nav.classList.remove("menu-dropdown");
    isMenuOpen = true;
    text.classList.remove("text-pd");
  }  
})