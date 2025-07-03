"use strict";

import loadUniversalNavbar from "../js/universalNavbar.js";

// Load the universal navbar (it will auto-detect the correct path)
loadUniversalNavbar();

const addTodoButton = document.querySelector("#add-todo");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");

addTodoButton.addEventListener("click", () => {
  const todoText = todoInput.value.trim();
  console.log(`Todo added: ${todoText}`);
});
