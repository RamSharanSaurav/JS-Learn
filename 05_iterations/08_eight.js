const myNums = [1, 2, 3, 4, 5]

// const nums = myNums.reduce((acc, currval) => {
//     console.log(`acc: ${acc} and currval ${currval}`);
//     return acc + currval
// }, 0)

const nums = myNums.reduce( (acc, curr) => acc + curr,0)

console.log(nums);

const cart = [
    {
        item: 'js course',
        price: 2999
    },
    {
        item: 'java course',
        price: 3999
    },
    {
        item: 'data science course',
        price: 5999
    },
    {
        item: 'python course',
        price: 1999
    }
]

const totalPayPrice = cart.reduce( (acc, item) => acc + item.price, 0)

console.log(totalPayPrice);