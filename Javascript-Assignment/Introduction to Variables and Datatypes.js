// Part A
// 1. Personal Information

const name=  "Anand";
let age = 18;
const city = "Ahmedabad";

console.log(name);
console.log(age);
console.log(city);

// 2. Change the Score


let score = 50;

score = 80;

console.log(score);

// 3. Constant Value

const PI = 3.14;

console.log(PI);

// 4. Uninitialized Variables

var num1;
let num2;

console.log(num1);
console.log(num2);

num1 = 10;
num2 = 20;

console.log(num1);
console.log(num2);

// Part B
// 5. Choose the Correct Keyword

const studentName = "Anand";
let marks = 80;
const schoolName = "ABC School";

marks = 90;

console.log(studentName);
console.log(marks);
console.log(schoolName);

// 6. Understand Scope

if (true) {
    var x = 10;
    let y = 20;
    const z = 30;
}

console.log(x);
console.log(y);
console.log(z);

// 7. Test Re-declaration
// Using var

var user = "Anand";
var user = "Rahul";

console.log(user);

let user = "Anand";
let user = "Rahul";

console.log(user);


// 8. Test Re-assignment

var a = 10;
let b = 20;
const c = 30;

a = 100;
b = 200;
c = 300;

console.log(a);
console.log(b);
console.log(c);



//Question 9
var x = 10;

if (true) {
    var x = 20;
    let y = 30;
    const z = 40;
}

console.log(x); // Output: 20
console.log(y); // Output: Error
console.log(z); // Output: Error

//let and const are block-scoped therefore they can't be accessed outside their block


//Question 10
const name = "Anand";

var age = 20;
var age = 25;

if (true) {
    var city = "Delhi";
    var country = "India";
}

console.log(country);

let score = 50;
score = 80;


//Part d

//Question 11
console.log(a); // Output: 10
console.log(b); // ReferenceError: Cannot access 'b' before initialization
console.log(c); // ReferenceError: Cannot access 'c' before initialization
var a = 10;
let b = 20;
const c = 30;
//var is hoisted and initialized as undefined which allows it to be accessed before declaration
//let and const are hoisted but remain uninitialized in the Temporal Dead Zone (TDZ), throwing a ReferenceError if accessed before declaration.

//Question 12
console.log(x);
console.log(y);
console.log(z);

var x = "Hello";
var y = "World";
var z = "!";

console.log(x + " " + y + z);


// Part e

// Question 1
 let whole_number = 1;
 console.log(whole_number);
 console.log(typeof(whole_number));
 let decimal_number = 2.5;
 console.log(decimal_number);
 console.log(typeof(decimal_number));
 let text = "Hello World!";
 console.log(text);
 console.log(typeof(text));
 let bool_value = true;
 console.log(bool_value);
 console.log(typeof(bool_value));

// Question 2
 let a;
 let b = null;
 console.log(a);
 console.log(typeof(a));
 console.log(b);
 console.log(typeof(b));
// undefined means a variable that is declared but not assigned a value
// null means a variable that is intentionally set no value by the developer

// Question 3
 let pos_inf = Infinity;
 console.log(pos_inf);
 console.log(typeof(pos_inf));
 let neg_inf = -Infinity;
 console.log(neg_inf);
 console.log(typeof(neg_inf));
 let not_a_number = NaN;
 console.log(not_a_number);
 console.log(typeof(not_a_number));
 let large_number_scientific = 2.5e3;
 console.log(large_number_scientific);
 console.log(typeof(large_number_scientific));
 let number_readable = 1_000_000;
 console.log(number_readable);
 console.log(typeof(number_readable));

// Question 4
 let string1 = 'Hello';
 let string2 = "World";
 let string3 = `Hello ${string2}`;
 console.log(string1);
 console.log(string2);
console.log(string3);


// Part f

// Question 5
 let uniqueId = Symbol('id');
 let uniqueName = Symbol('id');
 console.log(Symbol('id') === Symbol('id')); // Output: false (Every Symbol creates a unique value)
 const studentData = {
   [uniqueId]: 123,
   [uniqueName]: "Abhijeet"
 };
 console.log(studentData[uniqueId]);
 console.log(studentData[uniqueName]);

// Question 6
 let a = 9007199254740991;
 console.log(a+1); // Output: 9007199254740992
 console.log(a+2); // Output: 9007199254740992
 console.log(a+3); // Output: 9007199254740994
 let b = 9007199254740991n;
 console.log(b+1n); // Output: 9007199254740992n
 console.log(b+2n); // Output: 9007199254740993n
 console.log(b+3n); // Output: 9007199254740994n
// BigInt handles very large numbers and doesn't lose precision whereas normal number loses precision

// Question 7
 let unique = Symbol("unique"); // Symbol
 let large_num = 123n; // BigInt
 let only_declared; // undefined
 let empty = null; // null


// Part g

// Question 8
let a;
let b = null;
let c = 42;
let d = "Hello";
let e = true;
let f = Symbol("key");
let g = 123n;

 console.log(typeof a, a); // Output: undefined undefined
 console.log(typeof b, b); // Output: object null
 console.log(typeof c, c); // Output: number 42
 console.log(typeof d, d); // Output: string Hello
 console.log(typeof e, e); // Output: boolean true
 console.log(typeof f, f); // Output: symbol Symbol(key)
 console.log(typeof g, g); // Output: bigint 123n

// Question 9
let num = 10;
let text = "Hello";
let flag = true;
let empty;
let nothing = null;
let unique = Symbol("id");
let big = 9007199254740991n;
console.log(num, text, flag, empty, nothing, unique, big);

// Question 10
// a) Primitive data types can only hold a single value whereas Non-Primitive data types can hold multiple values.
// b) Numbers, Strings, Booleans, Undefined, Null, Symbol, and BigInt are called Primitive because they are the fundamental and basic data types.
// c) Object is an example of a Non-Primitive data type. It is considered Non-Primitive because it can hold hold multiple values and is built using primitive data types.


 


