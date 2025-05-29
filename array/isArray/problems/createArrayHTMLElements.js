/**

@Goal Given an array of tag names and an array of content strings (assume they are the same length), create an array of HTML strings. Each string should be like <tagName>content</tagName>. Use the index to pair them up.
Input:
tagNames = ["p", "h1", "span"]
contents = ["Hello", "Welcome", "Click me"]
Desired Output:
[
  "<p>Hello</p>",
  "<h1>Welcome</h1>",
  "<span>Click me</span>"
]
*/

function createArrayHTMLElements() {
  const tagNames = ["p", "h1", "span"];
  const contents = ["Hello", "Welcome", "Click me"];

  if (tagNames.length !== contents.length) {
    return "Input arrays must have the same length.";
  }

  const tagIndex = tagNames.length;

  return Array.from({ length: tagIndex }, (_, index) => {
    const tagName = tagNames[index];
    const content = contents[index];
    return `<${tagName}>${content}</${tagName}>`;
  });
}

console.log(createArrayHTMLElements());
