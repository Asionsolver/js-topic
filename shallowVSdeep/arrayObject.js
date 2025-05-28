const originalArrayOfObjects = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

// // --- SHALLOW COPY ---
// const shallowCopiedArrayOfObjects = [...originalArrayOfObjects];

// console.log(shallowCopiedArrayOfObjects);

// console.log(
//   "Original Array of Objects[0].name:",
//   originalArrayOfObjects[0].name
// ); // Alice
// console.log("Shallow Copy[0].name:", shallowCopiedArrayOfObjects[0].name); // Alice

// Modify a property of an object WITHIN the shallow copied array
// shallowCopiedArrayOfObjects[0].name = "Alicia";

// console.log("--- After modifying shallow copy's nested object ---");
// console.log(
//   "Original Array of Objects[0].name:",
//   originalArrayOfObjects[0].name
// ); // Alicia (AFFECTED!)
// console.log("Shallow Copy[0].name:", shallowCopiedArrayOfObjects[0].name); // Alicia

// The arrays are different, but the objects they contain are the same references
// console.log(originalArrayOfObjects === shallowCopiedArrayOfObjects); // false
// console.log(originalArrayOfObjects[0] === shallowCopiedArrayOfObjects[0]); // true (Points to the same object in memory!)

// --- DEEP COPY ---
const deepCopiedArrayOfObjects = JSON.parse(
  JSON.stringify(originalArrayOfObjects)
);

// console.log(
//   "\nOriginal Array of Objects (before deep copy mod)[0].name:",
//   originalArrayOfObjects[0].name
// ); // Alicia (from previous shallow copy mod)
// console.log("Deep Copy[0].name:", deepCopiedArrayOfObjects[0].name); // Alicia (initially same value)

// // Modify a property of an object WITHIN the deep copied array
deepCopiedArrayOfObjects[0].name = "Alex";
deepCopiedArrayOfObjects[1].id = 99;

console.log("--- After modifying deep copy's nested object ---");
console.log(
  "Original Array of Objects[0].name:",
  originalArrayOfObjects[0].name
); // Alicia (UNAFFECTED by deep copy mod)
console.log("Deep Copy[0].name:", deepCopiedArrayOfObjects[0].name); // Alex
console.log("Original Array of Objects[1].id:", originalArrayOfObjects[1].id); // 2
console.log("Deep Copy[1].id:", deepCopiedArrayOfObjects[1].id); // 99

console.log("originalArrayOfObjects: ", originalArrayOfObjects);
console.log("deepCopiedArrayOfObjects: ", deepCopiedArrayOfObjects);

// // The arrays are different, AND the objects they contain are also different references
console.log(originalArrayOfObjects === deepCopiedArrayOfObjects); // false
console.log(originalArrayOfObjects[0] === deepCopiedArrayOfObjects[0]); // false (Different objects in memory!)
