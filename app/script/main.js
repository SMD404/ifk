var $ = require('jquery');

function thanks(){
  $('.callback__thx').addClass('open')
}

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