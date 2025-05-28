const originalWithUnsupportedTypes = {
  name: "Complex",
  birthday: new Date("1990-01-15T00:00:00.000Z"),
  greet: function () {
    console.log("Hello!");
  },
  secret: undefined,
  id: Symbol("uniqueId"),
  pattern: /abc/g,
  mySet: new Set([1, 2, 3]),
  myMap: new Map([["key", "value"]]),
};
// Add a circular reference for demonstration (will cause error with JSON.stringify)
// originalWithUnsupportedTypes.self = originalWithUnsupportedTypes; // Uncomment to see error

console.log(
  "Original Birthday (Date object):",
  originalWithUnsupportedTypes.birthday
);
console.log("Original Greet (function):", originalWithUnsupportedTypes.greet);
console.log(
  "Original Secret (undefined):",
  originalWithUnsupportedTypes.secret
);
console.log("Original ID (Symbol):", originalWithUnsupportedTypes.id);
console.log("Original Pattern (RegExp):", originalWithUnsupportedTypes.pattern);
console.log("Original Set:", originalWithUnsupportedTypes.mySet);
console.log("Original Map:", originalWithUnsupportedTypes.myMap);

// --- SHALLOW COPY (still just copies references or primitive values) ---
const shallowCopyUnsupported = { ...originalWithUnsupportedTypes };
// Modifying birthday in shallow copy will affect original because it's the same Date object reference
shallowCopyUnsupported.birthday.setFullYear(2000);
console.log(
  "Original Birthday after shallow mod:",
  originalWithUnsupportedTypes.birthday
); // Year is 2000

// Reset birthday for deep copy demo
originalWithUnsupportedTypes.birthday = new Date("1990-01-15T00:00:00.000Z");

// --- DEEP COPY (using JSON method) ---
let deepCopyJSON;
try {
  deepCopyJSON = JSON.parse(JSON.stringify(originalWithUnsupportedTypes));
} catch (e) {
  console.error("Error during JSON deep copy (likely circular reference):", e);
  deepCopyJSON = {}; // Fallback or handle error
}

console.log("\n--- Results of JSON.parse(JSON.stringify()) ---");
console.log("Deep Copy Birthday (string):", deepCopyJSON.birthday); // "1990-01-15T00:00:00.000Z" (now a string)
console.log("Deep Copy Greet (undefined):", deepCopyJSON.greet); // undefined (function lost)
console.log("Deep Copy Secret (undefined):", deepCopyJSON.secret); // undefined (property removed if object, not just value)
console.log("Deep Copy ID (undefined):", deepCopyJSON.id); // undefined (Symbol lost)
console.log("Deep Copy Pattern (object):", deepCopyJSON.pattern); // {} (RegExp becomes empty object)
console.log("Deep Copy Set (object):", deepCopyJSON.mySet); // {} (Set becomes empty object)
console.log("Deep Copy Map (object):", deepCopyJSON.myMap); // {} (Map becomes empty object)

if (deepCopyJSON.birthday) {
  // It's a string now, so this won't work:
  // deepCopyJSON.birthday.setFullYear(2020); // This would throw an error
}
