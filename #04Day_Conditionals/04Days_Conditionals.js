/* # 📔 Day 4

## Conditionals

Conditional statements are used for  make decisions based on different conditions.
By default , statements in JavaScript script executed sequentially from top to bottom.If the processing logic require so, the sequential flow of execution can be altered in two ways:

- Conditional execution: a block of one or more statements will be executed if a certain expression is true
    - Repetitive execution: a block of one or more statements will be repetitively executed as long as a certain expression is true.In this section, we will cover _if_, _else_, _else if_ statements.The comparison and logical operators we learned in the previous sections will be useful in here.

Conditions can be implementing using the following ways:

- if
- if else
        - if else if else
            - switch
- ternary operator

### If

In JavaScript and other programming languages the key word _if_ is to used check if a condition is true and to execute the block code.To create an if condition, we need _if_ keyword, condition inside a parenthesis and block of code inside a curly bracket({}).
 */

/*     // syntax
    if(condition) {
    this part of code runs for truthy condition
}
 */

// ** Example:**


let num = 3
if (num > 0) {
    console.log(`${num} is a positive number`)
}
//  3 is a positive number

/* 
As you can see in the  condition example above, 3 is greater than 0, so it is a positive number.The condition was true and the block of code was executed.However, if the condition is false, we won't  see any results. */

let isRaining1 = true
if (isRaining1) {
    console.log('Remember to take your rain coat.')
}


/* 
*The same goes for the second condition, if isRaining is false the if block will not be executed and we do not see any output.In order to see the result of a falsy condition, we
ould have another block, which is going to be _else_.

### If Else

If condition is true the first block will be executed, if not the else condition will be executed.

 */
/*     // syntax
    if(condition) {
    this part of code runs for truthy condition
} else {
    this part of code runs for false condition
} */



let num1 = 3
if (num1 > 0) {
    console.log(`${num1} is a positive number`)
} else {
    console.log(`${num1} is a negative number`)
}
//  3 is a positive number

num = -3
if (num > 0) {
    console.log(`${num} is a positive number`)
} else {
    console.log(`${num} is a negative number`)
}
//  -3 is a negative number



let isRaining2 = true
if (isRaining2) {
    console.log('You need a rain coat.')
} else {
    console.log('No need for a rain coat.')
}
// You need a rain coat.

let isRaining3 = false
if (isRaining3) {
    console.log('You need a rain coat.')
} else {
    console.log('No need for a rain coat.')
}
// No need for a rain coat.


/* 
The last condition is false, therefore the else block was executed.What if we have more than two conditions ? In that case,  we would use *else if* conditions.

### If  Else if Else

On our daily life, we make decisions on daily basis.We make decisions not by checking  one or two conditions instead we make decisions based on multiple conditions.As similar to our daily life, programming is also full of conditions.We use *else if* when we have multiple conditions.
 */
/* 
    syntax
    if(condition) {
    code
} else if (condition) {
    code
} else {
    code

}
 */

// ** Example:**


let a1 = 0
if (a1 > 0) {
    console.log(`${a1} is a positive number`)
} else if (a1 < 0) {
    console.log(`${a1} is a negative number`)
} else if (a1 == 0) {
    console.log(`${a1} is zero`)
} else {
    console.log(`${a1} is not a number`)
}



// if else if else
let weather1 = 'sunny'
if (weather1 === 'rainy') {
    console.log('You need a rain coat.')
} else if (weather1 === 'cloudy') {
    console.log('It might be cold, you need a jacket.')
} else if (weather1 === 'sunny') {
    console.log('Go out freely.')
} else {
    console.log('No need for rain coat.')
}


/* ### Switch

Switch  is an alternative for **if else if else else**.
The switch statement starts with a *switch* keyword followed by a parenthesis and code block. Inside the code block we will have different cases. Case block runs if the value in the switch statement parenthesis matches with the case value. The break statement is to terminate execution so the code execution  does not go down after the condition is satisfied.  The default block runs if all the cases don't satisfy the condition.
 */

/* switch (caseValue) {
    case 1:
        code
        break
    case 2:
        code
        break
    case 3:
        code
        break
    default:
    code
} */



let weather = 'cloudy'
switch (weather) {
    case 'rainy':
        console.log('You need a rain coat.')
        break
    case 'cloudy':
        console.log('It might be cold, you need a jacket.')
        break
    case 'sunny':
        console.log('Go out freely.')
        break
    default:
        console.log(' No need for rain coat.')
}

// Switch More Examples
// let dayUserInput = prompt('What day is today ?')
// let day = dayUserInput.toLowerCase()
let day = 'monday'

switch (day) {
    case 'monday':
        console.log('Today is Monday')
        break
    case 'tuesday':
        console.log('Today is Tuesday')
        break
    case 'wednesday':
        console.log('Today is Wednesday')
        break
    case 'thursday':
        console.log('Today is Thursday')
        break
    case 'friday':
        console.log('Today is Friday')
        break
    case 'saturday':
        console.log('Today is Saturday')
        break
    case 'sunday':
        console.log('Today is Sunday')
        break
    default:
        console.log('It is not a week day.')
}



// Examples to use conditions in the cases


let num2 = 5
switch (true) {
    case num2 > 0:
        console.log('Number is positive');
        break;
    case num2 == 0:
        console.log('Numbers is zero');
        break;
    case num2 < 0:
        console.log('Number is negative');
        break;
    default:
        console.log('Entered value was not a number');
}

/* 
### Ternary Operators
*Another way to write conditionals is using ternary operators. We have covered this in other sections, but we could also mention it here.
 */

let isRaining = true
isRaining
    ? console.log('You need a rain coat.')
    : console.log('No need for a rain coat.')

/*
🌕  You are extraordinary and you have a remarkable potential. You have just completed day 4 challenges and you are four steps ahead to your way to greatness. Now do some exercises for your brain and  muscle.  

## 💻 Exercises

### Exercises: Level 1


*1. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to  wait for the number of years he needs to turn 18.
 */

//  let age = prompt("Enter your age: ")
    let age = 17

    if (age < 18) {
        console.log(`Your age should be 18 not ${age} so you can able to drive`);
    }   else if (age > 18){
        console.log(`Your adult so you can drive`);
    } else{
        console.log('You not able to drive');
    }



/* 1. Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
*/

let myAge = 20
let yourAge = 18

if (myAge > yourAge){
    console.log(`I"m older so you can call me senpai because i"m ${myAge}`);
} else if (myAge < yourAge){
    console.log(`So your ${yourAge}, so I"m the one should call you senpai`);
} else{
    console.log('Were the same age');
}

/* 1. If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways

    - using if else
    - ternary operator.
 */

    let a = 4
    let b = 1

    if(a > b){
        return console.log('a is greater than b');
    } else if(a <b){
        return console.log('b is greater than a')
    } else{
        console.log('Nothing Happened');
    }

/* 
1. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
 */

    let a2 = 22
    if (a2 %2 == 0) {
        console.log("The number is even.");
    }   else {
        console.log("The number is odd.");
    }

/* 
### Exercises: Level 2
1. Write a code which  can give grades to students according to theirs scores:
- 80-100, A
- 70-89, B
- 60-69, C
- 50-59, D
- 0-49, F
*/

    let grading1 = 80
    switch(true){
        case grading1 > 80:
            console.log("A");
        break
        case grading1 > 70:
            console.log("B");
        break
        case grading1 > 60:
            console.log("C");
        break
        case grading1 > 50:
            console.log("D");
        break
        case grading1 > 0:
            console.log("F");
        break
        default:
            console.log('Try again');
    }

    /* 
    2. Check if the season is Autumn, Winter, Spring or Summer.
If the user input is :
- September, October or November, the season is Autumn.
- December, January or February, the season is Winter.
- March, April or May, the season is Spring
- June, July or August, the season is Summer
    1. Check if a day is weekend day or a working day. Your script will take day as an input.
     */
// Check the season based on user input
const month = 'January'
let season;

if (month === "December" || month === "January" || month === "February") {
    season = "Winter";
} else if (month === "March" || month === "April" || month === "May") {
    season = "Spring";
} else if (month === "June" || month === "July" || month === "August") {
    season = "Summer";
} else if (month === "September" || month === "October" || month === "November") {
    season = "Autumn";
} else {
    season = "Invalid input";
}

console.log(`The season for ${month} is ${season}.`);

// Check if a day is a weekend day or a working day
const day1 = 'Monday'
let dayType;

if (day1 === "Saturday" || day1 === "Sunday") {
    dayType = "Weekend day";
} else if (day1 === "Monday" || day1 === "Tuesday" || day1 === "Wednesday" || day1 === "Thursday" || day1 === "Friday") {
    dayType = "Working day";
} else {
    dayType = "Invalid input";
}

console.log(`${day} is a ${dayType}.`);
    /* 
    ### Exercises: Level 3
    
    1. Write a program which tells the number of days in a month.
    */
function getDaysInMonth(month, year) {
    if (month === 2) {
        if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
            return 29;
        } else {
            return 28;
        }
    } else if (month === 4 || month === 6 || month === 9 || month === 11) {
        return 30;
    } else {
        return 31;
    }
}

console.log(getDaysInMonth(2, 2022)); // Output: 28
console.log(getDaysInMonth(2, 2024)); // Output: 29
console.log(getDaysInMonth(4, 2022)); // Output: 30
console.log(getDaysInMonth(12, 2021)); // Output: 31
/* 
1. Write a program which tells the number of days in a month, now consider leap year.
*/


    let month1 = 3
    let year = 2023
    // January, March, May, July, August, October and December have 31 days
    if ([1, 3, 5, 7, 8, 10, 12].includes(month1)) {
        return 31;
    }
    // April, June, September, and November have 30 days
    else if ([4, 6, 9, 11].includes(month1)) {
        return 30;
    }
    // February has 29 days on a leap year and 28 days on a non-leap year
    else {
        if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
            return 29;
        } else {
            return 28;
        }
    }
