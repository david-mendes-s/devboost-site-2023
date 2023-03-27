var mySwiper = new Swiper('.swiper-container', {
    // Configurações do Swiper
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

// Obtém o botão e o modal
var botao = document.querySelector(".play");
var modal = document.querySelector(".modal");
var modalFechar = document.querySelector(".modal-fechar");

// Adiciona um ouvinte de evento ao botão
botao.addEventListener("click", function() {
  // Exibe o modal
  modal.style.display = "block";
});

// Adiciona um ouvinte de evento ao botão de fechar
modalFechar.addEventListener("click", function() {
  // Oculta o modal
  modal.style.display = "none";
});

// Adiciona um ouvinte de evento ao elemento window para fechar o modal ao clicar fora dele
window.addEventListener("click", function(event) {
  // Verifica se o alvo do evento não é o modal nem o botão de abrir o modal
  if (event.target == modal) {
    // Oculta o modal
    modal.style.display = "none";
  }
});
