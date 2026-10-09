// A bus has 80 seats, and 53 seats are occupied. Find the number of empty seats.

let totalSeats=80;
let occupiedSeats=53;
let emptySeats=totalSeats-occupiedSeats;
console.log("Empty Seats=", emptySeats);

// A student has 500 marks and loses 35 marks due to incorrect answers. Find the final marks.

let totalMarks=500;
let marksLoses=35;
let finalMarks=totalMarks-marksLoses;
console.log("Final Marks=",finalMarks);

// A warehouse has 2,500 boxes and sends 875 boxes to a store. Find the remaining boxes.

let totalBoxes=2500;
let sendsBoxes=875;
let remainingBoxes=totalBoxes-sendsBoxes;
console.log("Remaining Boxes=",remainingBoxes);

// Predict the output:

let a = "10";
let b = 3;
let result = a - b;
console.log(result);//output=7

// Predict the output:

let x = "20";
let y = "5";
let resul = x - y;
console.log(resul);//output=15

// What is the output of 100 - 37? 
63

// A tank has 500 litres of water. After using 175 litres, how much water is left?

let waterInTank=500;
let usingWater=175;
let waterLeft=waterInTank-usingWater;
console.log("Amount Of Water left");

// What is the result of "50" - 20 and "50" - "20"? Explain any difference.

console.log("50"-20);//30
console.log("50"-"20");//30
//- operator automatically converts strings into numbers.

// A shopkeeper had 240 apples. He sold 95 in the morning and 67 in the evening. Write expressions to find how many apples are left.

let apples = 240;

let morning = 95;
let evening = 67;

let left = apples - morning - evening;

console.log("Apples left:", left);

// Predict and explain the outputs:
console.log("100" - 50); //50 - operator automatically converts strings into numbers
console.log("abc" - 10); //Nan "abc" cannot be converted into a number.
console.log(10 - "5" - "2");//3 - operator automatically converts strings into numbers
console.log("10" - "5" - "2");//3 - operator automatically converts strings into numbers



