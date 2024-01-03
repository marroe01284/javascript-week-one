// 1. Select the heading h2

// querySelector
//querySelectorAll
// getElementById

const heading2 = document.querySelector("h2");
console.log(heading2);

// 2. Select element with class .heading2

const headingByClass = document.querySelector(".heading2");
console.log(headingByClass);

//3. Select elemt with an id #list using QuerySelector
const list = document.querySelector("#list");
console.log(list);

// 4. select elemnt with id #list using get elementbyid
const list2 = document.getElementById("list");
console.log(list2)

//5. select single li
const listItem = document.querySelector("li");
console.log(listItem);

const listItems = document.querySelectorAll("li");
console.log(listItems);

const heading1 = document.querySelector("h1");
console.log("before i do my change");
console.dir(heading1);
heading1.style.color = "blue";
heading1.style.border = "5px solid green";
heading1.style.padding = "1rem"
heading1.style.backgroundColor = "red";
heading1.style.borderRadius = "1rem";

const myDiv = document.querySelector("div");
console.dir(myDiv);
myDiv.classList.add("container");

heading1.innerHTML = "Hello Marius";
//change the inner html add class etc
//                        0         1       2
const myArrayOfNames = ["marius", "deg", "meg"]
console.log(myArrayOfNames[0])
 console.log(myArrayOfNames[1])
 console.log(myArrayOfNames[2])

for(let i = 0; i < myArrayOfNames.length; i++){
console.log(myArrayOfNames[i]);
}

// Arithmatic operators
// = + ++

//Addition(+)
//10+5 = 15
let sum = 10 + 5;
console.log(sum);

//subtraction (-)

let diffrence = 10 - 5;
console.log(diffrence);

//multiplication (*)
let multiplication = 10 * 5;
console.log(multiplication);

//division (/)
let division = 10 / 5;
console.log(division);

//modulus (%)
let modulus = 10 % 4;
console.log(modulus)

// Simple operators

// Simple assignments

//addition assigment
let b = 10;

b += 5; //shorthand for b = b + 5

// subtraction assignent
let c = 15;
c -= 5; //c = 10, shorthand c = c - 5

//comparioson operators

let isEqual = (5== "5");
//true
console.log(isEqual);

//strict equal (===)
let isStrictEqual = (5 === "5");
console.log(isStrictEqual);

//not equal (!=)

let isNotEqual = (5!= "6");
console.log(isNotEqual);

//greater than (>)
let isGreaterThan =(10 > 5);
console.log(isGreaterThan);

// AND   //OR 
//&&    //||
let andResult = (5 > 4 && 10 > 5);
console.log(andResult);

let orResult = (5 > 10 || 10 > 5);
console.log(orResult);

//NOT

(true && true) //true
(false && false && true) //false
(true && false)// false
(true || false || false)//true







