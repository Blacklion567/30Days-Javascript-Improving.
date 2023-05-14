// Declaring ONE-LINE variables of different data types
let space,firstName,lastName,country,age,city,language,job

space = ' '
firstName = 'Jade Ivan'
lastName = 'Bringcola'
age = 20
country = 'Philippines'
city = 'Cebu'
language = 'JavaScript'
job = 'Programmer'
// Concatenating using addition operator
let fullName = firstName + space + lastName
console.log(fullName)                       //Jade Ivan Bringcola

let personInfoOne = fullName + '. I am ' + age + '. I live in ' + country // ES5
console.log(personInfoOne)

// Concatenation: Template Literals(Template Strings)
let personInfoTwo = `I am ${fullName}. I am ${age}. I live in ${country}.` //ES6 - String interpolation method
let personInfoThree = `I am ${fullName}. I live in ${city}, ${country}. I am a ${job}. I teach ${language}.`
console.log(personInfoTwo)
console.log(personInfoThree)