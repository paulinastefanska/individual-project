'use strict';

// Highlight current page
var menuPages = document.getElementsByClassName("menu_link");

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
    var all = document.querySelectorAll(".toggle");

    if (content) {

    for (var j = 0; j < all.length; j++) {
    	all[j].classList.add("hidden");
      }
      content.classList.remove("hidden");
    	}
  });
}

// Short menu show and fullwidth
function toggleMenu(cur = document.querySelector('#navigation').className) {
  if (cur == 'long')
  {
    document.querySelector('#navigation').classList.remove("long");
    document.querySelector('#navigation').classList.add("short");
    document.querySelector('#fullscreen').classList.remove("main");
    document.querySelector('#fullscreen').classList.add("fullwidth");
  }
  else {
    document.querySelector('#navigation').classList.remove("short");
    document.querySelector('#navigation').classList.add("long");
    document.querySelector('#fullscreen').classList.remove("fullwidth");
    document.querySelector('#fullscreen').classList.add("main");
  }
}

document.querySelector('#toggle').addEventListener('click', function(e) {
	e.preventDefault();
  toggleMenu();  
});

// Postback slide
document.querySelector('#triangle').style.marginLeft='61.9%';
document.querySelector('#torange').style.width='61.9%';
/*document.querySelector('#triangle').addEventListener('pointerdown', function(e){
  var ct=document.querySelector('#triangle').style.marginLeft;   
});*/
    

