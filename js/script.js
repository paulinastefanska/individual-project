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

document.querySelector('#url_closeU').addEventListener('click', function(){ closePopup(); 
});
document.querySelector('#url_save').addEventListener('click', function(){ closePopup(); 
});

// Popup Add banners
function newBanner() {
  document.getElementById('banner_popup').classList.remove('alert_hideB');  
  document.getElementById('banner_popup_wrapper').classList.remove('alert_hideB');  
  
}

function closePopupB(){
  document.getElementById('banner_popup').classList.add('alert_hideB');  
  document.getElementById('banner_popup_wrapper').classList.add('alert_hideB');  
}

document.querySelector("#add_banner1").addEventListener('click', function(){ newBanner(); });
document.querySelector("#add_banner2").addEventListener('click', function(){ newBanner(); });

document.querySelector('#url_closeB').addEventListener('click', function(){ closePopupB();
});
document.querySelector('#banner_save').addEventListener('click', function(){ closePopupB();
});  

// Other popups

//Chat
function chat() {
  document.getElementById('message_chat').classList.remove('chat_hide');  
  document.getElementById('message').classList.remove('chat_hide');  
}

function closeChat(){
  document.getElementById('message_chat').classList.add('chat_hide');  
  document.getElementById('message').classList.add('chat_hide');  
}

document.getElementById('start_chat').addEventListener('click', function(){ chat(); 
});

document.getElementById('chat_close').addEventListener('click', function(){ closeChat();
}); 

//Login
function login() {
  document.getElementById('login_wrapper').classList.remove('login_hide');  
  document.getElementById('login').classList.remove('login_hide');  
}

function closeLogin(){
  document.getElementById('login_wrapper').classList.add('login_hide');  
  document.getElementById('login').classList.add('login_hide');  
}

document.getElementById('start_login').addEventListener('click', function(){ login(); 
});

document.getElementById('close_login').addEventListener('click', function(){ closeLogin();
});

//Quit
function quit() {
  document.getElementById('quit_wrapper').classList.remove('quit_hide');  
  document.getElementById('quit').classList.remove('quit_hide');  
}

function closeQuit(){
  document.getElementById('quit_wrapper').classList.add('quit_hide');  
  document.getElementById('quit').classList.add('quit_hide');  
}
document.getElementById('start_quit').addEventListener('click', function(){ quit();
});

document.getElementById('close_quit').addEventListener('click', function(){ closeQuit();
});

//document.getElementById('go_quit').addEventListener('click', function () { closeQuit();
//      window.location.replace("https://github.com/paulinastefanska");
//});