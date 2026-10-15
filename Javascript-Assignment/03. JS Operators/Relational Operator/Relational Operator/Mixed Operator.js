// Q1) Write expressions to check:

//    a) Whether age `18` is greater than or equal to voting age `18`.


    let age = 18
    let votingAge = 18
    console.log(age >= votingAge)


//    b) Whether temperature `32` is less than `35`.

  
    let temp1 = 32;
    let temp2 = 35;
    console.log(temp1<temp2)
  

//    c) Whether score `90` is greater than `85`.

  
    let score1 = 90
    let score2 = 85
    console.log(score1 > score2)


// Q2) Predict the outputs:


console.log(10 > 5 && 5 < 10); // Output: true
console.log("10" >= 10); // Output: true
console.log(null <= undefined); // Output: false
console.log("5" < "10" && 5 > 2); // Output: false


// Q3) A product costs ₹499. A customer has ₹500. Write conditions using `>=` and `<` to decide if the customer can buy it and if any change will be left.


let price = 499
let budget = 500
console.log("Can buy:", budget >= price)
console.log("Change left:", price < budget)


// Q4) Explain why `"10" > "2"` is `false` but `10 > 2` is `true`.

// Answer: Because in the 1st condition both the operands are string so JS will compare only the 1st characters of both the operands(strings), but in the 2nd case both are number so the whole numbers will be compared by JS.