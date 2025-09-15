"use strict";

import loadUniversalNavbar from "../js/universalNavbar.js";

// Load the universal navbar (it will auto-detect the correct path)
loadUniversalNavbar();

// Function to fetch and display a random quote
async function fetchAndDisplayQuote() {
  try {
    const response = await fetch("./quotes.json");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();

    // The fix: Get a random quote object from the array
    const randomIndex = Math.floor(Math.random() * data.length);
    const randomQuote = data[randomIndex];

    document.getElementById("quote").textContent = `"${randomQuote.quote}"`;
    document.getElementById("author").textContent = `- ${randomQuote.author}`;
  } catch (error) {
    console.error("Error fetching the quote:", error);
    document.getElementById("quote").textContent =
      "Failed to load quote. Please try again.";
    document.getElementById("author").textContent = "";
  }
}

// Event listener for the button
document
  .getElementById("new-quote-btn")
  .addEventListener("click", fetchAndDisplayQuote);

// Fetch an initial quote when the page loads
fetchAndDisplayQuote();
