/* 
*# 📔 Day 7

*## Functions

*So far we have seen many builtin JavaScript functions. In this section, we will focus on custom functions. What is a function? Before we start making functions, lets understand what function is and why we need function?

*A function is a reusable block of code or programming statements designed to perform a certain task.
*A function is declared by a function key word followed by a name, followed by parentheses (). A parentheses can take a parameter. If a function take a parameter it will be called with argument. A function can also take a default parameter. To store a data to a function, a function has to return certain data types. To get the value we call or invoke a function.
*Function makes code:

*- clean and easy to read
*- reusable
*- easy to test

*A function can be declared or created in couple of ways:

*- _Declaration function_
*- _Expression function_
*- _Anonymous function_
*- _Arrow function_
*/

//*### Function Declaration
/* 
*Let us see how to declare a function and how to call a function.

*declaring a function without a parameter
*function functionName() {
*    code goes here
*}

*functionName() // calling function by its name and with parentheses */

/* 
*### Function without a parameter and return
*Function can be declared without a parameter.
*/


//*function without parameter,  a function which make a number square
//**Example:**
function square() {
    let num = 2
    let sq = num * num
    console.log(sq);
}
square() //4

//*function without parameter.
function addTwoNumbers() {
    let numOne = 10
    let numTwo = 10
    let sum = numOne + numTwo
    console.log(sum);
}

addTwoNumbers() // a function has to be called by its name to be executed 

function withSpace() {
    let spaceAdd = " "
    let firstName = 'Jade Ivan'
    let lastName = 'Bringcola'
    let fullName = firstName + spaceAdd + lastName
    console.log(fullName);
}
withSpace() // calling a function


/* 
*### Function returning value
*Function can also return values, if a function does not return values the value of the function is undefined. Let us write the above functions with return. From now on, we return value to a function instead of printing it. */

function printFullName() {
    let spaceAdd = " "
    let firstName = 'Bandev</>'
    let lastName = 'Bringcola'
    let fullName = firstName + spaceAdd + lastName
    return fullName
}
console.log(printFullName()) // calling a function

function addTwoNumbers1() {
    let numOne = 10
    let numTwo = 5
    let total = numOne + numTwo
    return total
}
console.log(addTwoNumbers1())

/* 
*### Function with a parameter
*In a function we can pass different data types(number, string, boolean, object, function) as a parameter.
*/

/*
function with one parameter
*function functionName(parm1) {
    code goes her
}
functionName(parm1) // during calling or invoking one argument needed*/


function areaOfCircle(r) {
    let area = Math.PI * r * r
    return area
}
console.log(areaOfCircle(10))   // should be called with one argument

function square(number) {
    return number * number
}
console.log(square(5))  // 25


/*
*### Function with two parameters
function with two parameters

*function functionName(parm1, parm2) {
    code goes here
}
*functionName(parm1, parm2) // during calling or invoking two arguments needed
*/
// calling functions
// If a function doesn't return it doesn't store data, so it should return
// Function without parameter doesn't take input, so lets make a function with parameters
function sumTwoNumbers(numOne, numTwo) {
    let sum = numOne + numTwo
    console.log(sum)
}
sumTwoNumbers(10, 20) // calling functions
// If a function doesn't return it doesn't store data, so it should return

function sumTwoNumbers(numOne, numTwo) {
    let sum = numOne + numTwo
    return sum
}
function twoParmAdd(parm1, parm2) {
    return parm1 + parm2
}
console.log(twoParmAdd(10, 5))  // 15 (addition) calling functions
// If a function doesn't return it doesn't store data, so it should return.

function twoParmSub(parm1, param2) {
    return parm1 - param2
}
console.log(twoParmSub(10, 5))   //5 (subtraction)

function fullName(firstName, lastName) {
    return `${firstName}${lastName}`
}
console.log(fullName('Jade ivan ', 'Bringcola'));

//*### Function with many parameters
/* 
*function with multiple parameters
*function functionName(parm1, parm2, parm3,...){
    code goes here
}
*functionName(parm1,parm2,parm3,...) // during calling or invoking three arguments needed.
*/

//*this function takes array as a parameter and sum up the numbers in the array.
function sumArrValues(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
}
const num = [1, 2, 3, 4, 5]
//calling a function
console.log(sumArrValues(num))


const areaOfCircle1 = (radius) => {
    let area = Math.PI * radius * radius
    return area
}
console.log(areaOfCircle1(5))
/* 
*### Function with unlimited number of parameters
*Sometimes we do not know how many arguments the user going to pass. Therefore, we should know how to write a function which can take unlimited number of arguments. The way we do it has a significant difference between a function declaration(regular function) and arrow function. Let us see examples both in function declaration and arrow function.
*/

/* 
*#### Unlimited number of parameters in regular function
*A function declaration provides a function scoped arguments array like object. Any thing we passed as argument in the function can be accessed from arguments object inside the functions. Let us see an example
*/

//*Let us access the arguments objects.

function sumAllNumber() {
    console.log(arguments)
}

sumAllNumber(1, 2, 3, 4, 5)
// Arguments(4) [1, 2, 3, 4, callee: ƒ, Symbol(Symbol.iterator): ƒ]

function sumAllNumber() {
    let sum = 0
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    return sum
}
console.log(sumAllNumber(1, 2, 3, 4, 5, 6))              //21
console.log(sumAllNumber(5, 10, 15, 20, 25, 30))         //105
console.log(sumAllNumber(50, 100, 150, 200, 205, 300))   //1005


/* 
*#### Unlimited number of parameters in arrow function.

*Arrow function does not have the function scoped arguments object. To implement a function which takes unlimited number of arguments in an arrow function we use spread operator followed by any parameter name.  Any thing we passed as argument in the function can be accessed as array in the arrow function. Let us see an example.*/

//*Let us access the arguments object

const sumAllNum1 = (...args) => {
    // console.log(arguments)  arguments object not found in arrow   function
    //instead we use a parameter followed by spread operator (...)
    console.log(args)
}

sumAllNum1(1, 2, 3, 4)      //[1, 2, 3, 4]


//function declaration

const numAll = (...args) => {
    let sum = 0
    for (const element of args) {
        sum += element
    }
    return sum
}

console.log(numAll(1, 2, 3, 4, 5))          //15
console.log(numAll(5, 10, 15, 20, 25))      //75
console.log(numAll(10, 20, 30, 40, 10))     //110


/* 
### Anonymous Function

Anonymous function or without name
*/
const anonymousFun = function () {
    console.log(
        'I am an anonymous function and my value is stored in anonymousFun'
    )
}
anonymousFun()

/* 
*### Expression Function

*Expression functions are anonymous functions. After we create a function without a name and we assign it to a variable. To return a value from the function we should call the variable. Look at the example below.*/

const square1 = function (n) {
    return n * n
}
console.log(square1(10))


// Function expression
const square2 = function (n) {
    return n * n
}

console.log(square2(2)) // -> 4


const toUpperText = args => {
    const newargs = []
    for (const element of args) {
        newargs.push(element.toUpperCase())
    }
    return args
}
const countries = ['Philippines', 'Japan', 'America', 'China']
console.log(toUpperText(countries));

const nameTags = nameses => {
    let nameTags1 = []
    for (const nameof of nameses) {
        nameTags1.push(nameof)
    }
    return nameTags1
}
const allNamesCountry = ['Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saudi Arabia']
console.log(nameTags(allNamesCountry))


const addNames = (firstName, lastName) => {
    return `${firstName}, ${lastName}`
}
console.log(addNames('Jade Ivan', 'Bringcola'))
/* 
*The above function has only the return statement, therefore, we can explicitly return it as follows.*/

const printFullName1 = (firstName, lastName) => `${firstName} ${lastName}`

console.log(printFullName1('Bandev</>', 'Programmer'))

/*
*### Function with default parameters
*Sometimes we pass default values to parameters, when we invoke the function if we do not pass an argument the default value will be used. Both function declaration and arrow function can have a default value or values. */

/* 
syntax
Declaring a function
function functionName(param = value) {
    codes
}
Calling function
functionName()
functionName(arg) */

function greetings(name = 'Programmer') {
    let message = `${name}, welcome to 30 Days Of JavaScript!`
    return message
}

console.log(greetings())
console.log(greetings('Bandev</>'))


function generateFullName (firstName = 'Bandev</>', lastName = 'Bringcola'){
    let space = ' '
    let fullName = firstName + space + lastName
    return fullName
}
console.log(generateFullName())
console.log(generateFullName('Ban Ban', 'Ivan'))

function guestTheAge(birthYear, currentYear = 2023){
    let age = currentYear - birthYear
    return age
}
console.log('Your Age Is: ', guestTheAge(2002))

function weightOfObject(mass, gravity = 9.81) {
  let weight = mass * gravity + ' N' // the value has to be changed to string first
    return weight
}

console.log('Weight of an object in Newton: ', weightOfObject(100)) // 9.81 gravity at the surface of Earth
console.log('Weight of an object in Newton: ', weightOfObject(100, 1.62)) // gravity at surface of Moon.

// Let us see how we write the above functions with arrow functions


const greetings1 = (name = 'Ivan') => {
    let message = name + ', welcome to 30 Days Of JavaScript!'
    return message
}

console.log(greetings1())
console.log(greetings1('Bandev</>'))

/* 
*### Function declaration versus Arrow function
*It Will be covered in other section.
*🌕 You are a rising star, now you knew function . Now, you are super charged with the power of functions. You have just completed day 7 challenges and you are 7 steps a head in to your way to greatness. Now do some exercises for your brain and for your muscle.*/


//* ## 💻 Exercises
//* ### Exercises: Level 1


//*1. Declare a function _fullName_ and it print out your full name.
function full_Name (){
    let firstName = 'Jade Ivan'
    let lastName = 'Bringcola'
    let nameSpace = ' '
    let $fullName = firstName + nameSpace + lastName
    return $fullName
}
console.log(full_Name());


//*2. Declare a function _fullName_ and now it takes firstName, lastName as a parameter and it returns your full - name.
function full_Name1(firstName = 'Jade Ivan',lastName = 'Bringcola'){
    let nameSpace = ' '
    let fullName = firstName + nameSpace + lastName
    return fullName
}
console.log(full_Name1())


//* 3. Declare a function _addNumbers_ and it takes two two parameters and it returns sum.
function add_Number(param1 = 10, param2 = 20){
    let sumParam = param1 + param2
    return sumParam
}
console.log(add_Number())


//*4. An area of a rectangle is calculated as follows: _area = length x width_. Write a function which calculates _areaOfRectangle_.
function areaOfRectangle(length,width){
    let area = length * width
    return area
}
console.log(areaOfRectangle(Math.PI,Math.PI))


//*5. A perimeter of a rectangle is calculated as follows: _perimeter= 2x(length + width)_. Write a function which calculates _perimeterOfRectangle_.

