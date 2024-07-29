const accountId = 94362
let accountEmail ="sweta@gmail.com"
var accountpw= "9876"
accountCity= "cuttack" //wo var or let, a variable can be decl
let accountCountry
// accountId =2 //const cant be changed 
console.log(accountId);

// let and var can be changed
/*
let used and not var because of block and functional scope problem
*/
accountEmail ="rupu@yahoo.com"
accountpw= "cat"
accountCity= "bbsr"
console.table([accountId,accountEmail,accountpw,accountCity,accountCountry])
