/* 
*# Day 10

*## Set
*Set is  a collection of elements. Set can only contains unique elements.
*Let us see how to create a set in the section below.

*### Creating an empty set*/
const companies = new Set()
console.log(companies)                      //Set(0) {}


//*### Creating set from array.
const language = [
    'JavaScript',
    'Python',
    'C++',
    'Php'
]
console.log(language.length)                //4
const setOfLanguage = new Set(language)
console.log(setOfLanguage)                  //Set(4) { 'JavaScript', 'Python', 'C++', 'Php' }



//*Set is an iterable object and we can iterate through each elements.
const setOfLanguage1 = [
    'English',
    'Filipino',
    'French',
    'British',
    'Tagalog',
    'Bisaya'
]
const newSetOfLanguage = new Set(setOfLanguage1)
for (const language of setOfLanguage1) {
    console.log(language)
}
/* 
*English
*Filipino
*French
*British
*Tagalog
*Bisaya
*/

//*### Adding an element to a set.

const companies1 = new Set()
console.log(companies1.size) // 0

companies1.add('Google') // add element to the set.
companies1.add('Facebook')
companies1.add('Amazon')
companies1.add('Oracle')
companies1.add('Microsoft')

//*### Adding an element to a set.
companies1[0] = 'Google' //another way to add an element to the set.
companies1[1] = 'Facebook'
companies1[2] = 'Amazon'
companies1[3] = 'Oracle'
companies1[4] = 'Microsoft'

console.log(companies1.size)  //5
console.log(companies1)
/* 
*Set(5) {
    *'Google',
    *'Facebook',
    *'Amazon',
    *'Oracle',
    *'Microsoft',
    *'0': 'Google',
    *'1': 'Facebook',
    *'2': 'Amazon',
    *'3': 'Oracle',
    *'4': 'Microsoft'
*} 
*/


//*We can also use loop to add element to a set.

const companies2 = ['Google', 'Facebook', 'Amazon', 'Oracle', 'Microsoft']
const setOfLanguage2 = new Set(companies2)
for (const company of companies1) {
    setOfLanguage2.add(company)
}
console.log(setOfLanguage2) //Set(5) { 'Google', 'Facebook', 'Amazon', 'Oracle', 'Microsoft' }


/* 
*### Deleting an element a set
*We can delete an element from a set using a delete method.*/

console.log(setOfLanguage2.delete('Google'))        //true
console.log(setOfLanguage2.size)                    //4
console.log(setOfLanguage2)                         //Set(4) { 'Facebook', 'Amazon', 'Oracle', 'Microsoft' } 


/* 
*### Checking an element in the set
*The has method can help to know if a certain element exists in a set.
*/
console.log(setOfLanguage2.has('Apple')) // false
console.log(setOfLanguage2.has('Facebook')) // true

/*
*### Clearing the set
*It removes all the elements from a set. 
*/
setOfLanguage2.clear()
console.log(setOfLanguage2)             //Set(0) {}


//*See the example below to learn how to use set.
const languages = [
    'English',
    'Tagalog',
    'English',
    'Bisaya',
    'English',
    'Spanish'
]
const langSet = new Set(languages)
console.log(langSet)                        //Set(4) { 'English', 'Tagalog', 'Bisaya', 'Spanish' }
console.log(langSet.size)                   //4

const counts = []
const count = {}

for (const l of langSet) {
    const filteredLang = languages.filter((lng) => lng === l)
    console.log(filteredLang) // ["English", "English", "English"]
    counts.push({ lang: l, count: filteredLang.length })
}
console.log(counts)
/* 
[
    { lang: 'English', count: 3 },
    { lang: 'Finnish', count: 1 },
    { lang: 'French', count: 2 },
    { lang: 'Spanish', count: 1 },
] 
*/

//*Other use case of set. For instance to count unique item in an array.

const num = [5,3,2,5,5,9,4,5]
const setNum = new Set(num)

console.log(setNum)                 //Set(5) { 5, 3, 2, 9, 4 }

/* 

*### Union of sets
*To find a union to two sets can be achieved using spread operator. Lets find the union of set A and set B (A U B)
*/

let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]
let c = [...a, ...b]

let A = new Set(a)
let B = new Set(b)
let C = new Set(c)

console.log(C)                      //Set(6) { 1, 2, 3, 4, 5, 6 }

let name1 = ['Jade Ivan', 'Jade Ivan']
let name2 = ['Bringcola', 'Bringcola']
let name3 = [...name1, ...name2]

let newName1 = new Set(name1)
let newName2 = new Set(name2)
let newName3 = new Set(name3)

console.log(newName3)  


/*
*### Intersection of sets
*To find an intersection of two sets can be achieved using filter. Lets find the intersection of set A and set B (A ∩ B).
*/

let a1 = [1,2,3,4,5,10]
let b1 = [3,4,5,6,7,8,9,10]

let A1 = new Set(a1)
let B1 = new Set(b1)

let C1 = a1.filter((num) => B1.has(num))
let C2 = new Set(C1)
console.log(C2)                         //Set(4) { 3, 4, 5, 10 }


let a2 = [1, 2, 3, 4, 5]
let b2 = [3, 4, 5, 6]

let A2 = new Set(a2)
let B2 = new Set(b2)

let C3 = a2.filter((num) => !B2.has(num))
let C4 = new Set(C3)

console.log(C4)                         //Set(2) { 1, 2 }


/*
*## Map
*### Creating an empty Map
*/
const map = new Map()
console.log(map)                        //Map(0) {}

//*### Creating an Map from array.

placeArea = [
    ['Philippines', 'Japan'],
    ['Korea', 'China'],
    ['America', 'Russia']
]
const map1 = new Map(placeArea)

map1.set('3', 20)

console.log(map1.size)                  //4
console.log(map1)
/*
Map(4) {
    'Philippines' => 'Japan',
    'Korea' => 'China',
    'America' => 'Russia',
    '3' => 20
}
*/

//*### Adding values to the Map

const countriesMap = new Map()
console.log(countriesMap.size)              //0

countriesMap.set('Philippines','Japan')
countriesMap.set('Korea', 'China')
countriesMap.set('America', 'Russia')

console.log(countriesMap.size)              //3
console.log(countriesMap)
/* 
Map(3) {
    'Philippines' => 'Japan',
    'Korea' => 'China',
    'America' => 'Russia'
} 
*/

//*### Getting a value from Map

//*#1
console.log(countriesMap.get('Philippines'))            //Japan

//*#2
if(countriesMap.get('Philippines'))
countriesMap
    ? console.log('True haha')                      //True haha
    : console.log('False hehe')                     //!False hehe

/*
*### Checking key in Map
*Check if a key exists in a map using _has_ method. It returns _true_ or _false_. */

//*#1
console.log(countriesMap.has('Philippines'))        //true

//*#2
if(countriesMap.has('Philippines'))
countriesMap
    ?   console.log("Available")
    :   console.log("None")


//*Getting all values from map using loop.

for(const country of countriesMap){
    console.log(country)
}
/* 
[ 'Philippines', 'Japan' ]
[ 'Korea', 'China' ]
[ 'America', 'Russia' ]
 */