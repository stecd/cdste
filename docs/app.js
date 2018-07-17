$('#github').hover(function(event) {
    $('.fill').css('color', 'rgba(23, 21, 21, 1)').css('box-shadow', 'inset 0 -2px 0 rgba(23, 21, 21, 1)');
    $('#github').css('color', 'whitesmoke');
  }, function(event) {
    resetUI()
  });

$('#research').hover(function(event) {
  $('.fill').css('color', 'rgba(26, 132, 188, 1)').css('box-shadow', 'inset 0 -2px 0 rgba(26, 132, 188, 1)');
  $('#research').css('color', 'whitesmoke');
  }, function(event) {
    resetUI()
});

$('#about').hover(function(event) {
  $('.fill').css('color', '#0f8f7a').css('box-shadow', 'inset 0 -2px 0 #0f8f7a');
  $('#about').css('color', 'whitesmoke');
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
    $('#research').css('color', 'rgba(26, 132, 188, 1)').css('box-shadow', 'inset 0 -2px 0 rgba(26, 132, 188, 1)');
    $('#about').css('color', '#0f8f7a').css('box-shadow', 'inset 0 -2px 0 #0f8f7a');
    $('#portfolio').css('color', 'rgba(208,91,70,1)').css('box-shadow', 'inset 0 -2px 0 rgba(208,91,70,1)');
}

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("toTop").style.display = "block";
  } else {
    document.getElementById("toTop").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  $('body, html').animate({
        scrollTop: 0
  }, 800);
}