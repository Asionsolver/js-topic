# js-topic

```javascript
const originalPrimitives = ["hello", false, { name: "ashis" }, 10];
const shallowCopiedPrimitives1 = Array.from(originalPrimitives);


// when i add some code and run this code :
shallowCopiedPrimitives1[2] = { name: "asion" };
console.log("line_20: Modified Shallow Copy 1:", shallowCopiedPrimitives1);
console.log("line_21: Original Primitives (Unaffected):", originalPrimitives);

shallowCopiedPrimitives1[2].name = "tinkle";
console.log("line_24: Modified Shallow Copy 1:", shallowCopiedPrimitives1);
console.log("line_25: Original Primitives (Unaffected):", originalPrimitives);

Output:
line_20: Modified Shallow Copy 1: [ 'hello', false, { name: 'asion' }, 10 ]
line_21: Original Primitives (Unaffected): [ 'hello', false, { name: 'ashis' }, 10 ]
line_24: Modified Shallow Copy 1: [ 'hello', false, { name: 'tinkle' }, 10 ]
line_25: Original Primitives (Unaffected): [ 'hello', false, { name: 'ashis' }, 10 ]

But when i comment out this tree line:
// shallowCopiedPrimitives1[2] = { name: "asion" };
// console.log("line_20: Modified Shallow Copy 1:", shallowCopiedPrimitives1);
// console.log("line_21: Original Primitives (Unaffected):", originalPrimitives);


// Then i run this three line of code:
shallowCopiedPrimitives1[2].name = "tinkle";
console.log("line_24: Modified Shallow Copy 1:", shallowCopiedPrimitives1);
console.log("line_25: Original Primitives (Unaffected):", originalPrimitives);

Output:
line_24: Modified Shallow Copy 1: [ 'hello', false, { name: 'tinkle' }, 10 ]
line_25: Original Primitives (affected): [ 'hello', false, { name: 'tinkle' }, 10 ]

```

# ❓ Why are these two outputs different?

## 🔁 The Setup

```javascript
const originalPrimitives = ["hello", false, { name: "ashis" }, 10];
const shallowCopiedPrimitives1 = Array.from(originalPrimitives);
```

> This creates a new array shallowCopiedPrimitives1 that is a shallow copy of originalPrimitives.

#### 📌 What is a Shallow Copy?

- A shallow copy copies the top-level elements.
- If the element is a primitive (string, boolean, number), it copies the value.
- If the element is a reference type (like an object), it copies the reference , not the object itself.

## ✅ Visual Representation After Copying

```javascript
originalPrimitives           shallowCopiedPrimitives1
       ↓                            ↓
[ "hello", false, { name: "ashis" }, 10 ]
                     ↑
                     |
                 Same Object
```

> So:

- `"hello"`→ copied as value
- `false` → copied as value
- `{ name: "ashis" }` → copied by reference
- `10` → copied as value

## 🔍 First Case (Uncommented)

```javascript
shallowCopiedPrimitives1[2] = { name: "asion" };
console.log("line_20: Modified Shallow Copy 1:", shallowCopiedPrimitives1);
console.log("line_21: Original Primitives (Unaffected):", originalPrimitives);
```

### 💡 What happens here?

Reassigning `index [2]` in the shallow copy to a new object : `{ name: "asion" }`. Now:

```javascript
originalPrimitives            shallowCopiedPrimitives1
       ↓                             ↓
[ "hello", false, { name: "ashis" }, 10 ]

                                      [ ..., { name: "asion" }, ... ]
```

> Next, do:

```javascript
shallowCopiedPrimitives1[2].name = "tinkle";
```

Now you're modifying the object in the shallow copy (`{ name: "asion" }` ➝ `{ name: "tinkle" }`).

But since this object is only referenced in the shallow copy , the original array remains untouched.

## ✅ Output:

```
line_20: Modified Shallow Copy 1: [ 'hello', false, { name: 'asion' }, 10 ]
line_21: Original Primitives (Unaffected): [ 'hello', false, { name: 'ashis' }, 10 ]
line_24: Modified Shallow Copy 1: [ 'hello', false, { name: 'tinkle' }, 10 ]
line_25: Original Primitives (Unaffected): [ 'hello', false, { name: 'ashis' }, 10 ]
```

## ⚠️ Second Case (Commented Out Reassignment)

```javascript
// shallowCopiedPrimitives1[2] = { name: "asion" };
// console.log("line_20: Modified Shallow Copy 1:", shallowCopiedPrimitives1);
// console.log("line_21: Original Primitives (Unaffected):", originalPrimitives);

shallowCopiedPrimitives1[2].name = "tinkle";
console.log("line_24: Modified Shallow Copy 1:", shallowCopiedPrimitives1);
console.log("line_25: Original Primitives (Unaffected):", originalPrimitives);
```

### 💡 What’s different here?

Since you didn’t reassign index [2], both arrays still share the same object at index [2].

> So when you do:

```javascript
shallowCopiedPrimitives1[2].name = "tinkle";
```

You're mutating the shared object .

That means both arrays will reflect this change because they both hold references to the same object.

## ✅ Visual After Mutation

```
originalPrimitives
       ↓
[ "hello", false, { name: "tinkle" }, 10 ]
                     ↑
                     ↓
shallowCopiedPrimitives1
```

Both arrays point to the same mutated object .

## ✅ Output:

```
line_24: Modified Shallow Copy 1: [ 'hello', false, { name: 'tinkle' }, 10 ]
line_25: Original Primitives (affected): [ 'hello', false, { name: 'tinkle' }, 10 ]
```

## 🧠 Summary: Why the Outputs Are Different

| Step | Action                                                     | Effect on Original?       | Reason                      |
| ---- | ---------------------------------------------------------- | ------------------------- | --------------------------- |
| 1    | shallowCopiedPrimitives1[2] = { name: &quot;asion&quot; }; | ❌ No effect              | New object assigned to copy |
| 2    | shallowCopiedPrimitives1[2].name = &quot;tinkle&quot;;     | ✅ Yes if no reassignment | Shared object modified      |

### 📷 Visual Recap

#### Case 1: With Reassignment

```
Original:     [ "hello", false, { name: "ashis" }, 10 ]
Copy:         [ "hello", false, { name: "asion" }, 10 ]
```

#### Case 2: Without Reassignment

```
Original:     [ "hello", false, { name: "ashis" }, 10 ]
Copy:         [ "hello", false, { name: "ashis" }, 10 ]
```

# ✅ Final Answer

### Why are the outputs different?

> Because in one case you assigned a new object to the shallow copy, breaking the reference to the original object. In the other case, you mutated the shared object , which affected both arrays since they pointed to the same object.
