$(document).ready(function() {
    $(".c-slider").slick({
        infinite: true,
      
        responsive: [
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              dots: true,
            }
      
          }, {
      
            breakpoint: 300,
            settings: "unslick" // destroys slick
      
          }]
    });

    $(".c-list1__item").click(function(e) {
        $(".c-list1__item").each(function() {
          $(this).removeClass("is-active");
        })
        e.preventDefault();
        var aid = $(this).children().attr("class");
        $('html,body').animate({scrollTop: $("#"+ aid).offset().top - 100},'slow');
    });
    
    $(".c-header__icon").click(function() {
        if ($(this).hasClass("is-active")) {
            // $(this).children().css("display", "none");
            $(this).removeClass("is-active");
            $("body").css("overflow", "");
            $('.c-list1').removeClass("is-show");

            $(".c-list1").slideToggle(200);
        } else {
            // $(this).children().next().css("display", "block");
            $(this).addClass("is-active");
            $("body").css("overflow", "hidden");
            $('.c-list1').addClass("is-show");
            $(".c-list1").slideToggle(200);
        }
    });
});