// endsWith: it takes a substring as an argument and it checks if the string starts with that specified substring. It returns a boolean(true or false).
//string.endsWith(substring)

let string = 'I Really Love Programming'
console.log(string.endsWith("Programming")) // true
console.log(string.endsWith("programming")) //  false 
console.log(string.endsWith("Love Programming")) //true


//Alphabet is counted when it comes to endsWith.
let country = 'Philippines'
console.log(country.endsWith("nes")) //true
console.log(country.endsWith('ppines')) //true
console.log(country.endsWith('Phill')) //false
