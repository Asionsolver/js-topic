/**
@Goal You have a custom array-like object that might have "holes" (missing indices). Convert it to a true array where each element is an object { index: i, value: val, defined: true/false }.

Input:
const sparseObject = {
  0: 'first',
  2: 'third',
  length: 4,
  metadata: "some info" // This should be ignored by Array.from for element creation
};

Desired Output:
[
  { index: 0, value: 'first', defined: true },
  { index: 1, value: undefined, defined: false },
  { index: 2, value: 'third', defined: true },
  { index: 3, value: undefined, defined: false }
]
*/

function createCustomArrayLikeObj(obj) {
  return Array.from(obj, (val, idx) => {
    return {
      index: idx,
      value: val, // 'val' is obj[idx] here.
      defined:
        Object.prototype.hasOwnProperty.call(obj, idx.toString()) ||
        val !== undefined, // A more robust check for "defined"
      // though val !== undefined might be enough
      // depending on whether 'undefined' is a valid stored value
    };
  });
}

const sparseObject = {
  0: "first",
  2: "third",
  length: 4,
  metadata: "some info",
};
console.log(createCustomArrayLikeObj(sparseObject));

// Another example where Array.from itself fills undefined for missing indices in array-likes
const trulySparse = { length: 3 };
trulySparse[0] = "a";
trulySparse[2] = "c";

const fromTrulySparse = Array.from(trulySparse, (value, index) => {
  return {
    value,
    index,
    isActuallyInSource: trulySparse.hasOwnProperty(index),
  };
});
console.log("Problem 6 Output (Truly Sparse):", fromTrulySparse);
