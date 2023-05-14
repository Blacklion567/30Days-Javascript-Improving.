let number = [1,2,3,4,5]
number[0] = 11
console.log(number)                 //[ 11, 2, 3, 4, 5 ]

let number1 = [1,2,3,4,5]
let number2 = number1
console.log(number1 == number2 )    //true

let person1 = {
    firstName: 'Jade Ivan',
    lastName: 'Bringcola',
    age: 20
}

let person2 = {
    firstName: 'Jade Ivan',
    lastName: 'Bringcola',
    age: 20
}
console.log(person1 ==  person2)    //false

let blank = []
console.log(blank)                  //[]
let blanks = {}
console.log(blanks)                 //{}

console.log(blank == blanks)        //false
