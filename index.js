
var numberOfDrumBUttons = document.querySelectorAll(".drum").length;

//To detect button press
for (var i = 0; i < numberOfDrumBUttons; i++) {

  document.querySelectorAll("button")[i].addEventListener("click", function() {

    var buttonInnerHtml = this.innerHTML;
    makeSound(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);

  });
}

//To detect keyboard press
document.addEventListener("keydown", function(event) {

  makeSound(event.key);
  buttonAnimation(event.key);

});

function makeSound(key) {

  switch (key) {
    case 'w':
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;

    case 'a':
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;

    case 's':
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case 'd':
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case 'j':
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case 'k':
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;

    case 'l':
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    default:
      console.log(key);
  }
}

function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
