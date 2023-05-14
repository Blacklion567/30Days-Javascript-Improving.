/* 
*# Day 9

*## Higher Order Function

*Higher order functions are functions which take other function as a parameter or return a function as a value. The function passed as a parameter is called callback.

*### Callback

*A callback is a function which can be passed as parameter to other function. See the example below.*/

//*a callback function, the name of the function could be any name.
const callBack = (n) =>{
    return n ** 2
}
console.log(callBack(5))

//* function that takes other function as a callback.
function cube(callBack, n){
    return callBack(n)* n
}

console.log(cube(callBack,3))


const callBack1 = (parameter) =>{
    let firstName = 'Jade Ivan'
    let lastName = 'Bringcola'
    return firstName + parameter + lastName
}
console.log(callBack1(' '))


/* 
*### Returning function
*Higher order functions return function as a value*/


//*Higher order function returning an other function
const higherOrder = n => {
    const doSomething = m => {
        const doWhatEver = t => {
            return 2 * n + 3 * m + t
        }
        return doWhatEver
    }
    return doSomething
}
console.log(higherOrder(2)(3)(10))

/* 
*Let us see were we use call back functions. For instance the _forEach_ method uses call back. */
const numbers = [1, 2, 3, 4, 5]
const sumArray = arr => {
    let sum = 0
    const callback = function (element) {
        sum += element
    }
    arr.forEach(callback)
    return sum

}
console.log(sumArray(numbers))


const number1 = [1, 2, 3, 4, 5]
const sumArray2 = arr => {
    let sum = 0
    const callback = function (element) {
        sum += element
    }
    arr.forEach(callback)
    return sum

}
console.log(sumArray2(number1))                  //15

// *The above example can be simplified as follows:

const number = [5, 10, 15, 20, 25]

const sumArray1 = arr => {
    let sum = 0
    arr.forEach(function (element) {
        sum += element
    })
    return sum
}
console.log(sumArray1(number))                  //75

/*
*### Setting time

*In JavaScript we can execute some activities in a certain interval of time or we can schedule(wait) for some time to execute some activities.

*- setInterval
*- setTimeout

*#### Setting Interval using a setInterval function

*In JavaScript, we use setInterval higher order function to do some activity continuously with in some interval of time. The setInterval global method take a callback function and a duration as a parameter. The duration is in milliseconds and the callback will be always called in that interval of time. */

function sayHello() {
    console.log('Hello')
}
// setInterval(sayHello, 1000) // it prints hello in every second, 1000ms is 1s.


/* 
*#### Setting a time using a setTimeout

*In JavaScript, we use setTimeout higher order function to execute some action at some time in the future. The setTimeout global method take a callback function and a duration as a parameter. The duration is in milliseconds and the callback wait for that amount of time. */

/* // syntax
function callback() {
    code goes here
}
setTimeout(callback, duration) // duration in milliseconds */

function sayHello() {
    console.log('Hello')
}
//setTimeout(sayHello, 1000) // it prints hello after it waits for 2 seconds.

/* 
*## Functional Programming

*Instead of writing regular loop, latest version of JavaScript introduced lots of built in methods which can help us to solve complicated problems. All builtin methods take callback function. In this section, we will see _forEach_, _map_, _filter_, _reduce_, _find_, _every_, _some_, and _sort_.*/

/* 
*### forEach
*_forEach_: Iterate an array elements. We use _forEach_ only with arrays. It takes a callback function with elements, index parameter and array itself. The index and the array optional. */
/* 
*arr.forEach(function (element, index, arr) {
    console.log(index, element, arr)
})
The above code can be written using arrow function
*arr.forEach((element, index, arr) => {
    console.log(index, element, arr)
})
The above code can be written using arrow function and explicit return
*arr.forEach((element, index, arr) => console.log(index, element, arr))
*/


let sum = 0;
const numbers1 = [1, 2, 3, 4, 5];
numbers1.forEach(num => console.log(num))
console.log(sum)
/* 
1
2
3
4
5
*/
let sum1 = 0;
const numbers2 = [1, 2, 3, 4, 5];
numbers2.forEach(num => sum1 += num)
console.log(sum1)                               //15

const countries = ['Philippines', 'Japan', 'Korea','America']
countries.forEach(element => console.log(element.toUpperCase()))
/* 
PHILIPPINES
JAPAN
KOREA
AMERICA
*/

/* 
*### map
*_map_: Iterate an array elements and modify the array elements. It takes a callback function with elements,  index , array parameter and return a new array.*/
/* 
const modifiedArray = arr.map(function (element, index, arr) {
    return element
})
*/

//*Example

//*#1
const numbers3 = [1,2,3,4,5]
const numberSquare = numbers3.map((num) => num * num)

console.log(numberSquare)                           //[1, 4, 9, 16, 25]

//*#2
const names = ['Jade Ivan','Bringcola','Philip','Phoebe','Carlo']
const allNames = names.map((num) => num.toUpperCase())

console.log(allNames)                               //[ 'JADE IVAN', 'BRINGCOLA', 'PHILIP', 'PHOEBE', 'CARLO' ]

//*#3
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
    'Kenya',
]
const allCountries = countries1.map((country) => country.toUpperCase())
console.log(allCountries)
/*
[
    'ALBANIA', 'BOLIVIA',
    'CANADA', 'DENMARK',
    'ETHIOPIA', 'FINLAND',
    'GERMANY', 'HUNGARY',
    'IRELAND', 'JAPAN',
    'KENYA'
]
*/

/* 
##Arrow function
*const countriesToUpperCase = countries.map((country) => {
return country.toUpperCase();
})
##Explicit return arrow function
*const countriesToUpperCase = countries.map(country => country.toUpperCase());
*/

const countriesThreeLetters = countries1.map((country) => country.toUpperCase().slice(0,3))
console.log(countriesThreeLetters)

/* 

*### filter
*_Filter_: Filter out items which full fill filtering conditions and return a new array. */

const countries2 = [
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
    'Kenya',
]

//*Filter countries containing land
const countriesContainingLand = countries2.filter((country) => country.includes('land'))

console.log(countriesContainingLand)            //[ 'Finland', 'Ireland' ]

const countriesContainingEnd = countries2.filter((country) => country.endsWith('ia'))

console.log(countriesContainingEnd)             //[ 'Albania', 'Bolivia', 'Ethiopia' ]

const countriesLengthSize = countries2.filter((country) => country.length === 6 )

console.log(countriesLengthSize)                //[ 'Canada' ]

const scores = [
    { name: 'Jade Ivan', score: 95 },
    { name: 'Bringcola', score: 98 },
    { name: 'Bandev</>', score: 80 },
    { name: 'Phoebe', score: 50 },
    { name: 'Philip', score: 85 },
    { name: 'Carlo', score: 100 },
]

const names1 = scores.filter((score) =>  score.score > 90)
console.log(names1)

/* 
[
    { name: 'Jade Ivan', score: 95 },
    { name: 'Bringcola', score: 98 },
    { name: 'Carlo', score: 100 }
]
*/


/* 
*### reduce

*_reduce_: Reduce takes a callback function. The call back function takes accumulator,  current, and optional initial value as a parameter and returns a single value. It is a good practice to define an initial value for the accumulator value. If we do not specify this parameter, by default accumulator will get array `first value`. If our array is an _empty array_, then `Javascript` will throw an error.*/

/* 
arr.reduce((acc, cur) => {
        some operations goes here before returning a value
    return 
}, initialValue) */

const number2 = [1, 2, 3, 4, 5]
const sum2 = numbers2.reduce((acc, cur) => acc + cur, 0)

console.log(sum2)                           //15

const number3 = [5,10,15,20,25,30]
const addNumber3 = number3.reduce((num, sum) => num + sum)

console.log(addNumber3)                     //105



// *### every
// *_every_: Check if all the elements are similar in one aspect. It returns boolean

//*#1
const names5 = ['Jade Ivan', 'Bandev</>', 'Elias', 'Brook']
const areAllStr = names5.every((name) => typeof name === 'string') // Are all strings?

console.log(areAllStr)                          //true

//*#2
const countries3 = [
    'Philippines',
    'Japan',
    'Korea',
    'China'
]
const countries4 = countries3.every(function(n){
    if( typeof n === 'string'){
        return true
    }else{
        return false
    }
})

console.log(countries4)                         //true

//*#3
const bool = [true, true, true, true]
const allTrue = bool.every((bool) => bool === true)

console.log(allTrue)                            //true



/* 
*### find
*_find_: Return the first element which satisfies the condition */

//*#1
const ages = [24, 22, 25, 32, 35, 18]
const age = ages.find((age) => age < 20)

console.log(age)

//*#2
const names2 = [
    'Jade Ivan',
    'Bandev</>',
    'Phoebe',
    'Philip',
    'Carlo'
]
const result = names2.find((name) => name.length > 7)

console.log(result)                         //Jade Ivan

//*#3
const scores1 = [
    { name: 'Jade Ivan', score: 95 },
    { name: 'Bringcola', score: 98 },
    { name: 'Bandev</>', score: 80 },
    { name: 'Phoebe', score: 50 },
    { name: 'Philip', score: 85 },
    { name: 'Carlo', score: 100 },
]
const score = scores.find((user) => user.score == 95)
console.log(score)                          //{ name: 'Jade Ivan', score: 95 }



/* 
*### findIndex.

*_findIndex_: Return the position of the first element which satisfies the condition */

const names3 = ['Jade Ivan', 'Bandev</>', 'Phoebe', 'Philip']
const ages1 = [24, 22, 25, 32, 35, 18]


const result2 = names3.findIndex((name) => name.length )
console.log(result2) // 0

const age1 = ages1.findIndex((age) => age < 20)
console.log(age1) // 5

/* 
*### some

*_some_: Check if some of the elements are similar in one aspect. It returns boolean
 */

const bools = [true, true, true, true]

const areSomeTrue = bools.some((b) =>  b === true)

console.log(areSomeTrue) //true

const names4 = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const areAllStr1 = names4.some((name) => typeof name === 'number') // Are all strings ?
console.log(areAllStr1) // false


/* 
*### sort

*_sort_: The sort methods arranges the array elements either ascending or descending order. By default, the **_sort()_** method sorts values as strings.This works well for string array items but not for numbers. If number values are sorted as strings and it give us wrong result. Sort method modify the original array. It is recommended to copy the original data before you start using _sort_ method.

*#### Sorting string values.*/

const products = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot']
console.log(products.sort()) // ['Apple', 'Carrot', 'Coffee', 'Honey', 'Milk', 'Sugar']
//*Now the original products array  is also sorted.


/*
*#### Sorting Numeric values

*As you can see in the example below, 100 came first after sorted in ascending order. Sort converts items to string , since '100' and other numbers compared, 1 which the beginning of the string '100' became the smallest. To avoid this, we use a compare call back function inside the sort method, which return a negative, zero or positive. */

const num0 = [9.81, 3.14, 100, 37]
//*Using sort method to sort number items provide a wrong result. see below
console.log(num0.sort())                    // [ 100, 3.14, 37, 9.81 ]
num0.sort(function(a,b) {
    return a - b
})

console.log(num0)                           //[ 3.14, 9.81, 37, 100 ]

num0.sort(function(a,b){
    return b - a
})
console.log(num0)                           //[ 100, 37, 9.81, 3.14 ]

/*
*#### Sorting Object Arrays

*Whenever we sort objects in an array, we use the object key to compare. Let us see the example below. */


/* 
*🌕 You are doing great.Never give up because great things take time. You have just completed day 9 challenges and you are 9 steps a head in to your way to greatness. Now do some exercises for your brain and for your muscle.

*## 💻 Exercises

*### Exercises: Level 1
*/
const countries5 = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names6 = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products1 = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]

/* 
1. Explain the difference between **_forEach, map, filter, and reduce_**.
2. Define a callback function before you use it in forEach, map, filter or reduce.
3. Use **_forEach_** to console.log each country in the countries array.
4. Use **_forEach_** to console.log each name in the names array.
5. Use **_forEach_** to console.log each number in the numbers array.
6. Use **_map_** to create a new array by changing each country to uppercase in the countries array.
7. Use **_map_** to create an array of countries length from countries array.
8. Use **_map_** to create a new array by changing each number to square in the numbers array
9. Use **_map_** to change to each name to uppercase in the names array
10. Use **_map_** to map the products array to its corresponding prices.
11. Use **_filter_** to filter out countries containing **_land_**.
12. Use **_filter_** to filter out countries having six character.
13. Use **_filter_** to filter out countries containing six letters and more in the country array.
14. Use **_filter_** to filter out country start with 'E';
15. Use **_filter_** to filter out only prices with values.
16. Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
17. Use **_reduce_** to sum all the numbers in the numbers array.
18. Use **_reduce_** to concatenate all the countries and to produce this sentence: **_Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries_**
19. Explain the difference between **_some_** and **_every_**
20. Use **_some_** to check if some names' length greater than seven in names array
21. Use **_every_** to check if all the countries contain the word land
22. Explain the difference between **_find_** and **_findIndex_**.
23. Use **_find_** to find the first country containing only six letters in the countries array
24. Use **_findIndex_** to find the position of the first country containing only six letters in the countries array
25. Use **_findIndex_** to find the position of **_Norway_** if it doesn't exist in the array you will get -1.
26. Use **_findIndex_** to find the position of **_Russia_** if it doesn't exist in the array you will get -1.

### Exercises: Level 2

1. Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))
1. Find the sum of price of products using only reduce reduce(callback))
1. Declare a function called **_categorizeCountries_** which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).
1. Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.
1. Declare a **_getFirstTenCountries_** function and return an array of ten countries. Use different functional programming to work on the countries.js array
1. Declare a **_getLastTenCountries_** function which which returns the last ten countries in the countries array.
1. Find out which _letter_ is used many _times_ as initial for a country name from the countries array (eg. Finland, Fiji, France etc)

### Exercises: Level 3

1. Use the countries information, in the data folder. Sort countries by name, by capital, by population
1. \*\*\* Find the 10 most spoken languages:
 */

// Your output should look like this
console.log(mostSpokenLanguages(countries, 10))
[
    { country: 'English', count: 91 },
    { country: 'French', count: 45 },
    { country: 'Arabic', count: 25 },
    { country: 'Spanish', count: 24 },
    { country: 'Russian', count: 9 },
    { country: 'Portuguese', count: 9 },
    { country: 'Dutch', count: 8 },
    { country: 'German', count: 7 },
    { country: 'Chinese', count: 5 },
    { country: 'Swahili', count: 4 }
]

// Your output should look like this
console.log(mostSpokenLanguages(countries, 3))
[
    { country: 'English', count: 91 },
    { country: 'French', count: 45 },
    { country: 'Arabic', count: 25 }
]
/* 2. \*\*\* Use countries_data.js file create a function which create the ten most populated countries */

console.log(mostPopulatedCountries(countries, 10))

[
    { country: 'China', population: 1377422166 },
    { country: 'India', population: 1295210000 },
    { country: 'United States of America', population: 323947000 },
    { country: 'Indonesia', population: 258705000 },
    { country: 'Brazil', population: 206135893 },
    { country: 'Pakistan', population: 194125062 },
    { country: 'Nigeria', population: 186988000 },
    { country: 'Bangladesh', population: 161006790 },
    { country: 'Russian Federation', population: 146599183 },
    { country: 'Japan', population: 126960000 }
]

console.log(mostPopulatedCountries(countries, 3))
[
    { country: 'China', population: 1377422166 },
    { country: 'India', population: 1295210000 },
    { country: 'United States of America', population: 323947000 }
]


/* 3. \*\*\* Try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create an object called statistics and create all the functions which do statistical calculations as method for the statistics object. Check the output below.
*/

const ages2 = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

console.log('Count:', statistics.count()) // 25
console.log('Sum: ', statistics.sum()) // 744
console.log('Min: ', statistics.min()) // 24
console.log('Max: ', statistics.max()) // 38
console.log('Range: ', statistics.range()) // 14
console.log('Mean: ', statistics.mean()) // 30
console.log('Median: ', statistics.median()) // 29
console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
console.log('Variance: ', statistics.var()) // 17.5
console.log('Standard Deviation: ', statistics.std()) // 4.2
console.log('Variance: ', statistics.var()) // 17.5
console.log('Frequency Distribution: ', statistics.freqDist()) // [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]

console.log(statistics.describe())
/* Count: 25
Sum: 744
Min: 24
Max: 38
Range: 14
Mean: 30
Median: 29
Mode: (26, 5)
Variance: 17.5
Standard Deviation: 4.2
Frequency Distribution: [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
 */

/* 🎉 CONGRATULATIONS ! 🎉

[<< Day 8](../08_Day_Objects/08_day_objects.md) | [Day 10 >>](../10_Day_Sets_and_Maps/10_day_Sets_and_Maps.md) */
