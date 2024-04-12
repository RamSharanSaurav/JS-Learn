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
console.log(allNewHeros);