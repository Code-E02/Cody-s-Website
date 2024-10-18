const button = document.getElementById("buttonUnpushedSprite");
const buttonPushed = document.getElementById("buttonPushed");
const background = document.querySelector(".background");
var counter = 0 

function pushButton(){
    button.style.display = "none";
    buttonPushed.style.display = "block";
    const randomColor = '#' + Math.floor(Math.random()*123456).toString(16);
    background.style.backgroundColor = randomColor;
    var dispnum= document.getElementById("square");
}
 
function releaseButton(){
    button.style.display = "block";
    buttonPushed.style.display = "none";

}
button.addEventListener("click", pushButton);
document.addEventListener("mouseup", releaseButton);
document.getElementsByTagName("p").innerHTML ="hello"; 

/*const button = document.getElementById("buttonUnpushedSprite");
const buttonPushed = document.getElementById(".buttonPushed");
const background = document.querySelector("background");
button.style.display = "none";
buttonPushed.style.display = "block";
const randomColor = '#' + Math.floor(Math.random()*123456).toString(16);
background.style.backgroundColor = randomColor;

function releaseButton(){
button.style.display = "block";
buttonPushed.style.display = "none";

}
function pushButton(){
    button.style.display = "none";
    buttonPushed.style.display = "block";
    const randomColor = '#' + Math.floor(Math.random()*6767676).toString(16);
    background.style.backgroundColor = randomColor;
}
button.addEventListener("click", pushButton);
document.addEventListener("mouse", releaseButton);
document.getElementsByTagName("p").innerHTML ="hello";

