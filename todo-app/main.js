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

const saveTodos = () => {
  // This function can be used to save todos to local storage or a server
  localStorage.setItem("todos", JSON.stringify(todos)); // Save todos to local storage
  console.log("Todos saved:", todos);
};

// Function to delete todo item

const deleteTodo = (todoItem, index) => {
  todos.splice(index, 1); // Remove the todo from the array
  todoItem.remove(); // Remove the item from the DOM
  saveTodos(); // Save the updated todos
  console.log("Todo deleted:", index);
  alert("Todo deleted successfully!"); // Alert the user
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
  saveTodos(); // Save the updated todos
  console.log("Todo added:", todoText);
  alert("Todo added successfully!"); // Alert the user
  // Re-render the list
  renderTodos();
};

addTodoButton.addEventListener("click", () => {
  displayTodos();
});
