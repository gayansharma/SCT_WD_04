// JavaScript for To-Do App
const todoForm = document.getElementById("todo-form");
const taskInput = document.getElementById("task-input");
const dateInput = document.getElementById("date-input");
const todoList = document.getElementById("todo-list");

todoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  addTask(taskInput.value, dateInput.value);
  taskInput.value = "";
  dateInput.value = "";
});

function addTask(task, dateTime) {
  const todoItem = document.createElement("li");
  todoItem.classList.add("todo-item");

  const taskText = document.createElement("span");
  taskText.classList.add("task-text");
  taskText.textContent = `${task} - ${dateTime ? dateTime : "No deadline"}`;

  const completeButton = document.createElement("button");
  completeButton.textContent = "Complete";
  completeButton.classList.add("complete");
  completeButton.addEventListener("click", () => toggleComplete(todoItem));

  const editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.classList.add("edit");
  editButton.addEventListener("click", () => editTask(todoItem, taskText));

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.classList.add("delete");
  deleteButton.addEventListener("click", () => deleteTask(todoItem));

  todoItem.appendChild(taskText);
  todoItem.appendChild(completeButton);
  todoItem.appendChild(editButton);
  todoItem.appendChild(deleteButton);

  todoList.appendChild(todoItem);
}

function toggleComplete(todoItem) {
  todoItem.classList.toggle("completed");
}

function editTask(todoItem, taskText) {
  const newTask = prompt("Edit your task:", taskText.textContent.split(" - ")[0]);
  const newDateTime = prompt("Edit your date and time:", taskText.textContent.split(" - ")[1]);
  if (newTask) {
    taskText.textContent = `${newTask} - ${newDateTime ? newDateTime : "No deadline"}`;
  }
}

function deleteTask(todoItem) {
  todoList.removeChild(todoItem);
}
