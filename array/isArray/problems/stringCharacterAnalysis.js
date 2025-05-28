/**
@Goal Given a string, create an array of objects where each object represents a character and includes the character itself, its ASCII code, and its original index in the string.
Input: A string, e.g., "Hi!"
Desired Output:
[
  { char: 'H', ascii: 72, index: 0 },
  { char: 'i', ascii: 105, index: 1 },
  { char: '!', ascii: 33, index: 2 }
]
*/

function stringCharAnalysis(stringElement) {
  return Array.from(stringElement, (element, index) => {
    return {
      character: element,
      ASCII_value: element.charCodeAt(0),
      character_index: index,
    };
  });
}

console.log(stringCharAnalysis("Hello"));
