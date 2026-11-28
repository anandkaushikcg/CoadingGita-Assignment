
// Q6) Predict the output:


var game = "Cricket";
function play() {
    console.log("I like " + game);
}
play(); // I like Cricket
console.log(game); // Cricket


// Q7) What will be the output?

var language = "English";
function showLanguage() {
    console.log(language);
}
function changeLanguage() {
    language = "Gujarati";
}
showLanguage(); // English
changeLanguage();
showLanguage(); // Gujarati
console.log(language); // Gujarati


// Explain why the output changes.

// Explanation: When we called function `changeLanguage()` it reassigned the variable `language` to Gujarati so the output changes when we call `showLanguage()` the second time.

// Q8) Find the error, if any:


function displayMarks() {
    console.log(marks);
}
var marks = 75;
displayMarks(); // 75


// Will this code produce an error? Explain your answer.

// Explanation: This code will not result in error due to the concept of hoisting in JS.

// Q9) Predict the output:


var color = "Red";
function showColor() {
    var message = "Favorite color: ";
    console.log(message + color);
}
showColor(); // Favorite color: Red
console.log(color); // Red
console.log(message); // RefErr


// Which statement causes an error, and why?

// Answer: `console.log(message)` causes an error as `message` was declared inside function so it can't be accessed outside it.

// Q10) Write a program that declares a global variable named `"school"` with the value `"Sunrise School"`.

// Create two functions:

// - `"showSchool()"` should print the school name.
// - `"updateSchool()"` should change the global variable to `"Green Valley School"`.

// Call both functions in an appropriate order and print the final value of `"school"`.


var school = "Sunrise School"
function showSchool(){
    console.log(school)
}
function updateSchool(){
    school = "Green Valley School"
}
showSchool()
updateSchool()
showSchool()
