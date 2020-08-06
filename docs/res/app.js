
var portfolio_color = $('#portfolio').css('color');
var research_color = $('#research').css('color');
var about_color = $('#about').css('color');
var github_color = 'rgba(23, 21, 21, 1)';


$('#research').hover(function(event) {
  $('.fill').css('color', research_color).css('box-shadow', 'inset 0 -2px 0 ' + research_color);
  $('#research').css('color', 'whitesmoke');
  }, function(event) {
    resetUI()
});

$('#about').hover(function(event) {
  $('.fill').css('color', about_color).css('box-shadow', 'inset 0 -2px 0 ' + about_color);
  $('#about').css('color', 'whitesmoke');
  }, function(event) {
    resetUI()
});

$('#portfolio').hover(function(event) {
  $('.fill').css('color', portfolio_color).css('box-shadow', 'inset 0 -2px 0 ' + portfolio_color);
  $('#portfolio').css('color', 'whitesmoke');
  }, function(event) {
    resetUI()
});

function resetUI() {
    $('#research').css('color', research_color).css('box-shadow', 'inset 0 -2px 0 ' + research_color);
    $('#about').css('color', about_color).css('box-shadow', 'inset 0 -2px 0 ' + about_color);
    $('#portfolio').css('color', portfolio_color).css('box-shadow', 'inset 0 -2px 0 ' + portfolio_color);
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
