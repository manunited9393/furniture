window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.menu'),
        menuItem = document.querySelectorAll('.menu__item'),
        hamburger = document.querySelector('.hamburger'),
        catItem = document.querySelectorAll('.catalog-item'),
        rem = document.querySelectorAll(".catalog-item__img-info");

  hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('hamburger_active');
      menu.classList.toggle('menu_active');
  });

  menuItem.forEach(item => {
      item.addEventListener('click', () => {
          hamburger.classList.toggle('hamburger_active');
          menu.classList.toggle('menu_active');
      });
  });

});

$(document).ready(function(){
    $('.slide').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-btn slick-prev icon-angle-left"> </button>',
        nextArrow: '<button type="button" class="slick-btn slick-next icon-angle-right"> </button>',
        adaptiveHeight: true,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                dots: false
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                customPaging : function(slider, i) {
                    var thumb = $(slider.$slides[i]).data('thumb');
                return '<div class="dots-optimize"></div>';
                }
              }
            }
          ]
    });
    // ЯКОРЬ!


    // $("#up-top").on("click","a", function (event) {
    //   event.preventDefault();
    //   var id  = $(this).attr('href'),
    //       top = $(id).offset().top;
    //   $('body,html').animate({scrollTop: top}, 1500);
    // });

    $(".catalog-item__link").each(function(i) {
      $(this).on('click', function(e) {
        e.preventDefault();
        $(".catalog-item__info").eq(i).toggleClass("catalog-item__info_active");

        if($(this).text() == 'обратно'){
          $(this).text('подробнее');
        } else {
          $(this).text('обратно');
      }
      });
    });

    $('ul.products__tabs').on('click', 'li:not(.products__tab_active)', function() {
      $(this)
        .addClass('products__tab_active').siblings().removeClass('products__tab_active')
        .closest('div.container').find('div.products__content').removeClass('products__content_active').eq($(this).index()).addClass('products__content_active');
    });

    $('form').submit(function(e) {
      e.preventDefault();
      $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
      }).done(function() {
        $(this).find("input").val("");
        $('.overlay__modal-main').fadeOut();
        $('#thanks, .overlay').fadeIn('slow');
        
        $('form').trigger('reset');
      });
      return false;
    });

    $(".catalog-item__btn, .header__btn").on('click', function() {
      $('.overlay, #order').fadeIn();
    });

    $('.overlay__modal-close').on('click', function() {
      $('#order, #close, .overlay').fadeOut();
    });


    jQuery(function(f){
      var element = f('.up');
      f(window).scroll(function(){
          element['fade'+ (f(this).scrollTop() > 1000 ? 'In': 'Out')](500);            
      });
    });


  
      

    


    // $('.modal__close').on('click', function() {
    //   $('.overlay, #connection, #thanks').fadeOut('slow');
    // })

    // $('.catalog-item__btn').each(function(i) {
    //   $(this).on('click', function() {
    //     // $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
    //     $('.overlay').fadeIn();
    //   })
    // });


    // верхнее меню убирает-добавляет
    $(".column img").on('click', function() {
      $(".header__top").fadeOut();
    });
    $("#myModal span.close").on('click', function() {
      $(".header__top").fadeIn();
    });


});