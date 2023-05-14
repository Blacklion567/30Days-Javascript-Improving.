/* 
*# Day 11

*## Destructuring and Spread
*Destructuring is a way to unpack arrays, and objects and assigning to a distinct variable.
*/

//*### Destructing Arrays

const num = [1,2,3]
let [numOne, numTwo, numThree] = num

console.log(numOne, numTwo, numThree)               //1 2 3


const name = ['Jade Ivan', 'Bandev', 'Phoebe', 'Carlo', 'Philip']
let [nameOne, nameTwo, nameThree, nameFour, nameFive] = name

console.log(nameOne, nameTwo, nameThree, nameFour, nameFive)        //Jade Ivan Bandev Phoebe Carlo Philip

const floatNum = [1.5, 2.5, 1.2, 1.9]
let [floatNumOne, floatNumTwo, floatNumThree, floatNumFour] = floatNum

console.log(floatNumOne, floatNumTwo, floatNumThree, floatNumFour)      //1.5 2.5 1.2 1.9


const fullStuck =[
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB'],
    ['Python','Next.js']
]

let [fullStuckOne, fullStuckTwo, fullStuckThree] = fullStuck

console.log(fullStuckOne)                           //[ 'HTML', 'CSS', 'JS', 'React' ]
console.log(fullStuckTwo)                           //[ 'Node', 'Express', 'MongoDB' ]
console.log(fullStuckThree)                         // ['Python','Next.js']


//*If we like to skip on of the values in the array we use additional comma. The comma helps to omit the value at that specific index.


const num1 = [1,2,3]
let [num1One,     ,num1Three] = num1

console.log(num1One)                                //1
console.log(num1Three)                              //3

//*We can use default value in case the value of array for that index is undefined:

const name1 = [undefined, 'Bandev</>','Jade Ivan']
let [firstName = 'Phoebe', secondName , thirdName, fourName = 'Proline'] = name1

console.log(firstName,  secondName, thirdName, fourName)        //Phoebe Bandev</> Jade Ivan Proline

//*We can not assign variable to all the elements in the array. We can destructure few of the first and we can get the remaining as array using spread operator(...).

const num2 = [1,2,3,4,5,6,7,8,9,10]
let [num01, num02, num03, ...num04] = num2

console.log(num01, num02, num03)                            //1 2 3
console.log(num04)                                       
/*
[
    4, 5,  6, 7,
    8, 9, 10
] */

//*### Destructuring during iteration.
const countries = [['Philippines', 'Japan'], ['Korea','China'],['USA','Russia']]

for( const [country, city] of countries){
    console.log(country, city)
}
/* 
Philippines Japan
Korea China
USA Russia
*/

const namesAge = [[names = 'Jade Ivan', age = 20,address = 'Lunocan Manolo Fortich Bukidnon'], [names = 'Bandev</>', age = 21,address = 'Bagacay Sibonga Cebu']]

for( const [name, age,address] of namesAge){
    console.log(name,age,address);
    /* 
    Jade Ivan 20 Lunocan Manolo Fortich Bukidnon
    Bandev</> 21 Bagacay Sibonga Cebu
    */
}



/*
*### Destructuring Object

*When we destructure the name of the variable we use to destructure should be exactly the same as the key or property of the object. See the example below.*/
let rectangle = {
    width: 20,
    height: 300,
    area: 200
}
let {width, height,area, parameter} = rectangle

console.log(width, height, area,parameter)              //20 300 200 undefined

//*If the key is not found in the object the variable will be assigned to undefined. Sometimes the key might not be in the object, in that case we can give a default value during declaration. See the example.


const studentGrade = {
    firstGrading: 89,
    secondGrading: 90,
    thirdGrading: 94,
    fourthGrading: 88
}

let {firstGrading: a, secondGrading: b, thirdGrading: c, fourthGrading: d} = studentGrade

console.log(a,b,c,d)                                    //89 90 94 88

//*Destructuring keys as a function parameters. Let us create a function which takes a rectangle object and it returns a perimeter of a rectangle.


//*### Object parameter without destructuring

//*Without destructuring
const react = {
    width: 20,
    height: 100
}
const calculateParameter = rectangle => {
    return 2 * (rectangle.width + rectangle.height)
}
console.log(calculateParameter(react))  //240 
//with  destructuring


//*Another Example
const person = {
    firstName: 'Jade Ivan',
    lastName: 'Bringcola',
    age:20,
    country: 'Philippines',
    job: 'Programmer and  Instructor',
    skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Redux',
        'Node',
        'MongoDB',
        'Python'
    ],
    languages: ['Filipino', 'English', 'Bisaya']
}
//*Let us create a function which give information about the person object without destructuring.

//*#1
const getPersonInfo = obj => {
    const skills = obj.skills
    const formattedSkills = skills.slice(0, -1).join(', ')
    const languages = obj.languages
    const formattedLanguages = languages.slice(0, -1).join(', ')

    getPersonInfo1 = `${obj.firstName} ${obj.lastName} lives in ${obj.country}. He is  ${obj.age
        } years old. He is an ${obj.job}. He teaches ${formattedSkills} and ${skills[skills.length - 1]
        }. He speaks ${formattedLanguages} and a little bit of ${languages[2]}.`

    return getPersonInfo1
}
console.log(getPersonInfo(person))                          //Jade Ivan Bringcola lives in Philippines. He is  20 years old. He is an Programmer and  Instructor. He teaches HTML, CSS, JavaScript, React, Redux, Node, MongoDB and Python. He speaks Filipino, English and a little bit of Bisaya.

//*#2
//*### Object parameter with destructuring
const calculatePerimeter = ({ width, height }) => {
    return 2 * (width + height)
}

console.log(calculatePerimeter(react)) // 240


//*#3
const getPersonInfo01 = ({
    firstName,
    lastName,
    age,
    country,
    job,
    skills,
    languages
}) => {
    const formattedSkills = skills.slice(0, -1).join(', ')
    const formattedLanguages = languages.slice(0, -1).join(', ')

    personInfo = `${firstName} ${lastName} lives in ${country}. He is ${age} years old. He is an ${job}. He teaches ${formattedSkills} and ${skills[skills.length - 1]
        }. He speaks ${formattedLanguages} and a little bit of ${languages[2]}.`

    return personInfo
}
console.log(getPersonInfo01(person))                        //Jade Ivan Bringcola lives in Philippines. He is 20 years old. He is an Programmer and  Instructor. He teaches HTML, CSS, JavaScript, React, Redux, Node, MongoDB and Python. He speaks Filipino, English and a little bit of Bisaya.



//*### Destructuring object during iteration

const todoList = [{
task: 'Prepare JS Test',
time: '05/11/2023',
complete: true
}, 
{
task: 'Give JS Test',
time: '05/11/2023 10:00',
completed: false
},
{
task: 'Assess Test Result',
time: '05/11/2023 1:00',
completed: false
}]

for(const {task,time,complete} of todoList){
    console.log(task,time,complete);
    /*
    Prepare JS Test 05/11/2023 true
    Give JS Test 05/11/2023 10:00 undefined
    Assess Test Result 05/11/2023 1:00 undefined */
}


/* 
*### Spread or Rest Operator

*When we destructure an array we use the spread operator(...) to get the rest elements as array. In addition to that we use spread operator to spread array elements to another array.

*### Spread operator to get the rest of array elements
*/

//*#1
const nums = [1,2,3,4,5,6,7,8,9,10]
let [nums1,nums2,nums3, ...nums4] = nums

console.log(nums1, nums2, nums3)            //1 2 3
console.log(nums4)                          
/*
[
    4, 5,  6, 7,
    8, 9, 10
]
*/

//*#2
const countries1 = [
    'Germany',
    'France',
    'Belgium',
    'Finland',
    'Sweden',
    'Norway',
    'Denmark',
    'Iceland'
]

let [gem, fra, , ...nordicCountries] = countries1

console.log(gem)                    //Germany
console.log(fra)                    //France
console.log(nordicCountries)        //[ 'Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland' ]


const evens = [0, 2, 4, 6, 8, 10]
const evenNumbers = [...evens]

const odds = [1, 3, 5, 7, 9]
const oddNumbers = [...odds]

const wholeNumbers = [...evens, ...odds]

console.log(evenNumbers)            //[ 0, 2, 4, 6, 8, 10 ]
console.log(oddNumbers)             //[ 1, 3, 5, 7, 9 ]
console.log(wholeNumbers)           //[ 0, 2, 4, 6, 8, 10, 1, 3, 5, 7, 9 ]


const frontEnd = ['HTML', 'CSS', 'JS', 'React']
const backEnd = ['Node', 'Express', 'MongoDB']
const fullStack = [...frontEnd, ...backEnd]

console.log(fullStack)              //["HTML", "CSS", "JS", "React", "Node", "Express", "MongoDB"]

const user = {
    name: 'Jade Ivan',
    title: 'Programmer',
    country: 'Philippines',
    province: 'Sibonga'
}

const copiedUser = {...user}
console.log(copiedUser)             //{ name: 'Jade Ivan', title: 'Programmer', country: 'Philippines', province: 'Sibonga'}

//*Modifying or changing the object while copying

const user1 = {
    name: 'Jade Ivan',
    title: 'Programmer',
    country: 'Philippines',
    province: 'Sibonga'
}

const copiedUser1 = {...user, title: 'Instructor'}
console.log(copiedUser1)            //{ name: 'Jade Ivan', title: 'Instructor', country: 'Philippines', province: 'Sibonga'}

/*
*#### Spread operator with arrow function

*Whenever we like to write an arrow function which takes unlimited number of arguments we use a spread operator. If we use a spread operator as a parameter, the argument passed when we invoke a function will change to an array.
*/

const sumAllNum = (...args) =>{
    console.log(args)
}
sumAllNum(1,2,3,4,5)                //[ 1, 2, 3, 4, 5 ]


const sumAllNum1 = (...args) => {
    let sum = 0
    for (const num of args) {
        sum += num
    }
    return sum
}
console.log(sumAllNum1(1, 2, 3, 4, 5))          //15



//*🌕 You achieved quite a lot so far. Now, your level of JavaScript is upper intermediate. Keep going! You have just completed day 11 challenges and you are 11 steps a head in to your way to greatness. Now do some exercises for your brain and for your muscle.
