function customDeepClone(obj, hash = new WeakMap()) {
  // Handle primitive types and null
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  // Handle Dates
  if (obj instanceof Date) {
    return new Date(obj);
  }

  // Handle RegExp
  if (obj instanceof RegExp) {
    return new RegExp(obj.source, obj.flags);
  }

  // Handle circular references
  if (hash.has(obj)) {
    return hash.get(obj); // Return the already-copied reference
  }

  // Handle Arrays and Objects
  // Create a new object/array of the same prototype
  const clone = Array.isArray(obj)
    ? []
    : Object.create(Object.getPrototypeOf(obj));

  hash.set(obj, clone); // Store the clone in the hash map for circular references

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      clone[key] = customDeepClone(obj[key], hash); // Recursive call
    }
  }
  // Also copy symbols
  const symbols = Object.getOwnPropertySymbols(obj);
  for (const symbol of symbols) {
    clone[symbol] = customDeepClone(obj[symbol], hash);
  }

  return clone;
}

const sourceObj = {
  name: "Source",
  date: new Date(),
  details: { value: 10, items: [1, { nested: "text" }] },
  undef: undefined,
  fn: () => console.log("test"),
  sym: Symbol("s1"),
};
sourceObj.circular = sourceObj; // Add circular reference

const deepClonedObj = customDeepClone(sourceObj);

// Modify the deep clone
deepClonedObj.name = "Cloned";
deepClonedObj.date.setMonth(deepClonedObj.date.getMonth() + 1);
deepClonedObj.details.value = 20;
deepClonedObj.details.items[1].nested = "changed text";
// deepClonedObj.fn = () => console.log("new func"); // Reassign if needed
// deepClonedObj.sym = Symbol("s2"); // Symbols are unique, reassign if new one needed

console.log("\n--- Custom Deep Clone Results ---");
console.log("Source Name:", sourceObj.name); // Source (Unaffected)
console.log("Cloned Name:", deepClonedObj.name); // Cloned

console.log("Source Date:", sourceObj.date); // Original Date (Unaffected)
console.log("Cloned Date:", deepClonedObj.date); // Different Date object, one month ahead

console.log("Source Details Value:", sourceObj.details.value); // 10 (Unaffected)
console.log("Cloned Details Value:", deepClonedObj.details.value); // 20

console.log("Source Nested Text:", sourceObj.details.items[1].nested); // text (Unaffected)
console.log("Cloned Nested Text:", deepClonedObj.details.items[1].nested); // changed text

console.log("Source Undefined:", sourceObj.undef); // undefined
console.log("Cloned Undefined:", deepClonedObj.undef); // undefined (preserved)

console.log(
  "Source Symbol === Cloned Symbol:",
  sourceObj.sym === deepClonedObj.sym
); // true (symbols are unique, this custom clone copies the reference for simplicity, a true deep clone might re-create)

console.log("Source has circular:", sourceObj.circular === sourceObj); // true
console.log("Cloned has circular:", deepClonedObj.circular === deepClonedObj); // true
console.log(
  "Cloned circular is not source:",
  deepClonedObj.circular !== sourceObj
); // true (the circular reference points within the CLONE)

// Check if fn is copied (reference is copied)
console.log("Source fn === Cloned fn:", sourceObj.fn === deepClonedObj.fn); // true
// deepClonedObj.fn(); // "test"
