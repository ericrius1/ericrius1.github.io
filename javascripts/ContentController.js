$(document).ready(function() {
  //$('#container').hide();
  var opacityTarget = 1.0;
  $('canvas').animate({opacity: 0.06}, 1000);
  
  var glow = $('#name');
  setInterval(function() {
    glow.toggleClass('glow');
  }, 1000);

  $('#name').on('click', function() {
    $('#container').fadeToggle(1000);
    console.log(opacityTarget);
    $('#canvas').animate({
      opacity: opacityTarget,
    }, 1000, function() {
      opacityTarget = opacityTarget === 1.0 ? 0.06 : 1.0;

    });

  });
})