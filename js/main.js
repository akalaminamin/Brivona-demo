$('.slider').slick({
  speed: 1000,
  slidesToShow: 4,
  Infinite: true,
  autoplay: true,
  autoplaySpeed: 1000,
  responsive: [{
      breakpoint: 1024,
      settings: {
        speed: 300,
        slidesToShow: 4,
        autoplay: true,
        autoplaySpeed: 1000,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$('.client-slider').slick({
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  autoplay: true,
  autoplaySpeed: 1000,
  adaptiveHeight: true
});

$('.count').counterUp({
  delay: 10,
  time: 1000
});