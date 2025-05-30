const numbers = [1, 2, 3, 4, 5];
console.log("Original numbers array:", numbers);

const filteredNumbers = numbers.filter((element, index, arr) => {
  console.log(`--- Iteration for element: ${element} at index: ${index} ---`);
  console.log("Element:", element);
  console.log("Index:", index);
  console.log("Array parameter (arr):", arr);
  console.log("Is 'arr' the same as 'numbers'?", arr === numbers); // This will be true

  // Simple filter condition: keep numbers greater than 15
  return element > 3;
});

console.log("Filtered numbers:", filteredNumbers);

/**
@Explanation
** Inside the callback, arr is a direct reference to the numbers array.
** arr === numbers evaluates to true, confirming they are the same object in memory.
** You can see the entire original array printed for each iteration. While not useful for the filter logic here, it demonstrates its availability.
*/
