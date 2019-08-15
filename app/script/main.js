var $ = require('jquery');

function thanks(){
  $('.callback__thx').addClass('open')
}

function close(){
  $('.footer__hidden').children().fadeOut();
}

$('[close-button]').click(function(){
  close();
})


