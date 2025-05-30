/**
@Remove Duplicates

Remove duplicate numbers from an array using filter and indexOf.

Input: [1, 2, 2, 3, 4, 4, 5]

Output: [1, 2, 3, 4, 5]
*/

const arr = [1, 2, 2, 3, 4, 4, 5];
const unique = arr.filter((item, index) => arr.indexOf(item) === index);
console.log(unique);
