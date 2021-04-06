var readlineSync = require('readline-sync');
var firstNumber = readlineSync.questionInt("Please enter your first number: ");
var secondNumber = readlineSync.questionInt("Please enter your second number: ");
var enteredOperation = readlineSync.question(" (add, sub, mul, div): ");

function addTwoNumbers(number1, number2) {
    return number1 + number2;
}

function subTwoNumbers(number1, number2) {
    return number1 - number2;
}

function mulTwoNumbers(number1, number2) {
    return number1 * number2;
}

function divTwoNumbers(number1, number2) {
    return number1 / number2;
}

function calculator(firstNumber, secondNumber, enteredOperation) {
    if (enteredOperation == "add") {
        console.log("Addition of two numbers: " + addTwoNumbers(firstNumber, secondNumber));
    }
    else if (enteredOperation == "sub") {
        console.log("Subtraction of two numbers: " + subTwoNumbers(firstNumber, secondNumber));
    }
    else if (enteredOperation == "mul") {
        console.log("Multipication of two numbers: " + mulTwoNumbers(firstNumber, secondNumber));
    }
    else if (enteredOperation == "div") {
        console.log("Division of two numbers: " + divTwoNumbers(firstNumber, secondNumber));
    }
    else {
        console.log("Please try again");
    }
}

calculator(firstNumber, secondNumber, enteredOperation);