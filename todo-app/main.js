"use strict";

import loadUniversalNavbar from "../js/universalNavbar.js";

// Load the universal navbar (it will auto-detect the correct path)
loadUniversalNavbar();

let todos = []; // This will store the todo items

const addTodoButton = document.getElementById("add-todo");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

// Function to render todos
const renderTodos = () => {
  todoList.innerHTML = ""; // Clear the list first
  todos.forEach((todo, index) => {
    const todoItem = document.createElement("li");
    todoItem.textContent = todo;
    todoItem.className = "todo-item";

    const deleteTodoButton = document.createElement("button");
    deleteTodoButton.textContent = "Delete";
    deleteTodoButton.className = "delete-todo";
    deleteTodoButton.addEventListener("click", () => {
      // Function to delete todo item
      deleteTodo(todoItem, index);
    });
    todoItem.appendChild(deleteTodoButton);

    // Append the todo item to the list
    todoList.appendChild(todoItem);
  });
};

const deleteTodo = (todoItem, index) => {
  todos.splice(index, 1); // Remove the todo from the array
  todoItem.remove(); // Remove the item from the DOM
  renderTodos(); // Re-render the list
};

const displayTodos = () => {
  const todoText = todoInput.value.trim();
  if (!todoText) {
    alert("Please enter a todo item.");
    return;
  }
  todos.push(todoText);
  todoInput.value = ""; // Clear the input field
  renderTodos();
};

addTodoButton.addEventListener("click", () => {
  displayTodos();
});
