// singleton
// Object.create

// object literals

const mySymbol = Symbol("Ram")

const JsUser = {
    name: "Saurav",
    "full name": "Ram Sharan Saurav",
    age: 24,
    email: "saurav@saurav.com",
    location: "Patna",
    [mySymbol]: "@"
}

// console.log(JsUser.name);
// console.log(JsUser["full name"]);
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(typeof JsUser[mySymbol]);

JsUser.email = "Saurav@rss.com"
// Object.freeze(JsUser)
JsUser.email = "Saurav.tps.com"

// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Saurav");
}

JsUser.greeting2 = function(){
    console.log(`Hello cool guy, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greeting2());



