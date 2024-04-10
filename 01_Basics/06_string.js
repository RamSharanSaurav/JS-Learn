const name = 'Saurav'
const marks = 80

console.log(name + marks + " Hero"); // this is a bad practice in concaticate

console.log(`Hello my name is ${name} and i got ${marks}% marks in maths`);

const gameName = new String('Contra-Supermario-pubg-cod');

console.log(gameName[1]);
console.log(gameName.__proto__);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('t'));

const newGame = gameName.substring(7,17) // negative not allowed
console.log(newGame);

const newGame2 = gameName.slice(-4, 6); //negative allowed
console.log(newGame2);

const newstring = '     Saurav   '

console.log(newstring);
console.log(newstring.trim());

const url = 'https://www.sauravgithub.com'

console.log(url.replace('a', 'b'));

console.log(url.includes('saurav'));

console.log(gameName.split('-'));