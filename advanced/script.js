// let user = {
    
    
// }
// user.name = "Jonas";
// console.log(user)
// user.surname = "the great"



const numbers = [1, 2, 31, 10, 99, 100,50, 45,-10]
numbers.sort((a, b) => a - b);
console.log(numbers); 
let lastItemOfArray = numbers.length -1;
console.log(lastItemOfArray);


let maximumNumber = numbers[lastItemOfArray];
console.log(maximumNumber);
let theMinumumNumber = numbers[0];
console.log(theMinumumNumber);

const numeros = [1, 40, 555, 100, 23, 455, 23, 1254, 345, 5, 6, 67]
numeros.sort((a, b) => a - b);
console.log(numeros);
let lastItem = numeros.length -1;
console.log(lastItem);

let maxNumber = numeros[lastItem];
console.log(maxNumber);
let minNumber = numeros[0];
console.log(minNumber);

let posAndEven = numbers.filter(numeros => numeros > 0 && numeros % 2 === 0);
console.log(posAndEven);

const nummer = [400,123,345,3456,5768578,678,579,6899,2,4,6,8,10]
nummer.sort((a, b) => a - b);
console.log(nummer);

let sisteItem = nummer.length -1;
console.log(sisteItem);
let stortNummer = nummer[sisteItem];
console.log(stortNummer);
let minsteNummer = nummer[0];
console.log(minsteNummer);

let pAe = nummer.filter(nummer => nummer > 0 && nummer % 2 ===0);
console.log(pAe);
let pAo = nummer.filter(nummer => nummer > 1 && nummer % 3 ===1);
console.log(pAo);

