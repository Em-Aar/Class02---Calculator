"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// This portion is used to import prompt function, to get input from user.
var promptSync = require("prompt-sync"); // We are importing all (*) options from 'promt-sync' library and naming it promptSync
var prompt = promptSync(); // Creating instance and assingin it to prompt constant. 
//This portion will be printed as is.. to guide the user for selection
console.log('Welcome to my Command Line Calculator');
console.log("Please select the operation to perform. ('+' for Addition), ('-' for Addition), ('*' for Multiplication), ('/' for Division) ");
// This portion will take input from user. 1- Operation, 2- First Number, 3- Second Number
var operation = prompt("Enter the operation sign: "); //This will ask user to select the operation from above. and store in operation var.
var firstNumber = prompt('Enter first number: '); //This will ask user to enter first number and will store it in firstNumber.
var secondNumber = prompt('Enter second number: '); // This will ask user to enter second number and will store it in second Number.
//We are converting numbers received in 'string' type to 'number' type.
var a = parseInt(firstNumber); // The input received through prompt is in string type. we've to convert it to number. 
var b = parseInt(secondNumber); // 'parseInt' function is used to convert string into number.
// Now we'll use If-else chain to do the calculator operation. 
if (operation == '+') {
    var addition = a + b;
    console.log("The addition of ".concat(a, " and ").concat(b, " is : ").concat(addition));
}
else if (operation == '-') {
    var subtraction = a - b;
    console.log("The subtraction of ".concat(a, " and ").concat(b, " is : ").concat(subtraction));
}
else if (operation == '*') {
    var multiplication = a * b;
    console.log("The multiplication of ".concat(a, " and ").concat(b, " is : ").concat(multiplication));
}
else if (operation == '/') {
    var division = a / b;
    console.log("The division of ".concat(a, " and ").concat(b, " is : ").concat(division));
}
else {
    console.log("Wrong input given, please try again with correct input");
}
