"use strict";

import loadUniversalNavbar from "../js/universalNavbar.js";

// Load the universal navbar (it will auto-detect the correct path)
loadUniversalNavbar();

// Constants
const TODO_ADD_WARN_TEXT = "Please enter a todo item."; // Warning text for empty input

let todos = []; // This will store the todo items

const addTodoButton = document.getElementById("add-todo");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

// Function to render todos
const renderTodos = () => {
  todoList.innerHTML = ""; // Clear the list first
  todos.forEach((todo, index) => {
    const todoItem = document.createElement("li");
    todoItem.textContent = todo.text; // Set the text of the todo item
    todoItem.className = "todo-item";

    // Add a class to indicate if the todo is completed
    if (todo.completed) {
      todoItem.classList.add("completed");
    }

    // ✅ Toggle Status Button
    const statusToggleButton = document.createElement("button");
    statusToggleButton.textContent = "Toggle Status";
    statusToggleButton.className = "toggle-status";
    statusToggleButton.addEventListener("click", () => {
      todos[index].completed = !todos[index].completed;
      // Toggle the completed status of the todo item
      todoItem.classList.toggle("completed");
      console.log(`Todo status toggled: ${todo.text}`);
      updateMessage(`Todo "${todo.text}" status updated!`, "info"); // Show a success message
      // Save the updated todos and re-render the list
      saveTodos();
      renderTodos();
    });

    // Add a button to toggle the status of the todo item
    const deleteTodoButton = document.createElement("button");
    deleteTodoButton.textContent = "Delete";
    deleteTodoButton.className = "delete-todo";
    deleteTodoButton.addEventListener("click", () => {
      // Function to delete todo item
      deleteTodo(todoItem, index);
    });

    // Append the buttons to the todo item
    todoItem.appendChild(statusToggleButton);
    // Append the delete button to the todo item
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

// Load todos from local storage on page load
const loadTodos = () => {
  try {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      todos = JSON.parse(storedTodos); // Parse the stored todos
      console.log("Todos loaded:", todos);
      renderTodos(); // Render the loaded todos
    }
  } catch (error) {
    console.error("Error loading todos:", error);
  }
};

// Function to delete todo item

const deleteTodo = (todoItem, index) => {
  const deletedText = todos[index].text; // Store the text of the todo being deleted
  // Remove the todo from the array
  console.log("Todo deleted:", deletedText);
  todos.splice(index, 1); // Remove the todo from the array
  updateMessage(
    `Todo "${todoItem.textContent}" deleted successfully!`,
    "error"
  ); // Show a success message
  saveTodos(); // Save the updated todos
  console.log("Todo deleted:", index);
  renderTodos(); // Re-render the list
};

// Function to display todos

const addTodo = () => {
  const todoText = todoInput.value.trim();
  if (!todoText) {
    warning(TODO_ADD_WARN_TEXT); // Show a warning if the input is empty
    return;
  }

  // Check if the todo already exists
  if (todos.some((todo) => todo.text === todoText)) {
    warning(`Todo "${todoText}" already exists!`); // Show a warning if the todo already exists
    return;
  }

  // Add the new todo item
  console.log("Adding todo:", todoText);
  // Add the new todo item
  todos.push({ text: todoText, completed: false }); // Add the new todo item
  // The completed property is set to false by default
  console.log("Todo added:", todoText);
  updateMessage(`Todo "${todoText}" added successfully!`, "success"); // Show a success message
  // Clear the input field
  todoInput.value = ""; // Clear the input field
  saveTodos(); // Save the updated todos
  console.log("Todo added:", todoText);
  renderTodos(); // Re-render the list
};

const updateMessage = (message, status) => {
  const messageElement = document.createElement("div");
  messageElement.className = "message";
  // Set the class based on the status
  if (status === "success") {
    messageElement.classList.add("success");
  } else if (status === "error") {
    messageElement.classList.add("error");
  } else {
    messageElement.classList.add("info");
  }
  messageElement.textContent = message;
  document.body.appendChild(messageElement);
  setTimeout(() => {
    messageElement.remove();
  }, 3000); // Remove the message after 3 seconds
};

// Function to show a warning message
const warning = (message) => {
  const warningElement = document.createElement("div");
  warningElement.className = "warning";
  warningElement.textContent = message;
  document.body.appendChild(warningElement);
  setTimeout(() => {
    warningElement.remove();
  }, 3000); // Remove the warning after 3 seconds
};

// Add an event listener for the Add Todo button

addTodoButton.addEventListener("click", () => {
  addTodo();
  todoInput.focus(); // Focus back on the input field after adding a todo
});

// Add an event listener for the Enter key to add todos
todoInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addTodo();
  }
});

// Load todos when the page is ready
loadTodos();
