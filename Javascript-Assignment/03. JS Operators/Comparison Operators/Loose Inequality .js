// Check whether "18" != 18 returns true or false.
console.log("18" != 18); // false

// A password is stored as "1234". User enters 1234 (number). Will != return true?
console.log("1234" != 1234); // false

// Predict the output
console.log(5 != "5");//False
console.log(0 != false);//False

console.log("1234" != 1234); // false

// Predict the output
console.log(null != undefined); // false
console.log("" != 0);           // false

//  What does NaN != NaN return? Explain.
console.log(NaN != NaN); // true
// NaN is not equal to itself, so the inequality operator returns true.
