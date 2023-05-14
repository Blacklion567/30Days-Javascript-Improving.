/* 
## Booleans

A boolean data type represents one of the two values:_true_ or _false_. Boolean value is either true or false. The use of these data types will be clear when you start the comparison operator. Any comparisons return a boolean value which is either true or false.
*/

//**EXAMPLE Boolean Values**

let lightOn = true
let lightOff = false

console.log(lightOn,lightOff);

let number = 4 > 3                  //true
let number1 = 10 < 11               //true
let number2 = 10 < 4                //false

console.log(number)
console.log(number1)
console.log(number2)


/* 
### Arithmetic Operators

*Arithmetic operators are mathematical operators.
- Addition(+): a + b
- Subtraction(-): a - b
- Multiplication(*): a * b
- Division(/): a / b
- Modulus(%): a % b
- Exponential(**): a ** b
*/

let firstNumber = 10
let secondNUmber = 5

let addNumber = firstNumber + secondNUmber
let minusNumber = firstNumber - secondNUmber
let multiplyNumber = firstNumber * secondNUmber
let divideNumber = firstNumber / secondNUmber
let modulusNumber = firstNumber % secondNUmber
let exponentNumber = firstNumber ** secondNUmber

console.log(addNumber,minusNumber,multiplyNumber,divideNumber,modulusNumber,exponentNumber)              //15 5 50 2 0 100000



const PI = 3.14
let radius = 100                           // length ins meter

//let us calculate area o a circle
const areaOfCircle = PI * radius * radius
console.log(areaOfCircle)                   //314m

const gravity = 9.81      // in m/s2
let mass = 72             // in Kilogram

// Let us calculate weight of an object
const weight = mass * gravity
console.log(weight)        // 706.32 N(Newton)


const boilingPoint = 100  // temperature in oC, boiling point of water
const bodyTemp = 37       // body temperature in oC


// Concatenating string with numbers using string interpolation
/*
    The boiling point of water is 100 oC.
    Human body temperature is 37 oC.
    The gravity of earth is 9.81 m/s2.
 */
    console.log(
    `The boiling point of water is ${boilingPoint} oC.\nHuman body temperature is ${bodyTemp} oC.\nThe gravity of earth is ${gravity} m / s2.`
)


/* 
### Comparison Operators

*In programming we compare values, we use comparison operators to compare two values. We check if a value is greater or less or equal to other value.
*/

console.log(3 > 2)              // true, because 3 is greater than 2
console.log(3 >= 2)             // true, because 3 is greater than 2
console.log(3 < 2)              // false,  because 3 is greater than 2
console.log(2 < 3)              // true, because 2 is less than 3
console.log(2 <= 3)             // true, because 2 is less than 3
console.log(3 == 2)             // false, because 3 is not equal to 2
console.log(3 != 2)             // true, because 3 is not equal to 2
console.log(3 == '3')           // true, compare only value
console.log(3 === '3')          // false, compare both value and data type
console.log(3 !== '3')          // true, compare both value and data type
console.log(3 != 3)             // false, compare only value
console.log(3 !== 3)            // false, compare both value and data type
console.log(0 == false)         // true, equivalent
console.log(0 === false)        // false, not exactly the same
console.log(0 == '')            // true, equivalent
console.log(0 == ' ')           // true, equivalent
console.log(0 === '')           // false, not exactly the same
console.log(1 == true)          // true, equivalent
console.log(1 === true)         // false, not exactly the same
console.log(undefined == null)  // true
console.log(undefined === null) // false
console.log(NaN == NaN)         // false, not equal
console.log(NaN === NaN)        // false
console.log(typeof NaN)         // number
console.log(1==1)               //true


console.log('mango'.length == 'avocado'.length)  // false
console.log('mango'.length != 'avocado'.length)  // true
console.log('mango'.length < 'avocado'.length)   // true
console.log('milk'.length == 'meat'.length)      // true
console.log('milk'.length != 'meat'.length)      // false
console.log('tomato'.length == 'potato'.length)  // true
console.log('python'.length > 'dragon'.length)   // false

/* 
### Logical Operators

*The following symbols are the common logical operators: &&(ampersand) , ||(pipe) and !(negation).  The && operator gets true only if the two operators are true. The || operator gets true either of the operators is true. The ! operator negates true to false and false to true.

*/


// ( && ) ampersand operator example

const check = 4 > 3 && 10 > 5         // true && true -> true
const check1 = 4 > 3 && 10 < 5         // true && false -> false
const check2 = 4 < 3 && 10 < 5         // false && false -> false

// ( || ) pipe or operator, example

const check3 = 4 > 3 || 10 > 5         // true  || true -> true
const check4 = 4 > 3 || 10 < 5         // true  || false -> true
const check5 = 4 < 3 || 10 < 5         // false || false -> false

// ( ! )  Negation examples
let check6 = 4 > 3                     // true
let check7 = !(4 > 3)                  //  false
let isLightOn = true
let isLightOff = !isLightOn           // false
let isMarried = !false                // true

/* 
### Increment Operator

*In JavaScript we use the increment operator to increase a value stored in a variable. The increment could be pre or post increment. Let us see each of them:
*/

//Pre-increment
let count = 0
console.log(++count)                  //1
console.log(count)                    //2

//Post-increment

let count1 = 0
console.log(count1++)                  //0
console.log(count1)                    //1

//*We use most of the time post-increment. At least you should remember how to use post-increment operator.

/* 
### Decrement Operator

In JavaScript we use the decrement operator to decrease a value stored in a variable. The decrement could be pre or post decrement. Let us see each of them:
*/

//Pre-decrement
let count2 = 0
console.log(--count2)                   //-1
console.log(count2)                     //-1


//Post-decrement
let count3 = 0
console.log(count3--)                   //0
console.log(count3)                     //-1


/* 
### Ternary Operators

*Ternary operator allows to write a condition. Another way to write conditionals is using ternary operators. Look at the following examples:
*/

let isRaining = true
isRaining
    ? console.log('You need a rain coat.')
    : console.log('No need for a rain coat.')
isRaining = false

isRaining
    ? console.log('You need a rain coat.')
    : console.log('No need for a rain coat.')

//RESULT 
/* You need a rain coat.
No need for a rain coat. */

let number3 = 5
number3 > 0
    ? console.log(`${number3} is a positive number`)
    : console.log(`${number3} is a negative number`)
number3 = -5

number3 > 0
    ? console.log(`${number3} is a positive number`)
    : console.log(`${number3} is a negative number`)

//RESULT 
/* 5 is a positive number
-5 is a negative number */


/* 
### Operator Precedence
## Window Methods
### Window alert() method

*As you have seen at very beginning alert() method displays an alert box with a specified message and an OK button. It is a builtin method and it takes on argument.
 */

// *alert(message)
// *alert('Welcome to 30DaysOfJavaScript')
/* Do not use too much alert because it is destructing and annoying, use it just to test.

### Window prompt() method

*The window prompt methods display a prompt box with an input on your browser to take input values and the input data can be stored in a variable. The prompt() method takes two arguments. The second argument is optional.
*/
// *prompt('required text', 'optional text')
// *let number5 = prompt('Enter number', 'number goes here')
// *console.log(number)


/* 
### Window confirm() method

*The confirm() method displays a dialog box with a specified message, along with an OK and a Cancel button. A confirm box is often used to ask permission from a user to execute something. Window confirm() takes a string as an argument. Clicking the OK yields true value, whereas clicking the Cancel button yields false value.
*/

/* const agree = confirm('Are you sure you like to delete? ')
*console.log(agree) // result will be true or false based on what you click on the dialog box
 */
/* 
## Date Object

*Time is an important thing. We like to know the time a certain activity or event. In JavaScript current time and date is created using JavaScript Date Object. The object we create using Date object provides many methods to work with date and time.The methods we use to get date and time information from a date object values are started with a word _get_ because it provide the information.   _getFullYear(), getMonth(), getDate(), getDay(), getHours(), getMinutes, getSeconds(), getMilliseconds(), getTime(), getDay()_ 
*/

const now = new Date()
console.log(now);

/* 
### Getting full year
*Let's extract or get the full year from a time object.
*/
const now1 = new Date()
console.log(now1.getFullYear())          //2023

/* 
### Getting month
*Let's extract or get the month from a time object.
*/
const now2 = new Date()
console.log(now2.getMonth())               //4

/* 
### Getting date
*Let's extract or get the date of the month from a time object.
*/
const now3 = new Date()
console.log(now3.getDate())               //1 ,because the day of the month is 5th,  day(1-31)

/* 
### Getting day
*Let's extract or get the day of the week from a time object.
*/

const now4 = new Date()
console.log(now4.getDay())               //1, because the day is Monday which is the 1st day.
//Sunday is 0, Monday is 1 and Saturday is 6
//Getting the weekday as a number (0-6)

/*
### Getting hours
*Let's extract or get the hours from a time object.
*/
const now5 = new Date()
console.log(now5.getHours())             //6, because the time is 06:21:23.


/*
### Getting minutes
*Let's extract or get the minutes from a time object.
*/
const now6 = new Date()
console.log(now6.getMinutes())            //26, because the time is 06:26:41

/*
### Getting seconds
Let's extract or get the seconds from a time object.
*/
const now7 = new Date()
console.log(now7.getSeconds())            // 46, because the time is 06:27:46

/* 
### Getting time
*This method give time in milliseconds starting from January 1, 1970. It is also know as Unix time. We can get the unix time in two ways:
*/
//*Using_getTime()
const now8 = new Date()
console.log(now8.getTime())               //1682893763385, this is the number of seconds passed from January 1, 1970 to May 1, 2023 06:30:03

//*Using _Date.now()
const allSeconds = Date.now()
console.log(allSeconds)                   //1682893763385, this is the number of seconds passed from January 1, 1970 to May 1, 2023 06:30:03

const timeInSeconds = new Date().getTime()
console.log(allSeconds == timeInSeconds)   // true

/*
*Let us format these values to a human readable time format.
*/
//  **Example:**
const now9 = new Date()
const year = now.getFullYear() // return year
const month = now.getMonth() + 1 // return month(0 - 11)
const date = now.getDate() // return date (1 - 31)
const hours = now.getHours() // return number (0 - 23)
const minutes = now.getMinutes() // return number (0 -59)

console.log(`${date}/${month}/${year} ${hours}:${minutes}`) // 1/5/2023 6:38



