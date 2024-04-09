const accountId = 245367
let accountEmail = "Saurava@mail.com"
var accountPassword = "32467a"
accountCity = "Patna"
let accountState;

// accountId = 3 // not allowed

accountEmail = "gr@gp.com"
accountPassword = "56575"
accountCity = "mumbai"

// console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table ([accountId, accountEmail, accountPassword, accountCity, accountState])