var $ = require('jquery');

function thanks(){
  $('.callback__thx').addClass('open')
}

function close(){
  $('.footer__hidden').children().fadeOut();
}

function change(e){
  $(e).addClass('active');
  $(e).siblings().removeClass('active');
  console.log('123')
}

$('[close-button]').click(function(){
  close();
})


$('.hotels__item').click(function(){
  change(this);
})