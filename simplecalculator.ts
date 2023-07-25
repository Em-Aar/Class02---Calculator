// This portion is used to import prompt function, to get input from user.
 
const prompt2 = require('prompt-sync')();

//This portion will be printed as is.. to guide the user for selection
console.log('Welcome to my Command Line Calculator');
console.log("Please select the operation to perform. ('+' for Addition), ('-' for Addition), ('*' for Multiplication), ('/' for Division) ");

// This portion will take input from user. 1- Operation, 2- First Number, 3- Second Number
let operation = prompt2("Enter the operation sign: ");   //This will ask user to select the operation from above. and store in operation var.
let first_Number = prompt2 ('Enter first number: ');     //This will ask user to enter first number and will store it in firstNumber.
let second_Number = prompt2 ('Enter second number: ');    // This will ask user to enter second number and will store it in second Number.

//We are converting numbers received in 'string' type to 'number' type.
let a = parseInt (first_Number);  // The input received through prompt is in string type. we've to convert it to number. 
let b = parseInt (second_Number); // 'parseInt' function is used to convert string into number.

// Now we'll use If-else chain to do the calculator operation. 

if (operation == '+') {
    let addition = a + b;
    console.log(`The addition of ${a} and ${b} is : ${addition}`);
} else if (operation == '-') {
    let subtraction = a - b;
    console.log(`The subtraction of ${a} and ${b} is : ${subtraction}`);
} else if (operation == '*') {
    let multiplication = a*b;
    console.log(`The multiplication of ${a} and ${b} is : ${multiplication}`);
} else if (operation == '/') {
    let division = a/b;
    console.log(`The division of ${a} and ${b} is : ${division}`);
} else {
    console.log("Wrong input given, please try again with correct input");
}

