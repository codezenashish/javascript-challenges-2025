# JavaScript Practice Problems - Set 3

Welcome to your next set of JavaScript challenges! These problems are organized by topic to help you focus and grow. Practice them daily to improve your skills.

---

## 🔠 Strings

### Problem 1: Count Words Starting with a Vowel
**Description:** Write a function that counts how many words in a string start with a vowel.  
**Example:**
```javascript
countVowelWords("An elephant is outside") // returns 3
countVowelWords("JavaScript is awesome") // returns 2
```

### Problem 2: Convert to camelCase
**Description:** Convert a string with spaces or underscores to camelCase.  
**Example:**
```javascript
toCamelCase("hello world") // returns "helloWorld"
toCamelCase("user_name") // returns "userName"
```

### Problem 3: Truncate String
**Description:** Truncate a string and add "..." if it exceeds a given length.  
**Example:**
```javascript
truncate("Hello JavaScript", 8) // returns "Hello..."
truncate("Code", 10) // returns "Code"
```

### Problem 4: Most Frequent Character
**Description:** Find the character that appears most frequently in a string.  
**Example:**
```javascript
mostFrequentChar("javascript") // returns "a"
mostFrequentChar("aabbbbcc") // returns "b"
```

### Problem 5: Reverse Words in Sentence
**Description:** Reverse the order of words in a sentence without reversing the letters in each word.  
**Example:**
```javascript
reverseWords("JavaScript is awesome") // returns "awesome is JavaScript"
```

---

## 📦 Arrays

### Problem 6: Flatten Nested Array
**Description:** Flatten a nested array into a single-level array without using `.flat()`.  
**Example:**
```javascript
flatten([1, [2, [3, 4], 5]]) // returns [1, 2, 3, 4, 5]
```

### Problem 7: Rotate Array
**Description:** Rotate an array to the right by k positions.  
**Example:**
```javascript
rotateArray([1, 2, 3, 4, 5], 2) // returns [4, 5, 1, 2, 3]
```

### Problem 8: Intersection of Arrays
**Description:** Return the common elements of two arrays.  
**Example:**
```javascript
intersect([1, 2, 3], [2, 3, 4]) // returns [2, 3]
```

### Problem 9: Chunk Array
**Description:** Split an array into chunks of given size.  
**Example:**
```javascript
chunk([1, 2, 3, 4, 5], 2) // returns [[1, 2], [3, 4], [5]]
```

### Problem 10: Most Frequent Element
**Description:** Find the most frequently occurring element in an array.  
**Example:**
```javascript
mostFrequent([1, 1, 2, 3, 1]) // returns 1
```

---

## 📘 Objects

### Problem 11: Swap Object Keys and Values
**Description:** Return a new object with keys and values swapped.  
**Example:**
```javascript
swapKeysValues({a: 1, b: 2}) // returns {1: 'a', 2: 'b'}
```

### Problem 12: Deep Clone Object
**Description:** Create a deep copy of a nested object.  
**Example:**
```javascript
deepClone({a: {b: 1}}) // returns a separate deep-cloned object
```

### Problem 13: Filter Falsy Values
**Description:** Remove all properties with falsy values from an object.  
**Example:**
```javascript
cleanObject({a: 0, b: "hello", c: null}) // returns {b: "hello"}
```

---

## 🔄 Functions & Logic

### Problem 14: Custom Bind Function
**Description:** Create your own version of the `bind()` method.  
**Example:**
```javascript
// bindPolyfill(fn, context)
```

### Problem 15: Memoize Function
**Description:** Create a memoized version of a function.  
**Example:**
```javascript
const slowFn = (n) => { /* heavy computation */ }
const fastFn = memoize(slowFn)
```

### Problem 16: Debounce Function
**Description:** Implement debounce to limit function calls.  
**Example:**
```javascript
debounce(fn, delay)
```

---

## 🌐 Async / Promises

### Problem 17: Sleep Function
**Description:** Create a `sleep(ms)` function that delays execution.  
**Example:**
```javascript
await sleep(1000) // waits 1 second
```

### Problem 18: Retry Promise
**Description:** Retry a promise-returning function n times if it fails.  
**Example:**
```javascript
retry(apiCall, 3)
```

### Problem 19: Custom Promise.all
**Description:** Implement a function like `Promise.all`.  
**Example:**
```javascript
promiseAll([p1, p2, p3])
```

### Problem 20: Chain Async Calls
**Description:** Chain async operations with error handling.  
**Example:**
```javascript
fetchData().then(parse).then(display).catch(handleError)
```

---

Good luck! Try to solve one section at a time and keep practicing!
