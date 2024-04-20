// const coding = ["js", "rb", "py", "java", "cpp"]

// const values = coding.forEach((item => {
//     //console.log(item);
//     return item
// }))
// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//const nums = myNums.filter((item) => item >= 4 )
// const nums = myNums.filter((item) => {
//     return item >= 5
// })

// const nums = []
// myNums.forEach( (item) => {
//     if (item >= 4) {
//         nums.push(item)
//     }
// })

// console.log(nums);

const books = [
    {title: 'GOT', genre: 'Fiction'},
    {title: 'GOD', genre: 'Non-Fiction'},
    {title: 'CAT', genre: 'Geography'},
    {title: 'Dog', genre: 'Geography'},
    {title: 'Man', genre: 'History'}
]

const myBooks = books.filter( (item) => item.genre === 'History')

console.log(myBooks);