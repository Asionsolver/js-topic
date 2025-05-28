# ✅ 1. structuredClone() (✅ Best & Easiest)

```javascript
const deepCopy = structuredClone(original);
```

### ✔️ Pros:

- Native and efficient.

- Handles nested structures.

- Supports objects, arrays, Date, Map, Set, RegExp, etc.

### ❌ Cons:

- Not supported in very old browsers (e.g., IE).

- ✅ Best choice for modern apps.

# ✅ 2. JSON.parse(JSON.stringify(obj))

```javascript
const deepCopy = JSON.parse(JSON.stringify(original));
```

### ✔️ Pros:

W- idely supported.

- Works for most data.

### ❌ Cons:

- Loses functions, undefined, Date, Map, Set, RegExp, circular references, etc.

- ⚠️ Use only for simple data (like JSON-safe structures).

# ✅ 3. Recursive Custom Function

```javascript
function deepClone(obj) {
  if (obj === null || typeof obj !== "object") return obj;
  if (Array.isArray(obj)) return obj.map(deepClone);

  const copy = {};
  for (let key in obj) {
    copy[key] = deepClone(obj[key]);
  }
  return copy;
}

const deepCopy = deepClone(original);
```

### ✔️ Pros:

- Full control.

- Can be extended to support special types.

### ❌ Cons:

- Doesn’t handle circular references by default.

- Doesn’t copy class instances, Date, Map, Set, etc.

- ✅ Good for learning or extending custom logic.
