'use strict';

// Add active class to the current page to highlight it
var menuLeft = document.getElementById("leftMenu");
var menuPages = menuLeft.getElementsByClassName("menu_link");
for (var i = 0; i < menuPages.length; i++) {
  menuPages[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}