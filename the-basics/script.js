// variables

var myName = ("Marius");

console.log(myName); //output : Marius

let age = 31;
console.log(age); //output : 31

const BRAND = "BMW";
console.log(BRAND); //output : BMW

// Data Types

let greeting = "Hello, World!";
console.log(typeof greeting); //output: string

let isHappy = true;
console.log(isHappy);
console.log(typeof isHappy); //output: boolean

let someVar;
console.log(typeof someVar);

let emptyValue = null;
console.log(typeof emptyValue); //output: null

//Object

let person = {
    firstName: "Marius",
    lastName: "Prebano",
    age: "29",
    height: "185",
    skinColor: "brown"
};
console.log(person);
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.height);
console.log(person.skinColor);

let car = {
    carName: "Volvo",
    year: "1992",
    condition: "used",
    price: "10.000$"
};
console.log(car.carName);
console.log(car.year);
console.log(car.condition);
console.log(car.price);

console.log(car.carName);
console.log(car["carName"]);

console.log(car.condition);

console.log(" i have a " 
+ car.carName + " and it is "
 + car.year + " used the price is 10000 ");

 console.log(`i have a ${car.carName} and it is ${car.year} and it is used and the price is ${car.price}`);

 //Array
 let colors = ["Red", "Green", "Blue"];
 let randome = [
    555, //0
     "Green", //1
      {name: "Marius", age: 29}, //2
 ["boy", "girl", "whatever"] //3
];

console.log (randome [0]) //first item in the array
console.log (randome[1])// second item in the array 

//3. type Conversion

let year = "1992"; //string = double quotes
console.log(year);

//from string to number

let convertedYear = parseInt(year);
console.log(convertedYear);

//from nuber to string

let num = 123; 
console.log(num.toString());

let convertedNumber = num.toString();

console.log(convertedNumber);