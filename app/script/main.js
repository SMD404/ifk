var $ = require('jquery');
require('slick-carousel');
require('fancybox');

function thanks(){
  $('.callback__thx').addClass('open')
}

// thanks()

function close(){
  $('.footer__hidden').children().fadeOut();
}

$(document).ready(function(){
  if($(window).width() < 768) {
    $('.hotels__item').addClass('active')
  }
});

$(window).resize(function (){
  if($(window).width() < 768) {
    $('.hotels__item').addClass('active')
  } else {
    $('.hotels__item').not('.hotels__item:first').removeClass('active')
  }
});

function change(e){
  if($(window).width() > 768) {
  $(e).addClass('active');
  $(e).siblings().removeClass('active');
  }
}

function callback(){
  $('body').addClass('body-fixed')
  $('.footer__hidden').css('display', 'flex')
}


$(document).scroll(function(){
  var topWindow = $(window).scrollTop();
  if ( topWindow >= 200 ) {
      $('.button-top').fadeIn(300);
  } else {
      $('.button-top').fadeOut(300);
  }
});


$('[close-button]').on('click', function(){
  close();
})

$('.button-top').on('click', function(){
  $("html").animate({ scrollTop: 0 }, "slow");
});



$('.hotels__item').on('click', function(){
  change(this);
})

$(document).ready(function(){
  if($(window).width() < 768) {
    $('.hotels__item').addClass('active')
  }
});


var hamburger = $('.humburger');
hamburger.click(function () {
  hamburger.toggleClass('active');
  $('.menu').toggleClass('active');
  return false;
});

$('.gallery').slick({
  dots: true,
  speed: 300,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: '150px',
  rows: 0,
  prevArrow: '.prev-gallery',
  nextArrow: '.next-gallery',
  responsive: [
    {
      breakpoint: 1250,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        centerMode: true,
        centerPadding: '70px',
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '150px',
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '50px',
      }
    },
    {
      breakpoint: 420,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '20px',
      }
    }
  ]
})

$('.slider-portfolio').slick({
  dots: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: false,
  rows: 0,
  prevArrow: '.prev-portfolio',
  nextArrow: '.next-portfolio',
  responsive: [
    {
      breakpoint: 1190,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 420,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
})

$('.slick-subscribe').slick({
  dots: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: true,
  rows: 0,
  prevArrow: '.prev-subscribe',
  nextArrow: '.next-subscribe',
  responsive: [{
      breakpoint: 1190,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
})


