// const original = {
//   name: "Ashis",
//   age: 25,
//   hobbies: ["reading", "coding"],
// };

// const copyOne = JSON.stringify(original);
// const copy = JSON.parse(copyOne);

// console.log(copyOne); // ✅ Works perfectly
// console.log(copy); // ✅ Works perfectly

// const original = {
//   name: "Ashis",
//   sayHi: () => "Hi 👋", // ❌ Function
//   status: undefined, // ❌ undefined
//   birthDate: new Date(), // ❌ Date object
// };

// // const copyOne = JSON.stringify(original);
// const copy = JSON.parse(JSON.stringify(original));

// // console.log(copyOne); // {"name":"Ashis","birthDate":"2025-05-28T12:21:49.444Z"}
// console.log(copy); // { name: 'Ashis', birthDate: '2025-05-28T12:22:56.690Z' }

const original = {
  map: new Map([["key", "value"]]),
  set: new Set([1, 2, 3]),
  regex: /abc/i,
};

const copy = JSON.parse(JSON.stringify(original));
console.log(copy); // { map: {}, set: {}, regex: {} }
