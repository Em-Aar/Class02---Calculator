"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Command Line Calculator - without using Functions : Caters all the wrong inputs and offers '3' attempts to the user.
var promptSync = require("prompt-sync");
var prompt = promptSync();
var attempt_left = 3; //User has assigned maximum '3' attempts.
// While loop shall run until all the attempts are utilized.
while (attempt_left != 0) {
    console.log("\nPlease select the desired operation.\n    Press '1' for Addition (a+b)\n    Press '2' for Subtraction (a-b)\n    Press '3' for Multiplication (a*b)\n    Press '4' for Division (a/b)");
    var operation = prompt("Enter relevant operation number only: "); // To get the input from user regarding selection of operation.
    // if user enters correct data, the further inputs regarding first number and second number are asked.
    if (operation > 0 && operation < 5) {
        // This while loop shall run until all attempts for first number and second number inputs. 
        while (attempt_left != 0) {
            var firstNumber = prompt("Enter first Number (a): ");
            var secondNumber = prompt("Enter Second Number (b): ");
            var a = parseInt(firstNumber);
            var b = parseInt(secondNumber);
            if (Number.isNaN(a) || Number.isNaN(b)) {
                if (attempt_left == 1) {
                    console.log("Sorry! all attempts utilized");
                    break;
                }
                else {
                    attempt_left--;
                    console.log("The program expects numbers only! Try again");
                    console.log("Attemplts left: ", attempt_left);
                }
            }
            else {
                if (operation == '1') {
                    console.log("The result of ".concat(a, "+").concat(b, " is: "), a + b);
                    break;
                }
                else if (operation == '2') {
                    console.log("The result of ".concat(a, "-").concat(b, " is: "), a - b);
                    break;
                }
                else if (operation == '3') {
                    console.log("Multiplication of ".concat(a, "*").concat(b, " is: "), a * b);
                    break;
                }
                else if (operation == '4') {
                    console.log("Division of ".concat(a, "/").concat(b, " is: "), a / b);
                    break;
                }
            }
        }
        break;
    }
    else {
        if (attempt_left == 1) {
            console.log("Sorry! all attempts utilized");
            break;
        }
        else {
            attempt_left--;
            console.log("Wrong operation selected. Try again!");
            console.log("Attempts left: ", attempt_left);
        }
    }
}
