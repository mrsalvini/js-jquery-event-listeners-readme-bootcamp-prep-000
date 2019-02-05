//define functions here

function getIt() {
  alert("hey!");
}

function frameIt() {
  $("img").addClass("tasty")
}

<<<<<<< HEAD
function pressIt() {
  $("#typing").on('keydown', function(key) {
    if(key.which == 71) {
      alert('G was pressed');
    }
  })
=======
function pressIt(event) {
  var pressed = event.key
  if (pressed == "G") {
      alert('G was pressed');
  }
>>>>>>> dab68e3b634da2e4302860bedff7b8a4766628fe
}

function submitIt() {
  alert("Your form is going to be submitted now.")
}



$(document).ready(function() {

// call functions here

$("p").on("click", getIt)

frameIt()

<<<<<<< HEAD
pressIt()
=======
$("#typing").on("keydown", pressIt)
>>>>>>> dab68e3b634da2e4302860bedff7b8a4766628fe

$("form").on("submit", submitIt)

});
