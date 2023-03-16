
    // $('.sliderHome').bxSlider({
    //     auto: true,
    //     stopAutoOnClick: true,
    // });
    $('.sliderHome').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 800,
        autoplay: true,
        autoplaySpeed: 6000,
        Infinit: false,
        dots: true
    });
    var item_num = $('nav li').length + 1;
    var btn_state = true;
    
    $('nav.topsolution li').hover(function(){
        $(this).addClass('hover');
    },function(){
        $(this).removeClass('hover');
    });
    
    $('nav.topsolution li').on('click',function(){
        if(btn_state){
            btn_state = !btn_state;
            $('nav li').removeClass('currentPage');
            $(this).addClass('currentPage');

            var i = $('nav li').index(this);
            $('article').removeClass('show');
            $('article').addClass('hide');
            $('article').eq(i).addClass('show');
            
            setTimeout(function(){
            btn_state = !btn_state;
            },500);
        }
    });

    // DESKTOP CAROUSEL
    $('.slick-carousel').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 400,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
            breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    //infinite: true,
                    //dots: true
                }
            },
            {
            breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    //infinite: true,
                    //dots: true
                }
            },
            {
            breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    //infinite: true,
                    //dots: true
                }
            },
            {
            breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    //infinite: true,
                    //dots: true
                }
            },
            {
            breakpoint: 550,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false
                }
            },
            
        ]
    });


    $('.aboutus-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        dots: false,
        responsive: [
            {
            breakpoint: 1400,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    //infinite: true,
                    //dots: true
                }
            },
            {
            breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    //infinite: true,
                    //dots: true
                }
            },
            {
            breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    //infinite: true,
                    //dots: true
                }
            },
            {
            breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    //infinite: true,
                    //dots: true
                }
            },
            {
            breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            
        ]
    });
    //AOS.init();
    
    $('.client-logos').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
        speed: 2000,
        autoplay: true,
        dots: false,
        arrows: false,
        responsive: [
            {
            breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
            breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
            breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    //infinite: true,
                    //dots: true
                }
            },
            {
            breakpoint: 550,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            
        ]
    });
    $('.partners-logos').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
        speed: 2000,
        autoplay: true,
        dots: false,
        arrows: false,
        responsive: [
            {
            breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
            breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
            breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    //infinite: true,
                    //dots: true
                }
            },
            {
            breakpoint: 550,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            
        ]
    });
    $('.mobile-menu').click(function(){
        $('.navigation').slideToggle();
    });
    // $('html, body').animate({
    //     scrollTop().offset.top
    // }, 5000);

    $(window).scroll(function(){
        var fixeheader = $('.head');
        var scrolltop = $(window).scrollTop();
        if (scrolltop >= 100){
            fixeheader.addClass('fixed');
        }else{
            fixeheader.removeClass('fixed');
        }
    });
    let faqs = $(".faq_details");
    $(".faq_title").click(function () {
        faqs.slideUp();
        faqs.prev().removeClass("active");
        $(this).next().slideDown();
        $(this).addClass("active");
    return false;
    });

    var $st = $('.pagination');
    var $slickEl = $('.industries__cardSLider');

    $slickEl.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        $st.text(i + ' of ' + slick.slideCount);
      });
      
      $slickEl.slick({
        slidesToShow: 3,
        focusOnSelect: true,
        dots: false,
        infinite: true,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1
            }
          }
        ]
      });

    // $('.industries__cardSLider').slick({
    //     infinite: true,
    //     slidesToShow: 3,
    //     slidesToScroll: 3,
    //     autoplaySpeed: 3000,
    //     speed: 2000,
    //     autoplay: false,
    //     dots: false,
    //     arrows: true,
    //     responsive: [
           
    //         {
    //         breakpoint: 768,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1,
    //                 //infinite: true,
    //                 dots: true
    //             }
    //         },
    //         {
    //         breakpoint: 550,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1,
    //                 dots:true
    //             }
    //         },
    //     ]
    //   });
    
    // ENGLISH CAROUSEL
    $('.seminar-carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
        speed: 2000,
        autoplay: true,
        dots: true,
        arrows: false,
        responsive: [
            {
            breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots:true
                }
            },
            {
            breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots:true
                }
            },
            {
            breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    //infinite: true,
                    dots: true
                }
            },
            {
            breakpoint: 550,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots:true
                }
            },
        ]
    });
    
    
    $('.lang-toggle1 input:checkbox').change(function(){
        if($(this).is(':checked')){
            $('body').addClass('arabic');
        } else {
            $('body').removeClass('arabic');
        }
    });
    $('.navigation li .ar').click(function(){
        $('body').addClass('arabic');
    });
    $('.navigation li .en').click(function(){
        $('body').removeClass('arabic');
    });

    // (Optional) Active an item if it has the class "is-active"	
	$(".accordion > .accordion-item.is-active").children(".accordion-panel").slideDown();
	
	$(".accordion > .accordion-item").click(function() {
		// Cancel the siblings
		$(this).siblings(".accordion-item").removeClass("is-active").children(".accordion-panel").slideUp();
		// Toggle the item
		$(this).toggleClass("is-active").children(".accordion-panel").slideToggle("ease-out");
	});

    $('.ourindustry--carousel').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
        speed: 2000,
        //autoplay: true,
        arrows: true,
        responsive: [
            {
            breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots:true
                }
            },
            {
            breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots:true
                }
            },
            {
            breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    //infinite: true,
                    dots: true
                }
            },
            {
            breakpoint: 550,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots:true
                }
            },
        ]
    });

    
    
    
    
