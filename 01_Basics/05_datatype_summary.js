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

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["Thor", "Iron Man", "Hulk"] //Array

let myObj = {
    name: "Saurav",        // Objects
    age: 22,
}


const myFunction = function() {
    console.log("Hello World");
}

console.log(typeof bigNumber);
console.log(typeof roomTemperature);
console.log(typeof scoreValue);
console.log(typeof myFunction);
console.log(typeof heros);
console.log(typeof id2);