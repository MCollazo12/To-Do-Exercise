/*
Add a new todo (by submitting a form)
Mark a todo as completed (cross out the text of the todo)
Remove a todo
Save your todos in localStorage
*/

document.addEventListener("DOMContentLoaded", function () {
  const input = document.querySelector("#newTodo");
  const todoList = document.querySelector("#todoList");

  //localStorage -> Load pre-existing items - if none, create an empty array
  const todoArray = localStorage.getItem("todos") ?
  JSON.parse(localStorage.getItem("todos")) : [];

  //On form submit, create a new li and append input value to new li
  input.addEventListener("submit", function (e) {
    e.preventDefault();
    const newTodo = document.createElement("li");
    const removeButton = document.createElement("button");
    removeButton.textContent = "X";

    newTodo.innerText = document.querySelector("#task").value;
    newTodo.classList.add("todo");
    removeButton.classList.add("removeButton");
    newTodo.append(removeButton);

    //Push user's task into localStorage
    todoArray.push(document.querySelector("#task").value);
    localStorage.setItem("todos", JSON.stringify(todoArray));

    todoList.append(newTodo);
    input.reset();
  });

  //Stylize li on click or remove todo list item on delete button click
  todoList.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
      e.target.style.textDecoration = "line-through";
    } else if (e.target.tagName === "BUTTON") {
      e.target.parentNode.remove(); //Delete parent li instead of entire list
    }
  });
});


