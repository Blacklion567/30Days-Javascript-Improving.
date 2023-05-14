// *lastIndexOf(): Takes takes a substring and if the substring exists in a string it returns the last position of the substring if it does not exist it returns -1

let string = 'I prefer Javascript than other language what about you?'
console.log(string.lastIndexOf('about'))        //45
console.log(string.lastIndexOf('prefer'))       //2
console.log(string.lastIndexOf('Javascript'))   //9
console.log(string.lastIndexOf('I'))            //0