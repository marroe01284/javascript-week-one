//Q1

const someFunction = function(){

}

function saySomethingFunction(){

}

//Q2

//addEventListener 
//select the .btn

const button = document.querySelector(".btn");
console.log(button)

//way one 
// button.addEventListener("click", handleClick);

// //way two 
// function handleClick (){
//     console.log("clikcked me");
// }

button.onclick = function(){
    console.log("you clicked me");
}
button.onclick = function(event){
    console.log(event.target.value);
}

//Q3 key press
//onKeyDown event will trigger when you press on 
//onKeyUp the event will trigger when you realese the key 
// the onKeyPress

//onkeydown is most used the others are old tech

const myFirstNameInput = document.querySelector("#firstName");

const handleKeyPress = function (event){
console.log("a key is pressed");
console.log(this.value);
console.log(event.target.value);
}
myFirstNameInput.addEventListener("keydown", handleKeyPress);

//q4 hoover event
const theHoverButton = document.querySelector(".pet-btn");
const handleMouseOver = function(event){
    console.log(event.target.dataset.animal);
   event.target.style.backgroundColor = "red";
}
theHoverButton.addEventListener("mouseover", handleMouseOver);

const handleMouseOut = function(event){
    console.log(event.target.dataset.animal);
   event.target.style.backgroundColor = "white";
}
theHoverButton.addEventListener("mouseout", handleMouseOut);



