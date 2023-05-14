/* 
*# 📘 Day 12

*#1 Regular Expressions
*A regular expression or RegExp is a small programming language that helps to find pattern in data. A RegExp can be used to check if some pattern exists in a different data types. To use RegExp in JavaScript either we use RegExp constructor or we can declare a RegExp pattern using two forward slashes followed by a flag. We can create a pattern in two ways.

*To declare a string we use a single quote, double quote a backtick to declare a regular expression we use two forward slashes and an optional flag. The flag could be g, i, m, s, u or y.


*#2 RegExp parameters
*A regular expression takes two parameters. One required search pattern and an optional flag.

*#3Pattern
*A pattern could be a text or any form of pattern which some sort of similarity. For instance the word spam in an email could be a pattern we are interested to look for in an email or a phone number format number might be our interest to look for.

*#4 Flags
*Flags are optional parameters in a regular expression which determine the type of searching. Let us see some of the flags:

*- g: a global flag which means looking for a pattern in whole text
*- i: case insensitive flag(it searches for both lowercase and uppercase)
*- m: multiline

*#5 Creating a pattern with RegExp Constructor.
*Declaring regular expression without global flag and case insensitive flag.
*/

//Without flag
let pattern = 'Programming'
let regEx = new RegExp(pattern)
console.log(regEx)                  // /Programming/

//Declaring regular expression with global flag and case insensitive flag.

//*Declaring a regex pattern using RegExp object. Writing the pattern and the flag inside the RegExp constructor

let regEx1 = new RegExp('love','gi')

/*
*### Creating a pattern without RegExp Constructor
*Declaring regular expression with global flag and case insensitive flag.
*/
let regEx2 = /love/gi

//*The above regular expression is the same as the one which we created with RegExp constructor.

let regEx3 = new RegExp('love','gi')

/* 
*## RegExp Object Methods

*Let us see some of RegExp methods

*# Testing for  a match
*test()*:Tests for a match in a string. It returns true or false.
*/

const str = 'I love JavaScript'
const pattern1 = /love/
const result = pattern1.test(str)
console.log(result)                 //true

/* 
*### Array containing all of the match

*match()*:Returns an array containing all of the matches, including capturing groups, or null if no match is found.

*If we do not use a global flag, match() returns an array containing the pattern, index, input and group. */

const str1 = 'I love JavaScript'
const pattern2 = /love/
const result1 = str1.match(pattern2)
console.log(result1)                //[ 'love', index: 2, input: 'I love JavaScript', groups: undefined ]


const str2 = 'I love JavaScript'
const pattern3 = /love/g
const result2 = str2.match(pattern3)
console.log(result2)                //[ 'love' ]

//*search()*: Tests for a match in a string. It returns the index of the match, or -1 if the search fails.

const str3 = 'I love JavaScript'
const pattern4 = /love/g
const result3 = str3.search(pattern4)
console.log(result3)                //2

/* 
*# Replacing a substring
*replace()*: Executes a search for a match in a string, and replaces the matched substring with a replacement substring. */

const txt = 'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language'

//*#1
matchReplaced = txt.replace(/Python|python/, 'JavaScript')
console.log(matchReplaced)                  //JavaScript is the most beautiful language that a human begin has ever created.I recommend python for a first programming language

//*#2
const txt1 = 'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language'
matchReplaced = txt1.replace(/Python|python/g, 'JavaScript')
console.log(matchReplaced)                  //JavaScript is the most beautiful language that a human begin has ever created.I recommend JavaScript for a first programming language

const txts = '%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
p%e%o%ple.\
I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.'

matches = txts.replace(/%/g, '')
console.log(matches)                        //I am teacher and  I love teaching.There is nothing as more rewarding as educating and empowering people.I found teaching more interesting than any other jobs.Does this motivate you to be a teacher.

/* 
* []:  A set of characters
  * [a-c] means, a or b or c
  * [a-z] means, any letter a to z
  * [A-Z] means, any character A to Z
  * [0-3] means, 0 or 1 or 2 or 3
  * [0-9] means any number 0 to 9
  * [A-Za-z0-9] any character which is a to z, A to Z, 0 to 9
* \\:  uses to escape special characters
  * \d mean: match where the string contains digits (numbers from 0-9)
  * \D mean: match where the string does not contain digits
* . : any character except new line character(\n)
* ^: starts with
  * r'^substring' eg r'^love', a sentence which starts with a word love
  * r'[^abc] mean not a, not b, not c.
* $: ends with
  * r'substring$' eg r'love$', sentence ends with a word love
* *: zero or more times
  * r'[a]*' means a optional or it can occur many times.
* +: one or more times
  * r'[a]+' means at least once or more times
* ?: zero or one times
  *  r'[a]?' means zero times or once
* \b: word bounder, matches with the beginning or ending of a word
* {3}: Exactly 3 characters
* {3,}: At least 3 characters
* {3,8}: 3 to 8 characters
* |: Either or
  * r'apple|banana' mean either of an apple or a banana
* (): Capture and group

![Regular Expression cheat sheet](../images/regex.png)

Let's use example to clarify the above meta characters
*/

/*
*#01 Square Bracket
*Let's use square bracket to include lower and upper case. */

const pattern5 = '[Aa]pple' // this square bracket means either A or a
const txt2 = 'Apple and banana are fruits. An old cliche says an apple a day keeps the  doctor way has been replaced by a banana a day keeps the doctor far far away. '
const matches1 = txt2.match(pattern5)

console.log(matches1)     //["Apple", index: 0, input: "Apple and banana are fruits. An old cliche says an apple a day keeps the  doctor way has been replaced by a banana a day keeps the doctor far far away.", groups: undefined]

const pattern6 = /[Aa]pple/g // this square bracket means either A or a
const txt3 = 'Apple and banana are fruits. An old cliche says an apple a day a doctor way has been replaced by a banana a day keeps the doctor far far away. '
const matches2 = txt3.match(pattern6)

console.log(matches2)       //["Apple", "apple"]


const pattern7 = /[Aa]pple|[Bb]anana/g // this square bracket mean either A or a 
const txt4 = 'Apple and banana are fruits. An old cliche says an apple a day a doctor way has been replaced by a banana a day keeps the doctor far far away. Banana is easy to eat too.'
const matches3 = txt4.match(pattern7)

console.log(matches3)       //[ 'Apple', 'banana', 'apple', 'banana', 'Banana' ]

//*Using the square bracket and or operator , we manage to extract Apple, apple, Banana and banana.


//*### Escape character(\\) in RegExp
const pattern8 = /\d/g  // d is a special character which means digits
const txt5 = 'This regular expression example was made in January 12,  2020.'
const matches4 = txt5.match(pattern8)

console.log(matches4)       //[ '1', '2', '2', '0', '2', '0' ], this is not what we want

const pattern9 = /\d+/g  // d is a special character which means digits
const txt6 = 'This regular expression example was made in January 12,  2020.'
const matches5 = txt6. match(pattern9)

console.log(matches5)  // ["12", "2020"], this is not what we want


//*# Period(.)
const pattern10 = /[a]./g  // this square bracket means a and . means any character except new line
const txt7 = 'Apple and banana are fruits'
const matches6 = txt7.match(pattern10)

console.log(matches6)  // ["an", "an", "an", "a ", "ar"]


const pattern11 = /[a].+/g  // . any character, + any character one or more times 
const txt8 = 'Apple and banana are fruits'
const matches7 = txt8.match(pattern11)

console.log(matches7)  // ['and banana are fruits']

/*
*## Zero or more times(*)
*Zero or many times. The pattern may not occur or it can occur many times.
*/

const pattern12 = /[a].*/g  //. any character, + any character one or more times 
const txt9 = 'Apple and banana are fruits'
const matches8 = txt9.match(pattern12)

console.log(matches8)  // ['and banana are fruits']


/* 
*### Zero or one times(?)
*Zero or one times. The pattern may not occur or it may occur once.
*/
const txt10 = 'I am not sure if there is a convention how to write the word e-mail.\
Some people write it email others may write it as Email or E-mail.'
const pattern13 = /[Ee]-?mail/g   // ? means optional
matches9 = txt10.match(pattern13)

console.log(matches9)  // ["e-mail", "email", "Email", "E-mail"]


/*
*### Quantifier in RegExp
*We can specify the length of the substring we look for in a text, using a curly bracket. Let us see, how ot use RegExp quantifiers. Imagine, we are interested in substring that their length are 4 characters */

const txt11 = 'This regular expression example was made in December 6,  2019.'
const pattern14 = /\\b\w{4}\b/g  //  exactly four character words
const matches10 = txt11.match(pattern14)
console.log(matches10)  //['This', 'made', '2019']


const txt12 = 'This regular expression example was made in December 6,  2019.'
const pattern15 = /\b[a-zA-Z]{4}\b/g  //  exactly four character  words without numbers
const matches11 = txt12.match(pattern15)
console.log(matches11)  //['This', 'made']


const txt13 = 'This regular expression example was made in December 6,  2019.'
const pattern16 = /\d{4}/g  // a number and exactly four digits
const matches12 = txt13.match(pattern16)
console.log(matches12)  // ['2019']


const txt14 = 'This regular expression example was made in December 6,  2019.'
const pattern17 = /\d{1,4}/g   // 1 to 4
const matches13 = txt14.match(pattern17)
console.log(matches13)  // ['6', '2019']

/* 
*### Cart ^
*- Starts with */
const txt15 = 'This regular expression example was made in December 6,  2019.'
const pattern18 = /^This/   // ^ means starts with
const matches14 = txt15.match(pattern18)
console.log(matches14)  // ['This']
/*
[
  'This',
  index: 0,
  input: 'This regular expression example was made in December 6,  2019.',
  groups: undefined
] */

/* 
*### Exact match
*It should have ^ starting and $ which is an end.*/
let pattern19 = /^[A-Z][a-z]{3,12}$/;
let name1 = 'Asabeneh';
let result01 = pattern19.test(name1)

console.log(result01) // true

/* 🌕 You are going far. Keep going! Now, you are super charged with the power of regular expression. You have the power to extract and clean any kind of text and you can make meaning out of unstructured data. You have just completed day 12 challenges and you are 12 steps a head in to your way to greatness. Now do some exercises for your brain and for your muscle.
 */