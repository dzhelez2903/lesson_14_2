/*set slider*/

$(document).ready(function () {
  $('.product_card__container__slider').slick({
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
  });
});