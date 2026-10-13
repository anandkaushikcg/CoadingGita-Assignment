// A user can login with either a correct password (passwordCorrect = true) or a valid OTP (otpValid = false). Check if login is allowed using ||.

let passwordCorrect=true;
let otpValid=false;
let canLogin=passwordCorrect||otpValid;
console.log("Login allowed=",canLogin);

// A discount applies if the user is a member (isMember = false) or has a coupon (hasCoupon = true). Check using ||.

let isMember=false;
let hasCoupon=true;
let discount=isMember||hasCoupon;
console.log("A discount Appiled=",discount);

// Entry is allowed if age is above 18 (age = 16) or height is above 150 cm (height = 155). Check using ||.

let allowedAge=18;
let currentAge=16;
let heightRequired=150;
let currenHeight=155
let Check=allowedAge<=currenHeight||heightRequired<=currenHeight;
console.log("Are they allowed=",Check);

// A form is valid if either email is given (emailGiven = true) or phone is given (phoneGiven = false). Check using ||.

let emailGiven=true;
let phoneGiven=false;
let valid=emailGiven||phoneGiven
console.log("Form is valid=",valid);

// A game level opens if score is above 1000 (score = 900) or time bonus is collected (timeBonus = true). Check using ||.

let scoreRequired=1000;
let currentScore=900;
let timeBouns=true;
let levelOpens=scoreRequired>=currentScore||timeBouns;
console.log("Level will open=",levelOpens);

// Additional Questions (Logical OR ||)

// let a = 0;
// let b = false;
// let c = "";
// let d = null;
// let e = 42;
// let result = a || b || c || d || e;
// console.log(result);  // output== 42


// let x = "Hello" || 0;
// let y = 0 || "Hi";
// console.log(x, y); // output==hello,hii

let a = 10;
let b = 20;
let result = (a < 5) || (b > 15);
console.log(result);//output== true

let val = 5;
let condition = val || (val = 0);
console.log(condition);// output == 5
console.log(val);// output == 5

let x = "" || 0 || false || null || undefined || "OK";
console.log(x);// output==ok

