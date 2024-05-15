window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var navbar = document.getElementById("navbar");
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    navbar.classList.add("transparent");
  } else {
    navbar.classList.remove("transparent");
  }
}