// const multiplier = {
//   factor: 10,
//   multiply(element) {
//     console.log("Inside multiply, this.factor is:", this.factor);
//     return element * this.factor;
//   },
// };
// const sourceArray = [1, 2, 3];

// const multipliedArray = Array.from(
//   sourceArray,
//   multiplier.multiply
//   //   multiplier
// );
// console.log(multipliedArray);
// console.log(multiplier.multiply(5));

// SCENARIO 1: NO thisArg provided to Array.from
// console.log("\n--- SCENARIO 1: No thisArg ---");
// const multipliedArrayNoThisArg = Array.from(
//   sourceArray,
//   multiplier.multiply // Just the function reference is passed
// );
// console.log(multipliedArrayNoThisArg);

const items = Array.from({ length: 5 }, (v, i) => i);
console.log(items);
