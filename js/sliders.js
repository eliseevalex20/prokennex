$(document).ready(function(){
    $('.slider').slick({
      autoplay: true,
      autoplaySpeed: 5000,
      arrows: false,
      dots: true
    });
  });

  $(document).ready(function(){
    $('.slider-popular-products').slick({
        infinite: true,
        slidesToShow: 5, 
        slidesToScroll: 5,
        arrows: true,
        dots: true 
    });
});

$(document).ready(function(){
  $('.m-slider-popular-products').slick({
      infinite: true,
      slidesToShow: 2, 
      slidesToScroll: 2,
      arrows: true,
      dots: true 
  });
});


  