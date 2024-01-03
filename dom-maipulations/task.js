const heading1 = document.querySelector("h1");
console.log(heading1)
heading1.innerHTML = "Welcome to javaScript Class"
console.log(heading1);
heading1.style.color = "blue";
heading1.style.fontSize = "90px"
console.log(heading1);
let addItemButton = document.getElementById("addItemButton")
let itemList = document.getElementById("itemList")

addItemButton.addEventListener("click", function () {
let newItem = document.createElement("li");
newItem.textContent = "new Item" + getRandomInt(100);
itemList.appendChild(newItem);
});

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
  console.log(getRandomInt(3));
  // Expected output: 0, 1 or 2
  
  console.log(getRandomInt(1));
  // Expected output: 0
  
  console.log(Math.random());
  // Expected output: a number from 0 to <1
  