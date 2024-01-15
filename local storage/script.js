function addThreNumbers(num1, num2, num3){
    return num1 + num2 + num3;
}
let resultOfSummision = addThreNumbers(10, 20, 50);
console.log("result: ",resultOfSummision);

function multiplyThreNumbers(num1, num2, num3){
    return num1 * num2 * num3;
}
let result = multiplyThreNumbers(5, 10, 15)
console.log("result:", result);

//target html document.quarryselector
let heading = document.querySelector("h1")
let button = document.querySelector("button")
let buttonColors = document.querySelector(".colors");
let body = document.querySelector("body")

function changeHeading(){
    heading.innerHTML = "its a good dag i dag";
    
}
button.onclick = changeHeading;

function changeColor(){
    body.style.backgroundColor = "blue";
    heading.style.color = "green";
}
buttonColors.onclick = changeColor;

const buttonCat = document.querySelector(".cat")
const pet = {
    type: "cat",
    name: "titty",
    age: 10,
    isFriendly: false,
    mewMew : function(){
        console.log("the sound of the cat");
    }
};
pet.mewMew();

buttonCat.onclick =pet.mewMew;




