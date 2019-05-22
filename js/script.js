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

// Popups/Modals
function closeModal() {
  document.getElementById('overlay1').classList.remove('show')
  document.getElementById('overlay2').classList.remove('show')
}
document.querySelectorAll('#overlay1 .icon-close').forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    e.preventDefault()
    closeModal()
  })
})
document.querySelectorAll('#overlay2 .icon-close').forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    e.preventDefault()
    closeModal()
  })
})
document.querySelector('#overlay1').addEventListener('click', function(e) {
  if(e.target === this) {
    closeModal()
  }
})
document.querySelector('#overlay2').addEventListener('click', function(e) {
  if(e.target === this) {
    closeModal()
  }
})
document.addEventListener('keyup', function(e) {
  if(e.keyCode === 27) {
    closeModal()
  }
})

function openModal1(modal) {
  document.querySelectorAll('#overlay1 > *').forEach(function(modal) {
    modal.classList.remove('show')
  })
  document.querySelector('#overlay1').classList.add('show')
  document.querySelector('#url_modal').classList.add('show')
}
document.querySelectorAll("#add_link1, #add_link2, #add_link3, #add_link4").forEach(function (e) {
  e.addEventListener('click', function(){ openModal1(); 
})});


function openModal2(modal) {
document.querySelectorAll('#overlay2 > *').forEach(function(modal) {
    modal.classList.remove('show')
  })
  document.querySelector('#overlay2').classList.add('show')
  document.querySelector('#banner_modal').classList.add('show')
}
document.querySelectorAll("#add_banner1, #add_banner2").forEach(function (e) {
  e.addEventListener('click', function(){ openModal2(); 
})});




/*
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

document.getElementById('start_chat').addEventListener('click', function(){ chat(); });
document.getElementById('chat_close').addEventListener('click', function(){ closeChat(); }); 

//Login
function login() {
  document.getElementById('login_wrapper').classList.remove('login_hide');  
  document.getElementById('login').classList.remove('login_hide');  
}

function closeLogin(){
  document.getElementById('login_wrapper').classList.add('login_hide');  
  document.getElementById('login').classList.add('login_hide');  
}

document.getElementById('start_login').addEventListener('click', function(){ login(); });

document.getElementById('close_login').addEventListener('click', function(){ closeLogin(); });

//Quit
function quit() {
  document.getElementById('quit_wrapper').classList.remove('quit_hide');  
  document.getElementById('quit').classList.remove('quit_hide');  
}

function closeQuit(){
  document.getElementById('quit_wrapper').classList.add('quit_hide');  
  document.getElementById('quit').classList.add('quit_hide');  
}
document.getElementById('start_quit').addEventListener('click', function(){ quit(); });

document.getElementById('close_quit').addEventListener('click', function(){ closeQuit(); });

document.getElementById('go_quit').addEventListener('click', function () { closeQuit();
      window.location.replace("https://github.com/paulinastefanska"); });
*/