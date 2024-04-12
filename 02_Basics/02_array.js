// Push Method

const marvelHeros = ["Ironman","Spiderman","Hulk","Thor"]
const dcHeros = ["Flash","Batman","Superman"]

// marvelHeros.push(dcHeros)

// console.log(marvelHeros);
// console.log(marvelHeros[4][2]);


// Concat Method

const allHeros = marvelHeros.concat(dcHeros)
// console.log(allHeros);

// Spread Method

const allNewHeros = [...marvelHeros, ...dcHeros]
// console.log(allNewHeros);

// Falt in array

const arr = [1, 2, 3, [4, 5, 6], 7, [8, [9, 10]]]

// console.log(arr.flat(Infinity));
// console.log(arr.flat(2));


console.log(Array.isArray("Saurav"));
console.log(Array.from("Saurav"));
console.log(Array.from({name: "Saurav"})); // Intresting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));