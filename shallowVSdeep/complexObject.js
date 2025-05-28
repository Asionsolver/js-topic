const originalComplexObj = {
  name: "Main Object",
  details: {
    version: "1.0",
    authors: ["Eve", "Charlie"],
  },
  tags: ["data", "example"],
};

// // --- SHALLOW COPY ---
// const shallowCopiedComplexObj = { ...originalComplexObj };

// console.log("Original .details.version:", originalComplexObj.details.version); // 1.0
// console.log("Original .tags[0]:", originalComplexObj.tags[0]); // data

// // Modify nested object property via shallow copy
// shallowCopiedComplexObj.details.version = "2.0";
// // Modify nested array element via shallow copy
// shallowCopiedComplexObj.tags.push("test");

// console.log("--- After modifying shallow copy's nested parts ---");
// console.log("Original .details.version:", originalComplexObj.details.version); // 2.0 (AFFECTED!)
// console.log("Original .tags:", originalComplexObj.tags); // ["data", "example", "test"] (AFFECTED!)
// console.log(
//   "Shallow Copy .details.version:",
//   shallowCopiedComplexObj.details.version
// ); // 2.0
// console.log("Shallow Copy .tags:", shallowCopiedComplexObj.tags); // ["data", "example", "test"]

// // The top-level objects are different
// console.log(originalComplexObj === shallowCopiedComplexObj); // false
// // But the nested 'details' object is the SAME reference
// console.log(originalComplexObj.details === shallowCopiedComplexObj.details); // true
// // And the nested 'tags' array is the SAME reference
// console.log(originalComplexObj.tags === shallowCopiedComplexObj.tags); // true

// --- DEEP COPY ---
const deepCopiedComplexObj = JSON.parse(JSON.stringify(originalComplexObj));

console.log(
  "\nOriginal .details.version (before deep copy mod):",
  originalComplexObj.details.version
); // 2.0 (from previous shallow copy mod)
console.log(
  "Deep Copy .details.version:",
  deepCopiedComplexObj.details.version
); // 2.0

// Modify nested object property via deep copy
deepCopiedComplexObj.details.version = "3.0";
deepCopiedComplexObj.details.authors.push("David");
deepCopiedComplexObj.tags[0] = "newData";

console.log("--- After modifying deep copy's nested parts ---");
console.log("Original .details.version:", originalComplexObj.details.version); // 2.0 (UNAFFECTED by deep copy mod)
console.log("Original .details.authors:", originalComplexObj.details.authors); // ["Eve", "Charlie"] (UNAFFECTED)
console.log("Original .tags[0]:", originalComplexObj.tags[0]); // data (UNAFFECTED)

console.log(
  "Deep Copy .details.version:",
  deepCopiedComplexObj.details.version
); // 3.0
console.log(
  "Deep Copy .details.authors:",
  deepCopiedComplexObj.details.authors
); // ["Eve", "Charlie", "David"]
console.log("Deep Copy .tags[0]:", deepCopiedComplexObj.tags[0]); // newData

// Nested objects/arrays are now different references
console.log(originalComplexObj.details === deepCopiedComplexObj.details); // false
console.log(originalComplexObj.tags === deepCopiedComplexObj.tags); // false
