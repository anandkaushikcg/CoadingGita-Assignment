// # F] Ternary Operator

// Q1) Write a ternary operator to check whether a given number is divisible by 7. If yes, return "Divisible by 7", otherwise "Not Divisible by 7".

// ```js
// let num = 43;
// let result = num % 7 == 0 ? "Divisible by 7" : "Not Divisible by 7"
// console.log(result)
// ```

// Q2) Using ternary operator, check if the temperature is greater than or equal to 30. Return "Hot Day" or "Pleasant Day".

// ```js
// let temp = 32;
// let result = temp >= 30 ? "Hot Day" : "Pleasant Day"
// console.log(result)
// ```

// Q3) Write a ternary expression that checks if a string is empty. Return "Empty String" if it is empty, otherwise "String has content".

// ```js
// let string = "";
// let result = string == "" ? "Empty String" : "String has content"
// console.log(result)
// ```

// Q4) Using nested ternary, check a person’s age and return:

// - "Child" (age < 13)
// - "Teenager" (13–19)
// - "Adult" (20 and above)

// ```js
// let age = 34;
// let result = age<13&&age>=0 ? "Child" : age<=19 ? "Teenager" : "Adult"
// console.log(result)
// ```

// Q5) Write a nested ternary to find the greater of three numbers (a, b, c) without using Math.max.

// ```js
// let a = 34;
// let b = 45;
// let c = 36;
// let result = a>b&&a>c ? "a is greatest" : b>a&&b>c ? "b is greatest" : "c is greatest"
// console.log(result)
// ```

// Q6) Create a nested ternary that classifies a student’s marks as:

// - "Distinction" (≥ 75)
// - "First Class" (60–74)
// - "Second Class" (50–59)
// - "Pass" (35–49)
// - "Fail" (< 35)

// ```js
// let marks = 94;
// let result = marks>=75&&marks<=100 ? "Distinction" : marks>=60 ? "First Class" : marks>=50 ? "Second Class" : marks >= 35 ? "Pass" : "Fail"
// console.log(result)
// ```

// Q7) Write a single nested ternary expression that returns one of the following based on a number:
// "Positive Even", "Positive Odd", "Negative Even", "Negative Odd", or "Zero".

// ```js
// let num = -5;
// let result = num>=0&&num%2==0 ? "Positive Even" : num>=0&&num%2==1 ? "Positive Odd" : num<0&&num%2==0 ? "Negative Even" : "Negative Odd"
// console.log(result)
// ```

// Q8) Using only nested ternary operators, implement the full leap year logic
// (divisible by 4 and (not divisible by 100 or divisible by 400)) and return "Leap Year" or "Not a Leap Year".

// ```js
// let year = 1900;
// let result = year%4===0 ? (year%100!==0 ? "Leap Year" : year%400===0 ? "Leap Year" : "Not a Leap Year") : "Not a Leap Year"
// console.log(result)
// ```

// Q9) Convert the following decision tree into one single nested ternary expression:

// ```md
// if (role === "admin") {
//   if (action === "delete") → "Admin Delete"
//   else if (action === "edit") → "Admin Edit"
//   else → "Admin Other"
// } else if (role === "user") {
//   if (action === "view") → "User View"
//   else → "User Restricted"
// } else {
//   → "Invalid Role"
// }
// ```

// ```js
// let role = "admin";
// let action = "view"
// let result = role==="admin" ? (action==="delete" ? "Admin delete" : action==="edit" ? "Admin Edit" : "Admin Other") : role==="user" ? (action==="view" ? "User view" : "User Restricted") : "Invalid role"
// console.log(result)
// ```

// Q10) Write a complex nested ternary that calculates discount and final amount based on these rules:

// - Cart total ≥ 5000 → 20% discount
// - Cart total ≥ 2000 → 10% discount
// - Cart total ≥ 1000 → 5% discount
// - Otherwise → 0% discount
// - Return both the discount percentage and the final payable amount in a single expression (you may return an object or a formatted string).

// ```js
// let total = 5800;
// let result = total>=5000 ? {discount: "20%" , discountAmount: total*20/100, finalAmount: total-(total*20/100)} : total>=2000 ? {discount: "10%", discountAmount: total*10/100, finalAmount: total-total*10/100} : total>=1000 ? {discount: "5%", discountAmount: total*5/100, finalAmount: total-total*5/100} : "No discount"
// console.log(result)
// ```