// var c = 5
let a = 100

if (true) {
    let a = 10
    const b = 15
    console.log("Inner: ", a)
}

console.log(a);
console.log(b);
console.log(c);