// File: calculator/scripts/main.js
// This file contains the JavaScript code for the calculator functionality

// Get the display element from the HTML
// This will be used to show the numbers and results
const display = document.getElementById("display");

// Function to add a number to the display
const addNumber = (num) => {
  // If display is 0, replace it with the new number
  // Otherwise, append the new number to the existing display value
  if (display.value === "0") {
    display.value = num;
  } else {
    display.value += num;
  }
};

const clearAll = () => {
  // Reset the display to "0"
  display.value = "0";
};
