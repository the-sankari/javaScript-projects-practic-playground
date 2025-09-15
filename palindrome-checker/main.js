"use strict";

import loadUniversalNavbar from "../js/universalNavbar.js";

// Load the universal navbar (it will auto-detect the correct path)
loadUniversalNavbar();

// Plaindrome checker logic
const input = document.getElementById("inputText");
const checkBtn = document.getElementById("checkBtn");
const resultDiv = document.getElementById("result");


checkBtn.addEventListener("click", () => {
  const str = input.value;
  const cleanedStr = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  const reversedStr = cleanedStr.split("").reverse().join("");
  
  if (cleanedStr === reversedStr && cleanedStr.length > 0) {
    resultDiv.textContent = `"${str}" is a palindrome!`;
    resultDiv.style.color = "green";
  } else {
    resultDiv.textContent = `"${str}" is not a palindrome.`;
    resultDiv.style.color = "red";
  }
  const loadingMessage = document.getElementById('loading');
  if (loadingMessage) {
    loadingMessage.style.display = "none";
  } 
});

// Optional: Clear result when input changes
input.addEventListener("input", () => {
  resultDiv.textContent = "";
});