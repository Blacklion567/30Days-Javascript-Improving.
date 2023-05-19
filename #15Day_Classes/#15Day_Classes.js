/* 

*# Day 15

*## Classes

*JavaScript is an object oriented programming language. Everything in JavScript is an object, with its properties and methods. We create class to create an object. A Class is like an object constructor, or a "blueprint" for creating objects. We instantiate a class to create an object. The class defines attributes and the behavior of the object, while the object, on the other hand, represents the class.

*Once we create a class we can create object from it whenever we want. Creating an object from a class is called class instantiation.

*In the object section, we saw how to create an object literal. Object literal is a singleton. If we want to get a similar object , we have to write it. However, class allows to create many objects. This helps to reduce amount of code and repetition of code. */


/*
*### Defining a classes

*To define a class in JavaScript we need the keyword _class_ , the name of a class in **CamelCase** and block code(two curly brackets). Let us create a class name Person. */

/* 
///*syntax
class ClassName {
    /// *code goes here
}
*/

class Person {
    // code goes here
}
//*We have created an Person class but it does not have any thing inside.



/* 
*### Class Instantiation.

*Instantiation class means creating an object from a class. We need the keyword _new_ and we call the name of the class after the word new.

*Let us create a dog object from our Person class. */

class Person1 {
    // code goes here
}
const person = new Person1()
console.log(person)             //Person1 {}
/* 
*As you can see, we have created a person object. Since the class did not have any properties yet the object is also empty.

*Let use the class constructor to pass different properties for the class.
*/

/* 
*### Class Constructor

*The constructor is a builtin function which allows as to create a blueprint for our object. The constructor function starts with a keyword constructor followed by a parenthesis. Inside the parenthesis we pass the properties of the object as parameter. We use the _this_ keyword to attach the constructor parameters with the class.

*The following Person class constructor has firstName and lastName property. These properties are attached to the Person class using _this_ keyword. _This_ refers to the class itself.
*/

class Person2 {
    constructor(firstName, lastName) {
        console.log(this) // Check the output from here
        this.firstName = firstName
        this.lastName = lastName
    }
}
const person6 = new Person2()

console.log(person6)              //Person2 { firstName: undefined, lastName: undefined }

//*All the keys of the object are undefined. When ever we instantiate we should pass the value of the properties. Let us pass value at this time when we instantiate the class.

class Person3 {
    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }
}

const person7 = new Person3('Jade Ivan', 'Bringcola')

console.log(person7)                //Person3 { firstName: 'Jade Ivan', lastName: 'Bringcola' }


//*As we have stated at the very beginning that once we create a class we can create many object using the class. Now, let us create many person objects using the Person class.


class allStudents {
    constructor(firstName, lastName, age) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }
}

const student1 = new allStudents("Jade Ivan", "Bringcola", 20)
const student2 = new allStudents("Phoebe", "Obiso", 19)
const student3 = new allStudents("Carlo", "Philip", 19)

console.log(student1)   //allStudents { firstName: 'Jade Ivan', lastName: 'Bringcola', age: 20 }
console.log(student2)   //allStudents { firstName: 'Phoebe', lastName: 'Obiso', age: 19 }
console.log(student3)   //allStudents { firstName: 'Carlo', lastName: 'Philip', age: 19 }

//*Using the class Person we created three persons object. As you can see our class did not many properties let us add more properties to the class.


class Person4 {
    constructor(firstName, lastName, age, country, city) {
        console.log(this) // Check the output from here //Person4 {}

        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.country = country
        this.city = city
    }
}

const person5 = new Person4('Jade Ivan', 'Bringcola', 20, 'Philippines', 'Cebu')

console.log(person5)
/*  
Person4 {
        firstName: 'Jade Ivan',
        lastName: 'Bringcola',
        age: 20,
        country: 'Philippines',
        city: 'Cebu'
}
 */


/*
### Default values with constructor

The constructor function properties may have a default value like other regular functions. */

class person3 {
    constructor(
        firstName = "Jade Ivan",
        lastName = "Bringcola",
        country = "Philippines",
        city = "Cebu City",
        age = 20
    ) {
        this.firstName = firstName
        this.lastName = lastName
        this.country = country
        this.city = city
        this.age = age
    }
}

const newPerson1 = new person3()// it will take the default values
const newPerson2 = new person3("Bandev", "Phobos", "USA", "Bukidnon", 21)

console.log(newPerson1)
/* person3 {
    firstName: 'Jade Ivan',
    lastName: 'Bringcola',
    country: 'Philippines',
    city: 'Cebu City',
    age: 20
} */

console.log(newPerson2)
/* person3 {
    firstName: 'Bandev',
    lastName: 'Phobos',
    country: 'USA',
    city: 'Bukidnon',
    age: 21
} */


/*
### Class methods

The constructor inside a class is a builtin function which allow us to create a blueprint for the object. In a class we can create class methods. Methods are JavaScript functions inside the class. Let us create some class methods.
*/

class person4 {
    constructor(firstName, lastName, country, city, age) {
        this.firstName = firstName
        this.lastName = lastName
        this.country = country
        this.city = city
        this.age = age
    }
    getFullName() {
        const fullName = this.firstName + " " + this.lastName
        return fullName
    }
}
const new_person4 = new person4("Jade Ivan", "Bringcola", "Philippines", "Cebu", 20)
const new_person04 = new person4("Bandev", "Bringcola", "Philippines", "Cebu", 21)

console.log(new_person4.getFullName())          //Jade Ivan Bringcola
console.log(new_person04)
/*
person4 {
    firstName: 'Bandev',
    lastName: 'Bringcola',
    country: 'Philippines',
    city: 'Cebu',
    age: 21
}


/*
*### Properties with initial value

*When we create a class for some properties we may have an initial value. For instance if you are playing a game, you starting score will be zero. So, we may have a starting score or score which is zero. In other way, we may have an initial skill and we will acquire some skill after some time.
*/

class person01 {
    constructor(firstName, lastName, country, age) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.country = country
        this.skill = []
        this.score = 0
    }
    getFirstName() {
        const fullName = this.firstName + " " + this.lastName
        return fullName
    }
    getSkill() {
        return this.skill
    }
    getScore() {
        return this.score
    }
}

const new_person01 = new person01("Aristides", "Phobos", 20, "Philippines")

console.log(new_person01)
console.log(new_person01.getFirstName())        //Aristides Phobos
console.log(new_person01.getSkill())            //[]
console.log(new_person01.getScore())            //0


//*A method could be regular method or a getter or a setter. Let us see, getter and setter.


/*
*### getter

*The get method allow us to access value from the object. We write a get method using keyword _get_ followed by a function. Instead of accessing properties directly from the object we use getter to get the value. See the example bellow */

class Person02 {
    constructor(firstName, lastName, age, country, city) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.country = country
        this.city = city
        this.score = 0
        this.skills = []
    }
    getFullName() {
        const fullName = this.firstName + ' ' + this.lastName
        return fullName
    }
    get getScore() {
        return this.score
    }
    get getSkills() {
        return this.skills
    }
}

const person03 = new Person02('Phobos', 'Aristides', 250, 'Philippines', 'Boxing')
const person04 = new Person02('Zues', 'Tekle', 28, 'Philippines', 'Espoo')


console.log(person03.getScore)  //0 => We do not need parenthesis to call a getter method
console.log(person04.getScore)  //0
console.log(person03.getSkills) //[]
console.log(person04.getSkills) //[]

/*
*### setter

*The setter method allow us to modify the value of certain properties. We write a setter method using keyword _set_ followed by a function. See the example bellow. */

class Person05 {
    constructor(firstName, lastName, age, country, city) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.country = country
        this.city = city
        this.score = 0
        this.skills = []
    }
    getFullName() {
        const fullName = this.firstName + ' ' + this.lastName
        return fullName
    }
    get getScore() {
        return this.score
    }
    get getSkills() {
        return this.skills
    }
    set setScore(score) {
        this.score += score
    }
    set setSkill(skill) {
        this.skills.push(skill)
    }
}

let person06 = new Person05('Phobos', 'Aristides', 20, 'Philippines', 'Boxing')
let person07 = new Person05(' Planning', 'Managing', 28, 'Organizing', 'Thunder')

person06.setScore = 1
person06.setSkill = 'HTML'
person06.setSkill = 'CSS'
person06.setSkill = 'JavaScript'

person07.setScore = 1
person07.setSkill = 'Zeus'
person07.setSkill = 'Odin'
person07.setSkill = 'FloatingIsland'

console.log(person06.score)         //1
console.log(person07.score)         //1

console.log(person06.skills)        //[ 'HTML', 'CSS', 'JavaScript' ]
console.log(person07.skills)        //[ 'Zeus', 'Odin', 'FloatingIsland' ]

/* 
*Do not be puzzled by the difference between regular method and a getter. If you know how to make a regular method you are good. Let us add regular method called getPersonInfo in the Person class. */


class person8 {
    constructor(firstName, lastName, age, country, city) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.country = country
        this.city = city
        this.score = 0
        this.skills = []
    }
    getFullName() {
        const fullName = this.firstName + ' ' + this.lastName
        return fullName
    }
    get getScore() {
        return this.score
    }
    get getSkills() {
        return this.skills
    }
    set setScore(score) {
        this.score += score
    }
    set setSkill(skill) {
        this.skills.push(skill)
    }
    getPersonInfo() {
        let fullName = this.getFullName()
        let skills =
            this.skills.length > 0 &&
            this.skills.slice(0, this.skills.length - 1).join(', ') +
            ` and ${this.skills[this.skills.length - 1]}`
        let formattedSkills = skills ? `He knows ${skills}` : ''

        let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`
        return info
    }
}

const person12 = new person8('Phobos', 'Aristides', 20, 'Philippines', 'Boxing')
const person10 = new person8(' Planning', 'Managing', 28, 'Organizing', 'Thunder')
const person11 = new person8('John', 'Doe', 50, 'Mars', 'Mars city')

person12.setScore = 1
person12.setSkill = 'HTML'
person12.setSkill = 'CSS'
person12.setSkill = 'JavaScript'

person10.setScore = 1
person10.setSkill = 'Zeus'
person10.setSkill = 'Odin'
person10.setSkill = 'FloatingIsland'

console.log(person12.getScore)
console.log(person10.getScore)

console.log(person12.getSkills)
console.log(person10.getSkills)
console.log(person11.getSkills)

console.log(person12.getPersonInfo())
console.log(person10.getPersonInfo())
console.log(person11.getPersonInfo())
/* 
1
1
[ 'HTML', 'CSS', 'JavaScript' ]
[ 'Zeus', 'Odin', 'FloatingIsland' ]
[]
Phobos Aristides is 20. He lives Boxing, Philippines. He knows HTML, CSS and JavaScript
Planning Managing is 28. He lives Thunder, Organizing. He knows Zeus, Odin and FloatingIsland
John Doe is 50. He lives Mars city, Mars.
*/

/* 
*### Static method

*The static keyword defines a static method for a class. Static methods are not called on instances of the class. Instead, they are called on the class itself. These are often utility functions, such as functions to create or clone objects. An example of static method is _Date.now()_. The _now_ method is called directly from the class.*/

class person13 {
    constructor(firstName, lastName, age, country, city) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.country = country
        this.city = city
        this.score = 0
        this.skills = []
    }
    getFullName() {
        const fullName = this.firstName + ' ' + this.lastName
        return fullName
    }
    get getScore() {
        return this.score
    }
    get getSkills() {
        return this.skills
    }
    set setScore(score) {
        this.score += score
    }
    set setSkill(skill) {
        this.skills.push(skill)
    }
    getPersonInfo() {
        let fullName = this.getFullName()
        let skills =
            this.skills.length > 0 &&
            this.skills.slice(0, this.skills.length - 1).join(', ') +
            ` and ${this.skills[this.skills.length - 1]}`

        let formattedSkills = skills ? `He knows ${skills}` : ''

        let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`
        return info
    }
    static favoriteSkill() {
        const skills = ['HTML', 'CSS', 'JS', 'React', 'Python', 'Node']
        const index = Math.floor(Math.random() * skills.length)
        return skills[index]
    }
    static showDateTime() {
        let now = new Date()
        let year = now.getFullYear()
        let month = now.getMonth() + 1
        let date = now.getDate()
        let hours = now.getHours()
        let minutes = now.getMinutes()
        if (hours < 10) {
            hours = '0' + hours
        }
        if (minutes < 10) {
            minutes = '0' + minutes
        }

        let dateMonthYear = date + '.' + month + '.' + year
        let time = hours + ':' + minutes
        let fullTime = dateMonthYear + ' ' + time
        return fullTime
    }
}

console.log(person13.favoriteSkill())
console.log(person13.showDateTime())

//*The static methods are methods which can be used as utility functions.


/* 
*## Inheritance

*Using inheritance we can access all the properties and the methods of the parent class. This reduces repetition of code. If you remember, we have a Person parent class and we will create children from it. Our children class could be student, teach etc. */

/*  // syntax
class ChildClassName extends {
    code goes here
}  
*/

class randomStudent extends person13 {
    saySomething() {
        console.log('I am a child of the person class')
    }
}

const s1 = new randomStudent('Phobos', 'Aristides', 'Philippines', 20, 'Boxing')

console.log(s1)
console.log(s1.saySomething())
console.log(s1.getFullName())
console.log(s1.getPersonInfo())

/* 
*### Overriding methods

*As you can see, we manage to access all the methods in the Person Class and we used it in the Student child class. We can customize the parent methods, we can add additional properties to a child class. If we want to customize, the methods and if we want to add extra properties, we need to use the constructor function the child class too. Inside the constructor function we call the super() function to access all the properties from the parent class. The Person class didn't have gender but now let us give gender property for the child class, Student. If the same method name used in the child class, the parent method will be overridden.
*/

class randomStudent2 extends person13 {
    constructor(firstName, lastName, age, country, city, gender) {
        super(firstName, lastName, age, country, city)
        this.gender = gender
    }

    saySomething() {
        console.log('I am a child of the person class')
    }
    getPersonInfo() {
        let fullName = this.getFullName()
        let skills =
            this.skills.length > 0 &&
            this.skills.slice(0, this.skills.length - 1).join(', ') +
            ` and ${this.skills[this.skills.length - 1]}`

        let formattedSkills = skills ? `He knows ${skills}` : ''
        let pronoun = this.gender == 'Male' ? 'He' : 'She'

        let info = `${fullName} is ${this.age}. ${pronoun} lives in ${this.city}, ${this.country}. ${formattedSkills}`
        return info
    }
}

const s2 = new randomStudent2(
    'Phobos',
    'Aristides',
    250,
    'Philippines',
    'Boxing',
    'Male'
)
const s3 = new randomStudent2('Zeus', 'Odin', 28, 'Philippines', 'Boxing', 'Female')
s2.setScore = 1
s2.setSkill = 'HTML'
s2.setSkill = 'CSS'
s2.setSkill = 'JavaScript'

s3.setScore = 1
s3.setSkill = 'Planning'
s3.setSkill = 'Managing'
s3.setSkill = 'Organizing'

console.log(s2)

console.log(s2.saySomething())
console.log(s2.getFullName())
console.log(s2.getPersonInfo())

console.log(s3.saySomething())
console.log(s3.getFullName())
console.log(s3.getPersonInfo())

/* randomStudent {
    firstName: 'Phobos',
    lastName: 'Aristides',
    age: 'Philippines',
    country: 20,
    city: 'Boxing',
    score: 0,
    skills: []
}
I am a child of the person class
undefined
Phobos Aristides
Phobos Aristides is Philippines. He lives Boxing, 20. 
randomStudent2 {
    firstName: 'Phobos',
    lastName: 'Aristides',
    age: 250,
    country: 'Philippines',
    city: 'Boxing',
    score: 1,
    skills: [ 'HTML', 'CSS', 'JavaScript' ],
    gender: 'Male'
}
I am a child of the person class
undefined
Phobos Aristides
Phobos Aristides is 250. He lives in Boxing, Philippines. He knows HTML, CSS and JavaScript
I am a child of the person class
undefined
Zeus Odin
Zeus Odin is 28. She lives in Boxing, Philippines. He knows Planning, Managing and Organizing */

//*Now, the getPersonInfo method has been overridden and it identifies if the person is male or female.