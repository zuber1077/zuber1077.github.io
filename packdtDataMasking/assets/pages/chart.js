$('.vertical .progress-fill span').each(function(){
  var percent = $(this).html();
  var text = $('.vertical .progress div');
  var pTop = 100 - ( percent.slice(0, percent.length - 1) ) + "%";
  $(this).parent().css({
    'height' : percent,
    'top' : pTop
  });
});

$('.progress-fill').on('mousemove', displayTooltip);
$('.progress-fill').on('mouseleave', hideTooltip);

function displayTooltip(e) {
  var x = e.pageX; 
  var y = e.pageY;
  $('.info-card').css('display', 'inline-flex');
  $('.info-card').css('position', 'absolute');
  $('.info-card').css('left', x - 108);
  $('.info-card').css('top', y - 144);
  $('.info-card').children('.card-text').text($(this).text());
}

function hideTooltip() {
  $('.info-card').css('display', 'none');
}
