$(document).ready(function(){
  $('.carousel__inner').slick({
    speed: 1200,
    // autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: '<button type="button" class="slick-prev"><img src="../icons/array-left.svg"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="../icons/array-right.svg"></button>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          dots: true
        }
      }
    ]
  });
});
