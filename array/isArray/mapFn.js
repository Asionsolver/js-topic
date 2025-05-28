const lowerCaseWords = ["apple", "banana", "cherry"];

const upperCaseWords = Array.from(
  lowerCaseWords, // Source iterable
  function (element, index) {
    // For the first iteration:
    //   element is "apple"
    //   index is 0
    console.log(`Processing element: "${element}" at index: ${index}`);
    return element.toUpperCase(); // Transform the element
  }
);

console.log(upperCaseWords);
