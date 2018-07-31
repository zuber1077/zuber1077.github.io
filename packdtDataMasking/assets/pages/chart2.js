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



function hideTooltip() {
  $('.info-card').css('display', 'none');
}
