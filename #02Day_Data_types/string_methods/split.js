// split(): The split method splits a string at a specified place.

let string = 'I Really Love Programming'

console.log(string.split())         //[ 'I Really Love Programming' ]
console.log(string.split(' '))      //[ 'I', 'Really', 'Love', 'Programming' ]

let firstName = 'Jade Ivan V. Bringcola'
console.log(firstName.split())      //[ 'Jde Ivan V. Bringcola' ]
console.log(firstName.split(''))    //[ 'J', 'a,' 'd', 'e', ' ', 'I', 'v', 'a', 'n', ' ', 'V', '.', ' ', 'B', 'r', 'i', 'n', 'g', 'c', 'o', 'l', 'a' ]

let stringNumber  = '123456789'
console.log(stringNumber.split())       //[ '123456789' ]
console.log(stringNumber.split(''))     //[ '1', '2', '3', '4', '5', '6', '7', '8', '9'

const countries = 'Philippines'
console.log(countries.split(' '))