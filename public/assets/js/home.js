$(document).ready(function() {
    $(".c-slider").slick({
        infinite: false,
      
        responsive: [{
      
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              infinite: true
            }
      
          }, {
      
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              dots: true
            }
      
          }, {
      
            breakpoint: 300,
            settings: "unslick" // destroys slick
      
          }]
    });
    $(".c-header__icon").click(function() {
        if ($(this).hasClass("is-active")) {
            $(this).children().css("display", "none");
            $(this).children().next().css("display", "block");
            $(this).removeClass("is-active");
            $('.c-list1').addClass("is-show");
            $(".c-list1").slideToggle(200);

        } else {
            $(this).children().css("display", "block");
            $(this).children().next().css("display", "none");
            $(this).addClass("is-active");
            $('.c-list1').removeClass("is-show");
            $(".c-list1").slideToggle(200);
        }
    });
});