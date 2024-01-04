// console.log("here");

// //if and else statements
// let temp = 20;

// if(temp > 30){
// console.log("It is very hot man!!");
// }else if(temp > 20){
//     console.log("the weather is nice")
// } else{
//     console.log("The weather verry cold ;)");
// }

// let score = 65;
// if(score >= 50){
//     console.log("B " + "Your score " + score);
// } else if(score >= 65){
//     console.log("A " + "Your score " + score);
// } else if(score >= 45){
//     console.log("C " + "Your score " + score);
// }
// else{
//     console.log("D " + "Your score " + score);
// }

// let exam = "A";
// if(exam === "A"){
//     console.log("Verry good")
// } else if(exam === "B" ){
//     console.log("Good!");
// } else if(score === "C"){
//     console.log("Average");
// } else if(exam === "D"){
//     console.log("You need to start studying more");
// } else{
//     console.log("you failed");
// }

// 2. switch case
let color = "Green";
switch (color) {
    case "red":
        console.log("stop!");
        break;
    case "yellow":
        console.log("Get ready");
        break;
    case "Green":
        console.log("Go!")
        break;
    default:
        console.log("no traffic lights availble")
}

let grade = "A";
switch (grade) {
    case "A":
        console.log("Outstanding! " + "your grade: " + grade);
        break;
    case "B":
        console.log("Very Good! " + "your grade: " + grade);
        break;
    case "C":
        console.log("Good effort! " + "your grade: " + grade);
        break;
    case "C":
        console.log("Needs Improvement " + "your grade: " + grade);
        break;
    case "D":
        console.log("Needs improvement " + "your grade: " + grade);
        break;
    case "F":
        console.log("You failed! " + "your grade: " + grade);
        break;
    default:
        console.log("Not graded yet");
}

// 3. scope 

var name = "marius"; //global scope

let myname = "marius"; //function scope

 // const: you deifne itonly one time in your application
 const MY_NAME = "Marius";
 if(true){
     console.log(MY_NAME);
    }
    console.log(MY_NAME);
   
    
    //let: define it and the you can change the value of it
let whoname = "marius"; 
if(true){
    console.log("Mathias");
}
console.log(whoname);

//Loops
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
//looping or itteration
// i now is 1 
// true >
//i = i+1
for(let i = 1; i <= 5; i++){
console.log(i);
}