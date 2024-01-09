//Loops is for repeating!!
//for (initialization; condition; increment;)
// for(let i = 0; i <= 4; i++){
//     console.log(i);
//     }

// for(let i = 1; i <= 10; i++){
//     console.log(i)
// }
                //0      1       2      3
const cars = ["Tesla", "BMW", "Volvo", "Volkswagen"];
console.log(cars.length);

const totalNumberOfCars = cars.length;

for(let i = 0; i < totalNumberOfCars; i++) {
console.log(cars[i])
}

// const fruit = ["Apple", "Banna", "Cherry"];
// console.log(fruit.length);
// const totalNumbersOfFruit = fruit.length;
// for(let i = 0; i = totalNumbersOfFruit; i++) {
//     console.log(fruit[i]);
// }
const fruit = ["Apple", "Banana", "Cherry"];
console.log(fruit.length);

const totalNumbersOfFruit = fruit.length;

for(let i = 0; i < totalNumbersOfFruit; i++){
    console.log(fruit[i]);
}
//shorthand
//for(let x = 0; x < fruits.length; x++){
//console.log(fruits[x]);
//}
console.log(fruit[2]);

//how to get the last item in the array
console.log(fruit.length);
console.log(fruit.length - 1);
console.log(fruit[fruit.lenght - 1]);
const lastItemInTheArray = fruit.length - 1;
console.log(fruit[lastItemInTheArray]);

