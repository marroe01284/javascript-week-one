//ARRAYS
const fruit = ["apple", "banana", "berry", "orange"]; 
console.log(fruit.length);

// add more items to the array

fruit.push("Mango");
console.log(fruit);

//add item in diffrent order
fruit.unshift("Banana");
console.log(fruit)

//remove last item from the array
fruit.pop();
console.log(fruit);

//remove the first item from the array
fruit.shift();
console.log(fruit);

// change the order from small to big
const number = [3, 4, 5, 100, 56, 88]

number.sort((a, b) => a - b);
console.log(number);
// change the order from big to small 
number.sort((a, b) => b- a);
console.log(number);

//find index in the array
const cars = ["BMW", "VW", "MERCEDES"]
console.log("the index of VW", cars.indexOf("VW"));

//how to find a item in the array
const user = {
    name: " Monde", 
    age: 30,
    height: 168,
    wealth: 123212849084,
    experience: "software engineere",
}
console.log(user);
console.log(user.experience);

//u can use this way 
const someText = "hello my name is " + user.name;
console.log(someText);

//preffered way of doing it remember to add "something:" before conssole. log eks console.log("some text:"variable)
const someTextTwo = `hello my name is ${user.name}`
console.log(someTextTwo);

const someTextThre = `hello my name is ${user.name} i am ${user.age} years old, i own ${user.wealth} in dollars and i work as a ${user.experience}`;
console.log(someTextThre);

const books = [ //my ttitle is "the hobbit" i
    {
        title: "The hobbit",
        author: "Hesham El Masry",
        pages: 300
    },
    {
        title: "Drive with me in my car",
        author: "Marius Rønning",
        pages: 1000
    },
    {
        title: "1000 nights and nights",
        author: "George clooney",
        pages: 3000 
    }
]

console.log("my first book ", books[0]);
//find a specific value
const searchBook = books.find(function (book){
        return book.title === "The hobbit";
});
console.log(searchBook);

//find all greater than. 
const searchPage = books.filter(function(book){
    return book.pages > 300;
})
console.log(searchPage);

//functions
function doorRing(withcamera){
console.log("i will go open the door the person is " + withcamera);
}
doorRing("monde is outside");

function logWord(theWord){
console.log(theWord);
}
logWord("marius");

//function adding numbers togheter
function addTwoNumbers(num1, num2){
    return num1 + num2;
}
const sum = addTwoNumbers(10, 20)
console.log(sum);
