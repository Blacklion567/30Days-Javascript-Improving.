// match: it takes a substring or regular expression pattern as an argument and it returns an array if there is match if not it returns null. Let us see how a regular expression pattern looks like. It starts with / sign and ends with / sign.

let string = 'I Really Love Programming'
let sentence = /I Really Love Programming/
console.log(string.match(sentence));
/* 
[
    'I Really Love Programming',
    index: 0,
    input: 'I Really Love Programming',
    groups: undefined
] 
*/

let sentence_2 = 'I Really Love Programming, the language that I love is JavaScript'
console.log(sentence_2.match('Programming'));

/* [
    'Programming',
    index: 14,
    input: 'I Really Love Programming, the language that I love is JavaScript',
    groups: undefined
] */
1