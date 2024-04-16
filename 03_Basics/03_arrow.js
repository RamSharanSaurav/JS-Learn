const user = {
    username: "Saurav",
    age: 24,
    welcomeMessage: function() {
        console.log(`${this.username}, welcome to the website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()
// console.log(this);


// function delta() {
//     let username = "Saurav"
//     console.log(this.username);

// }
// delta()

// const delta = function() {
//     let username = "Saurav"
//     console.log(this.username);

// }
// delta()

// const delta = () => {                             // Arrow function
//     let username = "Saurav"
//     console.log(this.username);
// }
// delta()

// const addNum = (num1, num2) => {            // Arrow function with explicit return
//     return num1 + num2
// }

// const addNum = (num1, num2) => num1 + num2          // Arrow function with implicit return

// const addNum = (num1, num2) => (num1 + num2)          // Arrow function with implicit return

// const kit = (num1, num2) => ({username: "Saurav"})          // while defining an object


// console.log(addNum(4,5));
// console.log(kit().username);  







