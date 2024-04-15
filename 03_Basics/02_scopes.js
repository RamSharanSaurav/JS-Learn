// var c = 5
let a = 100

if (true) {
    let a = 10
    const b = 15
    // console.log("Inner: ", a)
}

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
    const name = "Saurav"
    function two() {
        const age = 24
        console.log(name);
    }
    // console.log(age); // age is defined in child nested funtion that's way it can't be executed. 
    two()
}
// one()

if (true) {
    const name = "Saurav"
    if (true) {
        const age = " 24"
        //console.log(name + age);
    }
}

//=================== Intresting ===================//

console.log(addOne(5));

function addOne(num) {
    return num + 1
}

console.log(addTwo(5));  //not possible because of hoisting concept
const addTwo = function (num) {
    return num + 2
}

