/**
@Suppose you have a rule:
** "I will only take an 'orange' from a basket if there is also an 'apple' in that same basket."

*/

// Our fruit basket (array)
const fruitBasket = [
  { name: "Mango", color: "yellow" },
  { name: "Orange", color: "orange" },
  { name: "Apple", color: "red" },
  { name: "Banana", color: "yellow" },
  { name: "Orange", color: "green" }, // Another orange
];

// The fruits we want to put in the new basket
const newBasket = fruitBasket.filter((currentFruit, index, wholeBasket) => {
  // Our rule: "I will only take an 'Orange' from the basket
  // if there is also an 'Apple' in the same basket."

  // First, let's see if the current fruit is an 'Orange'.
  if (currentFruit.name === "Orange") {
    // Yes, it's an Orange.
    // Now we need to check if there's an 'Apple' in the wholeBasket.

    // We'll use the `some` method to check the wholeBasket.
    // `some` will search the entire basket and return true if it finds at least one apple.
    const isApplePresent = wholeBasket.some((fruit) => fruit.name === "Apple");

    if (isApplePresent) {
      // If an apple is found, this orange will go into the new basket.
      console.log(
        `Taking "${currentFruit.name}" (${currentFruit.color}), because an apple is present in the basket.`
      );
      return true; // Keep this fruit
    } else {
      // If no apple is found, this orange will not go into the new basket.
      console.log(
        `Not taking "${currentFruit.name}" (${currentFruit.color}), because no apple is present in the basket.`
      );
      return false; // Discard this fruit
    }
  } else {
    // If the current fruit is not an Orange, our rule doesn't apply to it.
    // So, this fruit will not be taken into the new basket (based on this specific rule).
    console.log(
      `"${currentFruit.name}" is not an Orange, so it's discarded by this rule.`
    );
    return false; // Discard this fruit (unless another rule applies)
  }
});

console.log("\nOriginal Fruit Basket:", fruitBasket);
console.log("------------------------------------");
console.log("Fruits in the New Basket:", newBasket);
