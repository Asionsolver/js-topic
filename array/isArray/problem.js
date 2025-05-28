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
