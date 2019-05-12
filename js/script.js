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

// Pages toggling
for (var i = 0; i < menuPages.length; i++) {
  menuPages[i].addEventListener("click", function () {
    var menuPages = this.getAttribute("href");
    var content = document.querySelector(menuPages + '_section');
    var all = document.querySelectorAll(".section");

    if (content) {

    for (var j = 0; j < all.length; j++) {
    	all[j].classList.add("hidden");
      	}
      	content.classList.remove("hidden");
    	}
  });
}
/*
// Menu show
function toggleMenu(visible) {
  document.querySelector('.menu').classList.toggle('show', visible)
}
document.querySelector('.menu_hamburger').addEventListener('click', function(e) {
  e.preventDefault();
  toggleMenu()
});*/

var theToggle = document.getElementById('toggle');

// hasClass
function hasClass(elem, className) {
	return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
}
// addClass
function addClass(elem, className) {
    if (!hasClass(elem, className)) {
    	elem.className += ' ' + className;
    }
}
// removeClass
function removeClass(elem, className) {
	var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ') + ' ';
	if (hasClass(elem, className)) {
        while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
            newClass = newClass.replace(' ' + className + ' ', ' ');
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    }
}
// toggleClass
function toggleClass(elem, className) {
	var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, " " ) + ' ';
    if (hasClass(elem, className)) {
        while (newClass.indexOf(" " + className + " ") >= 0 ) {
            newClass = newClass.replace( " " + className + " " , " " );
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    } else {
        elem.className += ' ' + className;
    }
}

theToggle.onclick = function() {
   toggleClass(this, 'on');
   return false;
}