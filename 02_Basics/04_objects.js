// const facebookUser = new Object{} // singleton object
const facebookUser = {} // non singleton object

facebookUser.name = "Saurav"
facebookUser.id = "SB007"
facebookUser.isloggedIn = false

// console.log(facebookUser);

const fbUser = {
    id: "SB007",
    fullname: {
        userfullname: {
            firstname: "Ram",
            middlename: "Sharan",
            lastname: "Saurav"
        }
    }
}

// console.log(fbUser.fullname.userfullname.firstname);

const num1 = {1:"a", 2:"b"}
const num2 = {3:"c", 4:"d"}
const num3 = {5:"e", 6:"f"}

// const combineObj = {num1, num2, num3}
// const combineObj = Object.assign({}, num1, num2, num3)


const combineObj = {...num1, ...num2, ...num3} // spread (mostly used)

console.log(combineObj);

const users =[
    {
        id: 1,
        email: "a@a.com"
    },
    {
        id: 2,
        email: "b@a.com"
    },
    {
        id: 3,
        email: "c@a.com"
    }
]


users[1].id
console.log(facebookUser);

console.log(Object.keys(facebookUser));
console.log(Object.values(facebookUser));
console.log(Object.entries(facebookUser));

console.log(facebookUser.hasOwnProperty("isloggedIn"));