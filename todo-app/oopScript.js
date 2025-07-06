import loadUniversalNavbar from "../js/universalNavbar.js";

// Load the universal navbar (it will auto-detect the correct path)
loadUniversalNavbar();

class TodoApp {
  constructor() {
    this.todos = [];

    this.todoInput = document.getElementById("todo-input");
    this.addTodoButton = document.getElementById("add-todo");
    this.todoList = document.getElementById("todo-list");
    this.messageBox = document.getElementById("todo-message");

    // Constants for messages
    this.ADD_TODO_SUCCESS = "Todo added successfully!";
    this.ADD_TODO_ERROR = "Please enter a valid todo item.";
    this.DELETE_TODO_SUCCESS = "Todo deleted successfully!";
    this.EDIT_TODO_SUCCESS = "Todo edited successfully!";
    this.TOGGLE_TODO_SUCCESS = "Todo status toggled successfully!";
    this.NO_TODOS_MESSAGE = "No todos available. Add some!";
    this.ADD = "Please enter a valid todo item.";
    this.TIMEOUT = 3000;
    console.log("Properties initialized:", this.todos);

    this.init();
  }

  init() {
    this.loadTodosFromLocalStorage();
    this.renderTodos();
    this.setUpEventListeners();
  }

  setUpEventListeners() {
    this.addTodoButton.addEventListener("click", () => {
      this.addTodo();
    });

    this.todoInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        this.addTodo();
      }
    });
  }

  addTodo() {
    const todoText = this.todoInput.value.trim();

    if (todoText === "") {
      this.showMessage(this.ADD_TODO_ERROR, "error");
      return;
    }

    const newTodo = {
      text: todoText,
      isCompleted: false,
      isEditing: false,
    };

    this.todos.push(newTodo);
    this.todoInput.value = "";
    this.todoInput.focus();

    this.saveTodosToLocalStorage();
    this.renderTodos();
    this.showMessage(this.ADD_TODO_SUCCESS, "success");

    console.log("Todo added:", newTodo);
  }

  saveTodosToLocalStorage() {
    localStorage.setItem("todos", JSON.stringify(this.todos));
    console.log("Todos saved to localStorage: ", this.todos);
  }

  loadTodosFromLocalStorage() {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      this.todos = JSON.parse(storedTodos);
    } else {
      this.todos = [];
    }
    console.log("Todos loaded from localStorage: ", this.todos);
  }

  showMessage(message, type) {
    this.messageBox.textContent = message;

    if (type === "error") {
      this.messageBox.style.color = "red";
    } else if (type === "success") {
      this.messageBox.style.color = "green";
    } else if (type === "info") {
      this.messageBox.style.color = "blue";
    } else if (type === "completed") {
      this.messageBox.style.color = "purple";
    }
    this.messageBox.className = type; // Set class for styling
    setTimeout(() => {
      this.messageBox.textContent = "";
      this.messageBox.className = "";
    }, this.TIMEOUT);
  }

  createTodoElement(tag, className, textContent) {
    const element = document.createElement(tag);
    element.className = className;
    element.textContent = textContent;
    return element;
  }

  createInputElement(className, value, type = "text") {
    const input = document.createElement("input");
    input.className = className;
    input.type = type;
    input.value = value;
    return input;
  }

  renderTodos() {
    this.todoList.innerHTML = ""; // Clear the list

    if (this.todos.length === 0) {
      const noTodosMessage = this.createTodoElement(
        "li",
        "no-todos",
        this.NO_TODOS_MESSAGE
      );
      this.todoList.appendChild(noTodosMessage);
      return;
    }

    this.todos.forEach((todo, index) => {
      const todoItem = this.createTodoElement("li", "todo-item");
      const contentSpan = this.createTodoElement(
        "span",
        "todo-item-content",
        todo.text
      );
      const buttonGroup = this.createElement("div");
      buttonGroup.className = "todo-item-buttons";

      if (todo.isEditing) {
        const editInput = this.createInputElement(
          "edit-todo-input",
          todo.text
        );
        const saveButton = this.createTodoElement(
          "button",
          "save-button",
          "Save"
        );
        const cancelButton = this.createTodoElement(
          "button",
          "cancel-button",
          "Cancel"
        );

        // Event listeners for edit mode
        editInput.addEventListener("keydown", (e) => {
          if (e.key === "Enter") {
            this.saveEditedTodo(index, editInput.value);
          } else if (e.key === "Escape") {
            this.cancelEditingTodo(index);
          }
        });

        saveButton.addEventListener("click", () => {
          this.saveEditedTodo(index, editInput.value);
        });

        cancelButton.addEventListener("click", () => {
          this.cancelEditingTodo(index);
        });

        todoItem.appendChild(editInput);
        buttonGroup.appendChild(saveButton);
        buttonGroup.appendChild(cancelButton);
        todoItem.appendChild(buttonGroup);
      } else {
        const editButton = this.createTodoElement(
          "button",
          "edit-todo",
          "Edit"
        );
        const deleteButton = this.createTodoElement(
          "button",
          "delete-todo",
          "Delete"
        );
        const toggleButton = this.createTodoElement(
          "button",
          "toggle-todo",
          todo.isCompleted ? "Undo" : "Complete"
        );

        // Event listeners for action buttons
        editButton.addEventListener("click", () => {
          try {
            this.startEditingTodo(index);
            console.log("Editing started for todo at index:", index);
          } catch (error) {
            console.error("Error starting edit:", error);
          }
        });

        deleteButton.addEventListener("click", () => {
          this.deleteTodo(index);
        });

        toggleButton.addEventListener("click", () => {
          this.toggleTodo(index);
        });

        if (todo.isCompleted) {
          contentSpan.classList.add("completed");
        }

        // Append elements to the todo item
        buttonGroup.appendChild(toggleButton);
        buttonGroup.appendChild(editButton);
        buttonGroup.appendChild(deleteButton);
        todoItem.appendChild(contentSpan);
        todoItem.appendChild(buttonGroup);
      }
      this.todoList.appendChild(todoItem);
    });
  }

  // delete todo method
  deleteTodo(index) {
    this.todos.splice(index, 1);
    this.saveTodosToLocalStorage();
    this.renderTodos();
    this.showMessage(this.DELETE_TODO_SUCCESS, "success");
  }

  // toggle todo method
  toggleTodo(index) {
    this.todos[index].isCompleted = !this.todos[index].isCompleted;
    this.saveTodosToLocalStorage();
    this.renderTodos();
    this.showMessage(this.TOGGLE_TODO_SUCCESS, "info");
  }

  // start editing todo method
  startEditingTodo(index) {
    this.todos.forEach((todo) => (todo.isEditing = false));
    this.todos[index].isEditing = true;
    this.renderTodos();
  }

  // save edited todo method
  saveEditedTodo(index, newText) {
    const trimmedText = newText.trim();
    if (trimmedText === "") {
      this.showMessage(this.ADD_TODO_ERROR, "error");
      return;
    }

    this.todos[index].text = trimmedText;
    this.todos[index].isEditing = false;
    this.saveTodosToLocalStorage();
    this.renderTodos();
    this.showMessage(this.EDIT_TODO_SUCCESS, "success");
    console.log("Todo edited:", this.todos[index]);
  }

  // cancel editing todo method
  cancelEditingTodo(index) {
    this.todos[index].isEditing = false;
    this.renderTodos();
    console.log("Editing cancelled for todo at index:", index);
    this.showMessage("Editing cancelled", "info");
  }
}

const app = new TodoApp();
