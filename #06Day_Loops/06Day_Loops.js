/* 
# 📔 Day 6
## Loops
*Most of the activities we do in life are full of repetitions. Imagine if I ask you to print out from 0 to 100 using console.log(). To implement this simple task it may take you 2 to 5 minutes, such kind of tedious and repetitive task can be carried out using loop. If you prefer watching the videos, you can checkout the [video tutorials](https://www.youtube.com/channel/UCM4xOopkYiPwJqyKsSqL9mw)

*In programming languages to carry out repetitive task we use different kinds of loops. The following examples are the commonly used loops in JavaScript and other programming languages.*/

//*### for Loop
/* 
#For loop structure
*Never Forget To Declare The Word 'let' Before You Put I Beside It.
*for(initialization, condition, increment/decrement){
    code goes here
} 
*/

for(let i = 0; i < 11; i++){
    console.log(i)                      // 0 1 2 3 4 5
}

for(let i = 5 ; i >= 0; i--){
    console.log(i)
}                                       // 5 4 3 2 1 0

for(let i = 0; i <= 5; i++){
    console.log(`${i} * ${i} = ${i*i}`);
}

/* 
0 * 0 = 0
1 * 1 = 1
2 * 2 = 4
3 * 3 = 9
4 * 4 = 16
5 * 5 = 25
*/

const country = ['Philippines','Japan','Korean','China']
const arr = []
for (let i = 0; i < country.length; i++){
    arr.push(country[i].toUpperCase())
}
console.log(arr)                        //[ 'PHILIPPINES', 'JAPAN', 'KOREAN', 'CHINA' ]


//*Adding all elements in the array
const num1 = [1,2,3,4,5]
let num01 = 0
for(let i = 0; i < num1.length; i++){
    num01 += num1[i]
}
console.log(num01)                      //15


//*Creating a new array based on the existing array


const num2 = [1,2,3,4,5]
const num02 = []

for(let i = 0; i < num2.length; i++){
    num02.push(num2[i]**2)
}
console.log(num02)                      //[ 1, 4, 9, 16, 25 ]

const country1 = ['Philippines','Japan','Korean','China','Iceland']
const arr1 = []

for(let i = 0; i < country1.length; i++){
    arr1.push(country1[i].toUpperCase())
}
console.log(arr1);

//*### while loop
let i = 0
while (i <= 5 ){
    console.log(i)
    i++
}                                       // 0 1 2 3 4 5


//*### do while loop

let i1 = 0
do{
    console.log(i1)
    i1++
} while (i1 <= 5) 

// 0 1 2 3 4 5


/* 
*### for of loop
*We use for of loop for arrays. It is very hand way to iterate through an array if we are not interested in the index of each element in the array. */

for(const element of arr){
console.log(element)
}
/*
PHILIPPINES
JAPAN
KOREAN
CHINA 
*/

const num3 = [1,2,3,4,5]

for(const num03 of num3){
    console.log(num03)
}                                           // 1 2 3 4 5


const fruits = ['Banana','Apple','Orange','Durian']
for(const fruit of fruits){
    console.log(fruit);
}                                           //['Banana','Apple','Orange','Durian']

for (const num1 of num3) {
  console.log(num1 * num1)
}                                           // 1 4 9 16 25

//*adding all the numbers in the array
let sum = 0
for (const num of num3) {
    sum = sum + num
    // can be also shorten like this, sum += num
    // after this we will use the shorter syntax (+=, -=, *=, /= etc)
}
console.log(sum) // 15


const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]

for(const tech of webTechs){
    console.log(tech.toUpperCase());
}                                           // HTML CSS JAVASCRIPT REACT NODE MONGODB

for(const tech of webTechs){
    console.log(tech[0])
}                                           // get only the first letter of each element,  H C J R N M

const countries = ['Philippines','Japan','China','Korea']
const newArr = []
for(const country1 of countries){
    newArr.push(country1.toUpperCase())
}
console.log(newArr)                         //[ 'PHILIPPINES', 'JAPAN', 'CHINA', 'KOREA' ]



/* ### break
*Break is used to interrupt a loop.*/

for(let i = 0; i <= 5; i++){
    if(i == 3){
        break
    }
    console.log(i)
}

// 0 1 2
//*The above code stops if 3 found in the iteration process.

/* ### continue
*We use the keyword *continue* to skip a certain iterations.*/

for(let i = 0; i <= 5; i++){
    if(i == 3){
        continue
    }
    console.log(i)
}                                           // 0 1 2 4 5

/*
*🌕 You are so brave, you made it to this far. Now, you have gained the power to automate repetitive and tedious tasks. You have just completed day 6 challenges and you are 6 steps a head in to your way to greatness. Now do some exercises for your brain and for your muscle.*/

// ## 💻 Exercises:Day 6
// ### Exercises: Level 1

const countries1 = [
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

/* 
*1. Iterate 0 to 10 using for loop, do the same using while and do while loop */

//*for loop
for(let i = 0; i < countries1.length; i++){
    console.log(countries1[i])
}                                       //Albania Bolivia Canada Denmark Ethiopia Finland Germany Hungary Ireland Japan Kenya

//*While loop
let i2 = 0
while(i2 < countries1.length){
    console.log(countries1[i2])
    i2++
}                                       //Albania Bolivia Canada Denmark Ethiopia Finland Germany Hungary Ireland Japan Kenya


//*do while loop
do{
    console.log(countries1)
    i2++
}while(i2 < country1)                    //Albania Bolivia Canada Denmark Ethiopia Finland Germany Hungary Ireland Japan Kenya


/* 
*2. Iterate 10 to 0 using for loop, do the same using while and do while loop. */

const webTechs1 = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]

//*for loop
for(let i = webTechs1.length - 1; i >= 0; i--){
    console.log(webTechs1[i])
}                                   //MongoDB Node Redux React JavaScript CSS HTML

//*while loop
while( i >= 0){
    console.log(webTechs1[i])
    i--
}                                   //MongoDB Node Redux React JavaScript CSS HTML

//*do loop
let i3 = webTechs1.length -1
do {
    console.log(webTechs1[i3])
    i3--
}while( i3 >= 0)                    //MongoDB Node Redux React JavaScript CSS HTML


//*3. Iterate 0 to n using for loop
let n = 0
for(let i = 0; i <= n; i++){
    console.log(i);
}                                   //0


//*4. Write a loop that makes the following pattern using console.log():
/* 
#
##
###
####
#####
######
#######
 */

for (let i = 1; i <= 7; i++) {
    let str = '';
    for (let j = 1; j <= i; j++) {
        str += '#';
    }
    console.log(str);
}                   
/* 
#
##
###
####
#####
######
#######
 */
const mernStack = ['MongoDB', 'Express', 'React', 'Node']



/*
*5.Use loop to print the following pattern:
    0 x 0 = 0
    1 x 1 = 1
    2 x 2 = 4
    3 x 3 = 9
    4 x 4 = 16
    5 x 5 = 25
    6 x 6 = 36
    7 x 7 = 49
    8 x 8 = 64
    9 x 9 = 81
    10 x 10 = 100
*/

//*5.Use loop to print the following pattern:
for(let i = 0; i <= 10; i++){
    console.log(`${i} * ${i} = ${i * i}`)
}
/* 
    0 x 0 = 0
    1 x 1 = 1
    2 x 2 = 4
    3 x 3 = 9
    4 x 4 = 16
    5 x 5 = 25
    6 x 6 = 36
    7 x 7 = 49
    8 x 8 = 64
    9 x 9 = 81
    10 x 10 = 100
*/

//*6. Using loop print the following pattern
for(let i= 0; i <= 10; i++){
    console.log(`${i}  ${i*i}  ${i *i*i}`)
}
/* 
    0    0     0
    1    1     1
    2    4     8
    3    9     27
    4    16    64
    5    25    125
    6    36    216
    7    49    343
    8    64    512
    9    81    729
    10   100   1000
*/

//*7. Use for loop to iterate from 0 to 100 and print only even numbers.
for(let i = 0; i <= 100;i++){
    if(i % 2 == 0){
        console.log(i)
    }
}                               // 2,4,6,8,10....100 even number

//*8. Use for loop to iterate from 0 to 100 and print only odd numbers.
for (let i = 0; i <= 100; i++) {
    if (i % 3 == 0)
        console.log(i)
}                               // 3,6,9,12,15,18,21...99 odd number

//*9. Use for loop to iterate from 0 to 100 and print only prime numbers.

for(let i = 2; i <= 100; i++){
    let isPrime = true;
    for(let j = 2; j < i; j++){
        if(i % j === 0){
            isPrime = false;
        break
        }
    }
    if(isPrime){
        console.log(i)
    }
}
/* 
2
3
5
7
11
13
17
19
23
29
31
37
41
43
47
53
59
61
67
71
73
79
83
89
97
*/


//*10. Use for loop to iterate from 0 to 100 and print the sum of all numbers.
let isAllNum = 0
for(let i= 0; i <= 100; i++){
    isAllNum += i;
    console.log(isAllNum)
}                                   // 0 to 5050

//*11.Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
let isOdd = 0
for(let i = 0; i <= 100; i++){
    if(i % 2 == 0){
        isOdd += i;
        console.log(isOdd)
    }
}                                   // 0 to 2500


//*12.Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array

let sumEven = 0;
let sumOdd = 0;

for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        sumEven += i;
    } else {
        sumOdd += i;
    }
}
let sumsArray = [sumEven, sumOdd];
console.log("The sum of all even and odd numbers from 0 to 100 is: " + sumsArray);


//*13. Develop a small script which generate array of 5 random numbers.
let randomArray = [];

for (let i = 0; i < 5; i++) {
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    randomArray.push(randomNumber);
}

console.log(randomArray)                        //[ 1, 7, 2, 4, 9 ] //random

//*14. Develop a small script which generate array of 5 random numbers and the numbers must be unique.

let randomArray1 = [];

while (randomArray1.length < 5) {
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    if (!randomArray1.includes(randomNumber)) {
        randomArray1.push(randomNumber);
    }
}

console.log(randomArray1)                       //[ 1, 2, 8, 7, 6 ] //random

//*15. Develop a small script which generate a six characters random id:
function generateID() {
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let id = "";
    for (let i = 0; i < 6; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length);
        id += characters.charAt(randomIndex);
    }
    return id;
}

console.log(generateID())                       //k01tUh // random


/* 
### Exercises: Level 2 */

//*1. Develop a small script which generate any number of characters random id:.

function randomSmall(){
    let character1 = '1234567890qwertyuiopasdfghjklzxcvbnm'
    let character01 = ''
    for(let i = 0; i < 12; i++){
        let randomId = Math.floor(Math.random()*character1.length)
        character01 += character1.charAt(randomId)
    }
    return character01
}

console.log(randomSmall())                      //4whic87zdk16 // random


//*2. Write a script which generates a random rgb color number.
function hexadecimalNum() {
    let decimalNum = '#'
    let character2 = '123456789qwertyuiopasdfghjklzxcvbnm'
    for(let i =0; i < 6; i++){
    let random1 = Math.floor(Math.random()*character2.length)
        decimalNum += character2.charAt(random1)
    }
    return decimalNum
}

console.log(hexadecimalNum())                   //#y4oc1y // random

//*3. Write a script which generates a random rgb color number.
function rgbRandom(){
    let randomRbg = ''
    let rbgChoice = '123456789'
    for(let i = 0; i < 9; i++){
    let randomRgb1 = Math.floor(Math.random()* rbgChoice.length)
    randomRbg += rbgChoice.charAt(randomRgb1)
}
    console.log(`rgb(${randomRbg})`);
}
console.log(rgbRandom());


//*4. Using the above countries array, create the following new array.
let countries2 = [
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
let countries3 = new Array("ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA")

console.log(countries3);


