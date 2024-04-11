// Dates

let myDate = new Date()
// console.log(myDate);
// console.log(typeof myDate);
// console.log(myDate.toString(myDate));
// console.log(myDate.toDateString(myDate));
// console.log(myDate.toLocaleString(myDate));
// console.log(myDate.toJSON(myDate));
// console.log(myDate.toISOString(myDate));
// console.log(myDate.toLocaleDateString(myDate));

// let myNewDate = new Date(2024, 0, 23)
// let myNewDate = new Date(2024, 0, 23, 14, 2, 5)
// let myNewDate = new Date("2024-01-24")
let myNewDate = new Date("01-24-2024")

// console.log(myNewDate.toDateString());
// console.log(myNewDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myNewDate.getTime());
// console.log(Math.floor(Date.now()/10000));

let newDate = new Date()
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());


newDate.toLocaleString('default', {
    weekday: "narrow"
});