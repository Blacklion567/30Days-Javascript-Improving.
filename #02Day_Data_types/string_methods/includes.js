// includes(): It takes a substring argument and it check if substring argument exists in the string. includes() returns a boolean. It checks if a substring exist in a string and it returns true if it exists and false if it doesn't exist.
let string = 'Programming Is The Best'
console.log(string.includes("Best")) //true
console.log(string.includes("best")) //false
console.log(string.includes("The Best")) //true
console.log(string.includes("the best")) //false
console.log(string.includes("Programming")) //true
console.log(string.includes("programming")) //false


//Alphabet is counted when it comes to includes.
let country = 'Philippines'
console.log(country.includes('s')) //true
console.log(country.includes('p')) //true
console.log(country.includes('z')) //false

