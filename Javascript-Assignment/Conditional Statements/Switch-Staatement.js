// Question 1

let monthNumber=10;
switch(monthNumber){
    case 1:
    console.log("Number of days is 31");
    break;
    case 2:
        console.log("Number of days is 28");
        break;
    case 3:
        console.log("Number of days is 31");
        break;
    case 4:
        console.log("Number of days is 30");
        break;
    case 5:
        console.log("Number of days is 31");
        break;
    case 6:
        console.log("Number of days is 30");
        break;
    case 7:
        console.log("Number of days is 31");
        break;
    case 8:
        console.log("Number of days is 31");
        break;
    case 9:
        console.log("Number of days is 30");
        break;
    case 10:
        console.log("Number of days is 31");
        break;
    case 11:
        console.log("Number of days is 30");
        break;
    case 12:
        console.log("Number of days is 31");
        break;
    default:
        console.log("Enter a valid month");}

// Question 2
let ch = prompt("Enter a character:").toLowerCase();

switch (ch) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
        console.log("Vowel");
        break;

    default:
        console.log("Consonant");
}

// Question 3

let number=2;
switch(number){
    case 1:
    case 2:    
        console.log("Winter");
        break;
    case 3:
    case 4:
        console.log("Summer");
        break;
    default:
        console.log("Enter a valid number");
}

//Question 4

let marks=101;
switch(true){
    case (marks>=75 && marks<=100):
        console.log("Distinction");
        break;
    case (marks>=60 && marks<=74):
        console.log("1st class");
        break;
    case (marks>=50 && marks<=60):
        console.log("2nd class");
        break;
    case (marks>=35 && marks<=49):
        console.log("3rd class");
        break;
    case (marks<35 && marks>=0):
        console.log("Failed");
        break;
    default:
        console.log("No result");}

// Question 5  


// Question 6
let fruit = "mango";

switch (fruit) {
  case "apple":
    console.log("Apple is red");
  case "mango":
    console.log("Mango is yellow");
  case "banana":
    console.log("Banana is yellow");
  default:
    console.log("Unknown fruit");
} //output: apple is red , mango is yellow, banana is yellow, unknown fruit reason syntax is not correct break tag is not use so that why all will be print.


// Question 7

let value = "0";

switch (value) {
    case 0:
        console.log("Number zero");
        break;

    case "0":
        console.log("String zero");
        break;

    case false:
        console.log("Boolean false");
        break;

    case null:
        console.log("Null value");
        break;

    case undefined:
        console.log("Undefined value");
        break;

    default:
        console.log("Unknown value");
}


            
            
            
            
            
            
        
            
            
        
    
