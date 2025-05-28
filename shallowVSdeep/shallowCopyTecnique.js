// ! 🔁 Shallow Copying an Array

// ✅ 1. Using Spread Operator [...] (✅ Best and Most Common)
const copy1 = [...originalArray];

// ✅ 2. Using Array.slice()
const copy2 = originalArray.slice();
// ✅ 3. Using Array.from()

const copy3 = Array.from(originalArray);

// ✅ 4. Using .concat() with an empty array
const copy4 = [].concat(originalArray);

// ! 🧾 Shallow Copying an Object
// ✅ 1. Using Spread Operator {...}
const copy5 = { ...originalObject };

// ✅ 2. Using Object.assign()
const copy6 = Object.assign({}, originalObject);
