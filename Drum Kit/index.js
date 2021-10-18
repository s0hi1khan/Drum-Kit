let noOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < noOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        let buttonClicked = this.innerHTML;
        makeSound(buttonClicked);
        buttonAnimation(buttonClicked);

       });

}

// keypress

document.addEventListener("keypress" , function(event){
    
    makeSound(event.key);
    buttonAnimation(event.key)
});

function makeSound(key) {

    switch (key) {
        case "a":
            let tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "s":
            let tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "d":
            let tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "f":
            let tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            let crash = new Audio("sounds/snare.mp3");
            crash.play();
            break;
        case "k":
            let snare = new Audio("sounds/crash.mp3");
            snare.play();
            break;
        case "l":
            let kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        default: console.log(key)
            break;
    }
}

function buttonAnimation(currentKey){
    
   var activeButton =  document.querySelector("." + currentKey)

    activeButton.classList.add("pressed");
    
    // for animation after 50milliseconds
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 50);

} 


















