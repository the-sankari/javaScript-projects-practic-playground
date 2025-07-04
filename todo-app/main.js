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

    // Editing functionality

    if (todo.isEditing) {
      const editInput = document.createElement("input");
      editInput.type = "text";
      editInput.value = todo.text; // Set the current text as the value
      editInput.className = "edit-input";
      editInput.focus(); // Focus on the input field for editing

      // Keyboard shortcuts for editing
      editInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") saveEdit(index, editInput.value);
        if (e.key === "Escape") cancelEdit(index);
      });

      const saveButton = document.createElement("button");
      saveButton.textContent = "Save";
      saveButton.className = "save-edit";
      saveButton.addEventListener("click", () => {
        saveEdit(index, editInput.value);
      });

      const cancelButton = document.createElement("button");
      cancelButton.textContent = "Cancel";
      cancelButton.className = "cancel-edit";
      cancelButton.addEventListener("click", () => {
        cancelEdit(index);
      });
      // Append the input and buttons to the todo item
      todoItem.appendChild(editInput);
      todoItem.appendChild(saveButton);
      todoItem.appendChild(cancelButton);
    } else {
      todoItem.textContent = todo.text; // Set the text of the todo item
      todoItem.className = "todo-item";

      // Add a class to indicate if the todo is completed
      if (todo.completed) {
        todoItem.classList.add("completed");
      }

      // Add an event listener to toggle the editing state
      todoItem.addEventListener("dblclick", () => {
        startEdit(index); // Start editing the todo item on double click
        console.log(`Todo item at index ${index} is being edited:`, todo.text);
      });

      // ✅ Toggle Status Button
      const statusToggleButton = document.createElement("button");
      statusToggleButton.textContent = "Toggle Status";
      statusToggleButton.className = "toggle-status";
      statusToggleButton.addEventListener("click", () => {
        todos[index].completed = !todos[index].completed;
        // Toggle the completed status of the todo item
        todoItem.classList.toggle("completed");
        console.log(`Todo status toggled: ${todo.text}`);
        // Save the updated todos and re-render the list
        saveTodos();
        renderTodos();
        updateMessage(`Todo "${todo.text}" status updated!`, "info"); // Show a success message
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
    }

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

const startEdit = (index) => {
  todos[index].isEditing = true; // Set the isEditing property to true
  console.log(`Editing todo at index ${index}:`, todos[index].text);
  renderTodos(); // Re-render the list to show the edit input
};

const saveEdit = (index, newText) => {
  const trimmedText = newText.trim(); // Trim the input text
  if (!trimmedText) {
    warning("Todo text cannot be empty!"); // Show a warning if the input is empty
    return;
  }
  // Update the todo item with the new text
  todos[index].text = trimmedText; // Update the text of the todo item
  todos[index].isEditing = false; // Set isEditing to false after saving
  console.log(`Todo at index ${index} updated to:`, trimmedText);
  updateMessage(`Todo "${trimmedText}" updated successfully!`, "success"); // Show a success message
  saveTodos(); // Save the updated todos
  renderTodos(); // Re-render the list to show the updated todo
};

const cancelEdit = (index)=>{
  todos[index].isEditing = false; // Set isEditing to false to cancel editing
  console.log(`Editing cancelled for todo at index ${index}:`, todos[index].text);
  renderTodos(); // Re-render the list to show the todo item without edit input
  updateMessage(`Editing cancelled for todo "${todos[index].text}"`, "info"); // Show a message indicating cancellation
}

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
  todos.push({ text: todoText, completed: false, isEditing: false }); // Add the new todo item
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
