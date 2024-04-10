// Primitive Datatypes

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt


const score = 100
const scoreValue = 101.6

const isLoggedIn = true
const roomTemperature = null

let outsideTemp;

const id = Symbol("123")
const id2 = Symbol("123")

//console.log(id === id2);

const bigNumber = 28463124582354892354298n

// console.log(bigNumber);

// Non primitive Datatypes

// Array, Objects, Functions

// Reference

const heros = ["Thor", "Iron Man", "Hulk"] //Array

let myObj = {
    name: "Saurav",        // Objects
    age: 22,
}


const myFunction = function() {
    console.log("Hello World");
}

// console.log(typeof bigNumber);
// console.log(typeof roomTemperature);
// console.log(typeof scoreValue);
// console.log(typeof myFunction);
// console.log(typeof heros);
// console.log(typeof id2);




// ============================ Memory ================================= //

// Stack (Primitive), Heap (Non Primitive)

let myName = "Saurav bharadwaj"

let anotherName = myName
anotherName = "Saurav Kumar"

console.log(myName);
console.log(anotherName);

let user = {
    email: "user@email.com",
    upi: "user@ybl",
}

let userTwo = user

userTwo.email = "saurav@email.com"

console.log(user.email);
console.log(userTwo.email);