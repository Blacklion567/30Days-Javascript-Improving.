/* 
*# Day 19

*## Closure

*JavaScript allows writing function inside an outer function. We can write as many inner functions as we want. If inner function access the variables of outer function then it is called closure. */

function fullName() {
    const firstName = 'Jade Ivan'
    const lastName = ' Bringcola'
    return firstName + lastName
}

console.log(fullName());

function outerFunction() {
    let count = 0;
    function innerFunction() {
        count++
        return count
    }

    return innerFunction
}

const innerFunc = outerFunction

console.log(innerFunc())

//*Let us more example of inner functions

function outerFunction() {
    let count = 0;
    function plusOne() {
        count++
        return count
    }
    function minusOne() {
        count--
        return count
    }

    return {
        plusOne: plusOne(),
        minusOne: minusOne()
    }
}
const innerFuncs = outerFunction()

console.log(innerFunc())
console.log(innerFuncs.plusOne)     //1
console.log(innerFuncs.minusOne)    //0



function addMinus() {
    let count = 0;
    function addNumber() {
        count = Math.floor(Math.random() * 9) + 1
        return count++
    }
    function minusNumber() {
        count = Math.floor(Math.random() * 9) + 1
        return count--
    }
    return {
        plusOne: addNumber(),
        minusOne: minusNumber()
    }
}
const allNumber = addMinus()

console.log(allNumber)

