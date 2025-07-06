// File: calculator/scripts/main.js
// This file contains the JavaScript code for the calculator functionality

let firstNumber = null; // Stores the first number
let currentOperator = null; // Stores the operator (+, -, ×, ÷)
let waitingForSecondNumber = false; // Flag: are we waiting for second number?

// Get the display element from the HTML
// This will be used to show the numbers and results
const display = document.getElementById("display");

// Function to set the operation (addition, subtraction, etc.)
const setOperation = (operator) => {
  // Step 1: Get current number from display
  let currentNumber = parseFloat(display.value);
  // Step 2: Store it as firstNumber
  firstNumber = currentNumber;
  // Step 3: Store the operator
  currentOperator = operator; // Store the operator for later use
  // Step 4: Set flag that we are waiting for second number
  waitingForSecondNumber = true;
};

// Function to add a number to the display
const addNumber = (num) => {
  // If display is 0, replace it with the new number
  // Otherwise, append the new number to the existing display value
  if (waitingForSecondNumber) {
    // If we are waiting for the second number, reset the display
    display.value = num;
    waitingForSecondNumber = false; // Reset the flag
  } else if (display.value === "0") {
    display.value = num;
  } else {
    display.value += num;
  }
};

const clearAll = () => {
  // Reset the display to "0"
  display.value = "0";
};
