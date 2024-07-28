let secondSwiper  = new Swiper(".first-swiper", {
  loop: true,
  spaceBetween: 32,
  grabCursor: true,

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  //   dynamicBullets: true,
  // },

  navigation: {
    nextEl: ".section4 .section4-next",
    prevEl: ".section4 .section4-prev",
},

  breakpoints: {
    600: {
      slidesPerView: 1,
    },
    968: {
      slidesPerView: 1,
    },
    1120: {
      slidesPerView: 2,
    },
  },
});





