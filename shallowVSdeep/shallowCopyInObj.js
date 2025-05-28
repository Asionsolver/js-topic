const originalSimpleObj = { a: 1, b: "text" };

const originalSimpleObj1 = { ...originalSimpleObj };
// console.log(originalSimpleObj1); // { a: 1, b: "text" };
const originalSimpleObj2 = Object.assign({}, originalSimpleObj);
// console.log(originalSimpleObj2);  // { a: 1, b: "text" };

originalSimpleObj1.a = 13;
// console.log(originalSimpleObj1); // { a: 1, b: "text" };
// console.log(originalSimpleObj);

originalSimpleObj2.a = 45;
console.log(originalSimpleObj2);
console.log(originalSimpleObj);
