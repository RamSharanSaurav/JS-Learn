// array

const myArr = [1,2,3,4,5]
const names = ["saurav", "rahul", "shyam", "ram"]

// console.log(myArr);
// console.log(names);

const myArr2 = new Array(2, 4, 5, 6, 7, 8, 9)
// console.log(myArr2[4]);

// Array Methods

// console.log(myArr2.length);
// myArr2.push(7)
// myArr2.push(5)
// myArr2.pop()
// myArr2.pop()

// myArr2.unshift(1)
// myArr2.shift()

// console.log(myArr2.includes(4)); 
// console.log(myArr2.indexOf(5)); 

// const newArr = myArr2.join()

// console.log(myArr2);
// console.log(newArr);

// slice, splice

console.log("A: ",myArr2);

const myn1 = myArr2.slice(1,3)

console.log("B: ",myArr2);

console.log(myn1);

const myn2 = myArr2.splice(1,3)

console.log("C: ",myArr2);

console.log(myn2);
