// THIS IS FOR LOOP

for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        let inner = this.innerHTML;
        switchfun(inner);
        animation(inner);
 })
}

//FUNCTION OF KEYPRESS

document.addEventListener("keypress",function(event){
    switchfun(event.key);
    animation(event.key);
})

//FUNCTION OF SWITCH CASE
function switchfun(key) {
    switch (key) {
        case "q":
            let crash = new Audio("crash.mp3");
            crash.play();
            break;

        case "w":
            let kick = new Audio("kick-bass.mp3");
            kick.play();
            break;

        case "e":
            let snare = new Audio("snare.mp3");
            snare.play();
            break;

        case "r":
            let tom1 = new Audio("tom-1.mp3");
            tom1.play();
            break;

        case "a":
            let tom2 = new Audio("tom-2.mp3");
            tom2.play();
            break;

        case "s":
            let tom3 = new Audio("tom-3.mp3");
            tom3.play();
            break;

        case "d":
            let tom4 = new Audio("tom-4.mp3");
            tom4.play();
            break;

        default:
            break;
    }
}

//animation function

function animation(currentkey){
  let current =   document.querySelector("."+ currentkey);

  current.classList.add("anima");

  setTimeout(() => {
    current.classList.remove("anima");
  }, 200);
}
