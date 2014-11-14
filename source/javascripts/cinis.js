//= require_tree .

$(function() {
  $('.tip').tipr({
    speed: 400,
    mode: 'top'
  });

  $('.gallery a').fancybox();

  $('body').plusAnchor({
    easing: 'easeInOutExpo',
    speed:  300
  });
});
