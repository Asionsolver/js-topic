const originalPrimitives = ["hello", false, { name: "ashis" }, 10];
// console.log(originalPrimitives);

// Common ways to shallow copy an array:
const shallowCopiedPrimitives1 = Array.from(originalPrimitives);
// console.log("Shallow Copy using Array.from():",shallowCopiedPrimitives1);
// console.log(originalPrimitives === shallowCopiedPrimitives1);

const shallowCopiedPrimitives2 = [...originalPrimitives];
// console.log("Shallow Copy using spread operator:",shallowCopiedPrimitives2);
// console.log(shallowCopiedPrimitives2 === shallowCopiedPrimitives1);

const shallowCopiedPrimitives3 = originalPrimitives.slice();

// console.log("Shallow Copy using slice():", shallowCopiedPrimitives3);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

shallowCopiedPrimitives1[2] = { name: "asion" };
console.log("line_20: Modified Shallow Copy 1:", shallowCopiedPrimitives1); // [ 'hello', false, { name: 'asion' }, 10 ]
console.log("line_21: Original Primitives (Unaffected):", originalPrimitives); // [ 'hello', false, { name: 'ashis' }, 10 ]

shallowCopiedPrimitives1[2].name = "tinkle";
console.log("line_24: Modified Shallow Copy 1:", shallowCopiedPrimitives1); // [ 'hello', false, { name: 'tinkle' }, 10 ]
console.log("line_25: Original Primitives (Unaffected):", originalPrimitives); // [ 'hello', false, { name: 'ashis' }, 10 ]

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// shallowCopiedPrimitives2[2] = { name: "asion" };
// console.log("line_30: Modified Shallow Copy 2:", shallowCopiedPrimitives2); // [ 'hello', false, { name: 'asion' }, 10 ]
// console.log("line_31: Original Primitives (Unaffected):", originalPrimitives); // [ 'hello', false, { name: 'ashis' }, 10 ]

// shallowCopiedPrimitives2[2].name = "tinkle";
// console.log("line_34: Modified Shallow Copy 2:", shallowCopiedPrimitives2); // [ 'hello', false, { name: 'tinkle' }, 10 ]
// console.log("line_35: Original Primitives (Unaffected):", originalPrimitives); // [ 'hello', false, { name: 'ashis' }, 10 ]
// console.log(originalPrimitives === shallowCopiedPrimitives2); // false (different arrays)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// shallowCopiedPrimitives3[2] = { name: "asion" };
// console.log("line_27:Modified Shallow Copy 2:", shallowCopiedPrimitives3); // [ 'hello', false, { name: 'asion' }, 10 ]
// console.log("line_28Original Primitives (Unaffected):", originalPrimitives); // [ 'hello', false, { name: 'ashis' }, 10 ]

// shallowCopiedPrimitives3[2].name = "tinkle";
// console.log("line_30Modified Shallow Copy 2:", shallowCopiedPrimitives3); // [ 'hello', false, { name: 'tinkle' }, 10 ]
// console.log("line_31Original Primitives (Unaffected):", originalPrimitives); // [ 'hello', false, { name: 'ashis' }, 10 ]
// console.log(originalPrimitives === shallowCopiedPrimitives3); // false (different arrays)
