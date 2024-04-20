// For each loop
const coding = ["js", "rb", "py", "java", "cpp"]

// coding.forEach( function (val) {
//     console.log(val);
// } )

// coding.forEach( (val) => {
//     console.log(val);
// } )

function print(val) {
    //console.log(val);
}

coding.forEach(print) //sirf reference dena hai funtion execute nhi krna hai

// coding.forEach( function (val, index, arr) {
//     console.log(val, index, arr);
// })

const myCoding = [
    {
        language: "javascript",
        extension: "js"
    },
    {
        language: "java",
        extension: "java"
    },
    {
        language: "python",
        extension: "py"
    },
    {
        language: "ruby",
        extension: "rb"
    }
]

myCoding.forEach( (item) => {
    console.log(item);
} )