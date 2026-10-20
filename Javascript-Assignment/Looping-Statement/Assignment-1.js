// # For Loop Assignment

// Q1) A teacher wants students to practice counting. Write a program to print all numbers from 1 to 15.

// **Sample Output:**

// ```md
// 1
// 2
// 3
// 4
// 5
// ...
// 15
// ```

// ```js
// for (let i=0; i<15; i++){
//     console.log(i+1)
// }
// ```

// Q2) A school has lockers numbered with even numbers for a special activity. Write a program to print all even numbers from 2 to 40.

// Sample Output:

// ```md
// 2
// 4
// 6
// 8
// 10
// ...
// 40
// ```

// ```js
// for (let i=0; i<40; i+=2){
//     console.log(i+2)
// }
// ```

// Q3) A fitness coach assigns odd numbers to participants for a special activity. Write a program to print all odd numbers from 1 to 35.

// Sample Output:

// ```md
// 1
// 3
// 5
// 7
// 9
// ...
// 35
// ```

// ```js
// for (let i=0; i<35; i+=2){
//     console.log(i+1)
// }
// ```

// Q4) You save ₹10 on Day 1, ₹20 on Day 2, ₹30 on Day 3, and continue increasing your daily savings by ₹10. Write a program to calculate your total savings after 10 days.

// Sample Output:

// ```md
// Total savings after 10 days: ₹550
// ```

// ```js
// let total=0;
// let saving=10;
// for (let day=0; day<10; day++,saving+=10){
//     total=total+saving
// }
// console.log(total)
// ```

// Q5) You want to practice multiplication. Write a program to print the multiplication table of 12, from 12 × 1 to 12 × 10.

// Sample Output:

// ```md
// 12 x 1 = 12
// 12 x 2 = 24
// 12 x 3 = 36
// 12 x 4 = 48
// 12 x 5 = 60
// 12 x 6 = 72
// 12 x 7 = 84
// 12 x 8 = 96
// 12 x 9 = 108
// 12 x 10 = 120
// ```

// ```js
// for (let i=1; i<=10; i++){
//     console.log(12,"x",i,"=",12*i)
// }
// ```