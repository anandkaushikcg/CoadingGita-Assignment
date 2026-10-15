// Q11) Predict the output:

```js
console.log("5" + 3 + 2); // Output: 532
console.log(5 + 3 + "2"); // Output: 85
console.log("5" - 3 + 2); // Output: 4
console.log(5 - "3" + "2"); // Output: 22
```

// Q12) Predict the output:

```js
console.log(true + true); // Output: 2
console.log(true + false); // Output: 1
console.log(true + "false"); // Output: truefalse
console.log(false + "true"); // Output: falsetrue
```

// Q13) Predict the output:

```js
console.log(null + 5); // Output: 5
console.log(undefined + 5); // Output: NaN
console.log(null + "5"); // Output: null5
console.log(undefined + "5"); // Output: undefined5
```

// Q14) Predict the output:

```js
console.log([] + []); // Output: ""
console.log([] + {}); // Output: [object Object]
console.log({} + []); // Output: [object Object]
console.log({} + {}); // Output: [object Object][object Object]
```

// Q15) Predict the output:

```js
let a = "10";
let b = 5;
let c = a + b;
let d = a - b;
let e = +a + b;
console.log(c, typeof c); // Output: 105 string
console.log(d, typeof d); // Output: 5 number
console.log(e, typeof e); // Output: 15 number
```

// Q16) Predict the output:

```js
console.log(!!"Hello"); // Output: true
console.log(!!""); // Output: false
console.log(!!0); // Output: false
console.log(!!1); // Output: true
console.log(!!null); // Output: false
console.log(!!undefined); // Output: false
```

// Q17) Predict the output:

```js
console.log(Number("")); // Output: 0
console.log(Number(" ")); // Output: 0
console.log(Number("0")); // Output: 0
console.log(Number("  25  ")); // Output: 25
console.log(Number("25px")); // Output: NaN
```

// Q18) Predict the output:

```js
let val1 = "5";
let val2 = 2;
console.log(val1 + val2); // Output: 52
console.log(+val1 + val2); // Output: 7
console.log(val1 - val2); // Output: 3
console.log(val1 * val2); // Output: 10
console.log(val1 / val2); // Output: 2.5
```