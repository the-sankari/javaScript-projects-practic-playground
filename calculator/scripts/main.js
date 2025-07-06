// Function to add a number to the display
const addNumber = (num) => {
  const display = document.getElementById("display");
  // If display is 0, replace it with the new number
  // Otherwise, append the new number to the existing display value
  if (display.value === "0") {
    display.value = num;
  } else {
    display.value += num;
  }
};
