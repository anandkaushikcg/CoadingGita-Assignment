// A teacher has 53 students and forms groups of 5. Find the number of students left over.

let numberOfStudent=53
let groupsFroms=5
let studentLeftOver=numberOfStudent%groupsFroms
console.log("Number of Student Left Over=",studentLeftOver);

// A shop has 128 candies and packs 10 candies in each box. Find the number of candies left unpacked.

let numberOfCandies=128;
let cadinesInEachBox=10
let candiesLeftUnpacked=numberOfCandies%cadinesInEachBox
console.log("Number of Candies Left=",candiesLeftUnpacked);

// A factory produces 237 toys and packs them in boxes of 6. Find how many toys are left after packing full boxes.

let toyProduces=237;
let numberOfBoxes=6;
let toysLeftAfterPacking=toyProduces%numberOfBoxes;
console.log("Toys Left After Packing=",toysLeftAfterPacking);

// A bus can carry 40 passengers. If 185 people are waiting, find how many people will be left after filling as many full buses as possible.

let numberOfPassengerCarry=40;
let peopleWaiting=185;
let numberOfPeopleLeft=peopleWaiting%numberOfPassengerCarry;
console.log("Number of People Left=",numberOfPeopleLeft);

// Predict the output:

let a = 10;
let b = 0;
let result = a % b;
console.log(result);//result Infinity

// What is the output of 29 % 5?
4

// There are 23 chocolates to be packed in boxes of 4. How many chocolates will be left over?

let numberOfChocolates=23;
let packedInBoxes=4;
let chocolatesLeft=numberOfChocolates%packedInBoxes;
console.log("Chocolates Left=",chocolatesLeft);

// What is the result of 0 % 7 and 15 % 0? Explain.

//Result will be Inifinty and the reason is bcz of zero 

// A number of pages (47) needs to be printed on sheets that hold 6 pages each. How many full sheets are needed and how many pages will be left over? Write expressions using % and /.

let numberOfPages=47;
let sheetsHoldNumberOfPages=6;
let numberOfSheetsNeeded=Math.floor(numberOfPages/sheetsHoldNumberOfPages);
let pagesWillLeft=numberOfPages/sheetsHoldNumberOfPages;
console.log("Sheet Needed=",numberOfSheetsNeeded);
console.log("Pages Left=",pagesWillLeft);

// Predict and explain the outputs (especially the signs)

console.log(17 % 5);//2 remainder will be 2
console.log(-17 % 5);// -2 remainder will be -2
console.log(17 % -5);// -2
console.log(-17 % -5);//2
console.log(10 % 0);//infinity
