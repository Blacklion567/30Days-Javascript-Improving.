// startsWith: it takes a substring as an argument and it checks if the string starts with that specified substring. It returns a boolean(true or false).
// string.startsWith(substring)

let string = 'I Really Love Programming'
console.log(string.startsWith('I'))             //true
console.log(string.startsWith('Really'))        //false
console.log(string.startsWith('Love'))          //false


let firstName = 'Jade Ivan V. Bringcola'
console.log(firstName.startsWith('J'))          //true
console.log(firstName.startsWith('Jade'))       //true
console.log(firstName.startsWith('ade'))        //false
console.log(firstName.startsWith('Bringcola'))  //false

let country = 'Philippines'
console.log(country.startsWith('P'))            //true
console.log(country.startsWith('Phi'))          //true
console.log(country.startsWith('lippines'))     //false
