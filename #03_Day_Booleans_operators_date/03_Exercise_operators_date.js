/* You have boundless energy. You have just completed day 3 challenges and you are three steps a head in to your way to greatness. Now do some exercises for your brain and for your muscle.*/

// ## 💻 Day 3: Exercises
// ### Exercises: Level 1

/* 1. Declare firstName, lastName, country, city, age, isMarried,, year variable and assign value to it and use the typeof operator to check different data types.

Additional declaration isSingle valueof true, names that inside of square bracket, and person inside of the curly braces.
*/

let firstName = "Jade Ivan";
let lastName = "Bringcola";
let country = "Philippines";
let city = "Cebu";
let age = 20;
let isMarried = "No";
let date = new Date();
let isSingle = true;
let names = ["Jade Ivan", "Bandev", "Ivan", "Bringcola"];
let person = { name: "Jade Ivan", gender: "Male", age: 20 };
let value;
let values = console.log(typeof firstName); //string
console.log(typeof lastName); //string
console.log(typeof country); //string
console.log(typeof city); //string
console.log(typeof age); //number
console.log(typeof isMarried); //string
console.log(typeof isSingle); //boolean
console.log(typeof date); //object
console.log(typeof names); //object
console.log(typeof person); //object
console.log(typeof value); //undefined
console.log(typeof values); //undefined

/* 2. Check if type of '10' is equal to 10 */

console.log(10 == "10"); //true

/* 3. Check if parseInt('9.8') is equal to 10 */

console.log(9.8 == 10); //false

/* 4. Boolean value is either true or false.*/
// 1. Write three JavaScript statement which provide truthy value.

let addNumber = 100;
let addingNumber = 100;
console.log(addNumber === addingNumber); //true

let greater = 100;
let less = 50;
console.log(greater > less); //true

let maxNumber = 1000000n;
let bigInt = maxNumber;

console.log(bigInt == maxNumber); //true

// 2. Write three JavaScript statement which provide false value.

let number = "JavaScript";
let zero = "Python";
console.log(number == zero); //false

let number1 = {
    names: "Jade Ivan",
};
let number2 = ["names: 'Jade ivan'"];
console.log(number1 == number2); //false

const math1 = isNaN;
const math2 = NaN;
console.log(math1 == math2); //false

/* 
*5. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
    1. 4 > 3
    2. 4 >= 3
    3. 4 < 3
    4. 4 <= 3
    5. 4 == 4
    6. 4 === 4
    7. 4 != 4
    8. 4 !== 4
    9. 4 != '4'
    10. 4 == '4'
    11. 4 === '4'
    12. Find the length of python and jargon and make a false comparison statement. */

console.log(4 > 3); //true
console.log(4 >= 3); //true
console.log(4 < 3); //false
console.log(4 <= 3); //false
console.log(4 == 3); //false
console.log(4 === 3); //false
console.log(4 != 3); //true
console.log(4 !== 3); //true
console.log(4 == "4"); //true
console.log(4 === "4"); //false

/* 
*6. Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
    1. 4 > 3 && 10 < 12
    2. 4 > 3 && 10 > 12
    3. 4 > 3 || 10 < 12
    4. 4 > 3 || 10 > 12
    5. !(4 > 3)
    6. !(4 < 3)
    7. !(false)
    8. !(4 > 3 && 10 < 12)
    9. !(4 > 3 && 10 > 12)
    10. !(4 === '4')
    11. There is no 'on' in both dragon and python */

console.log(4 > 3 && 10 < 12); //true
console.log(4 > 3 && 10 > 12); //false
console.log(4 > 3 || 10 < 12); //true
console.log(4 > 3 || 10 > 12); //true
console.log(!(4 > 3)); //false
console.log(!(4 < 3)); //true
console.log(!false); //true
console.log(!(4 > 3 && 10 < 12)); //false
console.log(!(4 > 3 && 10 > 12)); //true
console.log(4 === "4"); //false

/* 
*7. Use the Date object to do the following activities
    *1. What is the year today?
    *2. What is the month today as a number?
    *3. What is the date today?
    *4. What is the day today as a number?
    *5. What is the hours now?
    *6. What is the minutes now?
    *7. Find out the numbers of seconds elapsed from January 1, 1970 to now.
*/

let now = new Date();
console.log(now.getFullYear())                      //2023
console.log(now.getMonth() + 1)                     //5
console.log(now.getDate())                          //1
console.log(now.getDay())                           //1
console.log(now.getHours())                         //13
console.log(now.getMinutes())                       //27

/* 
### Exercises: Level 2

*1. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
*/

// Calculate area of triangle
let base = 10
let height = 10
let area = 0.5 * base * height;
console.log(`The area of the triangle is: ${area}`);           //100
/*

/* 
*2. Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
 */
// Calculate area and perimeter of rectangle
let a = 2
let b = 3
let c = 1
let perimeter = parseInt(a) + parseInt(b) + parseInt(c)
console.log(`The perimeter of the triangle is: ${perimeter}`)                   //The area of the triangle is: 50

/* 
*1. Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width)) */

// Calculate perimeter of triangle
let length = 10
let width = 20
let rect_area = length * width;
let rect_perimeter = 2 * (parseInt(length) + parseInt(width))                   //The perimeter of the triangle is: 6
console.log(`The area of the rectangle is: ${rect_area}`)                       //The area of the rectangle is: 200
console.log(`The perimeter of the rectangle is: ${rect_perimeter}`)             //The perimeter of the rectangle is: 60


/*
*2. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14. */
// Calculate area and circumference of circle
let radius = 8
let pi = 3.14;
let circle_area = pi * radius * radius;
let circle_circumference = 2 * pi * radius;
console.log(`The area of the circle is: ${circle_area}`)                        //The area of the circle is: 200.96
console.log(`The circumference of the circle is: ${circle_circumference}`)      //The circumference of the circle is: 50.24


/*
*3. Calculate the slope, x-intercept and y-intercept of y = 2x -2
*/
let slope = (10 - 2) / (6 - 2);
let y_intercept = 2;
let x_intercept = y_intercept / slope;
console.log(`The slope is: ${slope}`)                       //The slope is: 2
console.log(`The y-intercept is: ${y_intercept}`)           //The y-intercept is: 2
console.log(`The x-intercept is: ${x_intercept}`)           //The x-intercept is: 1




/* 
*4. Slope is m = (y<sub>2</sub>-y<sub>1</sub>)/(x<sub>2</sub>-x<sub>1</sub>). Find the slope between point (2, 2) and point(6,10)
 */

let x1 = 2;
let y1 = 2;
let x2 = 6;
let y2 = 10;

let slopes = (y2 - y1) / (x2 - x1)
console.log(`The slope is ${slopes}`)                       //The slope is 2
/* 
*5. Compare the slope of above two questions.
 */



/* 
*6. Calculate the value of y (y = x<sup>2</sup> + 6x + 9). Try to use different x values and figure out at what x value y is 0.
 */

function calculateY(x) {
    var y = x*x + 6*x + 9;
    return y;
}                                                           //NaN
//To figure out at what x value y is 0, we can use the quadratic formula:
//x = (-b ± sqrt(b^2 - 4ac)) / 2a

//For this equation, a = 1, b = 6, and c = 9. Plugging these values into the formula, we get:
// x = (-6 + sqrt(6^2 - 4*1*9)) / 2*1
// x = (-6 + 0) / 2
// x = -3
/* 
*7. Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
*/  
    // Enter hours: 40
    let hours = 40;
    // Enter rate per hour: 28
    let perHour = 28
    // Your weekly earning is 1120
    let earning = perHour * hours;
    console.log(`The pay is: ${earning}`)                   //The pay is: 1120

/* 
*8. If the length of your name is greater than 7 say, your name is long else say your name is short. */

    let name = 'Jade Ivan'
    if(name.length > 7){
        console.log('Your Name Is Long')                    //Your Name Is Long
    } else{
        console.log('Your Name Is Short')                   //Your Name Is Short
    }

/*
*9. Compare your first name length and your family name length and you should get this output. */

    let firstName1 = 'Jade Ivan Villariaza'
    let lastName1 = 'Bringcola'

    if(firstName1.length >= lastName1.length ){
        console.log('Your Firstname Is Long')                   //Your Firstname Is Long
    } else if (firstName1.length <= lastName1.length){
        console.log('Your Lastname is Long')                    //Your Lastname Is Long
    } else{
        console.log('Try Again')
    }

/* 
*10. Declare two variables _myAge_ and _yourAge_ and assign them initial values and myAge and yourAge.
 */

    let myAge = 20
    let yourAge = 18
    if(myAge >= yourAge ){
        console.log('I"m older than you')                      //I"m older than you
    } else if (myAge <= yourAge){
        console.log('I"m younger than you')                    //I"m younger than you
    } else{
        console.log('Try Again')
    }


/* 
*11. Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
 */
    let birthYear = 2002
    let age1 = 20
    if(age1 >= 19){
        console.log(`You are ${age1} so your old enough to drive`);
    }else if(age1 <= 18){
        console.log(`Your ${age1} you will be allowed to drive when you become adult`);
    }else{
        console.log('You need to to wait');
    }

/* 
*12. Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
*/
    let age2 = new Date()
    let age3 = age2.getTime()
    console.log(`You live a ${age3}s in this world of ours.`); 

/* 
*13. Create a human readable time format using the Date time object
 */

    
let now1 = new Date();

// format the date and time in YYYY-MM-DD HH:mm format
let formattedDateTime1 = `${now1.getFullYear()}-${(now1.getMonth() + 1).toString().padStart(2, '0')}-${now1.getDate().toString().padStart(2, '0')} ${now1.getHours().toString().padStart(2, '0')}:${now1.getMinutes().toString().padStart(2, '0')}`;

// format the date and time in DD-MM-YYYY HH:mm format
let formattedDateTime2 = `${now1.getDate().toString().padStart(2, '0')}-${(now1.getMonth() + 1).toString().padStart(2, '0')}-${now1.getFullYear()} ${now1.getHours().toString().padStart(2, '0')}:${now1.getMinutes().toString().padStart(2, '0')}`;

// format the date and time in DD-MM-YYYY HH:mm format
let formattedDateTime3 = `${now1.getDate().toString().padStart(2, '0')}-${(now1.getMonth() + 1).toString().padStart(2, '0')}-${now1.getFullYear()} ${now1.getHours().toString().padStart(2, '0')}:${now1.getMinutes().toString().padStart(2, '0')}`;

// output the formatted date and time
console.log(`Formatted date and time (YYYY-MM-DD HH:mm): ${formattedDateTime1}`);
console.log(`Formatted date and time (DD-MM-YYYY HH:mm): ${formattedDateTime2}`);
console.log(`Formatted date and time (DD-MM-YYYY HH:mm): ${formattedDateTime3}`);     //1/5/2023/19:37

    
// ### Exercises: Level 3
/* 
*14. Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
    1. YYY-MM-DD HH:mm eg. 20120-01-02 07:05
*/
let date3 = new Date();
let hour1 = date3.getHours().toString().padStart(2, '0');
let minutes = date3.getMinutes().toString().padStart(2, '0');
let year1 = date3.getFullYear().toString();
let month1 = (date3.getMonth() + 1).toString().padStart(2, '0');
let day1 = date3.getDate().toString().padStart(2, '0');

let formattedTime = year1 + '-' + month1 + '-' + day1 + ' ' + hour1 + ':' + minutes;

console.log(formattedTime)                                          //2023-05-01 19:43
