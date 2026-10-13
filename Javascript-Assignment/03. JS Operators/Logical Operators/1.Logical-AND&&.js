// Stored username is "admin" and password is 1234. Check if both are valid using && and print the result.

let username="admin"
let password=1234
let enterUserName="admin"
let enterPassword=1234
console.log("Is usename and password are correct=",username==enterUserName&&password==enterPassword);

// A user is logged in (isLoggedIn = true) and has permission (hasPermission = true). Check if they can access a page using &&.

let isLoggedIn=true;
let hasPermission=true;
let pageAccess=isLoggedIn&&hasPermission;
console.log("They can Access the page=",pageAccess);

// A product is in stock (inStock = true) and its price is less than ₹1000 (price = 800). Check if it can be bought using &&.

let inStock=true;
let price= 1000;
let budght=800;
let theyCanBought=inStock&&price>=budght;
console.log("They can buy=",theyCanBought);

// A student has marks 75 and attendance 80. Passing requires marks greater than 65 and attendance greater than 70. Check using &&.

let studentAttendence=80;
let attendanceRequired=65;
let studentMark=75;
let passingMark=65;
let studentPassed=attendanceRequired<=studentAttendence&&passingMark<=studentMark;
console.log("Is student passed=",studentPassed);

// Two conditions: isWeekend = true and isHoliday = false. A party happens only if both are true. Check using &&.

let isHoliday=false;
let isWeekend=true;
let partyHappened=isHoliday&&isWeekend
console.log("Party will happened=",partyHappened);

// Additional Questions (Logical AND &&)

// let a = 0;
// let b = 10;
// let result = a && b;
// console.log(result);// output==0

// Predict the output:

// let x = 5;
// let y = 10;
// let result = (x > 3 && y) || 0;
// console.log(result);// 10

// let p = "Hello";
// let q = "";
// let r = "World";
// let result = p && q && r;
// console.log(result);// output==0

let val = 5;
let condition = val && (val = 0);
console.log(condition);
console.log(val);//output==0

let x = 10;
let y = 20;
let result = (x && y) && (x > y);
console.log(result);// output== false






