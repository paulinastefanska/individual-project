'use strict';

var menuPages = document.getElementsByClassName("menu_link");
var modalTrigger = document.querySelectorAll('.modalTrigger');
var modalWrapper = document.querySelectorAll('.overlay');
var closeButtons = document.querySelectorAll('.closeButton');
var mainElement = document.querySelector('.main');
var leftMenu = document.getElementById('navigation');

// Check user screen width (mobile/desktop)
if (window.screen.width < 768) {
  mainElement.classList.add('active_menu');
  leftMenu.classList.add("short");
}
 
// Menu long short
function shortMenu(cur = leftMenu.className) {
  if (cur == 'menu_long')
  {
    leftMenu.classList.add("short");
    mainElement.classList.add('active_menu');
    
  }
  else {
    leftMenu.classList.remove("short");
    mainElement.classList.remove('active_menu');
  
  }
}
 
// Add event-listener for toggle button (hamburger)
document.getElementById('toggle').addEventListener('click', function(e) {
  e.preventDefault();
  shortMenu();
});

// Highlight current page
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
 
// Modals
function closeAllModals() {
  for (var i = 0; i < modalWrapper.length; i++) {
    modalWrapper[i].classList.remove('show');
  }
}
for (var i = 0; i < closeButtons.length; i++) {
  closeButtons[i].addEventListener('click', closeAllModals);
}
/*document.modalWrapper.addEventListener('click', function(e) {
  if(e.target === this) {
    closeAllModals();
  }
})*/

document.addEventListener('keyup', function(e) {
  if (e.keyCode === 27) {
    closeAllModals();
  }
})
document.getElementById('go_quit').addEventListener('click', function () { 
  closeAllModals();
      window.location.replace("https://github.com/paulinastefanska"); 
});

function openModal(e) {
  var currentModal = document.getElementById(e.currentTarget.dataset.target);
  currentModal.classList.add('show');
} 
for (var i = 0; i < modalTrigger.length; i++) {
  modalTrigger[i].addEventListener('click', openModal);
}

// Postback slide
document.getElementById('triangle').style.marginLeft='61.9%';
document.getElementById('torange').style.width='61.9%';

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
