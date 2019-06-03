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

// Short menu - fullwidth, long menu
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

// Modals add url, add banner

function(){ 
  var showModal = function(event){
    event.preventDefault();
    document.querySelector('.overlay').classList.add('show');
    document.querySelector('.modal').classList.add('show');
  }
  
  var modalLinks = document.querySelectorAll('.add_link');
  for(var i = 0; i < modalLinks.length; i++){
    modalLinks[i].addEventListener('click', showModal);
  }

  var hideModal = function(event){
    event.preventDefault();
    document.querySelector('.overlay').classList.remove('show');
    document.querySelector('.modal').classList.remove('show');
  }
  
  var closeButtons = document.querySelectorAll('.modal .icon-close');
  for(var i = 0; i < closeButtons.length; i++){
    closeButtons[i].addEventListener('click', hideModal);
  }
  
  document.querySelector('.overlay').addEventListener('click', hideModal);
  
  var modals = document.querySelectorAll('.modal');
  for(var i = 0; i < modals.length; i++){
    modals[i].addEventListener('click', function(event){
      event.stopPropagation();
    })
  }
  document.addEventListener('keyup', function(e) {
  if(e.keyCode === 27) {
    hideModal()}
  })
};

/*
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

*/

// Popups chat login quit
function closePopup() {
  document.getElementById('overlay_chat').classList.remove('show')
  document.getElementById('overlay_login').classList.remove('show')
  document.getElementById('overlay_quit').classList.remove('show')
}
document.querySelectorAll('#overlay_chat .icon-close').forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    e.preventDefault()
    closePopup()
  })
})
document.querySelectorAll('#overlay_login #close_login').forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    e.preventDefault()
    closePopup()
  })
})
document.querySelectorAll('#overlay_quit #close_quit').forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    e.preventDefault()
    closePopup()
  })
})
document.querySelector('#overlay_chat').addEventListener('click', function(e) {
  if(e.target === this) {
    closePopup()
  }
})
document.querySelector('#overlay_login').addEventListener('click', function(e) {
  if(e.target === this) {
    closePopup()
  }
})
document.querySelector('#overlay_quit').addEventListener('click', function(e) {
  if(e.target === this) {
    closePopup()
  }
})
document.getElementById('go_quit').addEventListener('click', function () { closePopup();
      window.location.replace("https://github.com/paulinastefanska"); 
});

document.addEventListener('keyup', function(e) {
  if(e.keyCode === 27) {
    closePopup()
  }
})


function openPopup1(modal) {
  document.querySelectorAll('#overlay_chat > *').forEach(function(modal) {
    modal.classList.remove('show')
  })
  document.querySelector('#overlay_chat').classList.add('show')
  document.querySelector('#chat_modal').classList.add('show')
}
document.querySelector("#start_chat").addEventListener('click', function(){ openPopup1(); 
});

function openPopup2(modal) {
document.querySelectorAll('#overlay_login > *').forEach(function(modal) {
    modal.classList.remove('show')
  })
  document.querySelector('#overlay_login').classList.add('show')
  document.querySelector('#login_modal').classList.add('show')
}
document.querySelector("#start_login").addEventListener('click', function(){ openPopup2(); 
});

function openPopup3(modal) {
document.querySelectorAll('#overlay_quit > *').forEach(function(modal) {
    modal.classList.remove('show')
  })
  document.querySelector('#overlay_quit').classList.add('show')
  document.querySelector('#quit_modal').classList.add('show')
}
document.querySelector("#start_quit").addEventListener('click', function(){ openPopup3(); 
});

// Chart
var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
        datasets: [{
            label: "Signups",
            backgroundColor: '#8DBEC8',
            borderColor: '#8DBEC8',
            data: [ 350, 200, 220, 350, 420, 400, 300, 280, 300, 280 ],
        },
        {
            label: "FTD",
            backgroundColor: '#F29E4E',
            borderColor: '#F29E4E',
            data: [ 400, 180, 300, 280, 450, 150, 200, 480, 320, 200 ],
        },
        {
            label: "Earned",
            backgroundColor: '#71B374',
            borderColor: '#71B374',
            data: [ 350, 200, 220, 350, 420, 400, 300, 280, 300, 280 ],
            hidden: true,
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                  max: 600,
                  min: 0,
                  stepSize: 100
                }
            }]
        }
    }
});
