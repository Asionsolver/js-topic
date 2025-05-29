/**
@Goal Create a simplified deck of cards as an array of strings. For suits "Hearts" and "Spades", and ranks "A", "K", "Q", "J", create strings like "A of Hearts", "K of Spades", etc. Use Array.from creatively.
Desired Output:

input:
  const suits = ["Hearts", "Spades"];
  const ranks = ["A", "K", "Q", "J"];


[
  "A of Hearts", "K of Hearts", "Q of Hearts", "J of Hearts",
  "A of Spades", "K of Spades", "Q of Spades", "J of Spades"
]
*/

function createSimpleDeck() {
  const suits = ["Hearts", "Spades"];
  const ranks = ["A", "K", "Q", "J"];

  return Array.from(suits, (suitValue) => {
    return Array.from(ranks, (rankValue) => `${rankValue} of ${suitValue}`);
  }).flat();
}

console.log("Problem 3 Output:", createSimpleDeck());
