function showMenu() {
  var topNav = document.getElementById('navegacion-top');
  if (topNav.className === "navegacion") {
    topNav.className += " show";
  } else {
    topNav.className = "navegacion";
  }
}

var btn = $('#backtotop');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({ scrollTop: 0 }, '100');
});