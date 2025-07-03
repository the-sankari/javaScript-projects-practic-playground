"use strict";

import loadUniversalNavbar from "../js/universalNavbar.js";

// Load the universal navbar (it will auto-detect the correct path)
loadUniversalNavbar();



const addTodoButton = document.querySelector("#add-todo");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");

// Create a new todo item
const displayTodo = (todo) => {
  const li = document.createElement("li");
  li.textContent = todo;
  todoList.appendChild(li);
};

// Add event listener to the button
addTodoButton.addEventListener("click", () => {
  const todoText = todoInput.value.trim();
  if (todoText) {
    displayTodo(todoText);
    todoInput.value = ""; // Clear the input field
  } else {
    alert("Please enter a todo item.");
  }
});
