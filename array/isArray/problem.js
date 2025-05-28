// ! From a list of scores, create an array of objects, each indicating the score and whether it's above a certain threshold, also including its original position.
const scores = [75, 92, 58, 88, 65];
const passingThreshold = 70;

const processedScores = Array.from(scores, (scoreElement, index) => {
  const didPass = passingThreshold <= scoreElement;

  return {
    originalIndex: index,
    score: scoreElement,
    status: didPass ? "Pass" : "Fail",
  };
});

console.log(processedScores);

// ! Take an array-like object (e.g., from function arguments or a custom one) and create an array where each element is an object containing the original value and its index.

function processMyArguments() {
  const argumentsDetails = Array.from(arguments, (argumentsElement, index) => {
    return {
      Argument_Index: index,
      Argument_value: argumentsElement,
      Argument_Type: typeof argumentsElement,
    };
  });
  console.log(argumentsDetails);
}

processMyArguments("asis", 3, true, [], {});
