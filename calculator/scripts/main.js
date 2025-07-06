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

//Calculate the result based on the current operator
const calculateResult = () => {
  // Step 1: Get second number from display
  let secondNumber = parseFloat(display.value);
  // Step 2: Perform calculation based on operator
  if (firstNumber === null || currentOperator === null) {
    return; // Don't calculate if missing data
  }

  // Step 3 Perform the colculation based on the operator
  let result;
  switch (currentOperator) {
    case "+":
      result = firstNumber + secondNumber;
      break;
    case "-":
      result = firstNumber - secondNumber;
      break;
    case "*":
      result = firstNumber * secondNumber;
      break;
    case "/":
      if (secondNumber === 0) {
        display.value = "Error"; // Handle division by zero
        return;
      }
      result = firstNumber / secondNumber;
      break;

    default:
      break;
  }

  // Step 4: Display result
  display.value = result;
  // Step 5: Reset state for next calculation
  firstNumber = null; // Reset first number
  currentOperator = null; // Reset operator
  waitingForSecondNumber = false; // Reset waiting flag
};

const clearAll = () => {
  // Reset the display to "0"
  display.value = "0";
};

const addDecimal = () => {
  // Check if we are starting fresh after an operation
  if (waitingForSecondNumber || display.value === "0") {
    display.value = "0."; // Start with 0. if we are waiting for second number
    waitingForSecondNumber = false; // Reset the flag
  }
  // Check if decimal already exists in the current display value
  else if (!display.value.includes(".")) {
    display.value += "."; // Append decimal point if not already present
  }
  // If decimal already exists, do nothing
  else {
    console.log("Decimal point already exists in the display.");
  }
};

// Function to delete the last character from the display

const deleteLast = () => {
  // Get the current display value
  let currentValue = display.value;

  // If the display is not empty, remove the last character
  if (currentValue.length > 0) {
    // If the display has only one character, reset it to "0"
    if (currentValue.length === 1) {
      display.value = "0";
    } else {
      // Remove the last character from the display
      display.value = currentValue.slice(0, -1);
    }
  }
  // If the display is empty, do nothing
  else {
    console.log("Display is already empty. No character to delete.");
  }
};
