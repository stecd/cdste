$('#github').hover(function(event) {
    $('.fill').css('color', 'rgba(23, 21, 21, 1)').css('box-shadow', 'inset 0 -2px 0 rgba(23, 21, 21, 1)');
    $('#github').css('color', 'whitesmoke');
  }, function(event) {
    resetUI()
  });

$('#linkedin').hover(function(event) {
  $('.fill').css('color', 'rgba(26, 132, 188, 1)').css('box-shadow', 'inset 0 -2px 0 rgba(26, 132, 188, 1)');
  $('#linkedin').css('color', 'whitesmoke');
  }, function(event) {
    resetUI()
});

$('#blog').hover(function(event) {
  $('.fill').css('color', '#0f8f7a').css('box-shadow', 'inset 0 -2px 0 #0f8f7a');
  $('#blog').css('color', 'whitesmoke');
  }, function(event) {
    resetUI()
});

$('#portfolio').hover(function(event) {
  $('.fill').css('color', 'rgba(208,91,70,1)').css('box-shadow', 'inset 0 -2px 0 rgba(208,91,70,1)');
  $('#portfolio').css('color', 'whitesmoke');
  }, function(event) {
    resetUI()
});

function resetUI() {
    $('#github').css('color', 'rgba(23, 21, 21, 1)').css('box-shadow', 'inset 0 -2px 0 rgba(23, 21, 21, 1)');
    $('#linkedin').css('color', 'rgba(26, 132, 188, 1)').css('box-shadow', 'inset 0 -2px 0 rgba(26, 132, 188, 1)');
    $('#blog').css('color', '#0f8f7a').css('box-shadow', 'inset 0 -2px 0 #0f8f7a');
    $('#portfolio').css('color', 'rgba(208,91,70,1)').css('box-shadow', 'inset 0 -2px 0 rgba(208,91,70,1)');
}