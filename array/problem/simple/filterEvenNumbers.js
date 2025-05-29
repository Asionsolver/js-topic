/**
 * @Filter Even Numbers

 *Use filter to return only even numbers from an array.

 *Input: [1, 2, 3, 4, 5, 6]

 *Output: [2, 4, 6]
 */

const numbers = [1, 2, 3, 4, 5, 6];

const result = numbers.filter((item) => {
  if (item % 2 === 0) {
    return item;
  }
});
console.log(result);
