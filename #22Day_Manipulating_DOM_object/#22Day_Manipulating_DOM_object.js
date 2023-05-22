/*
*# Day 22

*## DOM(Document Object Model)-Day 2

*### Creating an Element

*To create an HTML element we use tag name. Creating an HTML element using JavaScript is very simple and straight forward. We use the method _document.createElement()_. The method takes an HTML element tag name as a string parameter.
 */

//~ syntax
//*document.createElement('tagname')

let textName = document.createElement('h1')
textName.className = 'textName'
textName.style.fontSize = '24px'
textName.textContent = 'This is a HTML Element'

console.log(textName)

/*
*### Creating elements
*To create multiple elements we should use loop. Using loop we can create as many HTML elements as we want.
*After we create the element we can assign value to the different properties of the HTML object.
*/


let title
for (let i = 0; i < 3; i++) {
    title = document.createElement('h1')
    title.className = 'title'
    title.style.fontSize = '24px'
    title.textContent = i
    title.style.color = 'green   '
    console.log(title)
}

/* 
*### Appending child to a parent element

*To see a created element on the HTML document we should append it to the parent as a child element. We can access the HTML document body using *document.body*. The *document.body* support the *appendChild()* method. See the example below. */


//* creating multiple elements and appending to parent element
let textName1
for (let i = 0; i < 3; i++) {
    textName1 = document.createElement('h1')
    textName1.className = 'textName1'
    textName1.style.fontSize = '24px'
    textName1.textContent = i
    textName1.style.color = 'Green'
    document.body.appendChild(textName1)
}

/*
*### Removing a child element from a parent node

*After creating an HTML, we may want to remove element or elements and we can use the *removeChild()* method. */

const ul = document.querySelector('ul')
const lists = document.querySelectorAll('li')
for (const list of lists) {
    ul.removeChild(list)

}

/* 
*As we have see in the previous section there is a better way to eliminate all the inner HTML elements or the children of a parent element using the method *innerHTML* properties. */