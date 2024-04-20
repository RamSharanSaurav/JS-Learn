const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const nums = myNums.map( (num) => {return num + 10} )

const nums = myNums
                    .map( (num) => {return num * 10} )
                    .map( (num) => {return num + 1} ) //chaining
                    .filter( (num) => {return num >= 20} )

console.log(nums);