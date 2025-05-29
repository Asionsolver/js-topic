/**
*@Check if Array

* Use Array.isArray() to check if the input is an array.

* Input: 'hello', [1, 2, 3]

* Output: false, true
*/

function isArray(input) {
  return Array.isArray(input);
}

console.log(isArray("hello"));
console.log(isArray([1, 2, 3]));
