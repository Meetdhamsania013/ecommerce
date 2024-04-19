(function($) {

  "use strict";

  var initPreloader = function() {
    $(document).ready(function($) {
    var Body = $('body');
        Body.addClass('preloader-site');
    });
  }


  var initSwiper = function() {

    var swiper = new Swiper(".main-swiper", {
      speed: 500,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    var category_swiper = new Swiper(".category-carousel", {
      slidesPerView: 8,
      spaceBetween: 30,
      speed: 500,
      navigation: {
        nextEl: ".category-carousel-next",
        prevEl: ".category-carousel-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        991: {
          slidesPerView: 5,
        },
        1500: {
          slidesPerView: 8,
        },
      }
    });

    $(".products-carousel").each(function(){
      var $el_id = $(this).attr('id');

      var products_swiper = new Swiper("#"+$el_id+" .swiper", {
        slidesPerView: 5,
        spaceBetween: 30,
        speed: 500,
        navigation: {
          nextEl: "#"+$el_id+" .products-carousel-next",
          prevEl: "#"+$el_id+" .products-carousel-prev",
        },
        breakpoints: {

          0: {
            slidesPerView: 1,
          },
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 4,
          },
          850: {
            slidesPerView: 4,
          },
          991: {
            slidesPerView: 5,
          },
          1500: {
            slidesPerView: 5,
          },
        }
      });

    });

  }

    // input spinner
    var initProductQty = function(){

      $('.product-qty').each(function(){
        
        var $el_product = $(this);
        var quantity = 0;
        
        $el_product.find('.quantity-right-plus').click(function(e){
          e.preventDefault();
          quantity = parseInt($el_product.find('#quantity').val());
          $el_product.find('#quantity').val(quantity + 1);
        });
  
        $el_product.find('.quantity-left-minus').click(function(e){
          e.preventDefault();
          quantity = parseInt($el_product.find('#quantity').val());
          if(quantity>0){
            $el_product.find('#quantity').val(quantity - 1);
          }
        });
      });
    }

  // document ready Function use
  $(document).ready(function() {
    initPreloader();
    initSwiper();
    initProductQty();
   });  

})(jQuery);
