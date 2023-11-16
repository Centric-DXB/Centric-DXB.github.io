// language specifier start
// var language = $("#langueage");
// var languageText = "";
// languageText =  language.val()!=undefined ? language.innerHTML : 'en';
// console.log(languageText);
// if (languageText == 'ar') {
//     var of = "من";
// } else {
//     var of = "of";
// }
// $('.sliderHome').bxSlider({
//     auto: true,
//     stopAutoOnClick: true,
// });


$('#close_popup').on('click',function(){
    $('.popup-content').removeClass('slideIn');
    $('.popup-content').addClass('slideOut');
    
   setTimeout(()=>{
    $('#popup').add('hidden');
    $('#popup').css('display', 'none');
   },300)
})

//who we are function is placed here.
function handleExpandMore() {
    $(".moreless-button").click(function () {
      const expandMore = ".expand-more";
      const expandLess = ".expand-less";
      const parent = $(this).parent();
      $(".moretext", parent).slideToggle();
      const isExpanded = $(this).hasClass("expand-more");

      if (isExpanded) {
        $(expandMore, parent).addClass("d-none");
        $(expandLess, parent).removeClass("d-none");
      } else {
        $(expandLess, parent).addClass("d-none");
        $(expandMore, parent).removeClass("d-none");
      }
    });
  }

  //FUNCTION CALLING
  handleExpandMore();

// CAREERS PAGE JOB APPLICATION FILE
const realFileBtn = document.getElementById("real-file");
const customBtn = document.getElementById("custom-button");
const customTxt = document.getElementById("custom-text");

if(customBtn && realFileBtn && customTxt) {
    customBtn.addEventListener("click", function () {
        realFileBtn.click();
    });
    realFileBtn.addEventListener("change", function () {
    if (realFileBtn.value) {
        customTxt.innerHTML = realFileBtn.value.match(
        /[\/\\]([\w\d\s\.\-\(\)]+)$/
        )[1];
    } else {
        customTxt.innerHTML = "No file chosen, yet.";
    }
});
}
function hidePreloader() {
    $('.preloader').addClass('open');
}
$(window).on('load', function(){
    hidePreloader();
})

$('.sliderHome').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 2000,
    Infinit: false,
    dots: true
});
var item_num = $('nav li').length + 1;
var btn_state = true;

$('nav.topsolution li').hover(function () {
    $(this).addClass('hover');
}, function () {
    $(this).removeClass('hover');
});

$('nav.topsolution li').on('click', function () {
    if (btn_state) {
        btn_state = !btn_state;
        $('nav li').removeClass('currentPage');
        $(this).addClass('currentPage');

        var i = $('nav li').index(this);
        $('article').removeClass('show');
        $('article').addClass('hide');
        $('article').eq(i).addClass('show');

        setTimeout(function () {
            btn_state = !btn_state;
        }, 500);
    }
});



function switchLob(elementId){
    const getLobs = document.querySelectorAll('.lob-mainlist-container');
    const lob = document.getElementById(elementId);
    getLobs.forEach((lob)=>{
        if(lob.classList.contains('active')){
            lob.classList.remove('active');
        }
    })

    lob.classList.add('active');


}


// $('a#data-one').click(function() {
//     $('#data-one').addClass('show');
//     $('#data-one').removeClass('hide');
//     $('#data-two').addClass('hide');
//     $('#data-three').addClass('hide');
//     $('#data-four').addClass('hide');
// });
// $('a#data-two').click(function() {
//     $('#data-one').removeClass('show');
//     $('#data-two').addClass('show');
//     $('#data-three').hide();
//     $('#data-four').hide();
// });
// $('#data-three').click(function() {
//     $('#data-one').hide();
//     $('#data-two').hide();
//     $('#data-three').show();
//     $('#data-four').hide();
// });
// $('#data-four').click(function() {
//     $('#data-one').hide();
//     $('#data-two').hide();
//     $('#data-three').hide();
//     $('#data-four').show();
// });


$('.topsolutions-mobile a').click(function () {
    $('a').removeClass('active-tab');
    $(this).addClass('active-tab');
});

// Show the first tab by default
$(".topsolutions-content-wrapper[data-tab='tab1']").show();

// Handle click event on the tab
$(".tab").click(function() {
  var tabToShow = $(this).data("tab");

  // Hide all tab contents
  $(".topsolutions-content-wrapper").hide();

  // Show the selected tab content
  $(".topsolutions-content-wrapper[data-tab='" + tabToShow + "']").show();
});


//$('#data-two, #data-three, #data-four').hide();




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
                //dots: true,
                //arrows: true
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
    autoplaySpeed: 1000,
    speed: 800,
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
            breakpoint: 769,
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
                slidesToScroll: 1
            }
        },

    ]
});
$('.partners-logos').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplaySpeed: 1000,
    speed: 800,
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
            breakpoint: 769,
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
                slidesToScroll: 1
            }
        },

    ]
});
$('.mobile-menu').click(function () {
    $('.navigation').slideToggle();
});
// MOBILE MENU DROPDOWN
$('.navigation ul li span').click(function () {
    $('.dropdown--menu').slideToggle('fast');
});

// $('html, body').animate({
//     scrollTop().offset.top
// }, 5000);

$(window).scroll(function () {
    var fixeheader = $('.head');
    var scrolltop = $(window).scrollTop();
    if (scrolltop >= 100) {
        fixeheader.addClass('fixed');
    }
    else {
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
    $st.text(i + ' / ' + slick.slideCount);
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

$('.ceo__memberSlider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    speed: 2000,
    autoplay: false,
    dots: false,
    arrows: true,
    responsive: [

        {
            breakpoint: 1025,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                //infinite: true,
                dots: false,
                arrows: false,
            }
        },
        {
            breakpoint: 630,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                arrows: false,

            }
        },
    ]
});

$('.ceo__memberSlider  .card .card-footer').on('click', function () {
    $('.ceo__memberSlider  .card .card-footer').removeClass('cstmAccordionBg');
    $(this).addClass('cstmAccordionBg');
});

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
                dots: true
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true
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
                dots: true
            }
        },
    ]
});

//carousel for top solutions
$('.solutions-carousel').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    // autoplaySpeed: 3000,
    // speed: 2000,
    infinite:false,
    // autoplay: true,
    dots: true,
    arrows: false,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                // dots: true   
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                //infinite: true,
                // dots: true
            }
        },
        {
            breakpoint: 550,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                // dots: true
            }
        },
    ]
});


$('.lang-toggle1 input:checkbox').change(function () {
    if ($(this).is(':checked')) {
        $('body').addClass('arabic');
    }
    else {
        $('body').removeClass('arabic');
    }
});
$('.navigation li .ar').click(function () {
    $('body').addClass('arabic');
});
$('.navigation li .en').click(function () {
    $('body').removeClass('arabic');
});

const elements = [...$(".accordion-item p")];
elements.forEach((el) => {
    if (!$(el).parent("li").hasClass("active")) {
        $(el).hide();
    }
});
// (Optional) Active an item if it has the class "is-active"
$(".accordion > .accordion-item.is-active").children("p").slideDown();
$(".accordion > .accordion-item").click(function () {
    // Cancel the siblings
    $(this)
        .siblings(".accordion-item")
        .removeClass("is-active")
        .children("p")
        .slideUp();
    // Toggle the item
    $(this).toggleClass("is-active").children("p").slideToggle("ease-out");
});

$('.ourindustry--carousel').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    speed: 1000,
    autoplay: true,
    arrows: true,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                //dots:true
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                //dots:true
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
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
                //dots:true
            }
        },
    ]
});


/*  share Price vlaue display on header*/

const settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://yh-finance.p.rapidapi.com/stock/v2/get-summary?symbol=7200.SR&region=SAR",
    "method": "GET",
    "headers": {
        "X-RapidAPI-Key": "f789a57fe4msh013b5906189c1dep122727jsnf841993f419c",
        "X-RapidAPI-Host": "yh-finance.p.rapidapi.com"
    }
};
$.ajax(settings).done(function (response) {
    var sharePrice = 'Share Price ' + response.price.regularMarketPrice.fmt + ' - TWDL | ' + response.price.regularMarketOpen.fmt + ' | ' + response.price.regularMarketChangePercent.fmt + ' ' + response.price.regularMarketChange.fmt;
    $('#sharePrice').append($('<option>', {
        value: '1',
        text: sharePrice
    }));
});

// SOLUTIONS (TOP SOLUTIONS) SECTION FUNCTIONS
$(".nav-pills-custom a").click(function (e) {
    e.preventDefault();

    $(".tab-content .tab-pane").removeClass("show active");
    console.log("helo");
    var img_id = $(this).data("dex");

    $("#" + img_id).addClass("show active");

    //console.log("#"+img_id);

    $(".nav-pills-custom a").removeClass("active");
    $(this).addClass("active");
});

// OUR INDUSTRIES FUNCTIONS
// $("#gover-name").click(function() {
//     $("#gover, #gover-img").show();
//     $("#health, #health-img").hide();
//     $("#smartciti, #smartciti-img").hide();
// });
// $("#smart-name").click(function() {
//     $("#gover, #gover-img").hide();
//     $("#health, #health-img").hide();
//     $("#smartciti, #smartciti-img").show();
// });

// $("#health-name").click(function() {
//     $("#gover, #gover-img").hide();
//     $("#health, #health-img").show();
//     $("#smartciti, #smartciti-img").hide();
// });

function removeClasses(element, isImageElement = false) {
    let id = $(element).attr("id");
    if (!id) return;
    if ($(element).hasClass("active")) {
        $(element).removeClass("active");
    }
}

$(".our-industry--content a").click(function () {
    const id = $(this).attr("id");
    const updateId = id.replace("-name", "");
    // console.log(updateId);
    const elements = $(".industry--carousel-content");
    [...elements].forEach(removeClasses);
    $(`#${updateId}`).addClass("active");
    const imgElements = $(".industry--image");
    [...imgElements].forEach(removeClasses);
    $(`.industry--image#${updateId}-img`).addClass("active");
});

$(".business--name-wrapper").click(function (e) {
    e.preventDefault();

    $(".service--business-img img").removeClass("current");

    var img_id = $(this).data("dex");

    $("#" + img_id).addClass("current");

    //console.log("#"+img_id);

    $(".business--name-wrapper").removeClass("current");
    $(this).addClass("current");
});
$(".lob-sideList li").click(function (e) {
    e.preventDefault();
 
    $(".lob-sideList li").removeClass("active");

    $(this).addClass("active");
});

// SERVICES SECTION FUNCTIONS
$(".services--items a").click(function (e) {
    e.preventDefault();
    $(".service-img img").removeClass("active");
    var img_id = $(this).data("dex");
    $("#" + img_id).addClass("active");
    //console.log("#"+img_id);
    $(".services--items li a").removeClass("active-text");
    $(this).addClass("active-text");
});


var $pg = $('.pagination');
var $slikEl = $('.slick-carousel');

$slikEl.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $pg.text(i + ' / ' + slick.slideCount);
});

// SERVICES PAGE LIST CAROUSEL
$slikEl.slick({
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


$('.careers-carousel').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    speed: 1000,
    dots: true,
    //autoplay: true,
    arrows: false,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                //dots:true
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                //dots:true
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
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
                //dots:true
            }
        },
    ]
});


var $pgin = $('.pagination');
var $slikSLD = $('.casestudy-listing-carousel');

$slikSLD.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $pgin.text(i + ' / ' + slick.slideCount);
});

// CASE STUDY CAROUSEL
$slikSLD.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    speed: 1000,
    //dots: true,
    autoplay: true,
    arrows: true,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                //dots:true
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                //dots:true
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                //infinite: true,
                arrows: false,
                dots: true
            }
        },
        {
            breakpoint: 550,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: true
            }
        },
    ]
});


$('.relatedstories-carousel').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    speed: 1000,
    //dots: true,
    autoplay: true,
    arrows: true,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                //dots:true
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                //dots:true
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                //infinite: true,
                arrows: false,
                dots: true
            }
        },
        {
            breakpoint: 550,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: true
            }
        },
    ]
});



$('.addfilter-btn').on('click', function(){
    $('.datalist').toggleClass("open");
});



$('.readmore-btn').on('click', function(){
    $('.message-content').toggleClass('is-active');
    $('#home').toggleClass('height-auto');
});

$('#success-carousel').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    speed: 1000,
    dots: false,
    arrows: true,
    infinite: false,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                //dots:true
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                //dots:true
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                //infinite: true,
                //dots: true
            }
        },
        {
            breakpoint: 550,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                //dots:true
            }
        },
    ],
    prevArrow: $('.slick-prev-btn'),
    nextArrow: $('.slick-next-btn')
})

// BLOG FAQ ACCORDION
$('.accordion-list > li > .answer').hide();
    
  $('.accordion-list > li').click(function() {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active").find(".answer").slideUp();
    } else {
      $(".accordion-list > li.active .answer").slideUp();
      $(".accordion-list > li.active").removeClass("active");
      $(this).addClass("active").find(".answer").slideDown();
    }
    return false;
});
$(window).scroll(function() {
    var scrollTop = $(window).scrollTop();
    var fixedDiv = $(".index-content");
    var clientInfo = $(".casestudydetail_list-wrapper");
    if(scrollTop > 500){
        fixedDiv.addClass("fixed");
        clientInfo.addClass("fixed");
    } else{
        fixedDiv.removeClass("fixed");
        clientInfo.removeClass("fixed");
    }
});

// $(window).scroll(function() {
//     var scrollTop = $(window).scrollTop();
//     var fixedDiv = $(".index-content");
     //var dynam = $(window).height();
//     if(scrollTop < 2000){
//         fixedDiv.removeClass("fixed");
//     } else{
//         fixedDiv.addClass("fixed");
//     }
// });

$(".playbtn").click(function(){
    $(".playbtn").hide();
    $(".ceostories-img img").hide();
    $(".video-section").show();
});

$('.index-content li a').on('click', function(){
    $("a").removeClass('active');
    $(this).addClass('active');
});





var slider = $('#success-carousel');
var currentSlide = slider.slick('slickCurrentSlide');
var totalSlides = slider.slick('slickGetOption', 'slidesToShow');
var currentSlideCount = $('#currentImageCount');
var totalSlideCount = $('#totalImageCount');

console.log(totalSlides);
// Update the initial slide count
currentSlideCount.text(currentSlide);
totalSlideCount.text(totalSlides);

// Attach event listeners to the previous and next buttons
$('.slick-prev-btn, .slick-next-btn').on('click', function() {
  currentSlide = slider.slick('slickCurrentSlide');
  currentSlideCount.text(currentSlide);
});


// Your Future with us section
$('.bullets-points').click(handingFutureSection);
$('.future-images-wrapper img').click(handingFutureSection)

$('.position-wrapper a.course-accordion').click(function () {
    const element =  $(this).parent().parent();
    if (element.attr('style')) {
        $(this).removeClass('minus')
        element.removeAttr("style");
        $(`.position-location .acc-desc`,element).removeAttr("style")
    }
    else {
        $(this).addClass('minus')
        $(element).css({maxHeight: '100%'})
        $(`.position-location .acc-desc`,element).css({overflow: 'unset', maxHeight: '100%'})
    }
})


$(".setaccordionbtn a").on("click", function () {
    if ($(this).hasClass("active")) {
        $(this).removeClass("active");
        $(this).siblings(".content").slideUp(200);
        $(".set > a i").removeClass("fa-minus").addClass("fa-plus");
    }
    else {
        $(".set > a i").removeClass("fa-minus").addClass("fa-plus");
        $(this).find("i").removeClass("fa-plus").addClass("fa-minus");
        $(".set > a").removeClass("active");
        $(this).addClass("active");
        $(".content").slideUp(200);
        $(this).siblings(".content").slideDown(200);
    }
});

function handingFutureSection() {
    let elementIndex = $(this).data('dex');

    //handling Bullets Points
    $('.bullets-points.active').removeClass('active');
    $(`.bullets-points[data-dex=${elementIndex}]`).addClass("active");

    //handing images
    $(`.future-images-wrapper img.active`).removeClass("active");
    $(`.future-images-wrapper img[data-dex=${elementIndex}]`).addClass('active')

    //handling contents
    $(".future-content-wrapper div.active").removeClass("active");
    $(`.future-content-wrapper div[data-dex=${elementIndex}]`).addClass('active')
}

function changeSuccessStoriesSection(index){
    let storyWrappers = document.querySelectorAll('.story-section-wrapper');
    let storryWrapper = document.querySelector(`#storyWrapper${index}`);
    storyWrappers.forEach((wrapper)=>{
        if(wrapper.classList.contains('active')){
            wrapper.classList.remove('active');
            return;
        }
    });
    storryWrapper.classList.add('active');
}



