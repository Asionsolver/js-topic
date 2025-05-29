/**
@Goal A function receives a variable number of arguments. Create an array where each element is an object. If an argument is a number, the object should be { type: 'number', value: N, isEven: true/false }. If it's a string, { type: 'string', value: S, length: L }. Otherwise, { type: 'other', value: V }. Include the original index.

Input: Function arguments, e.g., myFunction(10, "hi", true, 7)

Desired Output (for the example input):

[
  { index: 0, type: 'number', value: 10, isEven: true },
  { index: 1, type: 'string', value: 'hi', length: 2 },
  { index: 2, type: 'other', value: true },
  { index: 3, type: 'number', value: 7, isEven: false }
]
*/

function processArgument() {
  return Array.from(arguments, (argument, index) => {
    const baseInfo = { Argument_Index: index, Argument_Value: argument };

    if (typeof argument === "string") {
      return {
        ...baseInfo,
        Argument_Type: typeof argument,
        Argument_Length: argument.length,
      };
    } else if (typeof argument === "number") {
      return {
        ...baseInfo,
        Argument_Type: typeof argument,
        isEven: argument % 2 === 0 ? true : false,
      };
    } else if (typeof argument === "boolean") {
      return {
        ...baseInfo,
        Argument_Type: typeof argument,
      };
    } else {
      return {
        ...baseInfo,
        Argument_Type: typeof argument,
      };
    }
  });
}
console.log(processArgument(11, "hi", true, 7, { name: "ashis" }));
