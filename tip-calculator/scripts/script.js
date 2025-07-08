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
const billAmountInput = document.getElementById("billAmount");
const tipPercentageInput = document.getElementById("tipPercentage");
const numberOfPeopleInput = document.getElementById("numberOfPeople");
const resultDisplay = document.getElementById("results");
const showTotalTip = document.getElementById("totalTip");
const showTipPerPerson = document.getElementById("tipPerPerson");
const showTotalPerPerson = document.getElementById("totalPerPerson");
const showTotalBill = document.getElementById("totalBill");

calculateButton.addEventListener("click", () => {
  // Get the values from the input fields
  const billAmount = parseFloat(billAmountInput.value);
  const tipPercentage = parseFloat(tipPercentageInput.value);
  const numberOfPeople = parseInt(numberOfPeopleInput.value, 10);
  if (
    billAmount <= 0 ||
    tipPercentage < 0 ||
    isNaN(billAmount) ||
    isNaN(tipPercentage) ||
    numberOfPeople <= 0 ||
    isNaN(numberOfPeople)
  ) {
    alert("Please enter valid bill amount and tip percentage.");
    return;
  }

  console.log(`Bill Amount: ${billAmount}, Tip Percentage: ${tipPercentage}`);
  console.log(`Number of People: ${numberOfPeople}`);

  // Calculate the tip amount
  const tipAmount = billAmount * (tipPercentage / 100);

  console.log(`Tip Amount: ${tipAmount}`);

  // Calculate the total bill
  const totalBill = billAmount + tipAmount;

  console.log(`Total Bill: ${totalBill}`);

  // Calculate the tip per person
  const tipPerPerson = Math.round(tipAmount / numberOfPeople);
  console.log(`Tip Per Person: ${tipPerPerson}`);

  // Calculate the total bill per person
  const totalPerPerson = totalBill / numberOfPeople;
  console.log(`Total Per Person: ${totalPerPerson}`);

  // Display the results
  showTotalBill.textContent = totalBill.toFixed(2);
  showTotalTip.textContent = tipAmount.toFixed(2);
  showTipPerPerson.textContent = tipPerPerson.toFixed(2);
  showTotalPerPerson.textContent = totalPerPerson.toFixed(2);
  console.log("Calculate button clicked!");
});
