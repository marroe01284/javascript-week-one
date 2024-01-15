//setInterval similar to set time out but i execute the function at a certain interval until it is cleared until we say stop 
// let count = 0; 
// const intervalId = setInterval(function(){
//     console.log("hello form the other world!!");
//     count++;//increment
//     if(count === 5){
//         clearInterval(intervalId);
//     }
// }, 1000);
const showList = document.querySelector(".container");
console.log("list view",showList);

let counter = 1;
const listInterval = setInterval(function(){
    console.log(counter);
showList.innerHTML += `<li>marius the ${counter}  </li>`
counter++;
if(counter === 7){
    clearInterval(listInterval);
}
}, 1000);
