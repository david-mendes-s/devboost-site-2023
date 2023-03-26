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