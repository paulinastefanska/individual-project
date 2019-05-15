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
function toggleMenu(cur = document.getElementById('navigation').className) {
  if (cur == 'long')
  {
    document.getElementById('navigation').classList.remove("long");
    document.getElementById('navigation').classList.add("short");
    document.getElementById('fullscreen').classList.remove("main");
    document.getElementById('fullscreen').classList.add("fullwidth");
  }
  else {
    document.getElementById('navigation').classList.remove("short");
    document.getElementById('navigation').classList.add("long");
    document.getElementById('fullscreen').classList.remove("fullwidth");
    document.getElementById('fullscreen').classList.add("main");
  }
}

document.getElementById('toggle').addEventListener('click', function(e) {
	e.preventDefault();
  toggleMenu();  
});

// Postback slide
document.getElementById('triangle').style.marginLeft='61.9%';
document.getElementById('torange').style.width='61.9%';
/*document.querySelector('#triangle').addEventListener('pointerdown', function(e){
  var ct=document.querySelector('#triangle').style.marginLeft;   
});*/

// Popup Add URL
function newLink() {
  document.getElementById('url_popup').classList.remove('alert_hide');  
  document.getElementById('url_popup_wrapper').classList.remove('alert_hide');  
  
}

function closePopup(){
  document.getElementById('url_popup').classList.add('alert_hide');  
  document.getElementById('url_popup_wrapper').classList.add('alert_hide');  
}

document.querySelector("#add_link1").addEventListener('click', function(){ newLink(); });
document.querySelector("#add_link2").addEventListener('click', function(){ newLink(); });
document.querySelector("#add_link3").addEventListener('click', function(){ newLink(); });
document.querySelector("#add_link4").addEventListener('click', function(){ newLink(); });

document.querySelector('#url_popup_x').addEventListener('click', function(){ closePopup(); 
});