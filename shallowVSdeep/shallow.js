/**

@Shallow Copy:
1. Creates a new object or array.
2. Copies the top-level properties/elements.
3. If a property/element is a primitive type, its value is copied.
4. If a property/element is a reference type (another object or array), the reference to that nested object/array is copied, not the nested object/array itself.

Result: Both the original and the shallow copy will share the same nested objects/arrays. Modifying a nested object/array through one will affect the other.
*/
const original = {
  name: "Ashis",
  skills: ["JavaScript", "React"],
};
// 1. Creates a new object or array.
// Create a shallow copy using spread syntax
const shallowCopy = { ...original };
// console.log(shallowCopy);

// 2. Copies the top-level properties/elements.
// Check if top-level properties are copied

// console.log("Are 'name' values equal?", original.name === shallowCopy.name); // true (primitive copied by value)
// console.log(
//   "Are 'skills' arrays the same?",
//   original.skills === shallowCopy.skills
// ); // true (reference copied)

// Modify a top-level property
shallowCopy.name = "Paul";

// 3. If a property/element is a primitive type, its value is copied.
// console.log(original.name);
// console.log(shallowCopy.name);

// Modify a nested property (skills array)
shallowCopy.skills.push("UI/UX");

// 4. If a property/element is a reference type (another object or array), the reference to that nested object/array is copied, not the nested object/array itself.
console.log("Original:", original);
console.log("Shallow Copy:", shallowCopy);
