function name() {
    console.log("S");
    console.log("A");
    console.log("U");
    console.log("R");
    console.log("A");
    console.log("V");
}

// name()

// function add(a, b) {
//     console.log(a+b);
// }

add(1,2)

function add(a, b) {
    // let result = a + b
    // return result
    return a + b;
}

// const result = add(3, 13)

// console.log("Result: ", result);

function loginUserMessage(username = "Sam") {
    if (!username) {
        console.log("Please Enter a username");
        return
    }
    return `${username} just logged in` 
}

// console.log(loginUserMessage("Saurav"));

function calculateCartPrice(val1, val2, ...num) { //Rest function
    return num
}

// console.log(calculateCartPrice(50, 55, 67, 87));

const user = {
    name: "Saurav",
    age: 24,
    sex: "male"
}

function userDetails(anyObject) {
    console.log(`my name is ${anyObject.name} & i am a ${anyObject.age} year old ${anyObject.sex}`);
}

// userDetails(user)
// userDetails({              // another way of passing arguments
//     name: "Shyam",
//     age: 42,
//     sex: "Male"
// })

const arr = [1, 2, 4, 3, 5, 6,]

function arrCheck(anyArr) {
    console.log(`Here is the provided array: ${anyArr}`);
}

// arrCheck(arr)
// arrCheck([19, 18, 17])       // another way of passing arguments