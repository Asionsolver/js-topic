/**
*@Sum All Numbers

*Use reduce to return the sum of all elements in the array.

*Input: [5, 10, 15]

*Output: 30

*/

// const sum = [5, 10, 15];

// let add = 0;

// const result = sum.map((item) => (add = add += item));

// console.log(add);

const values = [5, 10, 15];
const sum = values.reduce((acc, cur) => acc + cur, 0);
console.log(sum); // 30
