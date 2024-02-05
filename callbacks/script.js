// //4 types of functions
// //void = doesnt do anything just a void of nothing
// //1. void does sometnhing and thats it 
// function dosomething() {
//     console.log("i just do somethign")
// }

// dosomething()

// //2. void with some parameters
// function doSomethingWithData(someData) {
//     console.log("i just do somethign" + someData)
// }
// doSomethingWithData("some sweet string")

// //3. 
// function doSomethingReturnsAString() {
//     console.log("i just did something here is something for you")

//     return "This is easy"
// }
// let result = doSomethingReturnsAString()
// console.log(result);

// //4.
// function doSomethingReturnsAString() {
//     console.log("i just did something here is something for you")

//     return "This is easy"
// }

// let result2 = doSomethingReturnsAString("ikke sant?")

//#region HOF and callbacks 
fetch(`https://api.noroff.dev/api/v1/square-eyes`)
.then((Response) => Response.json())
.then((json) => console.log(json));

    
