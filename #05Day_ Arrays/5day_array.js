/* 
# 📔 Day 5

## Arrays

*In contrast to variables, an array can store _multiple values_. Each value in an array has an _index_, and each index has _a reference in a memory address_. Each value can be accessed by using their _indexes_. The index of an array starts from _zero_, and the  index of the last element is less by one from the length of the array.

*An array is a collection of different data types which are ordered and changeable(modifiable). An array allows storing duplicate elements and different data types. An array can be empty, or it may have different data type values.

*### How to create an empty array.

*In JavaScript, we can create an array in different ways. Let us see different ways to create an array.
*It is very common to use _const_ instead of _let_ to declare an array variable. If you ar using const it means you do not use that variable name again.

*Using Array constructor
*/

// syntax
const arr = Array()
// or
// let arr = new Array()
console.log(arr) // []


// syntax
// This the most recommended way to create an empty list
const arr1 = []
console.log(arr1)

/* 
*### How to create an array with values.
*Array with initial values. We use _length_ property to find the length of an array.
*/


const number = [1, 2, 3, 4, 5, 6, 7, 8, 9]                      //array of numbers
const names = ['Jade ivan', 'Bandev', 'Proline', 'Phoebe'] //array of names
const vegetables = ['Potato', 'Tomato', 'Pechay', 'Onion'] //array of vegetables
const animation = ['AOT', 'SAO', 'Naruto', 'Ippo']         //array of anime 
const language = ['JavaScript', 'Php', 'C#', 'Python']    //array of Programming Language


console.log(`You Have: ${number.length} numbers`);
console.log("The Numbers: ", number);
console.log(`You Have: ${names.length} names`);
console.log("The Names: ", names);
console.log(`You Have: ${vegetables.length} vegetables`);
console.log("The Vegetables: ", vegetables);


//*- Array can have items of different data types

const arr2 = [
    'Bandev</>',
    20,
    true,
    { country: 'Philippines', city: 'Cebu' },
    { skills: ['JAVASCRIPT', 'PYTHON', 'C#', 'HTML'] }
]             //arr2 containing different data types

console.log(arr2)               //  'Bandev</>',20, true,{ country: 'Philippines', city: 'Cebu' }{ skills: [ 'JAVASCRIPT', 'PYTHON', 'C#', 'HTML' ] }
console.log(arr2[3])            //{ country: 'Philippines', city: 'Cebu' }
console.log(arr2[3].country)    //Philippines
console.log(arr2[4])            //{ skills: [ 'JAVASCRIPT', 'PYTHON', 'C#', 'HTML' ] }
console.log(arr2[4].skills)     //[ 'JAVASCRIPT', 'PYTHON', 'C#', 'HTML' ]

/* 

### Creating an array using split

*As we have seen in the earlier section, we can split a string at different positions, and we can change to an array. Let us see the examples below.
*/

//#EXAMPLE
let js = 'JavaScript'
const charsJavaScript = js.split('')
console.log(charsJavaScript)    //['J', 'a', 'v', 'a','S', 'c', 'r', 'i','p', 't' ]


let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
const companies = companiesString.split(',')
console.log(companies)          //['Facebook',' Google',' Microsoft',' Apple',' IBM',' Oracle',' Amazon']

let txt =
    'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const words = txt.split(' ')
console.log(words)              // the text has special characters think how you can just get only the words
// ["I", "love", "teaching", "and", "empowering", "people.", "I", "teach", "HTML,", "CSS,", "JS,", "React,", "Python"]

/* 
*### Accessing array items using index 
*We access each element in an array using their index. An array index starts from 0. The picture below clearly shows the index of each element in the array.
*/


const fruits = ['banana', 'orange', 'manga', 'apple']
console.log(fruits[0])          //banana

secondFruit = fruits[1]
console.log(secondFruit)        //orange

thirdFruit = fruits[2]
console.log(thirdFruit)         //manga

fourthFruit = fruits[3]
console.log(fourthFruit)        //apple


// *Last index can be calculated as follows
let lastIndex2 = fruits.length - 1
lastFruits = fruits[lastIndex2]
console.log(lastFruits)         //apple

const numbers = [0, 3.14, 9.81, 37, 98.6, 100]  // set of numbers

console.log(numbers.length)  // => to know the size of the array, which is 6
console.log(numbers)         // -> [0, 3.14, 9.81, 37, 98.6, 100]
console.log(numbers[0])      //  -> 0
console.log(numbers[5])      //  -> 100

let lastIndex1 = numbers.length - 1;
console.log(numbers[lastIndex1]) // -> 100


const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
] // List of web technologies

console.log(webTechs)        // all the array items
console.log(webTechs.length) // => to know the size of the array, which is 7
console.log(webTechs[0])     //  -> HTML
console.log(webTechs[6])     //  -> MongoDB

let lastIndex = webTechs.length - 1
console.log(webTechs[lastIndex]) // -> MongoDB


const countries = [
    'Philippines',
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
] // List of countries

console.log(countries)      // -> all countries in array
console.log(countries[0])   //  -> Philippines
console.log(countries[10])  //  -> Japan

let lastIndex3 = countries.length - 1;
console.log(countries[lastIndex3]) //  -> Kenya

const shoppingCart = [
    'Milk',
    'Mango',
    'Tomato',
    'Potato',
    'Avocado',
    'Meat',
    'Eggs',
    'Sugar'
] // List of food products

console.log(shoppingCart) // -> all shoppingCart in array
console.log(shoppingCart[0]) //  -> Milk
console.log(shoppingCart[7]) //  -> Sugar

let lastIndex4 = shoppingCart.length - 1;
console.log(shoppingCart[lastIndex4]) //  -> Sugar

const numbers1 = [1, 2, 3, 4, 5]
numbers1[0] = 10      // changing 1 at index 0 to 10
numbers1[1] = 20      // changing  2 at index 1 to 20

console.log(numbers1) // [10, 20, 3, 4, 5]


/* 
### Methods to manipulate array

*There are different methods to manipulate an array. These are some of the available methods to deal with arrays:_Array, length, concat, indexOf, slice, splice, join, toString, includes, lastIndexOf, isArray, fill, push, pop, shift, unshift_

#### Array Constructor

Array:To create an array.
*/

const arr3 = Array()                    //creates an an empty array
console.log(arr3)                       // []

const eightEmptyValues = Array(8)
console.log(eightEmptyValues)           // [ <8 empty items> ]


/* 
*#### Creating static values with fill
*fill: Fill all the array elements with a static value
*/
const arr4 = Array(8).fill('X')
console.log(arr4)

const eightZero = Array(8).fill(0)      // it creates eight element values filled with '0'
console.log(eightZero)                  // [0, 0, 0, 0, 0, 0, 0, 0]

const fourFill = Array(4).fill(4)       // it creates 4 element values filled with '4'
console.log(fourFill)                   // [4, 4, 4, 4]


/* 
*#### Concatenating array using concat
*concat:To concatenate two arrays.
*/

const firstName = 'Jade ivan '
const lastName = 'Bringcola'
const fullName = firstName.concat(lastName)
console.log(fullName)                   //Jade ivan Bringcola

const fruits1 = ['Banana', 'Apple', 'Orange', 'PineApple']
const vegetables1 = ['Potato', 'Tomato', 'Cabbage', 'Onion']
const allFruitsVegetables = fruits1.concat(vegetables1)

console.log(allFruitsVegetables)        //['Banana', 'Apple', 'Orange', 'PineApple','Potato','Tomato','Cabbage','Onion']


/* 
*#### Getting array length
*Length:To know the size of the array
*/
const numbers3 = [1, 2, 3, 4, 5]
console.log(numbers3.length) // -> 5 is the size of the array


/* 
*#### Getting index an element in arr array
*indexOf:To check if an item exist in an array. If it exists it returns the index else it returns -1.
*/

const number4 = [1, 2, 3, 4, 5]

console.log(number4.indexOf(0))             //-1
console.log(number4.indexOf(1))             //0
console.log(number4.indexOf(2))             //1
console.log(number4.indexOf(6))             //-1
console.log(number4.indexOf(5))             //4

/* 
*Check an element if it exist in an array.
*- Check items in a list */

// let us check if a banana exist in the array

const fruit1 = ['banana', 'orange', 'mango', 'lemon']
let index = fruit1.indexOf('banana')  // 0

if (index === -1) {
    console.log('This fruit does not exist in the array')
} else {
    console.log('This fruit does exist in the array')
}
// This fruit does exist in the array

// we can use also ternary here
index === -1 ? console.log('This fruit does not exist in the array') : console.log('This fruit does exist in the array')

// let us check if an avocado exist in the array
let indexOfAvocado = fruit1.indexOf('avocado')  // -1, if the element not found index is -1
if (indexOfAvocado === -1) {
    console.log('This fruit does not exist in the array')
} else {
    console.log('This fruit does exist in the array')
}
// This fruit does not exist in the array

/* 
*#### Getting last index of an element in array
*lastIndexOf: It gives the position of the last item in the array. If it exist, it returns the index else it returns -1.
*/
const number1 = [1, 2, 3, 4, 5, 3, 1, 2]

console.log(number1.lastIndexOf(2)) // 7
console.log(number1.lastIndexOf(0)) // -1
console.log(number1.lastIndexOf(1)) //  6
console.log(number1.lastIndexOf(4)) //  3
console.log(number1.lastIndexOf(6)) // -1

// *includes:To check if an item exist in an array. If it exist it returns the true else it returns false.

const numbers2 = [1, 2, 3, 4, 5]

console.log(numbers2.includes(5)) // true
console.log(numbers2.includes(0)) // false
console.log(numbers2.includes(1)) // true
console.log(numbers2.includes(6)) // false

const webLanguage = [
    'HTML',
    'Javascript',
    'Python',
    'C++',
    'Php',
    'Node'
]   //List of Web Language

console.log(webLanguage.includes('Node'))   //true
console.log(webLanguage.includes('C'))      //false    

/* 
*#### Checking array
*Array.isArray:To check if the data type is an array
*/

const oneArray = [1,2,3,4,5]
console.log(Array.isArray(oneArray))        //true

const twoArray = 100
console.log(Array.isArray(twoArray))        //false

/* 
*#### Converting array to string
*toString:Converts array to string
*/

const number2 =  [1,2,3,4,5]
console.log(number2.toString())             //1,2,3,4,5

const names1 = ['Jade Ivan', 'Phoebe','Carlo','Philip']
console.log(names1.toString())              //Jade Ivan,Phoebe,Carlo,Philip

/*
*#### Joining array elements
*join: It is used to join the elements of the array, the argument we passed in the join method will be joined in the array and return as a string. By default, it joins with a comma, but we can pass different string parameter which can be joined between the items.*/

const number3 = [1, 2, 3, 4, 5]
console.log(number3.join())                 // 1,2,3,4,5



const webTechs1 = [
    'HTML',
    'Javascript',
    'Python',
    'C++',
    'Node'
]   //List of Web Language

console.log(webTechs1.join())               //HTML,Javascript,Python,C++,Node
console.log(webTechs1.join(" # "))          //HTML # Javascript # Python # C++ # Node

/* #### Slice array elements
*Slice: To cut out a multiple items in range. It takes two parameters:starting and ending position. It doesn't include the ending position. */

const number5 = [1,2,3,4,5]

console.log(number5.slice()) // -> it copies all  item
console.log(number5.slice(0)) // -> it copies all  item
console.log(number5.slice(0, number5.length)) // it copies all  item
console.log(number5.slice(1,4)) // -> [2,3,4] // it doesn't include the ending position

/* 
#### Splice method in array
*Splice: It takes three parameters:Starting position, number of times to be removed and number of items to be added.*/

const numbers4 = [1,2,3,4,5]
let numbers5 = numbers4.splice()              
console.log(numbers5)               //-> remove all items

const numbers6 = [1, 2, 3, 4, 5]
numbers6.splice(0,1)
console.log(numbers6)            // remove the first item

const numbers7 = [1, 2, 3, 4, 5, 6]
numbers7.splice(3, 3, 7, 8, 9)
console.log(numbers7.splice(3, 7, 8, 9))  // -> [1, 2, 3, 7, 8, 9] //it removes three item and replace three items

/* 

*#### Adding item to an array using push
*Push: adding item in the end. To add item to the end of an existing array we use the push method.
*/

const arr5 = [1,2,3,4,5]
arr5.push('Bandev</>','Jade Ivan','Proline','Phoebe')
console.log(arr5)                       //[ 1, 2, 3, 4, 5, 'Bandev</>', 'Jade Ivan', 'Proline', 'Phoebe' ]

const fruit2 = ['Guava','Apple','Orange','Durian']
fruit2.push('Mango','Banana','Lemon')
console.log(fruit2)                     //['Guava','Apple','Orange','Durian', 'Mango','Banana','Lemon' ]

/* 
*#### Removing the end element using pop
*pop: Removing item in the end.
*/

const arr6 = [1,2,3,4,5]
arr6.pop()
console.log(arr6)                       //[ 1, 2, 3, 4 ]

const fruit3 = ['Guava', 'Apple','Orange','Durian']
fruit3.pop()                            // -> remove one item from the end
console.log(fruit3)                     //[ 'Guava', 'Apple', 'Orange' ]


/* 
*#### Removing an element from the beginning
*shift: Removing one array element in the beginning of the array.*/

const number6 = [1,2,3,4,5]
number6.shift()                         // -> remove one item from the beginning
console.log(number6)                    //[ 2, 3, 4, 5 ]


const fruit4 = ['Guava', 'Apple','Orange','Durian']
fruit4.shift()                          // -> remove one item from the beginning
console.log(fruit4)                     //[ 'Apple', 'Orange', 'Durian' ]


/* 
*#### Add an element from the beginning
*unshift: Adding array element in the beginning of the array.*/

const num = [1,2,3,4,5]
num.unshift(0)                          // -> add one item from the beginning
console.log(num)                        // -> [0,1,2,3,4,5]

const name1 = ['Bandev</>','Jade Ivan','Proline','Phoebe']
name1.unshift('Philip')
console.log(name1)                      //[ 'Philip', 'Bandev</>', 'Jade Ivan', 'Proline', 'Phoebe' ]
/* 
*#### Reversing array order
*reverse: reverse the order of an array.*/

const num1 = [1,2,3,4,5]
num1.reverse()                          // -> reverse array order
console.log(num1)                       //[ 5, 4, 3, 2, 1 ]

num1.reverse()
console.log(num1)                       //[ 1, 2, 3, 4, 5 ]

const name2 = ['Bandev</>','Jade Ivan','Proline','Phoebe']
name2.reverse()
console.log(name2)                      //[ 'Phoebe', 'Proline', 'Jade Ivan', 'Bandev</>' ]


/*
*#### Sorting elements in array
*sort: arrange array elements in ascending order. Sort takes a call back function, we will see how we use sort with a call back function in the coming sections.*/

const language1 =[
    'HTML',
    'JavaScript',
    'Python',
    'C++',
    'Node',
]

language1.sort()
console.log(language1)                  //[ 'C++', 'HTML', 'JavaScript', 'Node', 'Python' ]

language1.reverse()                     // after sorting we can reverse it
console.log(language1)                  //[ 'Python', 'Node', 'JavaScript', 'HTML', 'C++' ]


/* 
*### Array of arrays
*Array can store different data types including an array itself. Let us create an array of arrays*/

const firstNum = [1,2,3]
const secondNum = [4,5,6]
const arrayOfArray = [[1,2,3],[1,2,3]]
console.log(arrayOfArray[0])            //[ 1, 2, 3 ]

const addTwoArray = [[1,2,3],[4,5,6]]
console.log(addTwoArray[0])             //[ 1, 2, 3 ]
console.log(addTwoArray[1])             //[ 4, 5, 6 ]

const firstLanguage = ['Python','C++','Php']
const secondLanguage = ['HTML','JavaScript']
const allLanguage = [firstLanguage,secondLanguage]
console.log(allLanguage.length)         //2
console.log(allLanguage[0])             //[ 'Python', 'C++', 'Php' ]
console.log(allLanguage[1])             //[ 'HTML', 'JavaScript' ]


/*
*🌕 You are diligent and you have already achieved quite a lot. You have just completed day 5 challenges and you are 5 steps a head in to your way to greatness. Now do some exercises for your brain and for your muscle.*/


/* 
*## 💻 Exercise
*### Exercise: Level 1*/

const countries1 = [
    'Philippines',
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
]

const webTechs2 = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]

//*1. Declare an _empty_ array;
const arr01 = Array(1)
console.log(arr01);

//*2. Declare an array with more than 5 number of elements.
const arr02 = [1,2,3,4,5,6,7,8,9,10]
console.log(arr02)                      //[ 1, 2, 3, 4,  5, 6, 7, 8, 9, 10 ]

//*3. Find the length of your array.
const arr03 = ['HTML','JavaScript','Php','C++']
console.log(arr03)                      //[ 'HTML', 'JavaScript', 'Php', 'C++' ]

//*4. Get the first item, the middle item and the last item of the array.
const arr04 = [1,2,3,4,5]
const arr05 = [arr04[0], arr04[2], arr04[4]]
console.log(arr05)                      //[ 1, 3, 5 ]


//*5. Declare an array called _mixedDataTypes_, put different data types in the array and find the length of the array. The array size should  be greater than 5.
const mixedDataTypes =[['HTML','C++','JavaScript'],[1,2,3],['Php, C#'],[4,5,6],['Philippines','America','Chicago','Japan','Korea'],[7,8,9,10]]
console.log(mixedDataTypes.length)      //6
console.log(mixedDataTypes[0])          //[ 'HTML', 'C++', 'JavaScript' ]


//*6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon.
const itCompanies = ['Facebook', 'Google',' Microsoft',' Apple','IBM', 'Oracle','Amazon']

//*7. Print the array using _console.log()_
console.log(itCompanies)                //['Facebook','Google',' Microsoft',' Apple','IBM','Oracle','Amazon' ]

//*8. Print the number of companies in the array.
const companies1 = ['Facebook','Google',' Microsoft',' Apple','IBM', 'Oracle','Amazon']
console.log(companies1.length)         //7

//*9. Print the first company, middle and last company
console.log(companies1[0],companies1[3],companies1[6])      //Facebook  Apple Amazon

//* 10. Print out each company.
console.log(companies1[0])              //Facebook
console.log(companies1[1])              //Google
console.log(companies1[2])              //Microsoft
console.log(companies1[3])              //Apple
console.log(companies1[5])              //Oracle
console.log(companies1[6])              //Amazon

//*11. Change each company name  to uppercase one by one and print them out.
const companies2 = ['Facebook','Google',' Microsoft',' Apple','IBM', 'Oracle','Amazon']
for (let i = 0; i < companies2.length; i++) {
    companies2[i] = companies2[i].toUpperCase()
}
console.log(companies2);
/*
*12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies. */
const companies3 = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
const sentence = companies3.slice(0, -1).join(', ') + ' and ' + companies3.slice(-1);
console.log(`${sentence} are big IT companies.`)    //Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon are big IT companies.

/*
*13. Check if a certain company exists in the companies3 array. If it exist return the company else return a company is _not found_*/
if(companies3.includes('Facebook')){
    console.log('Found Facebook');
} else{
    console.log('not found');
}                                       //Found Facebook

//*14. Filter out companies which have more than one 'o' without the filter method
const companies4 = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
const filteredCompanies = [];
for (let i = 0; i < companies4.length; i++) {
    const company = companies4[i];
    const firstIndex = company.indexOf('o');
    const lastIndex = company.lastIndexOf('o');
    if (firstIndex !== -1 && lastIndex !== -1 && firstIndex !== lastIndex) {
        continue;
    }
    filteredCompanies.push(company);
}
console.log(filteredCompanies)          //[ 'Apple', 'IBM', 'Oracle', 'Amazon' ]


//*Sort the array using _sort()_ method.
companies4.sort()
console.log(companies4)

//*16. Reverse the array using _reverse()_ method.
companies4.reverse()
console.log(companies4)                     // 'Oracle', Microsoft','IBM','Google','Facebook','Apple','Amazon'



const companies5 = new Array('Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon')

//*17. Slice out the first 3 companies4 from the array.
console.log(companies5.slice(0,3))          //[ 'Facebook', 'Google', 'Microsoft' ]

//*18. Slice out the last 3 companies from the array.
console.log(companies5.slice(-3))           //[ 'IBM', 'Oracle', 'Amazon' ]

//*19. Slice out the middle IT company or companies from the array.
const middleIndex = Math.floor(companies5.length / 2);
const middle = companies5.splice(middleIndex, companies5.length % 2 === 0 ? 2 : 1)
console.log(middle)                         // [ 'Apple' ]
console.log(companies5)                     // [ 'Facebook', 'Google', 'Microsoft', 'IBM', 'Oracle', 'Amazon' ]

//*20. Remove the first IT company from the array
console.log(companies5.splice(1))            //[ 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon' ]

//*22. Remove the last IT company from the array.
const companies7 = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
companies7.pop()
console.log(companies7)                     // [ 'Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle' ]

//*23. Remove all IT companies
let companies8 = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
companies8.length = 0
console.log(companies8)                     //[]
