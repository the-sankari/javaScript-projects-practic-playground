"use strict";
/**
 * * Tip Calculator Script
 *
 * This script calculates the tip amount based on user input.
 * It reads the bill amount and tip percentage from the HTML form,
 * performs the calculation, and displays the result.
 * * @version 1.0
 * * @author Kajol Sutra Dhar
 * * @license MIT
 *
 * This script is part of the Tip Calculator project.
 * It is designed to be simple and easy to understand for beginners.
 * * The script uses basic JavaScript concepts such as variables, functions, and event handling.
 * * It demonstrates how to read user input, perform calculations, and update the HTML content dynamically.
 *
 * Note: This script is intended for educational purposes and may not include advanced error handling or validation.
 *
 * Usage:
 * 1. Include this script in your HTML file.
 * 2. Ensure you have an HTML form with inputs for bill amount and tip percentage.
 * 3. Call the `calculateTip` function when the user clicks the "Calculate Tip" button.
 * * Example:
 * ```html
 * <button onclick="calculateTip()">Calculate Tip</button>
 * ```
 *
 * This script is a great starting point for learning JavaScript and building interactive web applications.
 *
 * Feel free to modify and expand upon this script as you learn more about JavaScript and web development.
 *
 * Happy coding!
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript
 * @see https://www.w3schools.com/js/
 * @see https://www.freecodecamp.org/
 */

// Make something happen when the calculate button is clicked.
const calculateButton = document.getElementById("calculateBtn");
const resetButton = document.getElementById("resetBtn");
const billAmountInput = document.getElementById("billAmount");
const tipPercentageInput = document.getElementById("tipPercentage");
const numberOfPeopleInput = document.getElementById("numberOfPeople");
const resultDisplay = document.getElementById("results");
const showTotalTip = document.getElementById("totalTip");
const showTipPerPerson = document.getElementById("tipPerPerson");
const showTotalPerPerson = document.getElementById("totalPerPerson");
const showTotalBill = document.getElementById("totalBill");
// Custom tip input and group
const customTipGroup = document.getElementById("customTipGroup");
const customTipInput = document.getElementById("customTipInput");

// Message section for displaying user messages
const messageSection = document.getElementById("message");
const messageText = document.getElementById("messageText");

const toggleCustomTip = () => {
  if (tipPercentageInput.value === "custom") {
    customTipGroup.style.display = "block";
    customTipInput.focus(); // Focus on the custom tip input for better UX
    // Set the custom tip input value to the selected percentage
  } else {
    customTipGroup.style.display = "none";
    customTipInput.value = ""; // Clear when hidden
  }
};

// Add event listener for tip percentage change
tipPercentageInput.addEventListener("change", () => {
  toggleCustomTip();
});

const getInputValues = () => {
  // Get the values from the input fields
  const billAmount = parseFloat(billAmountInput.value);
  const numberOfPeople = parseInt(numberOfPeopleInput.value, 10);
  if (tipPercentageInput.value === "custom") {
    // If custom tip is selected, use the custom input value
    const customTipValue = parseFloat(customTipInput.value);
    return {
      billAmount: billAmount,
      tipPercentage: customTipValue,
      numberOfPeople: numberOfPeople,
    };
  } else {
    // Otherwise, use the selected tip percentage
    const tipPercentage = parseFloat(tipPercentageInput.value);
    return {
      billAmount: billAmount,
      tipPercentage: tipPercentage,
      numberOfPeople: numberOfPeople,
    };
  }
};

const showError = (input, message) => {
  // Display an error message in the message section
  messageSection.style.display = "block";
  switch (input) {
    case "billAmount":
      messageText.textContent = message || "Please enter a valid bill amount.";
      break;
    case "tipPercentage":
      messageText.textContent =
        message || "Please select a valid tip percentage.";
      break;
    case "customTipPercentage":
      messageText.textContent =
        message || "Please enter a valid custom tip percentage.";
      break;
    case "numberOfPeople":
      messageText.textContent =
        message || "Please enter a valid number of people.";
      break;
    default:
      messageText.textContent =
        message || "An error occurred. Please try again.";
      break;
  }
  setTimeout(() => {
    messageSection.style.display = "none"; // Hide the message after 3 seconds
  }, 3000);
};

const hideError = () => {
  // Hide the error message section
  messageSection.style.display = "none";
};

// A validation function to ensure inputs are valid
const validateInputs = (billAmount, tipPercentage, numberOfPeople) => {
  // Check if inputs are valid
  switch (true) {
    case billAmount <= 0:
      showError("billAmount");
      return { isValid: false, message: "Bill amount must be greater than 0." };
    case tipPercentage < 0:
      showError("tipPercentage");
      return { isValid: false, message: "Tip percentage cannot be negative." };
    case isNaN(billAmount):
      showError("billAmount");
      return { isValid: false, message: "Bill amount must be a number." };
    case isNaN(tipPercentage):
      if (tipPercentageInput.value === "custom") {
        showError(
          "customTipPercentage",
          "Please enter a valid custom tip percentage"
        );
        return {
          isValid: false,
          message: "Custom tip percentage cannot be empty.",
        };
      } else {
        showError("tipPercentage");
      }
      return { isValid: false, message: "Tip percentage must be a number." };
    case numberOfPeople <= 0:
      showError("numberOfPeople");
      return {
        isValid: false,
        message: "Number of people must be greater than 0.",
      };
    case isNaN(numberOfPeople):
      showError("numberOfPeople");
      return { isValid: false, message: "Number of people must be a number." };
  }
  return { isValid: true, message: "Inputs are valid." };
};

// Calculate the tip when the button is clicked
const calculateTipValues = (billAmount, tipPercentage, numberOfPeople) => {
  // Calculate the tip amount
  const tipAmount = billAmount * (tipPercentage / 100);

  console.log(`Tip Amount: ${tipAmount}`);

  // Calculate the total bill
  const totalBill = billAmount + tipAmount;

  // Log the total bill
  console.log(`Total Bill: ${totalBill}`);

  // Calculate the tip per person
  const tipPerPerson = Math.round(tipAmount / numberOfPeople);
  console.log(`Tip Per Person: ${tipPerPerson}`);

  // Calculate the total bill per person
  const totalPerPerson = totalBill / numberOfPeople;
  console.log(`Total Per Person: ${totalPerPerson}`);
  hideError(); // Hide any previous error messages
  return {
    totalBill: totalBill,
    tipAmount: tipAmount,
    tipPerPerson: tipPerPerson,
    totalPerPerson: totalPerPerson,
  };
};

// Reset the form inputs and results display
const resetCalculator = () => {
  // Clear the input fields
  billAmountInput.value = "";
  tipPercentageInput.value = "15"; // Reset to default tip percentage
  numberOfPeopleInput.value = "1"; // Reset to default number of people
  customTipGroup.style.display = "none";
  customTipInput.value = "";
  // Clear the results display
  showTotalBill.textContent = "0.00";
  showTotalTip.textContent = "0.00";
  showTipPerPerson.textContent = "0.00";
  showTotalPerPerson.textContent = "0.00";
  // Hide the message section
  hideError();
  billAmountInput.focus(); // Focus back on the bill amount input
  console.log("Calculator reset.");
};

const updateDisplay = (totalBill, tipAmount, tipPerPerson, totalPerPerson) => {
  // Display the results
  showTotalBill.textContent = totalBill.toFixed(2);
  showTotalTip.textContent = tipAmount.toFixed(2);
  showTipPerPerson.textContent = tipPerPerson.toFixed(2);
  showTotalPerPerson.textContent = totalPerPerson.toFixed(2);
  console.log("Display updated with results.");
};

const renderTipCalculator = () => {
  try {
    // Get the input values
    const { billAmount, tipPercentage, numberOfPeople } = getInputValues();

    // validate the inputs
    const validation = validateInputs(
      billAmount,
      tipPercentage,
      numberOfPeople
    );
    if (!validation.isValid) {
      return;
    }
    // Calculate the tip values
    const { totalBill, tipAmount, tipPerPerson, totalPerPerson } =
      calculateTipValues(billAmount, tipPercentage, numberOfPeople);

    // Display the results
    updateDisplay(totalBill, tipAmount, tipPerPerson, totalPerPerson);
    console.log("Calculate button clicked!");
  } catch (error) {
    throw new Error(
      "An error occurred while calculating the tip: " + error.message
    );
  }
};

calculateButton.addEventListener("click", () => {
  renderTipCalculator();
});

resetButton.addEventListener("click", () => {
  resetCalculator();
});
