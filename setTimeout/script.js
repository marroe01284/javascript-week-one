console.log("here")
//setTimeout
//it is a built in function its used to execute after a specific period of time
//1.

// setTimeout(function () {
//     console.log("Hello Marius");
// }, 5000);
// //2. second way of doing the same thing
// setTimeout(logHello, 5000);


// function logHello (){
//     console.log("hello jack");
// }



// const loading = document.querySelector(".loader");
// console.log("loader element", loading);

// setTimeout(function(){
//     loading.innerHTML = "Finished loading my boy";
// }, 5000)

const countContainer = document.querySelector(".counter");

let timeleft = 10;


const showAdd = document.querySelector(".add");
console.log("addElemnt",showAdd);

setTimeout(function(){
    showAdd.style.display = "flex";
},1000)

