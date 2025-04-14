var swiper = new Swiper(".swiper", {
  slidesPerView: "auto",
  direction: "horizontal",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    resize: function () {
      swiper.changeDirection(getDirection());
    },
  },
});
